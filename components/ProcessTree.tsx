'use client';

import { motion } from 'framer-motion';
import { FileCode, Terminal, ShieldAlert, Globe, ArrowRight, Activity } from 'lucide-react';

interface ProcessNode {
    id: string;
    name: string;
    pid: number;
    type: 'process' | 'network' | 'file';
    children?: ProcessNode[];
    isMalicious?: boolean;
}

const mockTree: ProcessNode = {
    id: '1',
    name: 'WINWORD.EXE',
    pid: 4521,
    type: 'process',
    children: [
        {
            id: '2',
            name: 'cmd.exe',
            pid: 8821,
            type: 'process',
            isMalicious: true,
            children: [
                {
                    id: '3',
                    name: 'powershell.exe',
                    pid: 9902,
                    type: 'process',
                    isMalicious: true,
                    children: [
                        {
                            id: '4',
                            name: 'rundll32.exe',
                            pid: 1024,
                            type: 'process',
                            isMalicious: true,
                            children: [
                                {
                                    id: '5',
                                    name: 'evil-c2.xyz:443',
                                    pid: 0,
                                    type: 'network',
                                    isMalicious: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

function TreeNode({ node, depth = 0 }: { node: ProcessNode; depth?: number }) {
    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: depth * 0.2 }}
                className={`flex items-center gap-4 p-4 rounded-lg border mb-6 relative z-10 backdrop-blur-md transition-all duration-300 ${node.isMalicious
                    ? 'bg-alert-red/5 border-alert-red/30 text-white shadow-[0_0_15px_rgba(255,59,48,0.1)]'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-neon-blue/30'
                    }`}
                style={{ marginLeft: `${depth * 48}px` }}
            >
                {/* Connector Line */}
                {depth > 0 && (
                    <div className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-[36px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-white/20">
                        <div className="absolute -left-[2px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_5px_#0080FF]" />
                    </div>
                )}

                {/* Vertical Line for children */}
                {depth > 0 && (
                    <div className="absolute -left-[36px] -top-[32px] h-[calc(50%+32px)] w-[2px] bg-white/10" />
                )}

                <div className={`p-2.5 rounded-lg ${node.isMalicious ? 'bg-alert-red/20 text-alert-red' : 'bg-white/10 text-neon-blue'}`}>
                    {node.type === 'process' && <Terminal className="w-5 h-5" />}
                    {node.type === 'network' && <Globe className="w-5 h-5" />}
                    {node.type === 'file' && <FileCode className="w-5 h-5" />}
                </div>

                <div>
                    <div className="font-mono text-sm font-bold flex items-center gap-2 tracking-wide">
                        {node.name}
                        {node.isMalicious && (
                            <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-alert-red/20 text-alert-red border border-alert-red/30 font-bold uppercase tracking-wider">
                                <ShieldAlert className="w-3 h-3" /> Malicious
                            </span>
                        )}
                    </div>
                    {node.pid > 0 && (
                        <div className="text-xs text-gray-500 font-mono mt-0.5 flex items-center gap-2">
                            <Activity className="w-3 h-3" /> PID: {node.pid}
                        </div>
                    )}
                </div>
            </motion.div>

            {node.children?.map((child) => (
                <TreeNode key={child.id} node={child} depth={depth + 1} />
            ))}
        </div>
    );
}

export function ProcessTree() {
    return (
        <div className="p-8 overflow-x-auto relative min-h-[400px]">
            {/* Background Grid for HUD effect */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <TreeNode node={mockTree} />
        </div>
    );
}
