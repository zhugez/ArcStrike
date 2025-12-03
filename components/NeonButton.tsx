import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    glowColor?: "blue" | "purple" | "green";
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = "primary", glowColor = "blue", children, ...props }, ref) => {
        const glowMap = {
            blue: "shadow-neon-blue/50 hover:shadow-neon-blue/80 border-neon-blue text-neon-blue",
            purple: "shadow-neon-purple/50 hover:shadow-neon-purple/80 border-neon-purple text-neon-purple",
            green: "shadow-neon-green/50 hover:shadow-neon-green/80 border-neon-green text-neon-green",
        };

        const bgMap = {
            blue: "bg-neon-blue text-black hover:bg-neon-blue/90",
            purple: "bg-neon-purple text-white hover:bg-neon-purple/90",
            green: "bg-neon-green text-black hover:bg-neon-green/90",
        }

        const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";

        let variantStyles = "";

        if (variant === "primary") {
            variantStyles = cn(
                bgMap[glowColor],
                "shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)] hover:scale-105"
            );
            // Add specific glow color shadow manually if needed, or rely on the map if we want colored shadows for primary
            if (glowColor === 'blue') variantStyles = cn(variantStyles, "shadow-neon-blue/20 hover:shadow-neon-blue/40");
            if (glowColor === 'green') variantStyles = cn(variantStyles, "shadow-neon-green/20 hover:shadow-neon-green/40");
            if (glowColor === 'purple') variantStyles = cn(variantStyles, "shadow-neon-purple/20 hover:shadow-neon-purple/40");

        } else if (variant === "secondary") {
            variantStyles = "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/30";
        } else if (variant === "outline") {
            variantStyles = cn(
                "bg-transparent border-2 hover:bg-white/5",
                glowMap[glowColor].split(" ").filter(c => c.startsWith("border") || c.startsWith("text")).join(" "),
                "shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_currentColor]"
            );
        }

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variantStyles, className)}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

NeonButton.displayName = "NeonButton";
