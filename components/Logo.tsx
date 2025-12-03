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
                {/* Geometric Hexagon Container */}
                <path
                    d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z"
                    stroke="#0161fcff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="opacity-100"
                />

                {/* Geometric Bolt - Solid Monochrome */}
                <path
                    d="M17 7L9 17H15L13 25L23 13H16L17 7Z"
                    fill="#64a0ffff"
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
