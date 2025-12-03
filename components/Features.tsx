import { Section } from "./Section";
import { BentoGrid, BentoItem } from "./BentoGrid";
import {
    ShieldAlert,
    Cpu,
    Lock,
    FileSearch,
    Binary,
    Globe,
    Share2,
    LayoutDashboard
} from "lucide-react";

export function Features() {
    return (
        <Section id="features">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Engineered for the Unknown
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A modular defense architecture designed to detect, analyze, and neutralize threats across the entire kill chain.
                </p>
            </div>

            <BentoGrid>
                {/* Cluster: Endpoint Defense */}
                <BentoItem colSpan={2} className="relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldAlert className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 text-neon-blue">
                            <ActivityIcon />
                            <h3 className="text-xl font-bold">Behavioral Monitoring</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Detects malicious patterns like ransomware encryption or LSASS dumping in real-time using heuristic behavioral analysis.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon-blue rounded-full" /> Parent-child process correlation</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neon-blue rounded-full" /> Automatic kill-chain disruption</li>
                        </ul>
                    </div>
                </BentoItem>

                <BentoItem>
                    <div className="flex items-center gap-3 mb-4 text-neon-purple">
                        <Cpu className="w-6 h-6" />
                        <h3 className="text-lg font-bold">Memory Scanning</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                        Hunts for code injection, reflective DLL loading, and hollowed processes residing only in RAM.
                    </p>
                </BentoItem>

                {/* Cluster: Malware Analysis */}
                <BentoItem>
                    <div className="flex items-center gap-3 mb-4 text-neon-green">
                        <Binary className="w-6 h-6" />
                        <h3 className="text-lg font-bold">Static & ML Analysis</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                        Dual-engine approach using traditional static properties and advanced Deep Learning classifiers.
                    </p>
                </BentoItem>

                <BentoItem colSpan={2}>
                    <div className="flex items-center gap-3 mb-4 text-white">
                        <FileSearch className="w-6 h-6" />
                        <h3 className="text-xl font-bold">YARA Rule Engine</h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Apply custom or community YARA rules to scan files and memory in real-time. High-performance matching for complex string patterns.
                    </p>
                    <div className="h-24 bg-black/50 rounded-lg border border-white/10 p-3 font-mono text-xs text-gray-500 overflow-hidden">
                        <span className="text-neon-purple">rule</span> Suspicious_Packer &#123;<br />
                        &nbsp;&nbsp;<span className="text-neon-blue">meta</span>: description = "Detects custom packers"<br />
                        &nbsp;&nbsp;<span className="text-neon-blue">strings</span>: $a = &#123; E8 ?? ?? ?? ?? 50 8B 44 24 04 &#125;<br />
                        &#125;
                    </div>
                </BentoItem>

                {/* Cluster: File Upload & Intelligence */}
                <BentoItem>
                    <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <Globe className="w-6 h-6" />
                        <h3 className="text-lg font-bold">Browser Scanner</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        Drag-and-drop any suspicious file for an instant, agentless forensic report.
                    </p>
                </BentoItem>

                <BentoItem>
                    <div className="flex items-center gap-3 mb-4 text-purple-400">
                        <Share2 className="w-6 h-6" />
                        <h3 className="text-lg font-bold">ShadowTrace Intel</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        Automatically enrich every alert with global threat context and attribution.
                    </p>
                </BentoItem>

                <BentoItem>
                    <div className="flex items-center gap-3 mb-4 text-green-400">
                        <LayoutDashboard className="w-6 h-6" />
                        <h3 className="text-lg font-bold">MITRE ATT&CK</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        Visualize attacks against the industry-standard framework to understand adversary tactics.
                    </p>
                </BentoItem>
            </BentoGrid>
        </Section>
    );
}

function ActivityIcon() {
    return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
