import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { ScanSearch, Activity, Network } from "lucide-react";

const values = [
    {
        icon: ScanSearch,
        title: "Deep Malware Forensics",
        description: "Beyond static signatures. ArcStrike combines static analysis, entropy checks, and deep learning models to detect obfuscated malware and zero-day loaders before they execute.",
        color: "text-neon-purple"
    },
    {
        icon: Activity,
        title: "Real-Time Endpoint Visibility",
        description: "See every process, every thread. Gain total visibility into process trees, memory injections, and registry changes. Our lightweight agent monitors behavior in real-time.",
        color: "text-neon-blue"
    },
    {
        icon: Network,
        title: "Ecosystem Intelligence",
        description: "Powered by ShadowTrace & ShadeHunter. Seamlessly integrated with threat intelligence and network defense for a unified, cross-domain kill chain view.",
        color: "text-neon-green"
    }
];

export function ValueProps() {
    return (
        <Section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((item, index) => (
                    <GlassCard key={index} className="flex flex-col items-start p-8">
                        <div className={`p-3 rounded-lg bg-white/5 mb-6 ${item.color}`}>
                            <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
}
