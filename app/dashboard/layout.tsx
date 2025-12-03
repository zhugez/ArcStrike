'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    ShieldAlert,
    ScanSearch,
    Network,
    Settings,
    LogOut,
    Menu,
    ChevronLeft,
    Bell,
    Search,
    User
} from 'lucide-react';
import { useUIStore } from '@/lib/store';
import { GlassCard } from '@/components/GlassCard';
import { ArcStrikeLogo } from '@/components/Logo';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { isSidebarOpen, toggleSidebar } = useUIStore();

    const navItems = [
        { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
        { icon: ScanSearch, label: 'Deep Scan', href: '/dashboard/scans' },
        { icon: ShieldAlert, label: 'Alerts', href: '/dashboard/alerts' },
        { icon: Network, label: 'Endpoints', href: '/dashboard/endpoints' },
        { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-oled-black text-gray-100 flex overflow-hidden bg-grid-pattern font-sans">
            {/* Fixed Sidebar - Ultra Polished */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 260 : 80 }}
                className="relative z-30 flex flex-col h-screen border-r border-white/10 bg-black/40 backdrop-blur-xl"
            >
                {/* Logo Area */}
                <div className="h-20 flex items-center justify-center border-b border-white/5 relative">
                    <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap px-6">
                        <ArcStrikeLogo showText={isSidebarOpen} />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-8 px-3 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <div className={`
                                    flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-300 group relative overflow-hidden
                                    ${isActive
                                        ? 'text-neon-cyan bg-neon-cyan/5'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                                `}>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-neon-cyan shadow-[0_0_10px_#00E0FF]"
                                        />
                                    )}
                                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-neon-cyan drop-shadow-[0_0_5px_rgba(0,224,255,0.5)]' : 'group-hover:text-neon-cyan'}`} />
                                    {isSidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium tracking-wide text-sm"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={toggleSidebar}
                        className="w-full flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${!isSidebarOpen ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative h-screen">
                {/* Floating Header - Ultra Polished */}
                <header className="h-24 flex items-center justify-between px-8 py-6 z-20">
                    <div className="flex-1 max-w-2xl">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-neon-cyan/5 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-neon-cyan transition-colors" />
                            <input
                                type="text"
                                placeholder="Search threats, IOC, endpoints..."
                                className="w-full bg-black/20 border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan/30 focus:bg-black/40 backdrop-blur-md transition-all placeholder:text-gray-500 font-mono"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6 ml-8">
                        {/* Quick Actions */}
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-gray-400 hover:text-white transition-colors group">
                                <Bell className="w-5 h-5 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" />
                                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-alert-red rounded-full animate-pulse shadow-[0_0_8px_#FF2D6E]" />
                            </button>

                            <div className="h-8 w-px bg-white/10 mx-2" />

                            <div className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/10">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors shadow-lg">
                                    <User className="w-4 h-4 text-gray-300 group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-white tracking-wide group-hover:text-neon-cyan transition-colors">Admin User</span>
                                    <span className="text-[10px] text-gray-500 font-mono uppercase">SecOps Lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto px-8 pb-8 scroll-smooth scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {children}
                </main>
            </div>
        </div>
    );
}
