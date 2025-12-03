import React from "react";

export function ArcStrikeLogo({ className = "w-8 h-8", showText = true }: { className?: string; showText?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <defs>
                    <linearGradient id="bolt-gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="50%" stopColor="#68b3ffff" />
                        <stop offset="100%" stopColor="#BF00FF" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Background Light/Flash */}
                <circle cx="16" cy="16" r="10" className="fill-neon-blue/20 blur-md" />

                {/* The Bolt */}
                <path
                    d="M17 2L6 18H15L13 30L26 12H17L19 2H17Z"
                    fill="url(#bolt-gradient)"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                />
            </svg>
            {showText && (
                <span className="font-bold text-xl tracking-tight text-white">
                    Arc<span className="text-neon-blue">Strike</span>
                </span>
            )}
        </div>
    );
}

export function ShadeHunterLogo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" className="text-neon-blue" />
            <circle cx="16" cy="16" r="4" fill="currentColor" className="text-neon-blue" />
            <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="currentColor" strokeWidth="2" className="text-neon-blue" />
            <circle cx="16" cy="16" r="12" className="blur-[2px] stroke-neon-blue/50" strokeWidth="2" />
        </svg>
    );
}
