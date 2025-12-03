'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { toast } from 'sonner';
import { ShieldCheck, AlertTriangle, Activity, Server, ArrowUpRight, Globe, Zap, Filter, Clock, Crosshair, FileSearch } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/ui/map').then(mod => mod.Map), { ssr: false });
const MapTileLayer = dynamic(() => import('@/components/ui/map').then(mod => mod.MapTileLayer), { ssr: false });
const MapCircle = dynamic(() => import('@/components/ui/map').then(mod => mod.MapCircle), { ssr: false });
const MapPopup = dynamic(() => import('@/components/ui/map').then(mod => mod.MapPopup), { ssr: false });
const MapZoomControl = dynamic(() => import('@/components/ui/map').then(mod => mod.MapZoomControl), { ssr: false });

// Swiss-style Stats with Sparklines
const stats = [
    {
        label: 'Active Endpoints',
        value: '1,248',
        change: '+12%',
        trend: 'up',
        icon: Server,
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/10',
        border: 'border-neon-cyan/20',
        sparkline: "M0 20 L10 18 L20 22 L30 15 L40 18 L50 10 L60 12 L70 5 L80 8 L90 2"
    },
    {
        label: 'Threats Blocked',
        value: '843',
        change: '+5%',
        trend: 'up',
        icon: ShieldCheck,
        color: 'text-neon-violet',
        bg: 'bg-neon-violet/10',
        border: 'border-neon-violet/20',
        sparkline: "M0 25 L10 22 L20 20 L30 24 L40 15 L50 18 L60 10 L70 12 L80 5 L90 8"
    },
    {
        label: 'Critical Alerts',
        value: '3',
        change: '-2',
        trend: 'down',
        icon: AlertTriangle,
        color: 'text-neon-magenta',
        bg: 'bg-neon-magenta/10',
        border: 'border-neon-magenta/20',
        sparkline: "M0 10 L10 12 L20 15 L30 10 L40 18 L50 20 L60 15 L70 22 L80 18 L90 25"
    },
    {
        label: 'System Health',
        value: '98.2%',
        change: 'Stable',
        trend: 'neutral',
        icon: Activity,
        color: 'text-neon-green',
        bg: 'bg-neon-green/10',
        border: 'border-neon-green/20',
        sparkline: "M0 15 L10 15 L20 14 L30 16 L40 15 L50 15 L60 14 L70 15 L80 15 L90 15"
    },
];

const recentActivity = [
    { id: 1, type: 'block', title: 'Malware Blocked', desc: 'Ransomware.Ryuk attempt on HOST-FIN-02', time: '2 min ago', severity: 'critical' },
    { id: 2, type: 'scan', title: 'Deep Scan Completed', desc: 'invoice_scan.exe - Suspicious (85%)', time: '15 min ago', severity: 'warning' },
    { id: 3, type: 'connect', title: 'New Agent Connected', desc: 'HOST-DEV-09 joined the network', time: '1 hour ago', severity: 'info' },
    { id: 4, type: 'update', title: 'Policy Updated', desc: 'Global blocking rules updated by Admin', time: '2 hours ago', severity: 'info' },
    { id: 5, type: 'threat', title: 'C2 Communication', desc: 'Blocked outbound traffic to 192.168.1.105', time: '3 hours ago', severity: 'critical' },
];

interface ThreatPoint {
    ip: string;
    lat: number;
    lon: number;
    country: string;
    city?: string;
    pulse_name: string;
}

function ThreatMapCard() {
    const [points, setPoints] = useState<ThreatPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState('1');

    useEffect(() => {
        const fetchThreats = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/threat/otx?days=${days}`);
                const data = await res.json();
                if (data.points) {
                    setPoints(data.points);
                }
            } catch (e) {
                console.error("Failed to fetch threat map", e);
            } finally {
                setLoading(false);
            }
        };

        fetchThreats();
        const interval = setInterval(fetchThreats, 300000);
        return () => clearInterval(interval);
    }, [days]);

    return (
        <GlassCard variant="hud" className="lg:col-span-2 p-0 min-h-[500px] relative overflow-hidden flex flex-col border-[2px] border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neon-blue/5 pointer-events-none" />
            <div className="scanline-overlay opacity-5 pointer-events-none" />

            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-black/20 backdrop-blur-md z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                        <Globe className="w-5 h-5 text-neon-blue animate-pulse-slow" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white font-display tracking-wide">Global Threat Map</h3>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                            Live Intelligence Feed
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <select
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            className="bg-transparent text-xs font-bold text-gray-300 outline-none cursor-pointer font-mono"
                        >
                            <option value="1" className="bg-black text-gray-300">24H</option>
                            <option value="3" className="bg-black text-gray-300">3D</option>
                            <option value="7" className="bg-black text-gray-300">7D</option>
                            <option value="30" className="bg-black text-gray-300">30D</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-alert-red/10 border border-alert-red/20 shadow-[0_0_15px_rgba(255,45,110,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-alert-red"></span>
                        </span>
                        <span className="text-xs font-bold text-alert-red tracking-wide font-mono">{points.length} ACTIVE THREATS</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative min-h-[400px]">
                {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/60 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-2 border-neon-blue border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-mono text-neon-blue animate-pulse">ESTABLISHING UPLINK...</span>
                        </div>
                    </div>
                ) : (
                    <Map center={[20, 0]} zoom={2} scrollWheelZoom={true} className="!rounded-none h-full w-full z-0">
                        <MapTileLayer
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                            darkUrl="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        />
                        <MapZoomControl />
                        {points.map((point, i) => (
                            <MapCircle
                                key={`${point.ip}-${i}`}
                                center={[point.lat, point.lon]}
                                radius={300000}
                                className="!fill-alert-red/30 !stroke-alert-red !stroke-[1px] animate-pulse-slow"
                            >
                                <MapPopup>
                                    <div className="min-w-[200px] p-1">
                                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-700">
                                            <span className="font-bold text-sm text-white font-display tracking-wide">{point.country}</span>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-alert-red/20 text-alert-red border border-alert-red/30 uppercase font-bold tracking-wider">
                                                CRITICAL
                                            </span>
                                        </div>
                                        {point.city && (
                                            <div className="flex items-center gap-2 mb-2">
                                                <Crosshair className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-300 font-mono">{point.city}</span>
                                            </div>
                                        )}
                                        <div className="font-mono text-xs text-neon-blue mb-2 bg-neon-blue/5 px-2 py-1 rounded border border-neon-blue/10">
                                            {point.ip}
                                        </div>
                                        <div className="text-[10px] text-gray-400 mt-2 leading-relaxed">
                                            {point.pulse_name}
                                        </div>
                                    </div>
                                </MapPopup>
                            </MapCircle>
                        ))}
                    </Map>
                )}
            </div>
        </GlassCard>
    );
}

export default function DashboardPage() {
    return (
        <div className="space-y-8 pb-12">
            {/* Header Section */}
            <div className="flex items-end justify-between border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-4xl font-display font-bold text-white mb-2 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        Security Overview
                    </h1>
                    <p className="text-gray-400 text-sm font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                        SYSTEM OPERATIONAL • DEFCON 4
                    </p>
                </div>
                <div className="flex gap-4">
                    {/* Moved New Scan button to layout header as requested, but keeping here as secondary or removing if redundant. 
                         The prompt asked for "Quick actions: Initiate Scan" in the header. 
                         I will keep a secondary action here for "Deep Scan" specifically. */}
                </div>
            </div>

            {/* System Summary Row - Swiss Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard className="p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                            <div className={`absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-2">{stat.label}</div>
                                    <div className={`text-3xl font-bold text-white font-hud tracking-wider mb-2 ${stat.color} drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>
                                        {stat.value}
                                    </div>
                                </div>

                                <div className="flex items-end justify-between mt-4">
                                    <div className={`text-xs font-bold px-2 py-1 rounded bg-white/5 border border-white/5 ${stat.change.startsWith('+') ? 'text-neon-green' : stat.change.startsWith('-') ? 'text-neon-green' : 'text-gray-400'}`}>
                                        {stat.change}
                                    </div>
                                    {/* Sparkline SVG */}
                                    <svg width="100" height="30" className={`opacity-50 group-hover:opacity-100 transition-opacity ${stat.color.replace('text-', 'stroke-')}`} strokeWidth="2" fill="none">
                                        <path d={stat.sparkline} />
                                    </svg>
                                </div>
                            </div>

                            {/* Glowing Corner Accent */}
                            <div className={`absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-${stat.color.replace('text-', '')}/20 to-transparent rounded-tl-xl`} />
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ThreatMapCard />

                {/* Right Column: Live Feed & Deep Scan */}
                <div className="space-y-6 flex flex-col">
                    {/* Live SOC Feed */}
                    <GlassCard variant="hud" className="flex-1 flex flex-col p-0 min-h-[400px]">
                        <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/[0.03]">
                            <h3 className="text-lg font-bold text-white font-display tracking-wide">Live SOC Feed</h3>
                            <div className="flex items-center gap-2 text-[10px] text-neon-green font-mono border border-neon-green/20 px-2 py-1 rounded bg-neon-green/5">
                                <Activity className="w-3 h-3" />
                                REALTIME
                            </div>
                        </div>

                        <div className="p-4 space-y-4 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {recentActivity.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="relative pl-6 py-2 group cursor-pointer"
                                >
                                    {/* Timeline Line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-[-3px] top-3 w-1.5 h-1.5 rounded-full ${item.severity === 'critical' ? 'bg-alert-red shadow-[0_0_8px_#FF2D6E]' : item.severity === 'warning' ? 'bg-alert-yellow' : 'bg-neon-cyan'} ring-4 ring-black`} />

                                    <div className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                                        <div className="flex justify-between items-center">
                                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase ${item.severity === 'critical' ? 'bg-alert-red/10 text-alert-red' : item.severity === 'warning' ? 'bg-alert-yellow/10 text-alert-yellow' : 'bg-neon-cyan/10 text-neon-cyan'}`}>
                                                {item.severity}
                                            </span>
                                            <span className="text-[10px] text-gray-500 font-mono">{item.time}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors font-display tracking-wide">{item.title}</h4>
                                        <p className="text-xs text-gray-400 font-mono leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Deep Scan Overview (New Panel) */}
                    <GlassCard className="p-6 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-white font-display tracking-wide">Deep Scan</h3>
                                <p className="text-xs text-gray-400 font-mono mt-1">Daily system integrity check</p>
                            </div>
                            <FileSearch className="w-5 h-5 text-neon-violet" />
                        </div>

                        <div className="flex items-center gap-6">
                            {/* Radial Chart Simulation */}
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90">
                                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                                    <circle cx="48" cy="48" r="40" stroke="#9A4DFF" strokeWidth="6" fill="none" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(154,77,255,0.5)]" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold text-white font-hud">76%</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400">Threat Score</span>
                                    <span className="text-neon-green font-bold">LOW</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-neon-green h-full w-[15%] shadow-[0_0_10px_#00FF94]" />
                                </div>
                                <div className="flex justify-between items-center text-xs pt-1">
                                    <span className="text-gray-400">Files Scanned</span>
                                    <span className="text-white font-mono">142,892</span>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
