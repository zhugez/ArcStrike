'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, File, X, ShieldCheck, Scan, AlertTriangle, Loader2 } from 'lucide-react';
import { NeonButton } from './NeonButton';
import { GlassCard } from './GlassCard';

interface FileUploadProps {
    onUpload: (file: File) => void;
    isScanning: boolean;
}

export function FileUpload({ onUpload, isScanning }: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {!file ? (
                    <motion.div
                        key="upload"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <GlassCard
                            className={`
                                relative border-2 border-dashed transition-all duration-300 cursor-pointer group
                                ${isDragging
                                    ? 'border-neon-blue bg-neon-blue/10 scale-[1.02]'
                                    : 'border-white/20 hover:border-neon-blue/50 hover:bg-white/10'
                                }
                            `}
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className={`
                                    w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500
                                    ${isDragging ? 'bg-neon-blue/20 text-neon-blue shadow-[0_0_30px_rgba(0,128,255,0.3)]' : 'bg-white/10 text-gray-300 group-hover:text-neon-blue group-hover:bg-neon-blue/10'}
                                `}>
                                    <UploadCloud className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                                    Drop Payload Here
                                </h3>
                                <p className="text-gray-300 mb-8 max-w-md">
                                    Upload suspicious executables (.exe, .dll) for deep static and dynamic analysis.
                                </p>
                                <NeonButton variant="outline" glowColor="blue">
                                    Select File
                                </NeonButton>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                className="hidden"
                                accept=".exe,.dll,.bin"
                            />
                        </GlassCard>
                    </motion.div>
                ) : (
                    <motion.div
                        key="file-selected"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <GlassCard className="p-8 border-neon-blue/30 bg-black/60 relative overflow-hidden">
                            {/* Scanning Animation Overlay */}
                            {isScanning && (
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-neon-blue/5 animate-pulse" />
                                    <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue shadow-[0_0_20px_#0080FF] animate-scanline" />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                                    <File className="w-8 h-8 text-neon-blue" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1 font-mono">{file.name}</h3>
                                <p className="text-sm text-gray-400 mb-8 font-mono">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>

                                {isScanning ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex items-center gap-2 text-neon-blue font-bold tracking-wider animate-pulse">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            ANALYZING ARTIFACT...
                                        </div>
                                        <p className="text-xs text-gray-500 font-mono">Extracting PE headers & strings</p>
                                    </div>
                                ) : (
                                    <div className="flex gap-4">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                            className="px-6 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <NeonButton
                                            onClick={() => onUpload(file)}
                                            glowColor="red"
                                            className="min-w-[160px]"
                                        >
                                            <Scan className="w-5 h-5 mr-2" />
                                            Deep Scan
                                        </NeonButton>
                                    </div>
                                )}
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
