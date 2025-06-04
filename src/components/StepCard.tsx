"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface StepCardProps {
    icon: LucideIcon;
    title: string;
    body: string;
    cta?: {
        label: string;
        href: string;
        onClick?: () => void;
    };
    variant?: "vertical" | "horizontal";
    className?: string;
    index?: number;
}

export const StepCard: React.FC<StepCardProps> = ({
    icon: Icon,
    title,
    body,
    cta,
    variant = "vertical",
    className,
    index = 0,
}) => {
    const isHorizontal = variant === "horizontal";

    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "group relative rounded-2xl shadow-md bg-card/80 backdrop-blur-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
                isHorizontal
                    ? "p-6 lg:p-8 flex items-start gap-6"
                    : "p-6 lg:p-8 text-center",
                cta && "cursor-pointer hover:scale-[1.02]",
                className
            )}
            tabIndex={cta ? 0 : undefined}
            role={cta ? "button" : undefined}
            onKeyDown={(e) => {
                if (cta && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    if (cta.onClick) {
                        cta.onClick();
                    } else if (cta.href) {
                        window.location.href = cta.href;
                    }
                }
            }}
            onClick={() => {
                if (cta) {
                    if (cta.onClick) {
                        cta.onClick();
                    } else if (cta.href) {
                        window.location.href = cta.href;
                    }
                }
            }}
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            <div className={cn(
                "relative z-10",
                isHorizontal ? "flex-1" : "space-y-4"
            )}>
                {/* Icon */}
                <div className={cn(
                    "inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20",
                    isHorizontal ? "w-12 h-12 flex-shrink-0" : "w-16 h-16 mx-auto"
                )}>
                    <Icon className={cn(
                        "transition-transform duration-300 group-hover:scale-110",
                        isHorizontal ? "w-6 h-6" : "w-8 h-8"
                    )} />
                </div>

                <div className={cn(isHorizontal && "ml-0")}>
                    {/* Title */}
                    <h3 className={cn(
                        "font-semibold text-foreground mb-2 transition-colors duration-300",
                        isHorizontal ? "text-xl" : "text-lg lg:text-xl"
                    )}>
                        {title}
                    </h3>

                    {/* Body */}
                    <p className={cn(
                        "text-muted-foreground leading-relaxed",
                        isHorizontal ? "text-base mb-4" : "text-sm lg:text-base mb-6"
                    )}>
                        {body}
                    </p>

                    {/* CTA */}
                    {cta && (
                        <div className={cn(isHorizontal ? "mt-4" : "mt-6")}>
                            <Button
                                asChild={!!cta.href}
                                variant="outline"
                                size="sm"
                                className="hover:scale-[1.03] transition-transform duration-200 hover:shadow-md"
                                onClick={cta.onClick}
                            >
                                {cta.href ? (
                                    <a href={cta.href}>{cta.label}</a>
                                ) : (
                                    <span>{cta.label}</span>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return cardContent;
}; 