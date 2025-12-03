import { Section } from "./Section";
import { NeonButton } from "./NeonButton";
import { GlassCard } from "./GlassCard";
import { ArcStrikeLogo } from "./Logo";
import { motion } from "framer-motion";
import { ShieldCheck, UploadCloud } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-oled-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
            </div>

            {/* Navbar / Logo Area */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
                <ArcStrikeLogo />
                {/* Placeholder for future nav items if needed */}
            </div>

            <Section className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm font-medium tracking-wider mb-6">
                        PRECISION ENDPOINT DEFENSE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                        Silence the Noise. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                            Neutralize the Unknown.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        ArcStrike unifies next-gen malware analysis, behavioral EDR, and real-time forensics into a single, precision-engineered platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <NeonButton glowColor="green" className="w-full sm:w-auto group">
                            <UploadCloud className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                            Upload File to Scan
                        </NeonButton>
                        <NeonButton variant="secondary" className="w-full sm:w-auto">
                            <ShieldCheck className="mr-2 h-5 w-5" />
                            Deploy ArcStrike Agent
                        </NeonButton>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        No agents required for file uploads. Agents available for full endpoint defense.
                    </p>
                </motion.div>

                {/* Hero Visual - Enhanced Live Threat Map */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full max-w-5xl mt-12"
                >
                    <GlassCard className="aspect-video relative overflow-hidden border-neon-blue/20 bg-black/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Network Grid Background */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent" />

                                {/* Scanning Radar Effect */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-[120%] h-0.5 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent origin-center" />
                                </motion.div>

                                {/* Concentric Circles */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border border-white/10" />
                                    <div className="absolute w-64 h-64 rounded-full border border-white/5" />
                                    <div className="absolute w-96 h-96 rounded-full border border-white/5" />
                                </div>
                            </div>

                            {/* Threat Visualization Network */}
                            <div className="relative w-full h-full p-8 flex items-center justify-center">

                                {/* Central Shield Node */}
                                <motion.div
                                    className="relative z-20"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="w-20 h-20 rounded-full bg-neon-blue/20 border-2 border-neon-blue flex items-center justify-center shadow-[0_0_40px_rgba(0,128,255,0.4)] relative">
                                        <ShieldCheck className="w-10 h-10 text-neon-blue" />
                                        {/* Pulse Ring */}
                                        <motion.div
                                            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                            className="absolute inset-0 rounded-full border-2 border-neon-blue"
                                        />
                                    </div>
                                </motion.div>

                                {/* Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                                    {/* Top Left Connection */}
                                    <motion.line
                                        x1="50%" y1="50%"
                                        x2="25%" y2="20%"
                                        stroke="rgba(239, 68, 68, 0.4)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Top Right Connection */}
                                    <motion.line
                                        x1="50%" y1="50%"
                                        x2="75%" y2="25%"
                                        stroke="rgba(255, 170, 0, 0.4)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Bottom Left Connection */}
                                    <motion.line
                                        x1="50%" y1="50%"
                                        x2="20%" y2="70%"
                                        stroke="rgba(74, 222, 128, 0.4)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Bottom Right Connection */}
                                    <motion.line
                                        x1="50%" y1="50%"
                                        x2="80%" y2="75%"
                                        stroke="rgba(74, 222, 128, 0.4)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 0.9, repeat: Infinity, ease: "linear" }}
                                    />
                                </svg>

                                {/* Threat Nodes - Critical */}
                                <motion.div
                                    animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[15%] left-[20%] z-10"
                                >
                                    <div className="group relative">
                                        <div className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/40 backdrop-blur-md hover:bg-red-500/25 transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                                            <div className="flex items-center gap-2">
                                                <div className="relative">
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                                        className="absolute inset-0 rounded-full bg-red-500"
                                                    />
                                                </div>
                                                <span className="text-red-400 text-xs font-mono font-semibold">CRITICAL</span>
                                            </div>
                                            <div className="text-[10px] text-red-300/70 mt-1 font-mono">Ransomware.Ryuk</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Threat Nodes - Warning */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-[20%] right-[22%] z-10"
                                >
                                    <div className="px-3 py-2 rounded-lg bg-yellow-500/15 border border-yellow-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                            <span className="text-yellow-400 text-xs font-mono">WARNING</span>
                                        </div>
                                        <div className="text-[10px] text-yellow-300/70 mt-1 font-mono">Suspicious.Exe</div>
                                    </div>
                                </motion.div>

                                {/* Secure Nodes - Bottom */}
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-[25%] left-[15%] z-10"
                                >
                                    <div className="px-3 py-2 rounded-lg bg-neon-green/10 border border-neon-green/30 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-neon-green" />
                                            <span className="text-neon-green text-xs font-mono">SECURE</span>
                                        </div>
                                        <div className="text-[10px] text-neon-green/60 mt-1 font-mono">127 Endpoints</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="absolute bottom-[20%] right-[18%] z-10"
                                >
                                    <div className="px-3 py-2 rounded-lg bg-neon-green/10 border border-neon-green/30 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-neon-green" />
                                            <span className="text-neon-green text-xs font-mono">CLEAN</span>
                                        </div>
                                        <div className="text-[10px] text-neon-green/60 mt-1 font-mono">Memory Scan OK</div>
                                    </div>
                                </motion.div>

                                {/* Stats Overlay - Top Right */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute top-4 right-4 space-y-2 z-10"
                                >
                                    <div className="px-3 py-1.5 rounded bg-black/60 border border-white/10 backdrop-blur-sm">
                                        <div className="text-[10px] text-gray-400 font-mono">DETECTIONS (24H)</div>
                                        <div className="text-lg font-bold text-red-400 font-mono">247</div>
                                    </div>
                                    <div className="px-3 py-1.5 rounded bg-black/60 border border-white/10 backdrop-blur-sm">
                                        <div className="text-[10px] text-gray-400 font-mono">ACTIVE AGENTS</div>
                                        <div className="text-lg font-bold text-neon-blue font-mono">1,248</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* UI Overlay Elements */}
                        <div className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center px-6 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="ml-4 h-6 w-64 bg-white/5 rounded text-xs flex items-center px-3 text-gray-500 font-mono">
                                arcstrike_console.exe --monitor
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </Section>
        </div>
    );
}
