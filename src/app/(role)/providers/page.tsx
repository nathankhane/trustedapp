"use client";
import React from "react";
import { RoleHero } from "@/components/RoleHero";
import { StepCard } from "@/components/StepCard";
import { MetricBar } from "@/components/MetricBar";
import { RealUserWall, RealUser } from "@/components/RealUserWall";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import { Search, Users, FileText, TrendingUp } from "lucide-react";

// Sample data - replace with real users when available
const sampleUsers: RealUser[] = [
    // Empty array for now - will show placeholder
];

const providerMetrics = [
    { label: "Active Providers", value: 890, suffix: "+" },
    { label: "Avg Response Time", value: 18, suffix: "h" },
    { label: "Expert Match Rate", value: 96, suffix: "%" },
    { label: "Insights Delivered", value: 4200, suffix: "+" },
];

const providerSteps = [
    {
        icon: FileText,
        title: "Post Request",
        body: "Submit your specific questions or use cases. Our team helps you frame the request for maximum expert engagement.",
        cta: {
            label: "Start Request",
            href: "/signup"
        }
    },
    {
        icon: Users,
        title: "Match & Meet",
        body: "Get matched with verified experts who have hands-on experience with your use case. Schedule calls within 24 hours.",
        cta: {
            label: "See Experts",
            href: "/experts"
        }
    },
    {
        icon: TrendingUp,
        title: "Own the Content & Data",
        body: "Receive detailed insights, recordings, and actionable recommendations. All content belongs to your company.",
        cta: {
            label: "View Pricing",
            href: "/pricing"
        }
    }
];

export default function ProvidersPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <RoleHero
                role="providers"
                headline={t('hero.providers.title')}
                subline="Get matched with verified experts who have hands-on experience with your exact use case and challenges."
                ctaLabel="Book Demo"
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
                            Post request → Match & meet → Own the content & data
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {providerSteps.map((step, index) => (
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

            {/* Demo Dashboard Screenshots - Placeholder */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Dashboard Preview
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Manage your expert connections and insights from one place
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-card/50 rounded-3xl p-8 lg:p-16 text-center border border-border/30">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">📊</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                Dashboard Screenshots Coming Soon
                            </h3>
                            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                                We&apos;re putting the finishing touches on our provider dashboard. Preview will be available soon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Platform Metrics
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Updated monthly with real performance data
                        </p>
                    </div>
                    <MetricBar metrics={providerMetrics} />
                </div>
            </section>

            {/* Pricing Preview */}
            <section className="py-16 lg:py-24 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Pay per insight or choose a monthly plan
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="bg-card/80 rounded-2xl p-8 border border-border/50">
                            <h3 className="text-xl font-bold mb-4 text-foreground">Pay-per-Credit</h3>
                            <div className="text-3xl font-bold mb-4 text-primary">$199</div>
                            <p className="text-muted-foreground mb-6">Per expert consultation</p>
                            <Button className="w-full hover:scale-[1.03] transition-transform duration-200">
                                Start with Credits
                            </Button>
                        </div>

                        <div className="bg-card/80 rounded-2xl p-8 border border-primary/50 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Popular
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">Monthly Plan</h3>
                            <div className="text-3xl font-bold mb-4 text-primary">$999</div>
                            <p className="text-muted-foreground mb-6">Unlimited consultations</p>
                            <Button className="w-full hover:scale-[1.03] transition-transform duration-200">
                                Start Monthly
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Button variant="outline" asChild>
                            <a href="/pricing">View Full Pricing</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Case Studies Placeholder */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Success Stories
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            How companies are using TrustedApp to accelerate growth
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card/50 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h3 className="text-base font-semibold mb-2 text-foreground">
                                Case Studies Coming Soon
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Real customer success stories will be featured here
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real User Wall */}
            <RealUserWall
                users={sampleUsers}
                title="Trusted by Industry Leaders"
                subtitle="Companies using TrustedApp to accelerate product decisions"
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
                            <p className="text-muted-foreground">Provider FAQ content coming soon...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 lg:p-16 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                            Ready to accelerate your product insights?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join the waitlist and get priority access to our expert network.
                        </p>
                        <Button
                            onClick={() => setIsWaitlistOpen(true)}
                            size="lg"
                            className="text-lg px-8 py-6 h-auto hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                        >
                            Book Demo
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