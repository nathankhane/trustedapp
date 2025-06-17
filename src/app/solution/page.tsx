import React from "react";
import { Metadata } from "next";
import { RoleHero } from "@/components/RoleHero";
import { StepCardGrid } from "@/components/StepCardGrid";
import { ImageCarousel, CarouselImage } from "@/components/ImageCarousel";
import { MetricBar, MetricItem } from "@/components/MetricBar";
import { PricingPeek } from "@/components/PricingPeek";
import { DualCTA } from "@/components/DualCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
    src: "/images/dashboard-1.svg",
    alt: "TrustedApp Expert Dashboard showing available opportunities",
    caption: "Expert dashboard - Browse and apply to relevant opportunities",
  },
  {
    src: "/images/dashboard-2.svg",
    alt: "TrustedApp Provider Dashboard showing matched experts",
    caption: "Provider dashboard - View matched experts and schedule interviews",
  },
  {
    src: "/images/dashboard-3.svg",
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

export default function SolutionPage() {
  const expertFAQs = faqData.filter(faq => faq.category === "experts");
  const providerFAQs = faqData.filter(faq => faq.category === "providers");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <RoleHero
        role="neutral"
        headline="Great products are built with real operators, not cold surveys."
        subline="TrustedApp drops a vetted founder council into your workflow—pay only for insights that move revenue."
      />

      {/* Role Flows - Desktop: dual columns, Mobile: tabs */}
      <StepCardGrid role="both" className="-mt-8" />

      {/* Demo Button Section */}
      <DemoButton />

      {/* Dashboard Demo */}
      <DashboardDemo images={demoImages} />

      {/* Proof Bar - Metrics */}
      <ProofSection metrics={metrics} />

      {/* FAQ Section */}
      <FAQSection expertFAQs={expertFAQs} providerFAQs={providerFAQs} />

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

// Demo Button Component
function DemoButton() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="https://calendly.com/trustedapp/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
            >
              Book 15-min Demo →
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// Extract client components to separate the server/client boundary
function DashboardDemo({ images }: { images: CarouselImage[] }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intuitive dashboards for both experts and providers
          </p>
        </div>

        <ImageCarousel
          images={images}
          autoPlay={true}
          autoPlayInterval={4000}
          className="max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
}

function ProofSection({ metrics }: { metrics: MetricItem[] }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of experts and providers
          </p>
        </div>

        <MetricBar metrics={metrics} className="max-w-4xl mx-auto" />
      </div>
    </section>
  );
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

function FAQSection({ expertFAQs, providerFAQs }: { expertFAQs: FAQ[]; providerFAQs: FAQ[] }) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our platform
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Expert FAQs */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              For Experts
            </h3>
            <div className="space-y-4">
              {expertFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`expert-${index}`} className="border-0">
                      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline text-base font-medium text-card-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>

          {/* Provider FAQs */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              For Providers
            </h3>
            <div className="space-y-4">
              {providerFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`provider-${index}`} className="border-0">
                      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline text-base font-medium text-card-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
