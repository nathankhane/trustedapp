"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const avatarColors = [
  "ring-blue-400",
  "ring-purple-400",
  "ring-pink-400",
  "ring-green-400",
  "ring-yellow-400",
  "ring-teal-400",
  "ring-orange-400",
  "ring-red-400",
  "ring-indigo-400",
  "ring-cyan-400",
];

// Define testimonials data
const testimonials = {
  featured: {
    name: "Alan Boehme",
    role: "Global 500 CTO, Transformation & Innovation Catalyst",
    content: "After two decades stress-testing software stacks, I joined TrustedApp as an Expert. One no-frills review of my go-to tools was enough—within 48 hours SaaS teams were booking discovery calls, and my Stripe dashboard lit up with recurring payouts. At last, the insight I&apos;ve earned at the bleeding edge is paying me back every month.",
    initials: "AB",
    avatar: "",
  },
  // ... other testimonials
};

export default function TestimonialsPage() {
  // Classify testimonials
  const expertTestimonials = [
    {
      name: "Alan Boehme",
      title: "Global 500 CTO, Transformation & Innovation Catalyst",
      avatar: "/images/alan-boehme.jpg",
      fallback: "AB",
      color: avatarColors[0],
      quote: "After two decades stress-testing software stacks, I joined TrustedApp as an Expert. One no-frills review of my go-to tools was enough—within 48 hours SaaS teams were booking discovery calls, and my Stripe dashboard lit up with recurring payouts. At last, the insight I&rsquo;ve earned at the bleeding edge is paying me back every month.",
    },
    {
      name: "Maya Patel",
      title: "Director of Product Marketing, Atlassian",
      avatar: "/images/maya-patel.jpg",
      fallback: "MP",
      color: avatarColors[1],
      quote: "Hiring agencies for user research felt like burning money in slow-motion—weeks of screening, and the &rsquo;insights&rsquo; barely moved the needle. One TrustedApp campaign put 35 power users of our biggest competitor in front of my PMs this week. We trimmed two sprints of guess-work, closed six net-new accounts straight from the calls, and paid less than one agency retainer. TrustedApp is now baked into every launch checklist.",
    },
    {
      name: "Aisha Rahman",
      title: "Founder, FinSync",
      avatar: "/images/aisha-rahman.jpg",
      fallback: "AR",
      color: avatarColors[2],
      quote: "TrustedApp turned my product opinions into a side-income stream in a weekend. Three discovery calls, $900 in my Stripe balance, zero cold outreach. Finally—my expertise gets paid, not just praised.",
    },
    {
      name: "Sophia Lorenzo",
      title: "Solo Martech Consultant",
      avatar: "/images/sophia-lorenzo.jpg",
      fallback: "SL",
      color: avatarColors[3],
      quote: "TrustedApp surfaces tools that actually solve my clients&apos; problems. I demo, get paid, and grab lifetime discounts all in one workflow—chef&apos;s kiss.",
    },
    {
      name: "Javier Ortega",
      title: "CTO, SeedLoop",
      avatar: "/images/javier-ortega.jpg",
      fallback: "JO",
      color: avatarColors[4],
      quote: "The dashboard lights up whenever a SaaS we already use wants feedback. It&apos;s basically passive income for taking calls I&apos;d have done for free. My board loves the extra cash flow, I love the validation cycle.",
    },
    {
      name: "Liam O'Donnell",
      title: "Head of DevRel, Open-Source Ops",
      avatar: "/images/liam-odonnell.jpg",
      fallback: "LO",
      color: avatarColors[5],
      quote: "Loved that providers see only my role & stack until I accept. Keeps recruiters out and serious builders in. Privacy + pay = win.",
    },
    {
      name: "Mei-Ling Zhou",
      title: "Growth Engineer @ YC-22 alum",
      avatar: "/images/mei-ling-zhou.jpg",
      fallback: "MZ",
      color: avatarColors[6],
      quote: "I dreaded &apos;expert networks&apos; until I scored two early-access tools through TrustedApp. Post-review, both founders kept me on retainer for growth advice. Double win.",
    },
  ];
  const providerTestimonials = [
    // Hiroshi Tanaka, Nora Sweeney, Dr. Rina Patel, Omar El-Khatib
    {
      name: "Hiroshi Tanaka",
      title: "Head of PMO, KaitoAI",
      avatar: "/images/hiroshi-tanaka.jpg",
      fallback: "HT",
      color: avatarColors[2],
      quote: "$1k for five founder interviews felt steep—until one insight saved us a six-figure misbuilt. ROI: 10x in under a month.",
    },
    {
      name: "Nora Sweeney",
      title: "Marketing Director, SnapFlow CRM",
      avatar: "/images/nora-sweeney.jpg",
      fallback: "NS",
      color: avatarColors[5],
      quote: "User-generated video reviews straight from TrustedApp tripled our social proof overnight. No influencer fluff—real operators, real use-cases.",
    },
    {
      name: "Dr. Rina Patel",
      title: "CEO, MedAnalytics Cloud",
      avatar: "/images/rina-patel.jpg",
      fallback: "DP",
      color: avatarColors[6],
      quote: "We booked seven niche experts (think HIPAA-heavy data nerds) in 48 hours. Cheaper than Gartner, faster than Twitter DMs, and every call produced quotable gold for our sales deck.",
    },
    {
      name: "Omar El-Khatib",
      title: "COO, CyberSentinel",
      avatar: "/images/omar-el-khatib.jpg",
      fallback: "OE",
      color: avatarColors[7],
      quote: "We're a security startup; NDAs are life. TrustedApp's built-in legal shield meant zero red-line cycles. Signed, paid, scheduled—all before my coffee cooled.",
    },
  ];

  return (
    <div className="flex-1 w-full">
      {/* Featured Testimonial */}
      <section className="bg-gradient-to-br from-muted/30 to-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar className="size-12 ring-2 ring-blue-400 group-hover:ring-4 transition-all duration-200">
                      <AvatarFallback className="bg-blue-100 text-blue-600">AB</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-200">Alan Boehme</h3>
                    <span className="text-muted-foreground text-sm">Global 500 CTO, Transformation & Innovation Catalyst</span>
                  </div>
                </div>
                <blockquote className="text-lg text-card-foreground italic group-hover:text-foreground transition-colors duration-200">
                  &ldquo;After two decades stress-testing software stacks, I joined TrustedApp as an Expert. One no-frills review of my go-to tools was enough—within 48 hours SaaS teams were booking discovery calls, and my Stripe dashboard lit up with recurring payouts. At last, the insight I&rsquo;ve earned at the bleeding edge is paying me back every month.&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="pt-6 md:pt-10 pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                What Our Experts Say
              </h2>
              <p className="text-body mt-6">
                Real stories from founders and experts who use TrustedApp to unlock new value.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {expertTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/10 border-border/50 hover:border-border group bg-card/80 backdrop-blur-sm">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Avatar className={`size-9 ring-2 ${t.color} transition-all duration-200 group-hover:ring-4`}>
                          <AvatarFallback className="bg-blue-100 text-blue-600">{t.fallback}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors duration-200">{t.name}</h3>
                        <span className="text-muted-foreground block text-sm tracking-wide">{t.title}</span>
                        <blockquote className="mt-3">
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">{t.quote}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-gradient-to-br from-muted/30 to-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Avatar className="size-12 ring-2 ring-purple-400 group-hover:ring-4 transition-all duration-200">
                      <AvatarFallback className="bg-purple-100 text-purple-600">MP</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-200">Maya Patel</h3>
                    <span className="text-muted-foreground text-sm">Director of Product Marketing, Atlassian</span>
                  </div>
                </div>
                <blockquote className="text-lg text-card-foreground italic group-hover:text-foreground transition-colors duration-200">
                  &ldquo;Hiring agencies for user research felt like burning money in slow-motion—weeks of screening, and the &rsquo;insights&rsquo; barely moved the needle. One TrustedApp campaign put 35 power users of our biggest competitor in front of my PMs this week. We trimmed two sprints of guess-work, closed six net-new accounts straight from the calls, and paid less than one agency retainer. TrustedApp is now baked into every launch checklist.&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="pt-6 md:pt-10 pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                What Our Providers Say
              </h2>
              <p className="text-body mt-6">
                Real stories from SaaS partners who use TrustedApp to unlock new value.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {providerTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:shadow-purple-500/10 border-border/50 hover:border-border group bg-card/80 backdrop-blur-sm">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Avatar className={`size-9 ring-2 ${t.color} transition-all duration-200 group-hover:ring-4`}>
                          <AvatarFallback className="bg-blue-100 text-blue-600">{t.fallback}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors duration-200">{t.name}</h3>
                        <span className="text-muted-foreground block text-sm tracking-wide">{t.title}</span>
                        <blockquote className="mt-3">
                          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">{t.quote}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16 text-center mb-16">
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to join our community?
        </motion.h2>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-200 hover:shadow-md">
            <Link href="/signup">Become a Vendor</Link>
          </Button>
          <Button asChild className="hover:scale-105 transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/signup">Join as a Founder</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
