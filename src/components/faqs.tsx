"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What exactly is TrustedApp now?",
    answer:
      "A closed marketplace where Tier-1, VC-backed founders sell razor-sharp product feedback to SaaS teams that need proof before they ship or spend. No coupon codes, no affiliate fluff—just paid insights.",
  },
  {
    question: "How do founders get paid?",
    answer:
      "Accept a brief → record a 2-min review, short survey, or 15-min call → vendor clicks Approve → Stripe drops cash into your account instantly. Payouts are automatic and recurring for any rev-share deals you spark.",
  },
  {
    question: "What do SaaS companies receive?",
    answer:
      "Verified founder opinions you can quote in board decks: usability videos, survey data, live discovery calls, and testimonial clips—all matched to your ICP by our LLM so the noise stays out of your roadmap.",
  },
  {
    question: "Who can join as a founder?",
    answer:
      "Operators who've raised from top-tier VCs and actively use the tools they're reviewing. We verify funding, role, and tech stack; if you're not hands-on with the product category, you're out.",
  },
  {
    question: "How is TrustedApp different from AppSumo or FounderPass?",
    answer:
      "Those sites sell discounted licenses. We sell high-signal feedback loops. Vendors pay you for truth bombs; you don't pay them for lifetime deals. Think user-research turbocharged, not bargain-bin SaaS.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "Founders: zero. Vendors: choose a monthly plan or buy credits à la carte—cancel anytime. TrustedApp only takes a 10% cut after a vendor approves the work, so everyone's incentives stay aligned.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about our platform, services, and features.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                  <span>{item.question}</span>
                  <span
                    className={`ml-2 transform transition-transform duration-300 ${openIndex === idx ? "rotate-90 text-primary" : "rotate-0 text-muted-foreground"}`}
                  >
                    ▶
                  </span>
                </summary>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
                >
                  <div className="mt-2 text-sm sm:text-base text-muted-foreground animate-fade-in leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
