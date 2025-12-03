"use client";

import React from 'react';

export default function Ecosystem() {
    return (
        <section className="py-24 px-6 bg-dark-grey">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-electric">
                        Ecosystem Integration
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        ArcStrike operates as part of a unified security platform, seamlessly integrating
                        with ShadowTrace and ShadeHunter for comprehensive defense
                    </p>
                </div>

                {/* Integration Overview */}
                <div className="glass-strong rounded-2xl p-10 mb-12">
                    <p className="text-lg text-secondary leading-relaxed text-center max-w-4xl mx-auto">
                        Modern threats require coordinated response across endpoint, network, and intelligence layers.
                        ArcStrike is designed to integrate natively with complementary platforms, enabling correlated
                        detection, automated response, and enriched threat context across your entire security stack.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* ShadowTrace Integration */}
                    <div className="bento-card border-glow-electric hover:scale-100">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">🌐</div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    ShadowTrace Integration
                                    <span className="text-lg text-electric-blue ml-3">Threat Intelligence Platform</span>
                                </h3>

                                <p className="text-secondary mb-6 leading-relaxed">
                                    ShadowTrace is the threat intelligence hub that aggregates, correlates, and enriches
                                    security data from multiple sources. ArcStrike maintains bi-directional intelligence
                                    sharing with ShadowTrace to maximize detection accuracy and context.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="text-electric-blue">→</span>
                                            ArcStrike to ShadowTrace
                                        </h4>
                                        <ul className="space-y-2 text-sm text-tertiary">
                                            <li>• Submit detected malware samples for deep analysis</li>
                                            <li>• Export IOCs (file hashes, IPs, domains) for correlation</li>
                                            <li>• Share behavioral patterns and YARA rule hits</li>
                                            <li>• Contribute endpoint telemetry for campaign tracking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="text-electric-blue">←</span>
                                            ShadowTrace to ArcStrike
                                        </h4>
                                        <ul className="space-y-2 text-sm text-tertiary">
                                            <li>• Pull enriched IOC intelligence and threat scores</li>
                                            <li>• Receive campaign context and attribution data</li>
                                            <li>• Ingest updated YARA rules from threat research</li>
                                            <li>• Access MITRE ATT&CK mappings and TTP breakdowns</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-electric-blue/10 to-plasma-purple/10 rounded-lg p-6 border border-white/10">
                                    <div className="font-semibold text-white mb-2">Detection Story Example</div>
                                    <p className="text-sm text-tertiary">
                                        ArcStrike detects a suspicious DLL on an endpoint and submits its hash to ShadowTrace.
                                        ShadowTrace identifies it as part of a known APT campaign, returns additional IOCs
                                        (C2 domains, related samples), and maps the activity to ATT&CK techniques. ArcStrike
                                        uses this enriched context to hunt for lateral movement and trigger coordinated response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ShadeHunter Integration */}
                    <div className="bento-card border-glow-plasma hover:scale-100">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">🛡️</div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    ShadeHunter Integration
                                    <span className="text-lg text-plasma-purple ml-3">Network IDS/IPS</span>
                                </h3>

                                <p className="text-secondary mb-6 leading-relaxed">
                                    ShadeHunter is the network-layer intrusion detection and prevention system that monitors
                                    traffic, blocks malicious connections, and enforces network segmentation. ArcStrike and
                                    ShadeHunter coordinate to deliver unified endpoint-network defense.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="text-plasma-purple">→</span>
                                            ArcStrike to ShadeHunter
                                        </h4>
                                        <ul className="space-y-2 text-sm text-tertiary">
                                            <li>• Request immediate network isolation for compromised endpoints</li>
                                            <li>• Share detected C2 domains and IP addresses for blocking</li>
                                            <li>• Send process-level network indicators for correlation</li>
                                            <li>• Trigger firewall rule updates based on behavioral detections</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                            <span className="text-plasma-purple">←</span>
                                            ShadeHunter to ArcStrike
                                        </h4>
                                        <ul className="space-y-2 text-sm text-tertiary">
                                            <li>• Alert ArcStrike when network traffic matches known threats</li>
                                            <li>• Provide PCAP data for endpoint-network correlation</li>
                                            <li>• Report lateral movement attempts detected at network layer</li>
                                            <li>• Confirm successful network isolation actions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-plasma-purple/10 to-neon-green/10 rounded-lg p-6 border border-white/10">
                                    <div className="font-semibold text-white mb-2">Joint Detection Example</div>
                                    <p className="text-sm text-tertiary">
                                        ArcStrike detects a suspicious process attempting to connect to an unknown domain.
                                        It immediately notifies ShadeHunter, which blocks the connection at the firewall
                                        and provides PCAP evidence. Simultaneously, ArcStrike quarantines the process and
                                        collects memory dumps. The combined endpoint + network evidence is sent to ShadowTrace
                                        for threat intelligence enrichment and campaign tracking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unified Platform Vision */}
                <div className="mt-16 glass-strong rounded-2xl p-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Unified Security Platform
                    </h3>
                    <p className="text-secondary max-w-3xl mx-auto mb-6">
                        Together, ArcStrike (Endpoint), ShadowTrace (Intelligence), and ShadeHunter (Network)
                        form a comprehensive security ecosystem that sees more, responds faster, and adapts continuously.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <span className="px-6 py-3 bg-electric-blue/10 border border-electric-blue/30 rounded-lg text-sm font-semibold text-electric-blue">
                            ArcStrike: Endpoint Defense
                        </span>
                        <span className="text-2xl text-white">+</span>
                        <span className="px-6 py-3 bg-plasma-purple/10 border border-plasma-purple/30 rounded-lg text-sm font-semibold text-plasma-purple">
                            ShadowTrace: Threat Intelligence
                        </span>
                        <span className="text-2xl text-white">+</span>
                        <span className="px-6 py-3 bg-neon-green/10 border border-neon-green/30 rounded-lg text-sm font-semibold text-neon-green">
                            ShadeHunter: Network IDS/IPS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
