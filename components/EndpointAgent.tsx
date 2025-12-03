"use client";

import React from 'react';

export default function EndpointAgent() {
    const capabilities = [
        {
            title: "What It Monitors",
            items: [
                "Process creation, termination, and parent-child relationships",
                "Registry modifications and autoruns (Windows)",
                "Filesystem I/O: creates, writes, renames, deletes",
                "Network connections: outbound C2, lateral movement",
                "DLL/module loads and code injection attempts"
            ],
            icon: "👁️"
        },
        {
            title: "How It Responds",
            items: [
                "Immediate process termination for confirmed threats",
                "File quarantine with secure encryption",
                "Network isolation via ShadeHunter integration",
                "Alerting to central console with full context",
                "Forensic data collection for incident analysis"
            ],
            icon: "⚡"
        },
        {
            title: "How It Runs",
            items: [
                "Lightweight kernel driver + user-mode service",
                "< 2% CPU usage, < 50MB memory footprint",
                "Signed binaries with integrity verification",
                "Self-protection against tampering and termination",
                "Graceful degradation on resource constraints"
            ],
            icon: "⚙️"
        }
    ];

    const keyCapabilities = [
        {
            name: "Real-Time Detection",
            description: "Continuous behavioral analysis on the endpoint with sub-second response times. No network dependency for local detection.",
            icon: "🔴"
        },
        {
            name: "Offline Mode",
            description: "Embedded ML models enable threat detection even when disconnected. Events sync when connectivity is restored.",
            icon: "📴"
        },
        {
            name: "Policy-Based Response",
            description: "Granular policies control detection sensitivity and automated actions per endpoint group or tag.",
            icon: "📋"
        },
        {
            name: "Forensic Collection",
            description: "Capture process memory dumps, network PCAPs, and file snapshots for deep investigation and threat hunting.",
            icon: "🔍"
        }
    ];

    return (
        <section className="py-24 px-6 gradient-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-electric">
                        ArcStrike Endpoint Agent
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Lightweight, enterprise-hardened endpoint protection for Windows and Linux
                    </p>
                </div>

                {/* Overview */}
                <div className="glass-strong rounded-2xl p-10 mb-12 max-w-4xl mx-auto">
                    <p className="text-lg text-secondary leading-relaxed mb-4">
                        The ArcStrike endpoint agent is a next-generation EDR sensor that deploys on Windows and Linux
                        systems to provide continuous threat detection and automated response. Unlike legacy antivirus,
                        the agent uses behavioral analysis and machine learning to detect never-before-seen threats.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed">
                        Designed for enterprise environments, the agent is tunable, resilient, and integrates seamlessly
                        with centralized management via the ArcStrike Console and broader ecosystem tools like ShadowTrace
                        and ShadeHunter.
                    </p>
                </div>

                {/* What it monitors / responds / runs */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="bento-card border-glow-electric">
                            <div className="text-4xl mb-4">{cap.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {cap.title}
                            </h3>
                            <ul className="space-y-3">
                                {cap.items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start gap-3 text-sm text-secondary">
                                        <span className="text-electric-blue mt-1">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Key Capabilities */}
                <div>
                    <h3 className="text-3xl font-bold text-white mb-10 text-center">
                        Key Capabilities
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {keyCapabilities.map((cap, index) => (
                            <div key={index} className="glass rounded-xl p-8 hover:border-plasma-purple transition-smooth">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{cap.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">
                                            {cap.name}
                                        </h4>
                                        <p className="text-secondary text-sm leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Agent Lifecycle */}
                <div className="mt-16 glass-strong rounded-2xl p-10 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Agent Lifecycle
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                        <div>
                            <div className="w-16 h-16 mx-auto mb-3 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30 font-mono">
                                1
                            </div>
                            <div className="font-semibold text-white text-sm mb-1">Deploy</div>
                            <div className="text-xs text-tertiary">Push via GPO, SCCM, or script</div>
                        </div>

                        <div>
                            <div className="w-16 h-16 mx-auto mb-3 bg-plasma-purple/10 rounded-full flex items-center justify-center text-2xl border border-plasma-purple/30 font-mono">
                                2
                            </div>
                            <div className="font-semibold text-white text-sm mb-1">Register</div>
                            <div className="text-xs text-tertiary">Auto-register with console</div>
                        </div>

                        <div>
                            <div className="w-16 h-16 mx-auto mb-3 bg-neon-green/10 rounded-full flex items-center justify-center text-2xl border border-neon-green/30 font-mono">
                                3
                            </div>
                            <div className="font-semibold text-white text-sm mb-1">Monitor</div>
                            <div className="text-xs text-tertiary">Real-time event collection</div>
                        </div>

                        <div>
                            <div className="w-16 h-16 mx-auto mb-3 bg-electric-blue/10 rounded-full flex items-center justify-center text-2xl border border-electric-blue/30 font-mono">
                                4
                            </div>
                            <div className="font-semibold text-white text-sm mb-1">Detect</div>
                            <div className="text-xs text-tertiary">Behavioral + ML analysis</div>
                        </div>

                        <div>
                            <div className="w-16 h-16 mx-auto mb-3 bg-plasma-purple/10 rounded-full flex items-center justify-center text-2xl border border-plasma-purple/30 font-mono">
                                5
                            </div>
                            <div className="font-semibold text-white text-sm mb-1">Respond</div>
                            <div className="text-xs text-tertiary">Auto-containment & alert</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button className="px-10 py-5 bg-electric-blue hover:bg-electric-blue/90 text-white font-bold rounded-xl transition-smooth shadow-lg">
                        Download Agent Installer
                    </button>
                    <p className="mt-4 text-sm text-tertiary">
                        Windows Server 2016+ and RHEL/Ubuntu supported
                    </p>
                </div>
            </div>
        </section>
    );
}
