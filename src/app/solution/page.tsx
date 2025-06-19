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
    answer: "Submit our 2-minute application and sign in with LinkedIn or Google. We verify your role, tenure, and tool stack—no fees required.",
    category: "experts",
  },
  {
    question: "What kinds of projects can I take?",
    answer: "Discovery calls, UX walk-throughs, async video reviews, lightning surveys, panels, and workshops—toggle any format on/off anytime.",
    category: "experts",
  },
  {
    question: "How much can I earn?",
    answer: "Typical payouts range from $150–500 for live sessions and $25–100 for surveys. You set your rates and earn 10–20 % royalties when content is reused.",
    category: "experts",
  },
  {
    question: "When do I get paid?",
    answer: "Funds release once you mark the session complete. Stripe deposits arrive within 2 business days; royalties are sent monthly.",
    category: "experts",
  },
  {
    question: "How fast will I get matches?",
    answer: "Post a brief and receive a shortlist in minutes. Most interviews are booked within 24 h—same-day for urgent requests.",
    category: "providers",
  },
  {
    question: "How are experts vetted?",
    answer: "Every expert passes ID verification, LinkedIn cross-check, and tool-usage validation. Under 5 % are accepted, and sessions are continuously rated.",
    category: "providers",
  },
  {
    question: "What if the insights miss the mark?",
    answer: "We offer a 100 % satisfaction promise—either a free rematch or a full refund, no hoops.",
    category: "providers",
  },
  {
    question: "Can I repurpose the content?",
    answer: "Yes. Toggle \"Share Rights\" at checkout to use clips, quotes, or case studies. Attribution pixels and royalty payouts are automated.",
    category: "providers",
  },
];

export default function SolutionPage() {
  const expertFAQs = faqData.filter(faq => faq.category === "experts");
  const providerFAQs = faqData.filter(faq => faq.category === "providers");

  return (
    <main className="min-h-screen">
      {/* Role Flows - Desktop: dual columns, Mobile: tabs */}
      <StepCardGrid role="both" className="pt-8 sm:pt-12 lg:pt-16" />

      {/* Demo Button Section */}
      <DemoButton />

      {/* Dashboard Demo */}
      <DashboardDemo images={demoImages} />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

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
    <section className="py-8 sm:py-12 lg:py-16">
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
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
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

function ValuePropositionSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Great products are built with real operators, not cold surveys.
          </h2>
          <p className="text-xl text-muted-foreground">
            TrustedApp drops a vetted founder council into your workflow—pay only for insights that move revenue.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProofSection({ metrics }: { metrics: MetricItem[] }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
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
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
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
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              For Experts
            </h3>
            <div className="space-y-4">
              {expertFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              For Providers
            </h3>
            <div className="space-y-4">
              {providerFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
