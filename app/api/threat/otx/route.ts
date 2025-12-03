import { NextResponse } from 'next/server';
import { otxService } from '@/lib/otx';

export const dynamic = 'force-dynamic';

interface ThreatPoint {
    ip: string;
    country: string;
    city?: string;
    lat: number;
    lon: number;
    pulse_name: string;
    tags: string[];
    timestamp: string;
}

let threatCache: { days: number; data: any; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000;

const DEMO_THREATS: ThreatPoint[] = [
    { ip: '185.220.101.1', country: 'Russia', city: 'Moscow', lat: 55.7558, lon: 37.6173, pulse_name: 'APT29 Infrastructure', tags: ['apt', 'russia'], timestamp: new Date().toISOString() },
    { ip: '103.224.182.252', country: 'China', city: 'Beijing', lat: 39.9042, lon: 116.4074, pulse_name: 'Cobalt Strike C2', tags: ['c2', 'cobalt-strike'], timestamp: new Date().toISOString() },
    { ip: '45.33.32.156', country: 'United States', city: 'Fremont', lat: 37.5485, lon: -121.9886, pulse_name: 'Ransomware Distribution', tags: ['ransomware'], timestamp: new Date().toISOString() },
    { ip: '91.121.87.10', country: 'France', city: 'Paris', lat: 48.8566, lon: 2.3522, pulse_name: 'Emotet Botnet', tags: ['emotet', 'botnet'], timestamp: new Date().toISOString() },
    { ip: '177.54.145.61', country: 'Brazil', city: 'São Paulo', lat: -23.5505, lon: -46.6333, pulse_name: 'Banking Trojan C2', tags: ['banking', 'trojan'], timestamp: new Date().toISOString() },
    { ip: '41.77.136.34', country: 'South Africa', city: 'Johannesburg', lat: -26.2041, lon: 28.0473, pulse_name: 'Phishing Infrastructure', tags: ['phishing'], timestamp: new Date().toISOString() },
    { ip: '210.89.164.90', country: 'South Korea', city: 'Seoul', lat: 37.5665, lon: 126.9780, pulse_name: 'Lazarus Group', tags: ['apt', 'lazarus'], timestamp: new Date().toISOString() },
    { ip: '185.159.82.15', country: 'Netherlands', city: 'Amsterdam', lat: 52.3676, lon: 4.9041, pulse_name: 'DDoS Botnet', tags: ['ddos', 'botnet'], timestamp: new Date().toISOString() },
    { ip: '195.123.246.128', country: 'Latvia', city: 'Riga', lat: 56.9496, lon: 24.1052, pulse_name: 'Qakbot Distribution', tags: ['qakbot', 'malware'], timestamp: new Date().toISOString() },
    { ip: '103.107.104.19', country: 'Vietnam', city: 'Hanoi', lat: 21.0285, lon: 105.8542, pulse_name: 'Cryptominer Pool', tags: ['cryptominer'], timestamp: new Date().toISOString() },
    { ip: '194.5.98.8', country: 'Ukraine', city: 'Kyiv', lat: 50.4501, lon: 30.5234, pulse_name: 'APT28 C2 Server', tags: ['apt28', 'c2'], timestamp: new Date().toISOString() },
    { ip: '45.76.135.61', country: 'Japan', city: 'Tokyo', lat: 35.6762, lon: 139.6503, pulse_name: 'Stealer Malware', tags: ['stealer', 'infostealer'], timestamp: new Date().toISOString() },
    { ip: '185.193.88.36', country: 'Germany', city: 'Frankfurt', lat: 50.1109, lon: 8.6821, pulse_name: 'Trickbot Infrastructure', tags: ['trickbot'], timestamp: new Date().toISOString() },
    { ip: '179.43.175.90', country: 'Argentina', city: 'Buenos Aires', lat: -34.6037, lon: -58.3816, pulse_name: 'RAT Distribution', tags: ['rat', 'trojan'], timestamp: new Date().toISOString() },
    { ip: '154.221.26.108', country: 'India', city: 'Mumbai', lat: 19.0760, lon: 72.8777, pulse_name: 'Spam Botnet', tags: ['spam', 'botnet'], timestamp: new Date().toISOString() },
];

async function getGeoLocation(ip: string): Promise<{ lat: number; lon: number; country: string; city?: string } | null> {
    try {
        const res = await fetch(`http://ip-api.com/json/${ip}?fields=lat,lon,country,city,status`, {
            signal: AbortSignal.timeout(3000)
        });
        const data = await res.json();
        if (data.status === 'success') {
            return { lat: data.lat, lon: data.lon, country: data.country, city: data.city };
        }
        return null;
    } catch {
        return null;
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '1');
    const now = Date.now();

    if (threatCache && threatCache.days === days && (now - threatCache.timestamp < CACHE_DURATION)) {
        return NextResponse.json(threatCache.data);
    }

    try {
        const pulses = await otxService.getPulses(10);
        const threatPoints: ThreatPoint[] = [];
        const processedIPs = new Set<string>();

        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        for (const pulse of pulses) {
            if (new Date(pulse.created) < cutoffDate) continue;
            if (threatPoints.length >= 15) break;

            let indicators = pulse.indicators || [];
            if (indicators.length === 0) {
                indicators = await otxService.getPulseIndicators(pulse.id);
            }

            const ipIndicators = indicators
                .filter(i => i.type === 'IPv4')
                .slice(0, 3);

            for (const indicator of ipIndicators) {
                const ip = indicator.indicator;
                if (processedIPs.has(ip)) continue;
                processedIPs.add(ip);

                const geo = await getGeoLocation(ip);
                if (geo) {
                    threatPoints.push({
                        ip,
                        country: geo.country,
                        city: geo.city,
                        lat: geo.lat,
                        lon: geo.lon,
                        pulse_name: pulse.name,
                        tags: pulse.tags || [],
                        timestamp: pulse.created
                    });
                }

                await new Promise(r => setTimeout(r, 100));
                if (threatPoints.length >= 15) break;
            }
        }

        const finalPoints = threatPoints.length > 0 
            ? threatPoints 
            : DEMO_THREATS.slice(0, Math.min(10 + days * 2, DEMO_THREATS.length));

        const responseData = {
            status: "ok",
            source: threatPoints.length > 0 ? "otx" : "demo",
            updated: new Date().toISOString(),
            count: finalPoints.length,
            points: finalPoints
        };

        threatCache = { days, data: responseData, timestamp: now };
        return NextResponse.json(responseData);

    } catch (error) {
        console.error('Threat Map API Error:', error);
        
        const responseData = {
            status: "ok",
            source: "demo",
            updated: new Date().toISOString(),
            count: DEMO_THREATS.length,
            points: DEMO_THREATS
        };

        return NextResponse.json(responseData);
    }
}
