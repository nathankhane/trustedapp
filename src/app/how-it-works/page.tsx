"use client";
import React from "react";
import { Metadata } from "next";
import { RoleHero } from "@/components/RoleHero";
import { StepCardGrid } from "@/components/StepCardGrid";
import { ImageCarousel, CarouselImage } from "@/components/ImageCarousel";
import { MetricBar, MetricItem } from "@/components/MetricBar";
import { PricingPeek } from "@/components/PricingPeek";
import { DualCTA } from "@/components/DualCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const metadata: Metadata = {
    title: "How TrustedApp Works – Experts & Providers",
    description: "See how TrustedApp turns feedback into revenue on both sides. One marketplace, two win-paths for experts and providers.",
    openGraph: {
        title: "How TrustedApp Works – Experts & Providers",
        description: "See how TrustedApp turns feedback into revenue on both sides. One marketplace, two win-paths for experts and providers.",
        type: "website",
    },
};

// Placeholder demo images - replace with actual dashboard screenshots
const demoImages: CarouselImage[] = [
    {
        src: "/images/dashboard-1.png",
        alt: "TrustedApp Expert Dashboard showing available opportunities",
        caption: "Expert dashboard - Browse and apply to relevant opportunities",
    },
    {
        src: "/images/dashboard-2.png",
        alt: "TrustedApp Provider Dashboard showing matched experts",
        caption: "Provider dashboard - View matched experts and schedule interviews",
    },
    {
        src: "/images/dashboard-3.png",
        alt: "TrustedApp Analytics Dashboard showing insights and reports",
        caption: "Analytics dashboard - Track performance and insights",
    },
];

// Metrics for the proof bar
const metrics: MetricItem[] = [
    {
        label: "Paid Out",
        value: 2100000,
        prefix: "$",
        suffix: "",
    },
    {
        label: "Active Experts",
        value: 7500,
        suffix: "",
    },
    {
        label: "Avg. Match Time",
        value: 24,
        suffix: "h",
    },
];

// FAQ data
const faqData = [
    {
        question: "How do I become a verified expert?",
        answer: "Complete our 2-minute application form and verify your LinkedIn profile. We review applications based on your experience and the tools you use professionally. No payment required to apply.",
        category: "experts",
    },
    {
        question: "How much can I earn as an expert?",
        answer: "Expert earnings vary by expertise level and engagement type. Video interviews typically pay $150-500, while surveys range from $25-100. You set your own rates and earn recurring revenue when your content gets reused.",
        category: "experts",
    },
    {
        question: "When do I get paid?",
        answer: "Payments are processed weekly via Stripe. You'll receive payment within 7 days of completing an engagement, with recurring payments for content reuse distributed monthly.",
        category: "experts",
    },
    {
        question: "How quickly can I find experts?",
        answer: "Our average match time is 24 hours. Post your request with specific criteria, and we'll surface vetted experts who match your needs. Most providers book interviews within 1-2 business days.",
        category: "providers",
    },
    {
        question: "What if I'm not satisfied with the expert insights?",
        answer: "We offer a satisfaction guarantee. If the insights don't meet your expectations, we'll provide a full refund or match you with a different expert at no additional cost.",
        category: "providers",
    },
    {
        question: "Can I reuse the content and insights?",
        answer: "Yes! You own the insights and can publish snippets, create case studies, or use the data in your marketing. We handle attribution and revenue sharing with the original expert automatically.",
        category: "providers",
    },
];

export default function HowItWorksPage() {
    const expertFAQs = faqData.filter(faq => faq.category === "experts");
    const providerFAQs = faqData.filter(faq => faq.category === "providers");

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <RoleHero
                role="neutral"
                headline="See how TrustedApp turns feedback into revenue—on both sides."
                subline="One marketplace, two win-paths."
                expertCTA={{
                    label: "I'm an Expert",
                    href: "#experts-flow",
                }}
                providerCTA={{
                    label: "I'm a Provider",
                    href: "#providers-flow",
                }}
            />

            {/* Role Flows - Desktop: dual columns, Mobile: tabs */}
            <StepCardGrid role="both" />

            {/* Dashboard Demo */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            See It In Action
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Intuitive dashboards for both experts and providers
                        </p>
                    </motion.div>

                    <ImageCarousel
                        images={demoImages}
                        autoPlay={true}
                        autoPlayInterval={4000}
                        className="max-w-5xl mx-auto"
                    />
                </div>
            </section>

            {/* Proof Bar - Metrics */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Trusted by Thousands
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Real impact since January 2024
                        </p>
                    </motion.div>

                    <MetricBar metrics={metrics} className="max-w-4xl mx-auto" />

                    {/* Logo Wall Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className="text-sm text-muted-foreground mb-8">
                            Used by teams at leading companies
                        </p>
                        <div className="flex justify-center items-center gap-12 opacity-40 grayscale">
                            <div className="text-xs text-muted-foreground font-mono">
                                [COMPANY LOGOS]
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <PricingPeek className="bg-muted/30" />

            {/* FAQ Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to know about getting started
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Expert FAQs */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold text-foreground mb-6 text-center lg:text-left">
                                    For Experts
                                </h3>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {expertFAQs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`expert-${index}`}
                                            className="border border-border/50 rounded-lg px-4"
                                        >
                                            <AccordionTrigger className="text-left text-foreground hover:text-primary">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>

                            {/* Provider FAQs */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold text-foreground mb-6 text-center lg:text-left">
                                    For Providers
                                </h3>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {providerFAQs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`provider-${index}`}
                                            className="border border-border/50 rounded-lg px-4"
                                        >
                                            <AccordionTrigger className="text-left text-foreground hover:text-primary">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <DualCTA
                expertLabel="Start Earning Today"
                providerLabel="Find Your Expert"
                expertSubtext="Join thousands earning from their expertise"
                providerSubtext="Get matched with vetted users in 24 hours"
            />
        </main>
    );
} 