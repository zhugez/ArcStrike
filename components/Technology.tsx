"use client";

import React from 'react';

export default function Technology() {
    return (
        <section className="py-24 px-6 bg-midnight-blue">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-electric">
                        How ArcStrike Works
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        A technical deep-dive into our multi-layered detection and response architecture
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Static Analysis Engine */}
                    <div className="glass-strong rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-electric-blue">01</span>
                            Static Analysis Engine
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            The static analysis engine dissects files without execution, examining file format structures,
                            extracting metadata, and analyzing code patterns. For PE files, we inspect headers, sections,
                            import/export tables, and resources. For documents, we extract macros, embedded objects, and
                            scripting content. Entropy analysis identifies packed or encrypted regions, while import table
                            profiling reveals API dependencies that correlate with malicious behavior.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/5 rounded-lg p-4 border border-electric-blue/20">
                                <div className="font-mono text-sm text-electric-blue mb-2">File Formats</div>
                                <div className="text-xs text-tertiary">PE, ELF, Mach-O, Office, PDF, ZIP, JAR</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-plasma-purple/20">
                                <div className="font-mono text-sm text-plasma-purple mb-2">Inspection Depth</div>
                                <div className="text-xs text-tertiary">Headers, sections, imports, entropy, signatures</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-neon-green/20">
                                <div className="font-mono text-sm text-neon-green mb-2">Output</div>
                                <div className="text-xs text-tertiary">Structural features, API calls, anomalies</div>
                            </div>
                        </div>
                    </div>

                    {/* Behavioral Analytics Pipeline */}
                    <div className="glass-strong rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-plasma-purple">02</span>
                            Behavioral Analytics Pipeline
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Real-time behavioral analytics consume telemetry from endpoints: process creation/termination events,
                            registry modifications, file I/O, and network connections. Events are correlated into sequences and
                            matched against behavioral signatures for ransomware (file encryption patterns), info-stealers
                            (credential access), persistence mechanisms (autoruns, scheduled tasks), and lateral movement.
                            The pipeline operates with sub-second latency, enabling immediate threat detection.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-plasma-purple rounded-full mt-2"></div>
                                <div>
                                    <div className="font-semibold text-white">Event Correlation</div>
                                    <div className="text-sm text-tertiary">Multi-event sequence analysis with temporal awareness</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-plasma-purple rounded-full mt-2"></div>
                                <div>
                                    <div className="font-semibold text-white">Behavioral Signatures</div>
                                    <div className="text-sm text-tertiary">Pattern matching for ransomware, loaders, stealers, and persistence</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-plasma-purple rounded-full mt-2"></div>
                                <div>
                                    <div className="font-semibold text-white">Low Latency</div>
                                    <div className="text-sm text-tertiary">Sub-second detection with streaming event processing</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Machine Learning & Deep Learning Models */}
                    <div className="glass-strong rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-neon-green">03</span>
                            Machine Learning & Deep Learning Models
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Our ML/DL models are trained on millions of benign and malicious samples, learning representations
                            that generalize to novel threats. Static models consume file structure features, import sequences,
                            and entropy distributions. Behavioral models analyze event graphs and temporal patterns. We prioritize
                            explainability: feature importance scores and decision pathways are surfaced to analysts. False positive
                            rates are minimized through ensemble techniques and continuous retraining on feedback loops.
                        </p>
                        <div className="bg-gradient-to-r from-electric-blue/10 to-plasma-purple/10 rounded-lg p-6 border border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <div className="font-semibold text-white mb-2">Model Types</div>
                                    <ul className="space-y-1 text-sm text-tertiary">
                                        <li>• Gradient-boosted trees for static features</li>
                                        <li>• Deep neural networks for code embeddings</li>
                                        <li>• Graph neural networks for behavioral sequences</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="font-semibold text-white mb-2">Key Properties</div>
                                    <ul className="space-y-1 text-sm text-tertiary">
                                        <li>• Explainable predictions with feature attribution</li>
                                        <li>• Low false positive rate (~0.1% on validation)</li>
                                        <li>• Adaptive learning from SOC feedback</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Memory Scanning Engine */}
                    <div className="glass-strong rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-electric-blue">04</span>
                            Memory Scanning Engine
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            The memory scanner inspects live process memory for injected code, reflective loaders, and shellcode.
                            We identify suspicious memory regions by analyzing page permissions (RWX pages), memory not backed by
                            files, and code patterns characteristic of injection techniques. YARA rules scan memory regions for
                            known malware families. Memory scanning runs periodically and on-demand, providing forensic snapshots
                            for incident response.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue">
                                Process Hollowing Detection
                            </span>
                            <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue">
                                Reflective DLL Injection
                            </span>
                            <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue">
                                Shellcode Identification
                            </span>
                            <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue">
                                RWX Page Analysis
                            </span>
                        </div>
                    </div>

                    {/* Secure Communication & Telemetry */}
                    <div className="glass-strong rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-plasma-purple">05</span>
                            Secure Communication & Telemetry
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            All endpoint-to-server communication uses mutual TLS with certificate pinning, ensuring both
                            authentication and encryption. Telemetry data is compressed and transmitted over encrypted channels.
                            We practice data minimization: only security-relevant events and file metadata are transmitted.
                            Sensitive data (credentials, PII) is never sent. Agents maintain local event buffers for offline
                            operation and sync when connectivity is restored.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-3xl text-neon-green mb-2">🔐</div>
                                <div className="font-semibold text-sm text-white">Mutual TLS</div>
                                <div className="text-xs text-tertiary mt-1">Certificate pinning</div>
                            </div>
                            <div>
                                <div className="text-3xl text-neon-green mb-2">📦</div>
                                <div className="font-semibold text-sm text-white">Data Minimization</div>
                                <div className="text-xs text-tertiary mt-1">Security events only</div>
                            </div>
                            <div>
                                <div className="text-3xl text-neon-green mb-2">⚡</div>
                                <div className="font-semibold text-sm text-white">Offline Support</div>
                                <div className="text-xs text-tertiary mt-1">Local buffering</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
