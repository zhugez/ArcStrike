"use client";

import React from 'react';

export default function ValueProposition() {
    const values = [
        {
            title: "Next-Generation Malware Detection",
            description: "ArcStrike combines static analysis, dynamic behavioral profiling, and machine learning to detect both known and emerging threats. Our multi-layered approach analyzes file structure, imports, entropy, and runtime behavior to provide accurate verdicts with minimal false positives.",
            icon: "🎯"
        },
        {
            title: "Complete Endpoint Visibility",
            description: "Gain comprehensive insight into every endpoint with real-time process monitoring, memory scanning, registry tracking, and network connection analysis. ArcStrike captures the full context of suspicious activity, enabling rapid investigation and response.",
            icon: "👁️"
        },
        {
            title: "Rapid Triage with Rich Context",
            description: "Security teams can quickly assess threats with detailed scan results that include MITRE ATT&CK mapping, YARA rule matches, behavioral indicators, and threat intelligence enrichment. Every alert provides actionable intelligence.",
            icon: "⚡"
        },
        {
            title: "Seamless Ecosystem Integration",
            description: "ArcStrike integrates natively with ShadowTrace for threat intelligence enrichment and ShadeHunter for coordinated network-level response. This unified approach enables correlated detection across endpoint, network, and intelligence layers.",
            icon: "🔗"
        },
        {
            title: "Built for Security Operations",
            description: "Designed specifically for SOC teams, detection engineers, DFIR specialists, and security architects. ArcStrike provides enterprise-grade scalability, policy-based automation, and comprehensive API access for workflow integration.",
            icon: "🏢"
        }
    ];

    return (
        <section className="py-24 px-6 bg-dark-grey">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-electric">
                        Enterprise Endpoint Defense
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Complete visibility, precise detection, and automated response for modern threat landscapes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 transition-smooth hover:scale-105 hover:border-electric-blue"
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                {value.title}
                            </h3>
                            <p className="text-secondary leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
