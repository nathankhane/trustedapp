"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MetricItem {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

export interface MetricBarProps {
    metrics: MetricItem[];
    className?: string;
    variant?: "default" | "compact";
}

const useCountUp = (target: number, isInView: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(target * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target); // Ensure we end at exact target
            }
        };

        requestAnimationFrame(animate);
    }, [target, isInView]);

    return count;
};

export const MetricBar: React.FC<MetricBarProps> = ({
    metrics,
    className,
    variant = "default",
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const isCompact = variant === "compact";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-lg border border-border/30",
                isCompact
                    ? "p-6 lg:p-8"
                    : "p-8 lg:p-12",
                className
            )}
            aria-live="polite"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-purple-500/5" />

            <div className={cn(
                "relative z-10 grid gap-8",
                `grid-cols-${Math.min(metrics.length, 4)}`
            )}>
                {metrics.map((metric, index) => (
                    <MetricItem
                        key={`${metric.label}-${index}`}
                        metric={metric}
                        isInView={isInView}
                        delay={index * 0.1}
                        variant={variant}
                    />
                ))}
            </div>
        </motion.div>
    );
};

interface MetricItemProps {
    metric: MetricItem;
    isInView: boolean;
    delay: number;
    variant: "default" | "compact";
}

const MetricItem: React.FC<MetricItemProps> = ({
    metric,
    isInView,
    delay,
    variant,
}) => {
    const count = useCountUp(metric.value, isInView);
    const isCompact = variant === "compact";

    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="text-center"
        >
            <div className={cn(
                "font-bold text-foreground mb-2",
                isCompact ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl xl:text-5xl"
            )}>
                <span className="text-primary">
                    {metric.prefix}
                </span>
                <span
                    className="font-mono"
                    aria-label={`${metric.value} ${metric.suffix || ""}`}
                >
                    {formatNumber(count)}
                </span>
                <span className="text-primary">
                    {metric.suffix}
                </span>
            </div>
            <p className={cn(
                "text-muted-foreground font-medium",
                isCompact ? "text-sm lg:text-base" : "text-base lg:text-lg"
            )}>
                {metric.label}
            </p>
        </motion.div>
    );
}; 