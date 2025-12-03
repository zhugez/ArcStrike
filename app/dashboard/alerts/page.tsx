'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { ProcessTree } from '@/components/ProcessTree';
import { ShieldAlert, Clock, Monitor, Activity, X, CheckCircle, Ban, Network } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import { useQuery } from '@tanstack/react-query';
import { AlertSchema, type Alert } from '@/lib/schemas';
import { toast } from 'sonner';

export default function AlertsPage() {
    const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
    const [actionStatus, setActionStatus] = useState<string | null>(null);

    const { data: alerts, isLoading, error } = useQuery({
        queryKey: ['alerts'],
        queryFn: async () => {
            const res = await fetch('/api/alerts');
            if (!res.ok) throw new Error('Failed to fetch alerts');
            const data = await res.json();
            // Validate array of alerts
            const result = AlertSchema.array().safeParse(data);
            if (!result.success) {
                console.error('Validation failed:', result.error);
                throw new Error('Invalid alerts data');
            }
            return result.data;
        }
    });

    const handleAction = (action: string) => {
        setActionStatus(action);
        toast.info('Initiating host isolation protocol...');
        setTimeout(() => {
            setActionStatus(null);
            toast.success('Host successfully isolated from network');
        }, 3000);
    };

    if (isLoading) return <div className="text-center p-10 text-gray-500">Loading alerts...</div>;
    if (error) return <div className="text-center p-10 text-alert-red">Failed to load alerts</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Threat Alerts</h1>
                    <p className="text-gray-400 text-sm">Prioritized incidents requiring attention</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Alert List */}
                <div className="space-y-4">
                    {alerts?.map((alert) => (
                        <motion.div
                            key={alert.id}
                            layoutId={alert.id}
                            onClick={() => setSelectedAlert(alert.id)}
                            className={`cursor-pointer transition-all ${selectedAlert === alert.id ? 'scale-[1.02]' : 'hover:bg-white/5'}`}
                        >
                            <GlassCard className={`p-4 border-l-4 ${alert.severity === 'critical' ? 'border-l-alert-red border-white/10' : 'border-l-alert-yellow border-white/10'
                                } ${selectedAlert === alert.id ? 'bg-white/10' : 'bg-black/40'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-500">{alert.id}</span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {alert.time}
                                    </span>
                                </div>
                                <h3 className="font-bold text-white text-sm mb-2">{alert.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                    <Monitor className="w-3 h-3" /> {alert.host}
                                </div>
                                <div className="flex gap-2">
                                    {alert.mitre.map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Alert Detail View */}
                <div className="lg:col-span-2">
                    <AnimatePresence mode="wait">
                        {selectedAlert ? (
                            <motion.div
                                key="detail"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <GlassCard className="p-0 border-white/10 bg-black/60 overflow-hidden min-h-[600px] flex flex-col">
                                    {/* Header */}
                                    <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-xl font-bold text-white">Suspicious Process Chain Detected</h2>
                                                <span className="px-2 py-0.5 rounded bg-alert-red/20 text-alert-red text-xs font-bold border border-alert-red/30">CRITICAL</span>
                                            </div>
                                            <p className="text-sm text-gray-400">
                                                Detected a suspicious spawn chain originating from Office application, leading to PowerShell execution and network connection.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedAlert(null)}
                                            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Visualization */}
                                    <div className="flex-1 bg-black/40 p-6 overflow-y-auto">
                                        <h3 className="text-xs font-hud text-gray-500 uppercase tracking-wider mb-4">Process Execution Chain</h3>
                                        <ProcessTree />
                                    </div>

                                    {/* Actions Footer */}
                                    <div className="p-6 border-t border-white/10 bg-white/5">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-gray-500">
                                                Recommended Action: Isolate host immediately
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors flex items-center gap-2">
                                                    <Activity className="w-4 h-4" /> Investigate
                                                </button>

                                                {actionStatus === 'isolate' ? (
                                                    <NeonButton className="bg-neon-green/10 text-neon-green border-neon-green/50" disabled>
                                                        <CheckCircle className="w-4 h-4 mr-2" /> ISOLATION ACTIVE
                                                    </NeonButton>
                                                ) : (
                                                    <NeonButton
                                                        onClick={() => handleAction('isolate')}
                                                        className="bg-alert-red/10 text-alert-red border-alert-red/50 hover:bg-alert-red/20"
                                                    >
                                                        <Network className="w-4 h-4 mr-2" /> ISOLATE HOST
                                                    </NeonButton>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex items-center justify-center text-gray-500 flex-col gap-4 min-h-[400px]"
                            >
                                <Activity className="w-12 h-12 opacity-20" />
                                <p>Select an alert to view details and take action</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
