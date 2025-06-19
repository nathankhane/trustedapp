"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { DollarSign, Users2, Sparkles, BrainCircuit } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ReactElement, ReactNode, useRef } from "react";

type Persona = "provider" | "expert";

// Hero copy data
const heroCopy = {
  expert: {
    heading: "Monetize your product insight, instantly.",
    sub: "TrustedApp pipes paid calls and surveys from the SaaS tools you already use. Cash hits Stripe right after you share."
  },
  provider: {
    heading: "VC‑backed founders. Game‑changing SaaS. Meet in minutes.",
    sub: "Instantly tap the power‑users who already swear by your product—and turn their insight into growth."
  }
};

// Tiles data
const tiles = {
  expert: [
    {
      icon: <DollarSign className="size-6" aria-hidden />,
      title: "Instant Payouts",
      copy: "Record a call, video, or survey—Stripe cash lands within minutes."
    },
    {
      icon: <Users2 className="size-6" aria-hidden />,
      title: "Cred‑Checked Network",
      copy: "Work directly with top SaaS teams—no tire‑kickers, only real builders."
    },
    {
      icon: <Sparkles className="size-6" aria-hidden />,
      title: "Smart Gig Feed",
      copy: "Auto‑matched to offers that fit your stack & stage—no outreach required."
    }
  ],
  provider: [
    {
      icon: <Sparkles className="size-6" aria-hidden />,
      title: "One‑Click Scheduling",
      copy: "Book calls, surveys, or UX walkthroughs in 60 seconds—pay only when delivered."
    },
    {
      icon: <Users2 className="size-6" aria-hidden />,
      title: "Founders, Vetted & Ready",
      copy: "5 000+ funded operators who live in your category daily, eager to share real‑world feedback."
    },
    {
      icon: <BrainCircuit className="size-6" aria-hidden />,
      title: "AI‑Driven Match",
      copy: "Our LLM pairs every brief with the best‑fit users—so every session lands actionable insight."
    }
  ]
};

// Legacy COPIES constant for compatibility (deprecated)
const COPIES: Record<
  Persona,
  { title: string; description: string; icon: ReactElement }[]
> = {
  provider: tiles.provider.map(tile => ({
    title: tile.title,
    description: tile.copy,
    icon: tile.icon
  })),
  expert: tiles.expert.map(tile => ({
    title: tile.title,
    description: tile.copy,
    icon: tile.icon
  }))
};

export default function FeaturesSection() {
  const searchParams = useSearchParams();
  const persona: Persona =
    searchParams.get("persona") === "provider" ? "provider" : "expert"; // default expert

  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerRef = useRef<HTMLDivElement>(null);

  const features = COPIES[persona];

  // Performance-optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 50,
      rotateX: shouldReduceMotion ? 0 : -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-8 sm:py-12 lg:py-16 bg-background overflow-hidden relative"
      data-animate
      key={persona}
    >
      {/* Animated background elements - disabled */}

      <div className="mx-auto max-w-5xl px-6 overflow-visible relative z-10">
        <motion.div
          key={`features-header-${persona}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h2
            key={`features-h2-${persona}`}
            className={cn(
              "text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 overflow-visible pb-2",
              shouldReduceMotion && "bg-none text-foreground"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: 0.2 }}
          >
            {persona === 'provider' ? (
              <>
                VC‑backed founders.
                <br />
                Game-changing SaaS.
                <br />
                Meet in minutes.
              </>
            ) : (
              heroCopy[persona].heading
            )}
          </motion.h2>
          <motion.p
            key={`features-p-${persona}`}
            className="mt-6 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {heroCopy[persona].sub}
          </motion.p>
        </motion.div>

        <motion.div
          key={`features-grid-${persona}`}
          className="mx-auto mt-8 sm:mt-12 grid max-w-sm gap-8 md:max-w-none md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={`${persona}-${feature.title}-${index}`}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : {
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl bg-card shadow transition-all touch-target"
                whileHover={shouldReduceMotion ? {} : {
                  y: -4,
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex flex-col items-center p-8">
                  <EnhancedCardDecorator index={index}>{feature.icon}</EnhancedCardDecorator>
                  <motion.h3
                    key={`${persona}-title-${feature.title}`}
                    className="mt-6 text-xl font-semibold text-center text-card-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    key={`${persona}-desc-${feature.title}`}
                    className="mt-4 text-base text-muted-foreground text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Static decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-60" />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/30 rounded-full opacity-60" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const EnhancedCardDecorator = ({ children, index }: { children: ReactNode; index: number }) => (
  <motion.div
    className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
  >
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <motion.div
      className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t rounded-lg shadow-lg transition-transform group-hover:scale-110"
      whileHover={{
        y: -4,
        scale: 1.1,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  </motion.div>
);
