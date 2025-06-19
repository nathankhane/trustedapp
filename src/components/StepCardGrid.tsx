"use client";
import React from "react";
import { motion } from "framer-motion";
import { StepCard } from "@/components/StepCard";
import { cn } from "@/lib/utils";
import {
    UserPlus,
    FileText,
    Video,
    DollarSign,
    Edit3,
    Users,
    BarChart3,
    RefreshCw,
    Settings,
    CalendarCheck,
    ListChecks,
    CreditCard,
    BarChart2,
    LucideIcon
} from "lucide-react";
import { PillToggle } from '@/components/ui/pill-toggle';

export interface StepItem {
    title: string;
    body: string;
    icon: LucideIcon;
}

export interface StepCardGridProps {
    role?: "experts" | "providers" | "both";
    steps?: {
        experts?: StepItem[];
        providers?: StepItem[];
    };
    className?: string;
}

const defaultSteps = {
    experts: [
        {
            title: "Apply & Verify",
            body: "2-min form → LinkedIn or Google OAuth.",
            icon: UserPlus,
        },
        {
            title: "Set Your Terms",
            body: "Choose formats, rates & availability.",
            icon: Settings,
        },
        {
            title: "Accept & Schedule",
            body: "Review incoming requests, lock in a time.",
            icon: CalendarCheck,
        },
        {
            title: "Share Your Insight",
            body: "Live call, async video, or quick survey—your pick.",
            icon: Video,
        },
        {
            title: "Earn on Repeat",
            body: "Stripe payouts + royalties when content is reused.",
            icon: DollarSign,
        },
    ],
    providers: [
        {
            title: "Post a Brief",
            body: "Describe who you need & why in 60 s.",
            icon: Edit3,
        },
        {
            title: "Instant Matchboard",
            body: "We surface best-fit users—ranked by usage & role.",
            icon: Users,
        },
        {
            title: "Pick the Format",
            body: "Call, survey, UX walk-through, panel, or workshop.",
            icon: ListChecks,
        },
        {
            title: "Secure & Schedule",
            body: "Pay via Stripe escrow, invites auto-send.",
            icon: CreditCard,
        },
        {
            title: "Get Actionable Results",
            body: "AI transcript & highlight reel ready to share.",
            icon: BarChart2,
        },
    ],
};

export const StepCardGrid: React.FC<StepCardGridProps> = ({
    role = "both",
    steps = defaultSteps,
    className,
}) => {
    const expertsSteps = steps.experts || defaultSteps.experts;
    const providersSteps = steps.providers || defaultSteps.providers;

    const renderStepCards = (stepList: StepItem[], roleType: string) => (
        <div className="grid gap-6 md:gap-8">
            {stepList.map((step, index) => (
                <motion.div
                    key={`${roleType}-${index}`}
                    initial={{ opacity: 0, x: roleType === "experts" ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <StepCard
                        icon={step.icon}
                        title={step.title}
                        body={step.body}
                        variant="horizontal"
                        index={index}
                        className="h-full"
                    />
                </motion.div>
            ))}
        </div>
    );

    if (role === "experts") {
        return (
            <section className={cn("py-16 lg:py-24", className)} id="experts-flow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            How Experts Earn
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Turn your expertise into recurring revenue
                        </p>
                    </motion.div>
                    {renderStepCards(expertsSteps, "experts")}
                </div>
            </section>
        );
    }

    if (role === "providers") {
        return (
            <section className={cn("py-16 lg:py-24", className)} id="providers-flow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            How Providers Get Insights
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Access vetted users in 24 hours
                        </p>
                    </motion.div>
                    {renderStepCards(providersSteps, "providers")}
                </div>
            </section>
        );
    }

    // Both roles - responsive dual layout with manual tabs for mobile
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Manual Tabs */}
                <div className="lg:hidden">
                    <MobileTabsSection
                        expertsSteps={expertsSteps}
                        providersSteps={providersSteps}
                        renderStepCards={renderStepCards}
                    />
                </div>

                {/* Desktop Dual Columns */}
                <div className="hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl xl:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                How It Works
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Two sides of the marketplace, both winning
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
                        {/* Experts Column */}
                        <div id="experts-flow">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-4">
                                    For Experts
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    Turn your expertise into recurring revenue
                                </p>
                            </motion.div>
                            {renderStepCards(expertsSteps, "experts")}
                        </div>

                        {/* Providers Column */}
                        <div id="providers-flow">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h3 className="text-2xl xl:text-3xl font-bold text-foreground mb-4">
                                    For Providers
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    Access vetted users in 24 hours
                                </p>
                            </motion.div>
                            {renderStepCards(providersSteps, "providers")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Custom mobile tabs component
const MobileTabsSection: React.FC<{
    expertsSteps: StepItem[];
    providersSteps: StepItem[];
    renderStepCards: (steps: StepItem[], role: string) => React.ReactNode;
}> = ({ expertsSteps, providersSteps, renderStepCards }) => {
    const [activeTab, setActiveTab] = React.useState<"experts" | "providers">("experts");

    const TAB_OPTIONS = [
        { value: "experts" as const, label: "For Experts" },
        { value: "providers" as const, label: "For SaaS Providers" },
    ];

    return (
        <>
            {/* Tab Navigation - Updated to pill style */}
            <div className="flex justify-center mb-8">
                <PillToggle
                    options={TAB_OPTIONS}
                    active={activeTab}
                    onActiveChange={setActiveTab}
                />
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
                {activeTab === "experts" ? (
                    <div>{renderStepCards(expertsSteps, "experts")}</div>
                ) : (
                    <div>{renderStepCards(providersSteps, "providers")}</div>
                )}
            </div>
        </>
    );
}; 