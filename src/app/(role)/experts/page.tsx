"use client";
import React from "react";
import { RoleHero } from "@/components/RoleHero";
import { StepCard } from "@/components/StepCard";
import { MetricBar } from "@/components/MetricBar";
import { RealUserWall, RealUser } from "@/components/RealUserWall";
import RevenueCalculator from "@/components/calculator";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import { UserCheck, DollarSign, MessageSquare, TrendingUp } from "lucide-react";

// Sample data - replace with real users when available
const sampleUsers: RealUser[] = [
    // Empty array for now - will show placeholder
];

const expertMetrics = [
    { label: "Active Experts", value: 1250, suffix: "+" },
    { label: "Avg Monthly Earnings", value: 2800, prefix: "$" },
    { label: "Success Rate", value: 94, suffix: "%" },
    { label: "Response Time", value: 2, suffix: "h" },
];

const expertSteps = [
    {
        icon: UserCheck,
        title: "Apply & Get Approved",
        body: "Submit your application with your expertise areas and get verified by our team within 24 hours.",
        cta: {
            label: "Start Application",
            href: "/signup"
        }
    },
    {
        icon: MessageSquare,
        title: "Pick Offers & Share Insight",
        body: "Browse live requests from SaaS teams, choose projects that match your expertise, and share valuable insights.",
        cta: {
            label: "View Offers",
            href: "/experts/offers"
        }
    },
    {
        icon: DollarSign,
        title: "Receive Recurring Payouts",
        body: "Get paid automatically via Stripe for your contributions. Build long-term relationships with growing companies.",
        cta: {
            label: "Learn More",
            href: "/pricing"
        }
    }
];

export default function ExpertsPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <RoleHero
                role="experts"
                headline={t('hero.experts.title')}
                subline="Browse live offers from SaaS teams, drop your feedback, collect Stripe payouts—no outreach required."
                ctaLabel={t('nav.requestAccess')}
                ctaHref="#"
            />

            {/* 3-Step Flow */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            How it works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Mirror Posted&apos;s Get Paid to Create rhythm but for SaaS expertise
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {expertSteps.map((step, index) => (
                            <StepCard
                                key={index}
                                {...step}
                                index={index}
                                variant="vertical"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Revenue Calculator */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Estimate Your Revenue
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            See what your expertise could earn on TrustedApp
                        </p>
                    </div>
                    <RevenueCalculator />
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Platform Performance
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Updated monthly with real data
                        </p>
                    </div>
                    <MetricBar metrics={expertMetrics} />
                </div>
            </section>

            {/* Real User Wall */}
            <RealUserWall
                users={sampleUsers}
                title="Trusted by Expert Users"
                subtitle="Real experts earning with TrustedApp"
            />

            {/* FAQ Section - Placeholder */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-card/50 rounded-2xl p-8 text-center">
                            <p className="text-muted-foreground">FAQ content coming soon...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#7F5BFF]/10 to-purple-500/10 rounded-3xl p-8 lg:p-16 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Ready to monetize your expertise?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join the waitlist and be among the first to start earning from your SaaS knowledge.
                        </p>
                        <Button
                            onClick={() => setIsWaitlistOpen(true)}
                            size="lg"
                            className="text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                        >
                            {t('nav.requestAccess')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Waitlist Modal */}
            <WaitlistModal
                isOpen={isWaitlistOpen}
                onOpenChange={setIsWaitlistOpen}
            />
        </div>
    );
} 