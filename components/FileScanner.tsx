"use client";

import React from 'react';

export default function FileScanner() {
    return (
        <section className="py-24 px-6 bg-dark-grey">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-plasma">
                        Browser-Based File Scanner
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Upload files directly from your browser for instant malware analysis — no agent installation required
                    </p>
                </div>

                {/* Main description */}
                <div className="glass-strong rounded-2xl p-10 mb-12 max-w-4xl mx-auto">
                    <p className="text-lg text-secondary leading-relaxed mb-8">
                        ArcStrike's web-based file scanner provides instant threat analysis for any file type.
                        Upload executables, documents, archives, or scripts, and receive a comprehensive security
                        assessment powered by the same static analysis and machine learning engines that protect
                        enterprise endpoints.
                    </p>

                    {/* User flow */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30">
                                1
                            </div>
                            <h4 className="font-semibold text-white mb-2">Upload File</h4>
                            <p className="text-sm text-tertiary">
                                Drag and drop or select from your device
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30">
                                2
                            </div>
                            <h4 className="font-semibold text-white mb-2">Analysis</h4>
                            <p className="text-sm text-tertiary">
                                Static analysis and ML/DL classification
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30">
                                3
                            </div>
                            <h4 className="font-semibold text-white mb-2">Simulation</h4>
                            <p className="text-sm text-tertiary">
                                Behavioral inference and IOC extraction
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30">
                                4
                            </div>
                            <h4 className="font-semibold text-white mb-2">Report</h4>
                            <p className="text-sm text-tertiary">
                                Detailed results with shareable URL
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scan Result Layout Description */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        Comprehensive Scan Results
                    </h3>
                    <p className="text-center text-secondary mb-12 max-w-3xl mx-auto">
                        Every scan produces a detailed report organized in bento-style panels for easy navigation and analysis
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Identity Panel */}
                        <div className="bento-card bg-gradient-to-br from-electric-blue/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center text-lg">
                                    🆔
                                </div>
                                <h4 className="text-lg font-bold text-white">File Identity</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• Filename and file type</li>
                                <li>• MD5, SHA1, SHA256 hashes</li>
                                <li>• File size and creation timestamp</li>
                            </ul>
                        </div>

                        {/* Static Analysis Panel */}
                        <div className="bento-card bg-gradient-to-br from-plasma-purple/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-plasma-purple/20 rounded-lg flex items-center justify-center text-lg">
                                    🔬
                                </div>
                                <h4 className="text-lg font-bold text-white">Static Properties</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• PE/ELF sections and headers</li>
                                <li>• Import/export table inspection</li>
                                <li>• Entropy analysis and packing detection</li>
                            </ul>
                        </div>

                        {/* Detection Verdict Panel */}
                        <div className="bento-card bg-gradient-to-br from-neon-green/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center text-lg">
                                    ✅
                                </div>
                                <h4 className="text-lg font-bold text-white">ML Verdict</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• Malicious / Suspicious / Clean</li>
                                <li>• Confidence score (0-100%)</li>
                                <li>• Feature importance breakdown</li>
                            </ul>
                        </div>

                        {/* Behavioral Insights Panel */}
                        <div className="bento-card bg-gradient-to-br from-electric-blue/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center text-lg">
                                    ⚙️
                                </div>
                                <h4 className="text-lg font-bold text-white">Behavioral Insights</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• Expected process behavior</li>
                                <li>• Network indicators (IPs, domains)</li>
                                <li>• Registry and file system impacts</li>
                            </ul>
                        </div>

                        {/* YARA & Rules Panel */}
                        <div className="bento-card bg-gradient-to-br from-plasma-purple/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-plasma-purple/20 rounded-lg flex items-center justify-center text-lg">
                                    📜
                                </div>
                                <h4 className="text-lg font-bold text-white">YARA Matches</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• Matched rule names and families</li>
                                <li>• Rule metadata and descriptions</li>
                                <li>• String hits and offsets</li>
                            </ul>
                        </div>

                        {/* ATT&CK & IOCs Panel */}
                        <div className="bento-card bg-gradient-to-br from-neon-green/5 to-transparent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center text-lg">
                                    🎯
                                </div>
                                <h4 className="text-lg font-bold text-white">ATT&CK & IOCs</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-tertiary">
                                <li>• MITRE ATT&CK techniques mapped</li>
                                <li>• Extracted IOCs (IPs, domains, hashes)</li>
                                <li>• Threat intelligence context from ShadowTrace</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button className="px-10 py-5 bg-gradient-electric text-white font-bold rounded-xl transition-smooth hover:scale-105 shadow-lg">
                        Try File Scanner Now
                    </button>
                    <p className="mt-4 text-sm text-tertiary">
                        Free for up to 10 files per day. No registration required.
                    </p>
                </div>
            </div>
        </section>
    );
}
