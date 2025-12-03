"use client";

import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-dark">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-plasma-purple/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="glass-strong rounded-3xl p-12 md:p-16 border-glow-electric">
                    {/* Tagline */}
                    <div className="text-center mb-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-sm font-semibold tracking-wide">
                            NEXT-GENERATION ENDPOINT DEFENSE
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 glow-electric">
                        ArcStrike
                    </h1>

                    {/* Subheadline */}
                    <h2 className="text-2xl md:text-3xl text-center text-secondary mb-4 font-light">
                        Advanced Endpoint Threat Detection & Malware Defense
                    </h2>

                    <p className="text-center text-secondary max-w-3xl mx-auto text-lg mb-10">
                        Enterprise-grade EDR and malware detection engine combining static analysis,
                        machine learning, and real-time behavioral monitoring to protect your endpoints
                        from sophisticated threats.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <button className="px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold rounded-lg transition-smooth border-glow-electric text-lg">
                            Upload File to Scan
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-smooth text-lg">
                            Deploy ArcStrike Agent
                        </button>
                    </div>

                    {/* Supporting line */}
                    <p className="text-center text-tertiary text-sm">
                        No agents required for file uploads. Agents available for full endpoint defense.
                    </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="glass rounded-xl p-6 text-center transition-smooth hover:border-plasma-purple">
                        <div className="text-3xl mb-3">🛡️</div>
                        <h3 className="font-semibold text-lg mb-2">Real-Time Protection</h3>
                        <p className="text-secondary text-sm">
                            Continuous behavioral monitoring and automatic threat response
                        </p>
                    </div>
                    <div className="glass rounded-xl p-6 text-center transition-smooth hover:border-electric-blue">
                        <div className="text-3xl mb-3">🧬</div>
                        <h3 className="font-semibold text-lg mb-2">ML-Powered Analysis</h3>
                        <p className="text-secondary text-sm">
                            Deep learning models for accurate malware classification
                        </p>
                    </div>
                    <div className="glass rounded-xl p-6 text-center transition-smooth hover:border-neon-green">
                        <div className="text-3xl mb-3">🔗</div>
                        <h3 className="font-semibold text-lg mb-2">Ecosystem Integration</h3>
                        <p className="text-secondary text-sm">
                            Seamless integration with ShadowTrace and ShadeHunter
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
