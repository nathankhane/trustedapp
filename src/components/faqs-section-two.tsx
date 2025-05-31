"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "What exactly is TrustedApp now?",
      answer:
        "A closed marketplace where Tier-1, VC-backed founders sell razor-sharp product feedback to SaaS teams that need proof before they ship or spend. No coupon codes, no affiliate fluff—just paid insights.",
    },
    {
      id: "item-2",
      question: "How do founders get paid?",
      answer:
        "Accept a brief → record a 2-min review, short survey, or 15-min call → vendor clicks Approve → Stripe drops cash into your account instantly. Payouts are automatic and recurring for any rev-share deals you spark.",
    },
    {
      id: "item-3",
      question: "What do SaaS companies receive?",
      answer:
        "Verified founder opinions you can quote in board decks: usability videos, survey data, live discovery calls, and testimonial clips—all matched to your ICP by our LLM so the noise stays out of your roadmap.",
    },
    {
      id: "item-4",
      question: "Who can join as a founder?",
      answer:
        "Operators who&apos;ve raised from top-tier VCs and actively use the tools they&apos;re reviewing. We verify funding, role, and tech stack; if you&apos;re not hands-on with the product category, you&apos;re out.",
    },
    {
      id: "item-5",
      question: "How is TrustedApp different from AppSumo or FounderPass?",
      answer:
        "Those sites sell discounted licenses. We sell high-signal feedback loops. Vendors pay you for truth bombs; you don&apos;t pay them for lifetime deals. Think user-research turbocharged, not bargain-bin SaaS.",
    },
    {
      id: "item-6",
      question: "Is there a cost to join?",
      answer:
        "Founders: zero. Vendors: choose a monthly plan or buy credits à la carte—cancel anytime. TrustedApp only takes a 10% cut after a vendor approves the work, so everyone&apos;s incentives stay aligned.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Your questions answered
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block">
              Can&apos;t find what you&apos;re looking for? Contact our{" "}
              <Link
                href="#"
                className="text-primary font-medium hover:underline"
              >
                customer support team
              </Link>
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden">
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
