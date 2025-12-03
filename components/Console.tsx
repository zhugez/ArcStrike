import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { AlertOctagon, GitBranch, Monitor, Shield } from "lucide-react";

export function Console() {
    return (
        <Section className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Command & Control for Defenders</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A high-density, dark-mode interface designed for SOC analysts who need data fast.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Dashboard Preview */}
                <GlassCard className="lg:col-span-2 min-h-[400px] relative overflow-hidden flex flex-col border-white/10 bg-black/50">
                    <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs text-gray-500 font-mono">dashboard.tsx</span>
                    </div>

                    <div className="mt-12 p-6 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded bg-red-500/10 border border-red-500/20">
                            <div className="text-red-400 text-xs font-mono mb-1">CRITICAL ALERTS</div>
                            <div className="text-2xl font-bold text-white">3</div>
                        </div>
                        <div className="p-4 rounded bg-neon-blue/10 border border-neon-blue/20">
                            <div className="text-neon-blue text-xs font-mono mb-1">ACTIVE AGENTS</div>
                            <div className="text-2xl font-bold text-white">1,248</div>
                        </div>
                        <div className="col-span-2 p-4 rounded bg-white/5 border border-white/10 h-48 relative overflow-hidden">
                            <div className="text-gray-400 text-xs font-mono mb-2">LATEST DETECTIONS</div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                                    <span className="text-red-400 font-mono">CobaltStrike_Beacon.dll</span>
                                    <span className="text-gray-500">MemScan</span>
                                </div>
                                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                                    <span className="text-red-400 font-mono">mimikatz.exe</span>
                                    <span className="text-gray-500">CredDump</span>
                                </div>
                                <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                                    <span className="text-orange-400 font-mono">powershell_obfuscated.ps1</span>
                                    <span className="text-gray-500">Heuristic</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-yellow-400 font-mono">unknown_packer.exe</span>
                                    <span className="text-gray-500">ML_Engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Feature List */}
                <div className="space-y-4">
                    <ConsoleFeature
                        icon={AlertOctagon}
                        title="Alerts & Incidents"
                        desc="Drill down from a high-level alert to the exact line of code or process argument that triggered it."
                        color="text-red-400"
                    />
                    <ConsoleFeature
                        icon={GitBranch}
                        title="Process Tree Forensics"
                        desc="Interactive visualization showing the ancestry of every process. Malicious nodes highlighted in Neon Red."
                        color="text-neon-purple"
                    />
                    <ConsoleFeature
                        icon={Monitor}
                        title="Endpoints Overview"
                        desc="See which agents are online, their version, and their current risk score."
                        color="text-neon-blue"
                    />
                    <ConsoleFeature
                        icon={Shield}
                        title="Intelligence View"
                        desc="Visual map of your environment's exposure to specific MITRE ATT&CK techniques."
                        color="text-neon-green"
                    />
                </div>
            </div>
        </Section>
    );
}

function ConsoleFeature({ icon: Icon, title, desc, color }: any) {
    return (
        <div className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
            <div className={`mt-1 p-2 rounded bg-white/5 group-hover:bg-white/10 transition-colors ${color}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="text-white font-bold mb-1 group-hover:text-neon-blue transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
