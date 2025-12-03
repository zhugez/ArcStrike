'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArcStrikeLogo } from '@/components/Logo';
import { NeonButton } from '@/components/NeonButton';
import { GlassCard } from '@/components/GlassCard';
import { Lock, User, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-oled-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[150px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="flex justify-center mb-8">
                    <ArcStrikeLogo />
                </div>

                <GlassCard className="p-8 border-neon-blue/20 bg-black/60 backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Enter your credentials to access the console</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-hud text-neon-blue tracking-wider uppercase">Username</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded px-10 py-2.5 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-gray-600"
                                    placeholder="admin@cybercorp.com"
                                    defaultValue="admin@cybercorp.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-hud text-neon-blue tracking-wider uppercase">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="password"
                                    className="w-full bg-black/50 border border-white/10 rounded px-10 py-2.5 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-gray-600"
                                    placeholder="••••••••"
                                    defaultValue="password"
                                />
                            </div>
                        </div>

                        <NeonButton
                            type="submit"
                            className="w-full justify-center"
                            glowColor="blue"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    AUTHENTICATING...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    ACCESS CONSOLE <ArrowRight className="w-4 h-4" />
                                </span>
                            )}
                        </NeonButton>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-xs text-gray-500 hover:text-neon-blue transition-colors">
                            Forgot your credentials?
                        </a>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
}
