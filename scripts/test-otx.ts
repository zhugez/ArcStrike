import { otxService } from '../lib/otx';

async function testOTX() {
    console.log('Testing OTX Service...');
    try {
        const pulses = await otxService.getPulses(5);
        console.log(`Fetched ${pulses.length} pulses.`);

        if (pulses.length > 0) {
            console.log('Sample Pulse:', pulses[0].name);
            const indicators = await otxService.getPulseIndicators(pulses[0].id);
            console.log(`Fetched ${indicators.length} indicators for first pulse.`);

            const ipv4 = indicators.filter(i => i.type === 'IPv4');
            console.log(`Found ${ipv4.length} IPv4 indicators.`);

            if (ipv4.length > 0) {
                console.log('Sample IP:', ipv4[0].indicator);
                // Test Geo Lookup
                const res = await fetch(`http://ip-api.com/json/${ipv4[0].indicator}?fields=lat,lon,country,city,status`);
                const geo = await res.json();
                console.log('Geo Lookup Result:', geo);
            }
        }
    } catch (error) {
        console.error('OTX Test Failed:', error);
    }
}

testOTX();
