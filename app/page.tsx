"use client";

import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { TechSpecs } from "@/components/TechSpecs";
import { FileScanner } from "@/components/FileScanner";
import { Console } from "@/components/Console";
import { Ecosystem } from "@/components/Ecosystem";
import { TrustSignals } from "@/components/TrustSignals";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export default function Home() {
    return (
        <main className="min-h-screen bg-oled-black overflow-hidden selection:bg-neon-blue/30">
            <Hero />
            <ValueProps />
            <UseCases />
            <Features />
            <TechSpecs />
            <FileScanner />
            <Console />
            <Ecosystem />
            <TrustSignals />

            <Section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Pricing & Licensing</h2>
                <p className="text-gray-400 mb-2">Flexible options for teams of all sizes.</p>
                <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon-blue">
                    Pricing and licensing models are currently being finalized.
                </div>
                <p className="mt-4 text-sm text-gray-500">Contact us for early access and pilot programs.</p>
            </Section>

            <Footer />
        </main>
    );
}
