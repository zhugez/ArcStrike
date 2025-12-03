import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { motion } from "framer-motion";
import { Activity, Database, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export function TechSpecs() {
    return (
        <Section className="py-24 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Battle-Tested Performance
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Security isn't about promises. It's about precision, speed, and scale.
                        Our model is trained on one of the industry's largest proprietary datasets.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <MetricCard
                        icon={<ShieldCheck className="w-6 h-6 text-neon-blue" />}
                        value="99.8%"
                        label="TPR @ 1e-3 FPR"
                        subtext="Validated on Windows Malware"
                    />
                    <MetricCard
                        icon={<Zap className="w-6 h-6 text-neon-purple" />}
                        value="< 20ms"
                        label="Inference Latency"
                        subtext="Per file execution"
                    />
                    <MetricCard
                        icon={<Database className="w-6 h-6 text-neon-green" />}
                        value="200K+"
                        label="Training Samples"
                        subtext="Diverse malware families"
                    />
                    <MetricCard
                        icon={<Activity className="w-6 h-6 text-white" />}
                        value="0-Day"
                        label="Behavioral Coverage"
                        subtext="Heuristic detection"
                    />
                </div>

                {/* Detection Pipeline Visualization */}
                <div className="relative">
                    <div className="absolute inset-0 bg-neon-blue/5 blur-3xl rounded-full" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-12 text-center">Multi-Stage Detection Pipeline</h3>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <PipelineStage
                                step="01"
                                title="Static Analysis"
                                desc="PE Header parsing, entropy analysis, and import hashing."
                                color="border-neon-blue"
                            />
                            <PipelineStage
                                step="02"
                                title="Deep Learning"
                                desc="Vectorized feature extraction via proprietary neural networks."
                                color="border-neon-purple"
                            />
                            <PipelineStage
                                step="03"
                                title="Behavioral Hooks"
                                desc="Kernel-level monitoring of API calls and system events."
                                color="border-neon-green"
                            />
                            <PipelineStage
                                step="04"
                                title="Memory Scan"
                                desc="Heap inspection for reflective DLLs and hollowed processes."
                                color="border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function MetricCard({ icon, value, label, subtext }: { icon: React.ReactNode, value: string, label: string, subtext: string }) {
    return (
        <GlassCard className="p-6 text-center hover:bg-white/5 transition-colors">
            <div className="inline-flex p-3 rounded-full bg-white/5 mb-4">
                {icon}
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm font-bold text-gray-300 mb-2">{label}</div>
            <div className="text-xs text-gray-500 font-mono">{subtext}</div>
        </GlassCard>
    );
}

function PipelineStage({ step, title, desc, color }: { step: string, title: string, desc: string, color: string }) {
    return (
        <div className={`relative p-6 rounded-xl border-l-2 ${color} bg-white/5 backdrop-blur-sm`}>
            <div className="text-xs font-mono text-gray-500 mb-2">STAGE {step}</div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>

            {/* Connector Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-0.5 bg-white/10 last:hidden" />
        </div>
    );
}
