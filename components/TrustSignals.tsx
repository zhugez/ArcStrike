import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { CheckCircle, Lock, Map, FileText } from "lucide-react";

export function TrustSignals() {
    return (
        <Section className="py-24 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Roadmap Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Map className="w-6 h-6 text-neon-blue" />
                        <h2 className="text-2xl font-bold text-white">Product Roadmap</h2>
                    </div>

                    <div className="space-y-8 relative pl-8 border-l border-white/10">
                        <RoadmapItem
                            quarter="Q1 2025"
                            title="Memory Scanner Beta"
                            status="completed"
                            desc="Initial release of our heap inspection engine for reflective DLL detection."
                        />
                        <RoadmapItem
                            quarter="Q2 2025"
                            title="Threat Intel API"
                            status="in-progress"
                            desc="Public API access to ShadowTrace intelligence feeds and enrichment."
                        />
                        <RoadmapItem
                            quarter="Q3 2025"
                            title="Linux eBPF Agent"
                            status="planned"
                            desc="High-performance, kernel-safe monitoring for Linux server environments."
                        />
                    </div>
                </div>

                {/* Compliance & Transparency Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Lock className="w-6 h-6 text-neon-purple" />
                        <h2 className="text-2xl font-bold text-white">Security & Compliance</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <GlassCard className="p-6 flex items-start gap-4">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white mb-1">GDPR & CCPA Ready</h3>
                                <p className="text-sm text-gray-400">
                                    We process data with strict privacy controls. PII is redacted at the edge before telemetry leaves your network.
                                </p>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6 flex items-start gap-4">
                            <FileText className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white mb-1">Transparent Reporting</h3>
                                <p className="text-sm text-gray-400">
                                    We build in public. Read our engineering blog for deep dives into our detection logic and false positive rates.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>

            </div>
        </Section>
    );
}

function RoadmapItem({ quarter, title, status, desc }: { quarter: string, title: string, status: 'completed' | 'in-progress' | 'planned', desc: string }) {
    const statusColors = {
        'completed': 'bg-neon-green',
        'in-progress': 'bg-neon-blue',
        'planned': 'bg-gray-600'
    };

    return (
        <div className="relative">
            <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-black ${statusColors[status]}`} />
            <div className="text-xs font-mono text-gray-500 mb-1">{quarter}</div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    );
}
