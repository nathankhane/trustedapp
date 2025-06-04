"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface RoleHeroProps {
    role: "experts" | "providers" | "neutral";
    headline: string;
    subline?: string;
    ctaLabel?: string;
    ctaHref?: string;
    // New props for neutral variant with dual CTAs
    expertCTA?: {
        label: string;
        href: string;
    };
    providerCTA?: {
        label: string;
        href: string;
    };
    className?: string;
}

export const RoleHero: React.FC<RoleHeroProps> = ({
    role,
    headline,
    subline,
    ctaLabel,
    ctaHref = "/signup",
    expertCTA,
    providerCTA,
    className,
}) => {
    const gradientClass =
        role === "experts"
            ? "from-[#7F5BFF]/20 via-purple-500/10 to-[#14E956]/20"
            : role === "providers"
                ? "from-blue-500/20 via-[#7F5BFF]/10 to-purple-500/20"
                : "from-[#7F5BFF]/10 via-purple-500/5 to-[#14E956]/10"; // neutral

    const isNeutral = role === "neutral";

    return (
        <section
            className={cn(
                "relative min-h-[60vh] flex items-center justify-center overflow-hidden",
                className
            )}
        >
            {/* Background gradient */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br",
                gradientClass
            )} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground">
                        <span className="block">
                            {headline}
                        </span>
                    </h1>

                    {subline && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                        >
                            {subline}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        {isNeutral && expertCTA && providerCTA ? (
                            // Dual CTAs for neutral variant
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                                >
                                    <a href={expertCTA.href} role="button">
                                        {expertCTA.label}
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg border-primary/30 hover:border-primary hover:bg-primary/5"
                                >
                                    <a href={providerCTA.href} role="button">
                                        {providerCTA.label}
                                    </a>
                                </Button>
                            </div>
                        ) : (
                            // Single CTA for experts/providers variant
                            <Button
                                asChild
                                size="lg"
                                className="text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                            >
                                <a href={ctaHref} role="button">
                                    {ctaLabel}
                                </a>
                            </Button>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}; 