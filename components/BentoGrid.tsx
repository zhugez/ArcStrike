import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]", className)}>
            {children}
        </div>
    );
}

interface BentoItemProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1 }: BentoItemProps) {
    return (
        <GlassCard
            className={cn(
                className,
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                rowSpan === 2 && "md:row-span-2"
            )}
        >
            {children}
        </GlassCard>
    );
}
