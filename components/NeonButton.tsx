'use client';

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    glowColor?: "blue" | "purple" | "green" | "cyan" | "red";
    size?: "sm" | "md" | "lg";
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = "primary", glowColor = "blue", size = "md", children, ...props }, ref) => {
        const sizeStyles = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        const colorStyles = {
            blue: {
                primary: "bg-neon-blue text-black shadow-[0_0_20px_rgba(0,128,255,0.4)] hover:shadow-[0_0_35px_rgba(0,128,255,0.6)] hover:bg-neon-blue/90",
                outline: "border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,128,255,0.3)]",
                ghost: "text-neon-blue hover:bg-neon-blue/10"
            },
            purple: {
                primary: "bg-neon-purple text-black shadow-[0_0_20px_rgba(191,0,255,0.4)] hover:shadow-[0_0_35px_rgba(191,0,255,0.6)] hover:bg-neon-purple/90",
                outline: "border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]",
                ghost: "text-neon-purple hover:bg-neon-purple/10"
            },
            green: {
                primary: "bg-neon-green text-black shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] hover:bg-neon-green/90",
                outline: "border-2 border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]",
                ghost: "text-neon-green hover:bg-neon-green/10"
            },
            cyan: {
                primary: "bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:bg-neon-cyan/90",
                outline: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
                ghost: "text-neon-cyan hover:bg-neon-cyan/10"
            },
            red: {
                primary: "bg-alert-red text-black shadow-[0_0_20px_rgba(255,59,48,0.4)] hover:shadow-[0_0_35px_rgba(255,59,48,0.6)] hover:bg-alert-red/90",
                outline: "border-2 border-alert-red text-alert-red hover:bg-alert-red/10 hover:shadow-[0_0_20px_rgba(255,59,48,0.3)]",
                ghost: "text-alert-red hover:bg-alert-red/10"
            }
        };

        const secondaryStyles = cn(
            "bg-white/5 text-white backdrop-blur-sm border border-white/10",
            "hover:bg-white/10 hover:border-white/20"
        );

        const baseStyles = cn(
            "relative inline-flex items-center justify-center font-sans rounded-lg",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
            "cursor-pointer select-none tracking-wide",
            sizeStyles[size]
        );

        let variantStyles = "";

        if (variant === "secondary") {
            variantStyles = cn(secondaryStyles, "hover:scale-[1.02] active:scale-[0.98]");
        } else {
            const selectedColor = colorStyles[glowColor] || colorStyles.blue;
            // @ts-ignore
            const style = selectedColor[variant] || selectedColor.primary;
            variantStyles = cn(style, "hover:scale-[1.02] active:scale-[0.98]");
        }

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variantStyles, className)}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

NeonButton.displayName = "NeonButton";
