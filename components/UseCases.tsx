import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { Shield, Terminal, Cpu } from "lucide-react";

export function UseCases() {
    return (
        <Section id="use-cases" className="py-24">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Defending Against Modern TTPs
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We don't just "stop viruses." We dismantle sophisticated attack chains used by APT groups and ransomware operators.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <UseCaseCard
                    icon={<Terminal className="w-8 h-8 text-neon-blue" />}
                    title="Cobalt Strike Beacons"
                    scenario="Reflective DLL Injection"
                    description="Adversaries use Cobalt Strike to inject beacons into memory without touching disk. ArcStrike's memory scanner detects the floating code anomalies and unbacked executable memory regions typical of these implants."
                    tags={["Memory Scan", "Beacon Detection"]}
                />
                <UseCaseCard
                    icon={<Cpu className="w-8 h-8 text-neon-purple" />}
                    title="AgentTesla / Formbook"
                    scenario="Process Hollowing"
                    description="Info-stealers often hollow out legitimate processes (like svchost.exe) to hide. We detect the mismatch between the process image on disk and its memory content, flagging the hollowed process instantly."
                    tags={["Process Integrity", "Heuristics"]}
                />
                <UseCaseCard
                    icon={<Shield className="w-8 h-8 text-neon-green" />}
                    title="Fileless Malware"
                    scenario="Living off the Land (LotL)"
                    description="Attacks using PowerShell or WMI leave no file artifacts. We hook into ETW (Event Tracing for Windows) to analyze script block execution and command-line arguments in real-time."
                    tags={["AMSI", "ETW Monitoring"]}
                />
            </div>
        </Section>
    );
}

function UseCaseCard({ icon, title, scenario, description, tags }: { icon: React.ReactNode, title: string, scenario: string, description: string, tags: string[] }) {
    return (
        <GlassCard className="p-8 flex flex-col h-full border-t-4 border-t-transparent hover:border-t-neon-blue transition-all">
            <div className="mb-6">
                <div className="p-3 bg-white/5 rounded-lg w-fit mb-4">
                    {icon}
                </div>
                <div className="text-xs font-mono text-neon-blue mb-2 uppercase tracking-wider">{scenario}</div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>
        </GlassCard>
    );
}
