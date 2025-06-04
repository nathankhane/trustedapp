"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface PricingTier {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    cta: string;
    popular?: boolean;
}

export interface PricingTableProps {
    tiers?: PricingTier[];
    className?: string;
}

const defaultTiers: PricingTier[] = [
    {
        id: "starter",
        name: "Starter",
        description: "Perfect for early-stage startups",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        features: [
            "5 expert consultations/month",
            "Email support",
            "Basic matching",
            "Standard turnaround",
        ],
        cta: "Get Started",
    },
    {
        id: "growth",
        name: "Growth",
        description: "For growing teams that need more",
        monthlyPrice: 499,
        yearlyPrice: 4990,
        features: [
            "20 expert consultations/month",
            "Priority support",
            "Advanced matching",
            "Fast turnaround",
            "Team collaboration",
        ],
        cta: "Choose Growth",
        popular: true,
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "For established companies at scale",
        monthlyPrice: 999,
        yearlyPrice: 9990,
        features: [
            "Unlimited consultations",
            "Dedicated account manager",
            "Premium matching",
            "Immediate turnaround",
            "Advanced team features",
            "Custom integrations",
        ],
        cta: "Contact Sales",
    },
];

export const PricingTable: React.FC<PricingTableProps> = ({
    tiers = defaultTiers,
    className,
}) => {
    const [isYearly, setIsYearly] = React.useState(false);

    return (
        <div className={cn("py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                        Choose the plan that fits your team&apos;s needs. All plans include access to our verified expert network.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <Label htmlFor="billing-toggle" className={cn("text-base font-medium", !isYearly && "text-foreground")}>
                            Monthly
                        </Label>
                        <Switch
                            id="billing-toggle"
                            checked={isYearly}
                            onCheckedChange={setIsYearly}
                        />
                        <Label htmlFor="billing-toggle" className={cn("text-base font-medium", isYearly && "text-foreground")}>
                            Yearly
                            <span className="ml-2 bg-[#14E956] text-black px-2 py-1 rounded-full text-sm font-medium">
                                Save 10%
                            </span>
                        </Label>
                    </div>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto pt-8">
                    {tiers.map((tier, index) => (
                        <PricingCard
                            key={tier.id}
                            tier={tier}
                            isYearly={isYearly}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface PricingCardProps {
    tier: PricingTier;
    isYearly: boolean;
    index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, isYearly, index }) => {
    const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
    const monthlyPrice = isYearly ? tier.yearlyPrice / 12 : tier.monthlyPrice;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "relative rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg",
                tier.popular
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border hover:border-primary/30"
            )}
        >
            {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-background">
                        ⭐ Most Popular
                    </div>
                </div>
            )}

            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h3>
                    <p className="text-muted-foreground mb-6">{tier.description}</p>

                    <div className="mb-6">
                        <div className="text-5xl font-bold text-foreground mb-2">
                            ${Math.round(monthlyPrice)}
                        </div>
                        <div className="text-muted-foreground">
                            per month{isYearly && ", billed yearly"}
                        </div>
                    </div>

                    <Button
                        className={cn(
                            "w-full hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg text-sm font-medium",
                            tier.popular
                                ? "bg-primary hover:bg-primary/90 text-white"
                                : "bg-muted-foreground/10 hover:bg-muted-foreground/20 text-foreground border border-border"
                        )}
                    >
                        {tier.cta}
                    </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#14E956] flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-black" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}; 