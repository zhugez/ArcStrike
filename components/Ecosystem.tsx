import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { Share2 } from "lucide-react";
import { ShadeHunterLogo } from "./Logo";

export function Ecosystem() {
    return (
        <Section className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">A Unified Defense Fabric</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    ArcStrike is the sensor; the ecosystem is the brain and muscle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="p-8 border-neon-purple/30 bg-neon-purple/5">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-neon-purple/20 text-neon-purple">
                            <Share2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">ShadowTrace</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Samples and metadata detected by ArcStrike are automatically cross-referenced with ShadowTrace's global intelligence. If a file is new to you but known to ShadowTrace as a banking trojan, you get that context instantly.
                    </p>
                    <div className="text-sm font-mono text-neon-purple">
                        &gt; Threat Intelligence Integration Active
                    </div>
                </GlassCard>

                <a
                    href="https://shadehunter.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <GlassCard className="p-8 border-neon-blue/30 bg-neon-blue/5 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-neon-blue/20 text-neon-blue group-hover:bg-neon-blue/30 transition-colors">
                                <ShadeHunterLogo className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">ShadeHunter</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Endpoint and Network, working together. When ArcStrike detects a compromised host, it can signal ShadeHunter to block all traffic from that IP at the network level.
                        </p>
                        <div className="text-sm font-mono text-neon-blue flex items-center gap-2">
                            <span>&gt; Network Defense Link Established</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </div>
                    </GlassCard>
                </a>
            </div>
        </Section>
    );
}
