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

                {/* Hero Visual - Glass Card with "Live Map" concept */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full max-w-5xl mt-12"
                >
                    <GlassCard className="aspect-video relative overflow-hidden border-neon-blue/20 bg-black/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Abstract Process Tree Visualization */}
                            <div className="relative w-full h-full p-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent opacity-50" />

                                {/* Central Node */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-neon-blue/20 border-2 border-neon-blue flex items-center justify-center shadow-[0_0_30px_rgba(0,128,255,0.3)]">
                                        <ShieldCheck className="w-8 h-8 text-neon-blue" />
                                    </div>
                                    <div className="h-24 w-0.5 bg-gradient-to-b from-neon-blue to-transparent my-2" />
                                </div>

                                {/* Floating Nodes */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/4 left-1/4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-2 text-red-400 text-xs font-mono">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        MALWARE_DETECTED
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-1/3 right-1/4 p-4 rounded-lg bg-neon-green/10 border border-neon-green/30 backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-2 text-neon-green text-xs font-mono">
                                        <div className="w-2 h-2 rounded-full bg-neon-green" />
                                        SYSTEM_SECURE
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
