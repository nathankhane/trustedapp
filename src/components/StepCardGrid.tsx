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
    LucideIcon
} from "lucide-react";

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
            body: "2-minute form + LinkedIn OAuth. No pay-to-play.",
            icon: UserPlus,
        },
        {
            title: "Pick Offers",
            body: "Choose requests that fit your stack. Set your price.",
            icon: FileText,
        },
        {
            title: "Record Insight",
            body: "Video, survey or 30-min call—it's your pick.",
            icon: Video,
        },
        {
            title: "Get Paid on Repeat",
            body: "Earn every time your content is reused. Stripe payouts weekly.",
            icon: DollarSign,
        },
    ],
    providers: [
        {
            title: "Post Request",
            body: "Describe who you need & why.",
            icon: Edit3,
        },
        {
            title: "Match & Meet",
            body: "We surface vetted users—book in 24 hrs.",
            icon: Users,
        },
        {
            title: "Actionable Report",
            body: "Auto-transcribed, AI-summarised.",
            icon: BarChart3,
        },
        {
            title: "Repurpose Freely",
            body: "Publish snippets, attribute revenue back to the expert.",
            icon: RefreshCw,
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
                        <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
                            How It Works
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

    return (
        <>
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 gap-2 mb-8 p-1 bg-muted rounded-lg">
                <button
                    onClick={() => setActiveTab("experts")}
                    className={cn(
                        "py-2 px-4 rounded-md font-medium transition-all duration-200",
                        activeTab === "experts"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-pressed={activeTab === "experts"}
                >
                    For Experts
                </button>
                <button
                    onClick={() => setActiveTab("providers")}
                    className={cn(
                        "py-2 px-4 rounded-md font-medium transition-all duration-200",
                        activeTab === "providers"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-pressed={activeTab === "providers"}
                >
                    For Providers
                </button>
            </div>

            {/* Tab Content */}
            <div className="relative">
                {activeTab === "experts" && (
                    <div id="experts-flow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-center mb-8"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                How Experts Earn
                            </h3>
                            <p className="text-muted-foreground">
                                Turn your expertise into recurring revenue
                            </p>
                        </motion.div>
                        {renderStepCards(expertsSteps, "experts")}
                    </div>
                )}

                {activeTab === "providers" && (
                    <div id="providers-flow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-center mb-8"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                How Providers Get Insights
                            </h3>
                            <p className="text-muted-foreground">
                                Access vetted users in 24 hours
                            </p>
                        </motion.div>
                        {renderStepCards(providersSteps, "providers")}
                    </div>
                )}
            </div>
        </>
    );
}; 