"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const expertFaq = [
  {
    q: 'What is TrustedApp?',
    a: 'A marketplace that pays you—founders, operators, and power-users—for live product feedback. Providers book you; we escrow the cash until the session is done.',
  },
  {
    q: 'How do I earn money?',
    a: 'Claim a brief → deliver the session → Provider hits "Approve" → Stripe auto-pays you. Opt-in content reuse? Earn recurring rev-share on every deal your testimonial closes.',
  },
  {
    q: 'Who can sign up as an Expert?',
    a: 'Verified operators who actively use the software category they critique. We check role, tech stack, and a sample review to keep quality high.',
  },
  {
    q: 'What session types can I offer?',
    a: 'Discovery calls, deep-dive interviews, written pulse surveys, UI/UX walk-through videos, competitive tear-downs, panel appearances, advisory workshops, or custom formats.',
  },
  {
    q: 'Does it cost anything?',
    a: 'No. Joining is free and TrustedApp only takes 10 % after the Provider approves your work.',
  },
  {
    q: 'Can I also be a Provider?',
    a: 'Yes—one account, dual roles. Many Experts use TrustedApp for competitor insight while monetising their own expertise.',
  },
];

const providerFaq = [
  {
    q: 'What is TrustedApp?',
    a: 'A two-sided marketplace where SaaS teams instantly book vetted users for insight sessions—no recruiting, no scheduling ping-pong.',
  },
  {
    q: 'How does booking work?',
    a: 'Post a brief, pick a matched Expert, select a session type, and pay via Stripe escrow. Expert accepts, you meet, then approve. Money moves only after delivery.',
  },
  {
    q: 'What insight formats are available?',
    a: '15-min discovery calls, 30-min deep dives, async surveys, UI/UX screen-shares, testimonial clips, expert panels, advisory workshops, beta-test cohorts, and more on request.',
  },
  {
    q: 'What if an Expert no-shows?',
    a: 'You get an immediate refund. If you no-show, the Expert receives a 50 % courtesy fee.',
  },
  {
    q: 'How is this different from AppSumo or generic panels?',
    a: 'We sell decision-grade feedback, not discounted licenses. Vendors pay for truth bombs from real users already in your ICP—matched by LLM, verified by humans.',
  },
  {
    q: 'Pricing?',
    a: 'Buy credits à la carte or pick a monthly plan—cancel anytime. No platform fee until you approve the work.',
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'expert' | 'provider'>('expert');

  const faqItems = activeTab === 'expert' ? expertFaq : providerFaq;

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about our platform, services, and features.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 mt-8">
          <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
            {(['expert', 'provider'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(null); // Reset open accordion when switching tabs
                }}
                className={cn(
                  "px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
                aria-selected={activeTab === tab}
                role="tab"
              >
                {tab === 'provider' ? 'Provider' : 'Expert'}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <motion.details
                key={`${activeTab}-${item.q}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                className={`group transition-all duration-300 bg-card rounded-xl shadow-lg px-6 py-4 ${openIndex === idx ? "ring-2 ring-primary" : ""}`}
                open={openIndex === idx}
                onClick={e => {
                  e.preventDefault();
                  setOpenIndex(openIndex === idx ? null : idx);
                }}
              >
                <summary
                  className="cursor-pointer text-base font-semibold group-hover:text-primary transition-colors flex items-center justify-between outline-none text-card-foreground"
                >
                  <span>{item.q}</span>
                  <ChevronRight
                    className={`ml-2 h-4 w-4 transition-all duration-300 ${openIndex === idx
                      ? "rotate-90 text-primary"
                      : "rotate-0 text-muted-foreground"
                      }`}
                  />
                </summary>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
                >
                  <div className="mt-2 text-sm sm:text-base text-muted-foreground animate-fade-in leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 px-8">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
