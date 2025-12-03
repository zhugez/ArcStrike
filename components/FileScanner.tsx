import { Section } from "./Section";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { Upload, FileCode, CheckCircle, AlertTriangle, Search } from "lucide-react";

export function FileScanner() {
    return (
        <Section className="py-20">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Instant Forensic Analysis
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Don't wait for an incident. Proactively analyze suspicious files with our web-based scanner. No agent installation required—just drag, drop, and dissect.
                    </p>

                    <div className="space-y-6">
                        <Step number="01" title="Upload" desc="Securely transmit any file (up to 500MB) directly from your browser." />
                        <Step number="02" title="Analyze" desc="Parallel processing: static decomposition, ML classification, and YARA scanning." />
                        <Step number="03" title="Enrich" desc="Hashes checked against global reputation databases and ShadowTrace intelligence." />
                        <Step number="04" title="Report" desc="Receive a comprehensive, interactive forensic report in seconds." />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <GlassCard className="p-8 border-neon-green/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="border-2 border-dashed border-white/20 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors hover:border-neon-green/50 hover:bg-white/5 cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Upload className="w-8 h-8 text-neon-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Drag & Drop File</h3>
                            <p className="text-gray-500 text-sm mb-6">or click to browse (EXE, DLL, PDF, DOCX)</p>
                            <NeonButton glowColor="green" className="w-full max-w-xs">
                                Select File
                            </NeonButton>
                        </div>

                        {/* Mock Result Preview */}
                        <div className="mt-6 space-y-3 opacity-50 blur-[1px] group-hover:opacity-100 group-hover:blur-0 transition-all duration-500">
                            <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3">
                                    <FileCode className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm text-gray-300">invoice_dec_2024.pdf.exe</span>
                                </div>
                                <span className="text-xs font-mono text-red-400 flex items-center gap-1">
                                    <AlertTriangle className="w-3 h-3" /> MALICIOUS (98%)
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3">
                                    <Search className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm text-gray-300">Static Analysis</span>
                                </div>
                                <span className="text-xs font-mono text-yellow-400">High Entropy</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <span className="text-neon-green font-mono text-xl font-bold opacity-50">{number}</span>
            <div>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    );
}
