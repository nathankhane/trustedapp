"use client";
import {
  Users,
  DollarSign,
  Wallet,
  FileStack,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  Code,
  TrendingUp,
  Zap,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StatsRibbon } from "@/components/marketing/StatsRibbon";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "5,000+ Verified Experts",
    description: "Access Tier-1 VC-backed founders who've scaled products past $1M ARR.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "48-Hour Turnaround",
    description: "From brief to insights. Stop waiting weeks for user feedback.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "2× Revenue Growth",
    description: "Teams using expert feedback see accelerated growth and lower churn.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Matching",
    description: "Our LLM routes requests to experts with relevant stack experience.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Actionable Insights",
    description: "Recorded videos, detailed reports, and direct recommendations.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Stack-Specific Feedback",
    description: "Get insights from people who actually use competing tools daily.",
  },
];

export default function SolutionPage() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col pt-0">
      <main className="flex-1">
        {/* Positive Info Banner */}
        <div className="flex items-center justify-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 text-blue-600 bg-primary/80 backdrop-blur-sm text-sm font-semibold py-3 px-6 rounded-b-2xl shadow-md mb-8 animate-fade-in mt-24 lg:mt-32">
          <Sparkles className="w-5 h-5 mr-3 text-primary animate-pulse" />
          <span>
            TrustedApp accelerates product research and revenue—teams running
            weekly expert interviews see up to{" "}
            <span className="font-bold text-primary">2× faster growth</span>{" "}
            and{" "}
            <span className="font-bold text-primary">
              save 20+ hours per sprint
            </span>
            .
          </span>
          <span className="hidden sm:inline text-muted-foreground text-xs ml-4">
            Source: McKinsey, Nielsen Norman Group
          </span>
        </div>
        <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center mb-12"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
              Problem → Solved
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Great products are built with real operators, not cold surveys.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-0">
              TrustedApp drops a vetted founder council into your workflow—pay
              only for insights that move revenue.
            </p>
          </motion.div>
          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 w-full max-w-5xl mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card/80 backdrop-blur shadow-lg rounded-2xl p-6 flex flex-col items-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-6 h-6 mb-4 text-indigo-600 stroke-2">
                  {feature.icon}
                </div>
                <div className="font-semibold text-lg mb-1 text-card-foreground text-center">
                  {feature.title}
                </div>
                <div className="text-muted-foreground text-sm text-center">
                  {feature.description}
                </div>
              </motion.div>
            ))}
          </div>
          {/* Stats Ribbon */}
          <StatsRibbon />
          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://calendly.com/trustedapp/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Book 15-min Demo →</Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
