"use client";

import React from 'react';

export default function Dashboard() {
    return (
        <section className="py-24 px-6 bg-midnight-blue">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-plasma">
                        ArcStrike Console
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Centralized command center for endpoint security operations and incident response
                    </p>
                </div>

                {/* Console Subsections */}
                <div className="space-y-12">
                    {/* Alerts & Incidents */}
                    <div className="glass-strong rounded-2xl p-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🚨</div>
                            <h3 className="text-3xl font-bold text-white">Alerts & Incidents</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-white mb-3">Incident Timeline</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Chronological view of all security events correlated into actionable incidents.
                                    Each incident includes severity level, affected endpoints, IOCs, and recommended response actions.
                                </p>
                                <ul className="space-y-2 text-sm text-tertiary">
                                    <li>• Real-time incident stream with auto-refresh</li>
                                    <li>• Severity scoring (Critical, High, Medium, Low)</li>
                                    <li>• Incident correlation and deduplication</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Drill-Down Details</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Click any incident to view full forensic context: process trees, file hashes,
                                    network connections, registry modifications, and MITRE ATT&CK technique mapping.
                                </p>
                                <ul className="space-y-2 text-sm text-tertiary">
                                    <li>• Full event timeline with microsecond precision</li>
                                    <li>• Related incidents and campaigns</li>
                                    <li>• One-click containment and remediation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Process Tree Forensics */}
                    <div className="glass-strong rounded-2xl p-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🌳</div>
                            <h3 className="text-3xl font-bold text-white">Process Tree Forensics</h3>
                        </div>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Visualize process execution chains with interactive tree diagrams. See parent-child relationships,
                            command-line arguments, loaded modules, and network activity for every process on the endpoint.
                            Suspicious processes are automatically highlighted in red with threat indicators.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white/5 rounded-lg p-4 border border-electric-blue/20">
                                <div className="font-semibold text-white mb-2">Interactive Tree View</div>
                                <div className="text-xs text-tertiary">Expand/collapse nodes, filter by time range</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-plasma-purple/20">
                                <div className="font-semibold text-white mb-2">Suspicious Highlighting</div>
                                <div className="text-xs text-tertiary">Color-coded threat levels and anomaly scores</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-neon-green/20">
                                <div className="font-semibold text-white mb-2">Export & Share</div>
                                <div className="text-xs text-tertiary">PNG, SVG, or JSON export for reports</div>
                            </div>
                        </div>
                    </div>

                    {/* Endpoints Overview */}
                    <div className="glass-strong rounded-2xl p-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">💻</div>
                            <h3 className="text-3xl font-bold text-white">Endpoints Overview</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-white mb-3">Inventory Management</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Complete inventory of all endpoints with agent deployment status, OS version,
                                    hostname, last seen timestamp, and current risk level. Search and filter by tags,
                                    groups, or custom attributes.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Risk Scoring</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Each endpoint receives a dynamic risk score based on detected threats,
                                    configuration drift, patch status, and historical incident frequency.
                                    High-risk endpoints are prioritized for investigation.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-sm text-neon-green">
                                Online: 1,247
                            </span>
                            <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue">
                                Protected: 1,198
                            </span>
                            <span className="px-4 py-2 bg-plasma-purple/10 border border-plasma-purple/30 rounded-full text-sm text-plasma-purple">
                                High Risk: 12
                            </span>
                        </div>
                    </div>

                    {/* Memory & File Scan History */}
                    <div className="glass-strong rounded-2xl p-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">📜</div>
                            <h3 className="text-3xl font-bold text-white">Scan History & Insights</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-white mb-3">Memory Scan Reports</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Historical memory scan results with detected injection attempts, suspicious memory regions,
                                    and reflective loaders. Each scan includes timestamps, affected processes, and remediation status.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">File Scan Archive</h4>
                                <p className="text-secondary text-sm mb-4">
                                    Complete archive of all file scans (uploaded and agent-detected) with search by hash,
                                    filename, verdict, or detection date. Re-run scans with updated models for retrospective analysis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ATT&CK & Intelligence View */}
                    <div className="glass-strong rounded-2xl p-10 border-glow-electric">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🎯</div>
                            <h3 className="text-3xl font-bold text-white">ATT&CK & Intelligence View</h3>
                        </div>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Visual mapping of detected techniques to the MITRE ATT&CK matrix. See which tactics
                            and techniques are most prevalent in your environment. Enriched with threat intelligence
                            context from ShadowTrace, including campaign attribution, threat actor profiles, and IOC correlation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-electric-blue/10 to-transparent rounded-lg p-4 border border-electric-blue/20">
                                <div className="font-semibold text-white mb-2">ATT&CK Matrix Visualization</div>
                                <div className="text-xs text-tertiary">
                                    Heatmap of techniques with frequency and severity
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-plasma-purple/10 to-transparent rounded-lg p-4 border border-plasma-purple/20">
                                <div className="font-semibold text-white mb-2">Campaign Tracking</div>
                                <div className="text-xs text-tertiary">
                                    Group incidents by campaign with attribution
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-neon-green/10 to-transparent rounded-lg p-4 border border-neon-green/20">
                                <div className="font-semibold text-white mb-2">ShadowTrace Context</div>
                                <div className="text-xs text-tertiary">
                                    Enriched IOCs, TTPs, and threat actor intelligence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
