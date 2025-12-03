"use client";

import React from 'react';

export default function CoreFeatures() {
    const features = [
        // Cluster: Endpoint Defense (EDR Engine)
        {
            cluster: "Endpoint Defense",
            name: "Real-Time Behavioral Monitoring",
            description: "Continuous surveillance of process creation, termination, and parent-child relationships across all endpoints.",
            bullets: [
                "Process tree analysis with full execution context",
                "Registry and filesystem modification tracking",
                "Network connection monitoring (inbound/outbound)"
            ],
            icon: "⚙️"
        },
        {
            cluster: "Endpoint Defense",
            name: "Memory Scanning Engine",
            description: "Advanced memory inspection to detect injected code, reflective loaders, and suspicious memory patterns.",
            bullets: [
                "Detection of hollowed processes and code injection",
                "Identification of suspicious memory regions",
                "Forensic memory dump capabilities"
            ],
            icon: "🧠"
        },
        {
            cluster: "Endpoint Defense",
            name: "Automatic Containment",
            description: "Policy-driven automated response to neutralize threats instantly without manual intervention.",
            bullets: [
                "Kill malicious processes on detection",
                "Quarantine suspicious files automatically",
                "Network isolation integration with ShadeHunter"
            ],
            icon: "🔒"
        },
        // Cluster: Malware Analysis Engine
        {
            cluster: "Malware Analysis",
            name: "Static ML/DL Classification",
            description: "Deep learning models analyze file structure, entropy, and imports to classify malware with high confidence.",
            bullets: [
                "PE/ELF/Office/PDF/ZIP format analysis",
                "Entropy calculation and section inspection",
                "Import table and API usage profiling"
            ],
            icon: "🤖"
        },
        {
            cluster: "Malware Analysis",
            name: "YARA Rule Engine",
            description: "Comprehensive YARA signature matching against curated threat intelligence rulesets.",
            bullets: [
                "Custom rule authoring and management",
                "Real-time rule updates from ShadowTrace",
                "Performance-optimized matching algorithms"
            ],
            icon: "📜"
        },
        {
            cluster: "Malware Analysis",
            name: "File Reputation Checks",
            description: "Cross-reference file hashes against global threat databases and internal historical data.",
            bullets: [
                "MD5, SHA1, SHA256 hash verification",
                "Integration with ShadowTrace intelligence feeds",
                "Historical prevalence and reputation scoring"
            ],
            icon: "🔍"
        },
        // Cluster: File Upload Scanner
        {
            cluster: "File Scanner",
            name: "Browser-Based Upload",
            description: "No-install file scanning directly from the browser with detailed, exportable analysis reports.",
            bullets: [
                "Support for executables, documents, and archives",
                "Instant analysis with ML verdict and confidence",
                "Shareable scan reports with permanent URLs"
            ],
            icon: "📤"
        },
        {
            cluster: "File Scanner",
            name: "Detailed Scan Results",
            description: "Comprehensive breakdown of static properties, behavioral insights, and threat context in bento-style panels.",
            bullets: [
                "File metadata, hashes, and structure analysis",
                "Detection verdict with confidence scoring",
                "Behavioral simulation and IOC extraction"
            ],
            icon: "📊"
        },
        // Cluster: Intelligence & ATT&CK
        {
            cluster: "Intelligence",
            name: "MITRE ATT&CK Mapping",
            description: "Automatic mapping of detected behaviors to ATT&CK techniques and tactics for contextual understanding.",
            bullets: [
                "Visual technique and tactic mapping",
                "Campaign and threat actor attribution",
                "Kill chain phase identification"
            ],
            icon: "🎯"
        },
        {
            cluster: "Intelligence",
            name: "ShadowTrace Integration",
            description: "Bi-directional intelligence sharing with ShadowTrace for enriched IOCs, TTPs, and threat context.",
            bullets: [
                "Automatic IOC submission and enrichment",
                "Campaign correlation and tracking",
                "Real-time threat intelligence feeds"
            ],
            icon: "🌐"
        },
        // Cluster: Operations & Scale
        {
            cluster: "Operations",
            name: "Policy-Based Control",
            description: "Granular, customizable policies for detection sensitivity, response actions, and alert routing.",
            bullets: [
                "Role-based access control (RBAC)",
                "Tunable detection thresholds per endpoint group",
                "Automated workflow and SOAR integration"
            ],
            icon: "⚖️"
        },
        {
            cluster: "Operations",
            name: "API & Automation",
            description: "Comprehensive REST API for programmatic access to all ArcStrike capabilities and data.",
            bullets: [
                "Full CRUD operations for endpoints and policies",
                "Webhook support for real-time event streaming",
                "Python/JavaScript SDK with examples"
            ],
            icon: "🔌"
        }
    ];

    // Group features by cluster
    const clusters = Array.from(new Set(features.map(f => f.cluster)));

    return (
        <section className="py-24 px-6 gradient-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-plasma">
                        Core Capabilities
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Modular, enterprise-grade features for comprehensive endpoint threat detection and response
                    </p>
                </div>

                {clusters.map((cluster, clusterIndex) => (
                    <div key={cluster} className="mb-16">
                        <h3 className="text-2xl font-bold text-electric-blue mb-8 flex items-center gap-3">
                            <span className="w-12 h-1 bg-electric-blue"></span>
                            {cluster}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features
                                .filter(f => f.cluster === cluster)
                                .map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bento-card"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-bold mb-3 text-white">
                                            {feature.name}
                                        </h4>
                                        <p className="text-secondary mb-4 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {feature.bullets.map((bullet, bIndex) => (
                                                <li key={bIndex} className="text-tertiary text-sm flex items-start gap-2">
                                                    <span className="text-electric-blue mt-1">▹</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                        {clusterIndex < clusters.length - 1 && (
                            <div className="w-full h-px bg-white/10 mt-16"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
