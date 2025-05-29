"use client";

import { PriceCard } from "@/components/marketing/PriceCard";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Pay-as-you-go",
    price: null,
    note: "$49 per insight",
    perks: ["Buy credits à la carte", "No seat limits", "Stripe checkout—done"],
    cta: { label: "Buy Credits", href: "/buy" },
    featured: false,
  },
  {
    name: "Launch",
    price: "$299",
    unit: "/ mo",
    note: "20 credits · 3 seats",
    perks: [
      "Standard AI matching",
      "Campaign dashboard",
      "Instant Stripe payouts",
      "Email support",
    ],
    cta: { label: "Get Started", href: "/signup?plan=launch" },
    featured: false,
  },
  {
    name: "Scale",
    price: "$799",
    unit: "/ mo",
    note: "60 credits · 10 seats",
    perks: [
      "Priority matching",
      "Advanced analytics & CSV",
      "Slack alerts",
      "Dedicated CSM",
    ],
    cta: { label: "Get Started", href: "/signup?plan=scale" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    unit: "",
    note: "Custom contract",
    perks: [
      "Unlimited roll-over credits",
      "Unlimited seats + SSO",
      "Private founder panels",
      "Dedicated LLM / API access",
      "Full BI feed & webhooks",
      "Shared Slack channel",
      "Contracted SLAs",
    ],
    cta: { label: "Contact Us", href: "/contactus" },
    featured: false,
  },
];

const faqItems = [
  {
    question: "Why credits instead of 'calls booked'?",
    answer: "A credit is universal—use it for async videos, surveys, or live calls. Flex > bloat.",
  },
  {
    question: "Can I roll over unused credits?",
    answer: "Starter & Growth reset monthly; Scale lets you bank them.",
  },
  {
    question: "What if a founder no-shows?",
    answer: "Credit auto-returns to your balance and the founder's acceptance rate takes a hit.",
  },
  {
    question: "Do I need a contract?",
    answer: "Monthly self-serve; cancel anytime. Scale plans use an MSA.",
  },
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="min-h-screen py-24 pt-24 lg:pt-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
              Fair, usage-based pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Pay only for insights that move revenue. Cancel anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {plans.map((plan, i) => (
              <PriceCard key={plan.name} {...plan} index={i} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            *Annual contracts save 20% on Launch & Scale.*
          </p>
        </div>
      </section>
      {/* Pricing FAQs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4 text-foreground">
              FAQs
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="space-y-6">
              {faqItems.map((item: { question: string; answer: string }, idx: number) => (
                <motion.details
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                  className={`group transition-all duration-300 bg-card text-card-foreground rounded-xl shadow-lg border border-border/50 px-6 py-4 ${openIndex === idx ? "shadow-xl border-primary/20" : ""}`}
                  open={openIndex === idx}
                  onClick={e => {
                    e.preventDefault();
                    setOpenIndex(openIndex === idx ? null : idx);
                  }}
                >
                  <summary
                    className="cursor-pointer text-base font-semibold hover:text-primary transition-colors flex items-center justify-between outline-none"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`ml-2 transform transition-transform duration-300 ${openIndex === idx ? "rotate-90 text-primary" : "rotate-0 text-muted-foreground"}`}
                    >
                      ▶
                    </span>
                  </summary>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "opacity-100 max-h-96 translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
                  >
                    <div className="mt-2 text-base text-muted-foreground animate-fade-in">
                      {item.answer}
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
