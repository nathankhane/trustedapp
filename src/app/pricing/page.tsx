"use client";

import { PricingTable } from "@/components/PricingTable";
import { motion } from "framer-motion";
import { useState } from "react";

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
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards through Stripe. Enterprise plans can use invoicing.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
  },
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Fair, usage-based pricing
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Pay only for insights that move revenue. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Additional Info */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              *Annual contracts save 10% and include additional benefits.*
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-bold md:text-3xl mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="space-y-6">
              {faqItems.map((item: { question: string; answer: string }, idx: number) => (
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
