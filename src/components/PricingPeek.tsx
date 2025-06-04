"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface PricingPeekProps {
    className?: string;
}

const pricingTiers = [
    {
        name: "Starter",
        price: 99,
        period: "month",
        credits: 10,
        features: ["10 expert connections", "Basic analytics", "Email support"],
    },
    {
        name: "Professional",
        price: 299,
        period: "month",
        credits: 50,
        features: ["50 expert connections", "Advanced analytics", "Priority support", "Custom branding"],
        popular: true,
    },
    {
        name: "Pay-per-Credit",
        price: 15,
        period: "credit",
        credits: null,
        features: ["No monthly commitment", "Scale as needed", "Same quality experts"],
    },
];

export const PricingPeek: React.FC<PricingPeekProps> = ({ className }) => {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Start with our monthly plans or pay as you go
                    </p>
                </motion.div>

                {/* Mini Pricing Table */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-lg hover:border-primary/30 transition-all duration-300",
                                tier.popular && "ring-2 ring-primary/20 border-primary/50"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {tier.name}
                                </h3>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-foreground">
                                        ${tier.price}
                                    </span>
                                    <span className="text-muted-foreground">
                                        /{tier.period}
                                    </span>
                                </div>

                                {tier.credits && (
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {tier.credits} expert connections included
                                    </p>
                                )}

                                <ul className="space-y-3 mb-6">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-3 text-sm">
                                            <Check className="w-4 h-4 text-[#14E956] flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA to Full Pricing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg border-primary/30 hover:border-primary hover:bg-primary/5 group"
                    >
                        <Link href="/pricing">
                            See Full Pricing & Features
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </Button>

                    <p className="text-sm text-muted-foreground mt-4">
                        All plans include our quality guarantee and 24/7 support
                    </p>
                </motion.div>
            </div>
        </section>
    );
}; 