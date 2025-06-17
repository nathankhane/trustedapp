"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PricingTier {
    name: string;
    priceLabel?: string;
    credits?: string;
    features: string[];
    cta: string;
    popular?: boolean;
    description?: string;
}

const defaultTiers: PricingTier[] = [
    {
        name: "Self-Serve",
        priceLabel: "$49",
        credits: "per insight",
        features: [
            "Quick user surveys (5-10 min)",
            "Automated matching & scheduling",
            "Basic demographic filters",
            "Email support",
            "Standard insights report"
        ],
        cta: "Get Started",
    },
    {
        name: "Launch",
        priceLabel: "$299",
        credits: "per month",
        features: [
            "Everything in Self-Serve",
            "30-minute expert calls",
            "Advanced targeting filters",
            "Priority expert matching",
            "Custom question templates",
            "Slack integration",
            "Priority support"
        ],
        cta: "Start Launch",
    },
    {
        name: "Scale",
        priceLabel: "$799",
        credits: "per month",
        features: [
            "Everything in Launch",
            "Unlimited expert calls",
            "Custom research studies",
            "Dedicated account manager",
            "White-label reports",
            "API access",
            "Custom integrations",
            "Advanced analytics"
        ],
        cta: "Choose Scale",
        popular: true,
        description: "Most Popular"
    },
    {
        name: "Enterprise",
        priceLabel: "Let's talk",
        credits: "Custom pricing",
        features: [
            "Everything in Scale",
            "Custom contract terms",
            "Volume discounts available",
            "Dedicated expert pool",
            "Custom onboarding",
            "24/7 phone support",
            "Custom compliance & security",
            "Strategic partnership opportunities"
        ],
        cta: "Contact Sales",
    },
];

export interface PricingTableProps {
    tiers?: PricingTier[];
    className?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({
    tiers = defaultTiers,
    className
}) => {
    const monthlyPrice = 299;

    return (
        <div className={cn("grid gap-4 lg:gap-6 lg:grid-cols-4 max-w-6xl mx-auto", className)}>
            {tiers.map((tier, index) => (
                <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "relative rounded-3xl bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-xl p-8 h-full",
                        tier.popular
                            ? "border-gray-900 dark:border-white shadow-xl"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    )}
                >
                    {tier.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                {tier.description}
                            </div>
                        </div>
                    )}

                    <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>

                            {tier.priceLabel ? (
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {tier.priceLabel}
                                </div>
                            ) : (
                                <div className="mb-2">
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                        ${Math.round(monthlyPrice)}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                                        / mo
                                    </div>
                                </div>
                            )}

                            {tier.credits && (
                                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                                    {tier.credits}
                                </div>
                            )}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 flex-1 mb-8">
                            {tier.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        {tier.name === "Enterprise" ? (
                            <a
                                href="https://calendly.com/trustedapp/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full"
                            >
                                <Button
                                    className={cn(
                                        "w-full hover:scale-[1.02] transition-all duration-200 hover:shadow-lg text-sm font-medium rounded-xl py-3",
                                        "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700"
                                    )}
                                >
                                    {tier.cta}
                                </Button>
                            </a>
                        ) : (
                            <Button
                                className={cn(
                                    "w-full hover:scale-[1.02] transition-all duration-200 hover:shadow-lg text-sm font-medium rounded-xl py-3",
                                    tier.popular
                                        ? "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
                                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700"
                                )}
                            >
                                {tier.cta}
                            </Button>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default PricingTable; 