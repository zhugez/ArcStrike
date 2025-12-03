import { Section } from "./Section";

export function TechSpecs() {
    return (
        <Section className="py-24 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-white">The Architecture of Defense</h2>
                    <div className="h-1 w-20 bg-neon-blue rounded-full" />
                </div>

                <div className="space-y-16">
                    <TechBlock
                        title="Static Analysis Engine"
                        content="ArcStrike's static engine dissects file structures without execution. It parses PE/COFF headers, analyzes section entropy to detect packing, and extracts import/export tables to identify suspicious capabilities. This provides an immediate, safe baseline verdict."
                    />

                    <TechBlock
                        title="Behavioral Analytics Pipeline"
                        content="Our agent streams telemetry to the ArcStrike correlation engine. We don't just look at single events; we analyze sequences. A PowerShell script downloading a file is normal; a PowerShell script downloading a file, writing to System32, and modifying the registry is an incident."
                    />

                    <TechBlock
                        title="Machine Learning & Deep Learning"
                        content="We utilize a proprietary Deep Learning model trained on millions of malware samples. Unlike traditional antivirus, it doesn't rely on exact signature matches. It learns features—byte sequences, opcode distributions, and structural anomalies—to identify variants of known families and entirely new threats with low false positives."
                    />

                    <TechBlock
                        title="Memory Scanning Engine"
                        content="Advanced threats hide in memory. ArcStrike’s memory engine pauses threads for microseconds to inspect heaps and stacks for 'floating' code—shellcode or beacons that never touch the disk. This catches sophisticated C2 implants that evade file-based scanners."
                    />

                    <TechBlock
                        title="Secure Telemetry"
                        content="All data is transmitted via mTLS (Mutual TLS) tunnels. We prioritize privacy: customer data is encrypted at rest and in transit. The protocol is designed to be resilient, buffering data locally if the endpoint goes offline."
                    />
                </div>
            </div>
        </Section>
    );
}

function TechBlock({ title, content }: { title: string; content: string }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-white/10 pl-8 hover:border-neon-blue transition-colors duration-300">
            <h3 className="text-xl font-bold text-white min-w-[250px]">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{content}</p>
        </div>
    );
}
