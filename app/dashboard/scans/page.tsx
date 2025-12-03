'use client';

import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { ShieldAlert, CheckCircle, Activity, FileCode, Cpu, Network, Zap, BarChart3, Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function ScansPage() {
    const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
    const [scanResult, setScanResult] = useState<any>(null);

    const handleUpload = async (file: File) => {
        setScanStatus('scanning');

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/scan', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                throw new Error(errorData.error || `Scan failed with status ${response.status}`);
            }

            const result = await response.json();

            if (result.error) {
                throw new Error(result.error);
            }

            setScanStatus('complete');
            setScanResult(result);
            toast.success("Analysis Complete", { description: "File successfully processed by ML engine." });
        } catch (error: any) {
            console.error('Scan failed:', error);
            setScanStatus('idle');
            toast.error("Scan Failed", { description: error.message });
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-display font-bold text-white mb-3 tracking-wide">Deep Malware Analysis</h1>
                <p className="text-gray-400 text-lg">Upload suspicious files for static ML analysis and dynamic sandbox execution.</p>
            </div>

            {scanStatus !== 'complete' && (
                <FileUpload onUpload={handleUpload} isScanning={scanStatus === 'scanning'} />
            )}

            {scanStatus === 'complete' && scanResult && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Top Verdict Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Verdict Card */}
                        <GlassCard className={`lg:col-span-2 p-8 border-opacity-30 relative overflow-hidden flex flex-col justify-center ${scanResult.verdict === 'Malicious' ? 'border-alert-red bg-alert-red/5' : 'border-neon-green bg-neon-green/5'}`}>
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                {scanResult.verdict === 'Malicious' ? (
                                    <ShieldAlert className="w-48 h-48 text-alert-red" />
                                ) : (
                                    <CheckCircle className="w-48 h-48 text-neon-green" />
                                )}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded text-black font-bold text-xs tracking-wider uppercase ${scanResult.verdict === 'Malicious' ? 'bg-alert-red' : 'bg-neon-green'}`}>
                                        {scanResult.status}
                                    </span>
                                    <span className={`font-mono text-sm flex items-center gap-2 ${scanResult.verdict === 'Malicious' ? 'text-alert-red' : 'text-neon-green'}`}>
                                        <Lock className="w-3 h-3" /> {scanResult.verdict === 'Malicious' ? 'Threat Detected' : 'System Secure'}
                                    </span>
                                </div>
                                <h2 className={`text-5xl font-bold text-white mb-4 font-display tracking-tight ${scanResult.verdict === 'Malicious' ? 'text-glow-red' : 'text-glow-green'}`}>
                                    {scanResult.verdict.toUpperCase()}
                                </h2>
                                <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                                    The XGBoost analysis engine has classified this file as
                                    <span className={`font-bold mx-1 ${scanResult.verdict === 'Malicious' ? 'text-alert-red' : 'text-neon-green'}`}>{scanResult.verdict}</span>
                                    with a confidence score of {scanResult.score.toFixed(1)}%.
                                    {scanResult.verdict === 'Malicious' && (
                                        <>
                                            It matches patterns associated with the
                                            <span className="text-white font-mono mx-2 bg-white/10 px-2 py-0.5 rounded">{scanResult.family || 'Unknown'}</span>
                                            family.
                                        </>
                                    )}
                                </p>
                            </div>
                        </GlassCard>

                        {/* ML Confidence Gauge */}
                        <GlassCard className="p-8 flex flex-col items-center justify-center relative bg-black/40">
                            <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
                                    <motion.circle
                                        cx="80" cy="80" r="70"
                                        stroke={scanResult.verdict === 'Malicious' ? '#FF3B30' : '#00FF94'}
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray="440"
                                        strokeDashoffset="440"
                                        animate={{ strokeDashoffset: 440 - (440 * (scanResult.score / 100)) }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-bold text-white font-display">{scanResult.score.toFixed(0)}%</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Confidence</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-bold mb-1">ML Model Confidence</h3>
                                <p className="text-xs text-gray-500">Based on PE structure & headers</p>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Feature Importance & Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Top Malicious Features */}
                        <GlassCard className="p-6 bg-black/40">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <BarChart3 className="w-5 h-5 text-neon-blue" />
                                <h3 className="font-bold text-white">Top Malicious Features</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "High Entropy (.text)", value: 92, color: "bg-alert-red" },
                                    { label: "Import Address Table (IAT) Anomalies", value: 78, color: "bg-alert-yellow" },
                                    { label: "Suspicious API Calls (CreateRemoteThread)", value: 65, color: "bg-alert-yellow" },
                                    { label: "Non-standard Section Names", value: 45, color: "bg-neon-blue" },
                                ].map((feature, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-300">{feature.label}</span>
                                            <span className="text-gray-500 font-mono">{feature.value}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${feature.value}%` }}
                                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                                className={`h-full rounded-full ${feature.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Analysis Categories */}
                        <div className="grid grid-cols-1 gap-4">
                            <GlassCard className="p-5 border-l-4 border-l-neon-blue bg-white/5">
                                <div className="flex items-center gap-3 mb-2 text-neon-blue">
                                    <FileCode className="w-5 h-5" />
                                    <h3 className="font-bold text-sm uppercase tracking-wider">Static Analysis</h3>
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">{scanResult.features.static}</p>
                            </GlassCard>

                            <GlassCard className="p-5 border-l-4 border-l-neon-purple bg-white/5">
                                <div className="flex items-center gap-3 mb-2 text-neon-purple">
                                    <Cpu className="w-5 h-5" />
                                    <h3 className="font-bold text-sm uppercase tracking-wider">Behavioral</h3>
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">{scanResult.features.behavior}</p>
                            </GlassCard>

                            <GlassCard className="p-5 border-l-4 border-l-neon-green bg-white/5">
                                <div className="flex items-center gap-3 mb-2 text-neon-green">
                                    <Network className="w-5 h-5" />
                                    <h3 className="font-bold text-sm uppercase tracking-wider">Network</h3>
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">{scanResult.features.network}</p>
                            </GlassCard>
                        </div>
                    </div>

                    <div className="flex justify-center pt-8 pb-12">
                        <button
                            onClick={() => { setScanStatus('idle'); setScanResult(null); }}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
                        >
                            <Activity className="w-4 h-4 text-neon-blue group-hover:animate-pulse" />
                            <span className="text-gray-300 group-hover:text-white">Analyze Another File</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
