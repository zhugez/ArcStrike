'use client';

import { GlassCard } from '@/components/GlassCard';
import { Construction, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComingSoonProps {
    title: string;
    description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <GlassCard className="p-12 max-w-lg w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 relative">
                        <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full animate-pulse" />
                        <Rocket className="w-10 h-10 text-neon-blue relative z-10" />
                    </div>
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4 font-display tracking-wide">{title}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    {description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-blue">
                    <Construction className="w-3 h-3" />
                    <span>UNDER DEVELOPMENT</span>
                </div>
            </GlassCard>
        </div>
    );
}
