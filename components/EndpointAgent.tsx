import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { Zap, WifiOff, Shield, HardDrive } from "lucide-react";

export function EndpointAgent() {
    return (
        <Section className="py-20 bg-black">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The ArcStrike Agent</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A single, lightweight binary that provides the eyes and ears of your defense. Engineered for performance, running silently in the background.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AgentFeature
                    icon={Zap}
                    title="Real-Time Detection"
                    desc="Monitors process creation, file modifications, and network connections as they happen."
                    color="text-neon-blue"
                />
                <AgentFeature
                    icon={WifiOff}
                    title="Offline Defense"
                    desc="Local ML models ensure protection continues even when the endpoint is air-gapped."
                    color="text-neon-purple"
                />
                <AgentFeature
                    icon={Shield}
                    title="Automated Response"
                    desc="Configurable policies to automatically kill processes or isolate hosts upon high-severity detections."
                    color="text-neon-green"
                />
                <AgentFeature
                    icon={HardDrive}
                    title="Forensic Collection"
                    desc="On-demand retrieval of MFT, event logs, and browser history for deep-dive investigations."
                    color="text-white"
                />
            </div>

            {/* Lifecycle Visualization */}
            <div className="mt-20 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
                <div className="flex flex-wrap justify-between gap-4 relative z-10">
                    {['Install', 'Register', 'Sync Policy', 'Monitor', 'Detect', 'Respond', 'Report'].map((step, i) => (
                        <div key={step} className="flex flex-col items-center bg-black p-2">
                            <div className={`w-4 h-4 rounded-full border-2 border-white/20 mb-2 ${i >= 3 ? 'bg-neon-blue border-neon-blue shadow-[0_0_10px_rgba(0,128,255,0.5)]' : 'bg-black'}`} />
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{step}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

function AgentFeature({ icon: Icon, title, desc, color }: any) {
    return (
        <GlassCard className="text-center hover:bg-white/5">
            <div className={`inline-flex p-3 rounded-lg bg-white/5 mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
        </GlassCard>
    );
}
