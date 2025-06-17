"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PricingTier {
    name: string;
    price: number;
    yearlyPrice: number;
    description: string;
    features: string[];
    popular?: boolean;
    priceLabel?: string;
    credits?: string;
}

const defaultTiers: PricingTier[] = [
    {
        name: "Self-Serve",
        price: 49,
        yearlyPrice: 49 * 10,
        priceLabel: "$49",
        credits: "per insight",
        description: "",
        features: [
            "Quick user surveys (5-10 min)",
            "Automated matching & scheduling",
            "Basic demographic filters",
            "Email support",
            "Standard insights report"
        ],
    },
    {
        name: "Launch",
        price: 299,
        yearlyPrice: 299 * 10,
        priceLabel: "$299",
        credits: "per month",
        description: "",
        features: [
            "Everything in Self-Serve",
            "30-minute expert calls",
            "Advanced targeting filters",
            "Priority expert matching",
            "Custom question templates",
            "Slack integration",
            "Priority support"
        ],
    },
    {
        name: "Scale",
        price: 799,
        yearlyPrice: 799 * 10,
        priceLabel: "$799",
        credits: "per month",
        description: "Most Popular",
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
        popular: true,
    },
    {
        name: "Enterprise",
        price: 0,
        yearlyPrice: 0,
        priceLabel: "Let's talk",
        credits: "Custom pricing",
        description: "",
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
    },
];

interface PricingTableProps {
    tiers?: PricingTier[];
    isYearly?: boolean;
    onGetStarted?: (tierName: string) => void;
}

export function PricingTable({
    tiers = defaultTiers,
    isYearly = false,
    onGetStarted
}: PricingTableProps) {
    const handleGetStarted = (tierName: string) => {
        if (onGetStarted) {
            onGetStarted(tierName);
        } else {
            console.log(`Get started clicked for: ${tierName}`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
                {tiers.map((tier, index) => (
                    <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {tier.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                    {tier.description}
                                </div>
                            </div>
                        )}

                        <div className={cn(
                            "bg-white dark:bg-gray-900 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl p-8 h-full flex flex-col",
                            tier.popular
                                ? "border-gray-900 dark:border-white shadow-xl"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        )}>
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {tier.name}
                                </h3>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {tier.priceLabel}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">
                                    {tier.credits}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            {tier.name === "Enterprise" ? (
                                <a
                                    href="https://calendly.com/trustedapp/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full hover:scale-[1.02] transition-all duration-200 hover:shadow-lg text-sm font-medium rounded-xl py-3 bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    >
                                        Contact Sales
                                    </Button>
                                </a>
                            ) : (
                                <Button
                                    onClick={() => handleGetStarted(tier.name)}
                                    className={cn(
                                        "w-full hover:scale-[1.02] transition-all duration-200 hover:shadow-lg text-sm font-medium rounded-xl py-3",
                                        tier.popular
                                            ? "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700"
                                    )}
                                >
                                    {tier.name === "Launch" ? "Start Launch" : tier.name === "Scale" ? "Choose Scale" : "Get Started"}
                                </Button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 