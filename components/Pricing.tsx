"use client";

import React from 'react';

export default function Pricing() {
    return (
        <section className="py-24 px-6 gradient-dark">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-plasma">
                        Pricing & Licensing
                    </h2>
                    <p className="text-xl text-secondary max-w-3xl mx-auto">
                        Enterprise-grade endpoint protection tailored to your organization's needs
                    </p>
                </div>

                <div className="glass-strong rounded-2xl p-12 text-center">
                    <div className="text-6xl mb-6">📊</div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Custom Pricing Available
                    </h3>
                    <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                        Pricing and licensing models are currently being finalized. We offer flexible
                        deployment options for organizations of all sizes, from small security teams
                        to global enterprises.
                    </p>
                    <p className="text-secondary mb-8">
                        Contact us for early access and pilot programs. We're actively onboarding
                        design partners who can help shape the future of ArcStrike.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold rounded-lg transition-smooth">
                            Request Pricing
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-smooth">
                            Schedule Demo
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div>
                                <div className="text-electric-blue font-semibold mb-2">Flexible Licensing</div>
                                <p className="text-sm text-tertiary">
                                    Per-endpoint, per-user, or consumption-based models available
                                </p>
                            </div>
                            <div>
                                <div className="text-plasma-purple font-semibold mb-2">Volume Discounts</div>
                                <p className="text-sm text-tertiary">
                                    Significant discounts for large deployments and multi-year contracts
                                </p>
                            </div>
                            <div>
                                <div className="text-neon-green font-semibold mb-2">Pilot Programs</div>
                                <p className="text-sm text-tertiary">
                                    Free pilot licenses for qualified security teams and researchers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
