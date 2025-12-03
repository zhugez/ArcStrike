'use client';

import { Section } from "./Section";
import { NeonButton } from "./NeonButton";
import { GlassCard } from "./GlassCard";
import { ArcStrikeLogo } from "./Logo";
import { motion } from "framer-motion";
import { ShieldCheck, UploadCloud, Zap, Globe, Lock } from "lucide-react";
import { useMemo } from "react";

interface ThreatNodeProps {
    status: 'critical' | 'warning' | 'secure' | 'clean';
    label: string;
    detail: string;
    position: string;
    delay?: number;
}

const statusConfig = {
    critical: {
        bg: 'bg-alert-red/15',
        border: 'border-alert-red/50',
        dot: 'bg-alert-red',
        text: 'text-alert-red',
        subtext: 'text-alert-red/70',
        glow: 'shadow-[0_0_25px_rgba(255,59,48,0.3)]',
        pulse: true,
    },
    warning: {
        bg: 'bg-alert-yellow/15',
        border: 'border-alert-yellow/50',
        dot: 'bg-alert-yellow',
        text: 'text-alert-yellow',
        subtext: 'text-alert-yellow/70',
        glow: 'shadow-[0_0_20px_rgba(255,170,0,0.2)]',
        pulse: true,
    },
    secure: {
        bg: 'bg-neon-green/10',
        border: 'border-neon-green/40',
        dot: 'bg-neon-green',
        text: 'text-neon-green',
        subtext: 'text-neon-green/60',
        glow: '',
        pulse: false,
    },
    clean: {
        bg: 'bg-neon-green/10',
        border: 'border-neon-green/40',
        dot: 'bg-neon-green',
        text: 'text-neon-green',
        subtext: 'text-neon-green/60',
        glow: '',
        pulse: false,
    },
};

function ThreatNode({ status, label, detail, position, delay = 0 }: ThreatNodeProps) {
    const config = statusConfig[status];
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ 
                opacity: { duration: 0.5, delay: delay * 0.3 },
                scale: { duration: 0.5, delay: delay * 0.3 },
                y: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 }
            }}
            className={`absolute ${position} z-10`}
        >
            <div className={`px-3 py-2 rounded-lg ${config.bg} border ${config.border} backdrop-blur-md ${config.glow} cursor-default hover:scale-105 transition-transform`}>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <div className={`w-2 h-2 rounded-full ${config.dot} ${config.pulse ? 'animate-pulse' : ''}`} />
                        {config.pulse && (
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                className={`absolute inset-0 rounded-full ${config.dot}`}
                            />
                        )}
                    </div>
                    <span className={`${config.text} text-xs font-hud font-semibold tracking-wider`}>{label}</span>
                </div>
                <div className={`text-[10px] ${config.subtext} mt-1 font-mono`}>{detail}</div>
            </div>
        </motion.div>
    );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
    return (
        <div className="px-3 py-2 rounded bg-black/70 border border-white/10 backdrop-blur-sm">
            <div className="text-[10px] text-gray-500 font-hud tracking-widest">{label}</div>
            <div className={`text-lg font-bold ${color} font-hud tabular-nums`}>{value}</div>
        </div>
    );
}

function RadarRing({ size, opacity, delay = 0 }: { size: string; opacity: string; delay?: number }) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            className={`absolute ${size} rounded-full border ${opacity}`}
        />
    );
}

function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
    return (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Icon className="w-4 h-4 text-neon-blue" />
            <span>{text}</span>
        </div>
    );
}

function FloatingParticle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
    return (
        <motion.div
            className="absolute w-1 h-1 bg-neon-blue/30 rounded-full"
            style={{ left: x, top: y }}
            animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

export function Hero() {
    const connectionLines = useMemo(() => [
        { x2: "25%", y2: "20%", stroke: "rgba(255, 59, 48, 0.5)", delay: 0 },
        { x2: "75%", y2: "25%", stroke: "rgba(255, 170, 0, 0.5)", delay: 0.3 },
        { x2: "20%", y2: "70%", stroke: "rgba(57, 255, 20, 0.4)", delay: 0.6 },
        { x2: "80%", y2: "75%", stroke: "rgba(57, 255, 20, 0.4)", delay: 0.9 },
    ], []);

    const particles = useMemo(() => [
        { delay: 0, duration: 3, x: "10%", y: "20%" },
        { delay: 0.5, duration: 4, x: "85%", y: "30%" },
        { delay: 1, duration: 3.5, x: "15%", y: "70%" },
        { delay: 1.5, duration: 4.5, x: "90%", y: "60%" },
        { delay: 2, duration: 3, x: "50%", y: "15%" },
        { delay: 0.3, duration: 4, x: "30%", y: "85%" },
        { delay: 0.8, duration: 3.5, x: "70%", y: "80%" },
        { delay: 1.2, duration: 4, x: "5%", y: "50%" },
    ], []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oled-black">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-neon-blue/10 rounded-full blur-[180px] animate-pulse-slow" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-neon-green/5 rounded-full blur-[100px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
                
                {particles.map((p, i) => (
                    <FloatingParticle key={i} {...p} />
                ))}
            </div>

            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
                <ArcStrikeLogo />
            </div>

            <Section className="relative z-10 flex flex-col items-center text-center pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <motion.span 
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-hud tracking-widest mb-8"
                    >
                        <Zap className="w-4 h-4" />
                        PRECISION ENDPOINT DEFENSE
                    </motion.span>
                    
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.1]"
                    >
                        Silence the Noise.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-[#00D4FF] to-neon-purple animate-gradient-x">
                            Neutralize the Unknown.
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        ArcStrike unifies next-gen malware analysis, behavioral EDR, and real-time forensics into a single, precision-engineered platform.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
                    >
                        <NeonButton glowColor="green" size="lg" className="min-w-[220px] group">
                            <UploadCloud className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                            Upload File to Scan
                        </NeonButton>
                        <NeonButton variant="secondary" size="lg" className="min-w-[220px]">
                            <ShieldCheck className="mr-2 h-5 w-5" />
                            Deploy ArcStrike Agent
                        </NeonButton>
                    </motion.div>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-sm text-gray-500 mb-8"
                    >
                        No agents required for file uploads. Agents available for full endpoint defense.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-6 pt-4 border-t border-white/5"
                    >
                        <TrustBadge icon={Zap} text="Sub-second analysis" />
                        <TrustBadge icon={Globe} text="Global threat intel" />
                        <TrustBadge icon={Lock} text="SOC 2 compliant" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-5xl mt-8"
                >
                    <GlassCard className="aspect-video relative overflow-hidden border-neon-blue/20 bg-black/60 hud-border radar-glow">
                        <div className="scanline-overlay opacity-20" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent" />

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-[140%] h-1 bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent origin-center blur-[2px]" />
                                </motion.div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <RadarRing size="w-20 h-20" opacity="border-neon-blue/40" delay={0} />
                                    <RadarRing size="w-40 h-40" opacity="border-neon-blue/30" delay={0.1} />
                                    <RadarRing size="w-64 h-64" opacity="border-neon-blue/20" delay={0.2} />
                                    <RadarRing size="w-96 h-96" opacity="border-neon-blue/10" delay={0.3} />
                                    <RadarRing size="w-[450px] h-[450px]" opacity="border-neon-blue/5" delay={0.4} />
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                    <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                </div>
                            </div>

                            <div className="relative w-full h-full p-8 flex items-center justify-center">
                                <motion.div
                                    className="relative z-20"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                                    transition={{ 
                                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                        opacity: { duration: 0.5, delay: 1 }
                                    }}
                                >
                                    <div className="w-24 h-24 rounded-full bg-neon-blue/20 border-2 border-neon-blue flex items-center justify-center shadow-[0_0_60px_rgba(0,128,255,0.5)] relative">
                                        <ShieldCheck className="w-12 h-12 text-neon-blue" />
                                        <motion.div
                                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                            className="absolute inset-0 rounded-full border-2 border-neon-blue"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                            className="absolute inset-0 rounded-full border border-neon-blue"
                                        />
                                    </div>
                                </motion.div>

                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                                    {connectionLines.map((line, i) => (
                                        <motion.line
                                            key={i}
                                            x1="50%" y1="50%"
                                            x2={line.x2} y2={line.y2}
                                            stroke={line.stroke}
                                            strokeWidth="2"
                                            strokeDasharray="6,4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, delay: 1.2 + line.delay, repeat: Infinity, ease: "linear" }}
                                        />
                                    ))}
                                </svg>

                                <ThreatNode
                                    status="critical"
                                    label="CRITICAL"
                                    detail="Ransomware.Ryuk"
                                    position="top-[15%] left-[18%]"
                                    delay={0}
                                />

                                <ThreatNode
                                    status="warning"
                                    label="WARNING"
                                    detail="Suspicious.Exe"
                                    position="top-[18%] right-[20%]"
                                    delay={1}
                                />

                                <ThreatNode
                                    status="secure"
                                    label="SECURE"
                                    detail="127 Endpoints"
                                    position="bottom-[22%] left-[12%]"
                                    delay={2}
                                />

                                <ThreatNode
                                    status="clean"
                                    label="CLEAN"
                                    detail="Memory Scan OK"
                                    position="bottom-[18%] right-[15%]"
                                    delay={3}
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, ease: "easeOut" }}
                                    className="absolute top-16 right-4 space-y-2 z-10"
                                >
                                    <StatBox label="DETECTIONS (24H)" value="247" color="text-alert-red" />
                                    <StatBox label="ACTIVE AGENTS" value="1,248" color="text-neon-blue" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-12 bg-black/50 border-b border-white/10 flex items-center px-6 gap-2 z-30">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors cursor-pointer" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors cursor-pointer" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors cursor-pointer" />
                            </div>
                            <div className="ml-4 h-7 flex-1 max-w-xs bg-white/5 rounded flex items-center px-3 text-gray-500 font-hud text-xs tracking-wider">
                                arcstrike_console.exe --monitor
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-8 bg-black/50 border-t border-white/10 flex items-center justify-between px-6 z-30">
                            <div className="flex items-center gap-2 text-[10px] font-hud text-gray-500 tracking-wider">
                                <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                                <span>MONITORING ACTIVE</span>
                            </div>
                            <div className="text-[10px] font-hud text-gray-600 tracking-wider">
                                ARC-CORE v2.4.1
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </Section>
        </div>
    );
}
