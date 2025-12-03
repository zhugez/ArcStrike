import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { AlertOctagon, GitBranch, Monitor, Shield } from "lucide-react";
import { toast } from "sonner";

export function Console() {
    const handleFeatureClick = (feature: string) => {
        toast.info("Module Updating", {
            description: `${feature} is currently being updated to the latest version.`
        });
    };

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

                    <div className="mt-12 p-6 space-y-4">
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 relative overflow-hidden group hover:bg-red-500/20 transition-all">
                                {/* Animated Background Pulse */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <div className="text-red-400 text-xs font-mono uppercase tracking-wider">Critical Alerts</div>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <div className="text-3xl font-bold text-white">3</div>
                                        <div className="text-xs text-red-400/70 font-mono mb-1">+2 Last 24h</div>
                                    </div>
                                    {/* Mini Chart Bar */}
                                    <div className="mt-3 h-1 bg-black/30 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-red-500 to-red-400 w-[35%] rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/30 relative overflow-hidden group hover:bg-neon-blue/15 transition-all">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-neon-blue" />
                                        <div className="text-neon-blue text-xs font-mono uppercase tracking-wider">Active Agents</div>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <div className="text-3xl font-bold text-white">1,248</div>
                                        <div className="text-xs text-neon-blue/70 font-mono mb-1">98.2% Online</div>
                                    </div>
                                    {/* Mini Chart Bar */}
                                    <div className="mt-3 h-1 bg-black/30 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-neon-blue to-blue-400 w-[98%] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detections List */}
                        <div className="rounded-lg bg-black/40 border border-white/10 overflow-hidden">
                            {/* Header */}
                            <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                <div className="text-gray-400 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                                    <AlertOctagon className="w-3 h-3" />
                                    Latest Detections
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono">Real-time</div>
                            </div>

                            {/* Detection Items */}
                            <div className="p-4 space-y-3 max-h-56 overflow-y-auto">
                                <ThreatItem
                                    filename="CobaltStrike_Beacon.dll"
                                    method="MemScan"
                                    severity="critical"
                                    score={95}
                                    timestamp="2m ago"
                                />
                                <ThreatItem
                                    filename="mimikatz.exe"
                                    method="CredDump"
                                    severity="critical"
                                    score={98}
                                    timestamp="5m ago"
                                />
                                <ThreatItem
                                    filename="powershell_obfuscated.ps1"
                                    method="Heuristic"
                                    severity="high"
                                    score={78}
                                    timestamp="12m ago"
                                />
                                <ThreatItem
                                    filename="unknown_packer.exe"
                                    method="ML_Engine"
                                    severity="medium"
                                    score={62}
                                    timestamp="18m ago"
                                />
                                <ThreatItem
                                    filename="suspicious_macro.docm"
                                    method="Static"
                                    severity="low"
                                    score={45}
                                    timestamp="25m ago"
                                />
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex items-center justify-between">
                                <div className="text-[10px] text-gray-500 font-mono">247 detections in last 24h</div>
                                <div className="text-[10px] text-neon-blue font-mono hover:text-neon-blue/80 cursor-pointer">View All →</div>
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
                        onClick={() => handleFeatureClick("Alerts & Incidents")}
                    />
                    <ConsoleFeature
                        icon={GitBranch}
                        title="Process Tree Forensics"
                        desc="Interactive visualization showing the ancestry of every process. Malicious nodes highlighted in Neon Red."
                        color="text-neon-purple"
                        onClick={() => handleFeatureClick("Process Tree")}
                    />
                    <ConsoleFeature
                        icon={Monitor}
                        title="Endpoints Overview"
                        desc="See which agents are online, their version, and their current risk score."
                        color="text-neon-blue"
                        onClick={() => handleFeatureClick("Endpoints Overview")}
                    />
                    <ConsoleFeature
                        icon={Shield}
                        title="Intelligence View"
                        desc="Visual map of your environment's exposure to specific MITRE ATT&CK techniques."
                        color="text-neon-green"
                        onClick={() => handleFeatureClick("Intelligence View")}
                    />
                </div>
            </div>
        </Section>
    );
}

function ConsoleFeature({ icon: Icon, title, desc, color, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
        >
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

function ThreatItem({ filename, method, severity, score, timestamp }: {
    filename: string;
    method: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    score: number;
    timestamp: string;
}) {
    const severityConfig = {
        critical: {
            color: 'text-red-400',
            bg: 'bg-red-500/20',
            border: 'border-red-500/40',
            dot: 'bg-red-500'
        },
        high: {
            color: 'text-orange-400',
            bg: 'bg-orange-500/20',
            border: 'border-orange-500/40',
            dot: 'bg-orange-500'
        },
        medium: {
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/20',
            border: 'border-yellow-500/40',
            dot: 'bg-yellow-500'
        },
        low: {
            color: 'text-blue-400',
            bg: 'bg-blue-500/20',
            border: 'border-blue-500/40',
            dot: 'bg-blue-500'
        }
    };

    const config = severityConfig[severity];

    return (
        <div className="group hover:bg-white/5 p-2 rounded-lg transition-all border border-transparent hover:border-white/10">
            <div className="flex items-start justify-between gap-4">
                {/* Left: Filename and Method */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${config.dot} ${severity === 'critical' ? 'animate-pulse' : ''}`} />
                        <span className={`font-mono text-xs ${config.color} truncate`}>
                            {filename}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-gray-500 font-mono">{method}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600 font-mono">{timestamp}</span>
                    </div>
                </div>

                {/* Right: Severity Badge and Score */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${config.bg} ${config.border} border ${config.color}`}>
                        {severity}
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-xs font-bold text-white">{score}</div>
                        <div className="text-[10px] text-gray-500">/100</div>
                    </div>
                </div>
            </div>

            {/* Risk Score Bar */}
            <div className="mt-2 h-1 bg-black/40 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-red-400' :
                            severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-orange-400' :
                                severity === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                                    'bg-gradient-to-r from-blue-500 to-blue-400'
                        }`}
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
}
