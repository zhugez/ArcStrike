"use client";

import React from 'react';

export default function Footer() {
    return (
        <footer className="py-16 px-6 bg-deep-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4 glow-electric">
                            ArcStrike
                        </h3>
                        <p className="text-tertiary text-sm leading-relaxed">
                            Advanced endpoint threat detection and malware defense for enterprise security teams.
                            Powered by machine learning, behavioral analytics, and threat intelligence.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                                    Agent Downloads
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                                    Release Notes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Ecosystem Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Ecosystem</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-tertiary hover:text-plasma-purple transition-smooth text-sm">
                                    ShadowTrace Platform
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-plasma-purple transition-smooth text-sm">
                                    ShadeHunter IDS/IPS
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-plasma-purple transition-smooth text-sm">
                                    Integration Guides
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-plasma-purple transition-smooth text-sm">
                                    Partner Program
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-tertiary hover:text-neon-green transition-smooth text-sm">
                                    Security & Compliance
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-neon-green transition-smooth text-sm">
                                    Trust Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-neon-green transition-smooth text-sm">
                                    Contact Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-tertiary hover:text-neon-green transition-smooth text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-tertiary text-sm">
                        © 2025 ArcStrike. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                            Privacy
                        </a>
                        <a href="#" className="text-tertiary hover:text-electric-blue transition-smooth text-sm">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
