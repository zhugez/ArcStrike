import { Section } from "./Section";
import { ArcStrikeLogo } from "./Logo";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <ArcStrikeLogo />
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Precision Endpoint Defense. Unifying next-gen malware analysis, behavioral EDR, and real-time forensics.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-neon-blue transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-neon-blue transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-neon-blue transition-colors">Security & Compliance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Ecosystem</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-neon-purple transition-colors">ShadowTrace</a></li>
                            <li><a href="https://shadehunter.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">ShadeHunter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 ArcStrike Defense Systems. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
