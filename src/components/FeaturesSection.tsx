"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { HandCoins, UsersRound, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactElement, ReactNode, useRef } from "react";

type Persona = "provider" | "expert";

const COPIES: Record<
  Persona,
  { title: string; description: string; icon: ReactElement }[]
> = {
  provider: [
    {
      title: "Book Insights Fast",
      description: "Calls, surveys, or reviews—schedule in clicks, pay on delivery.",
      icon: <Sparkles className="size-6" aria-hidden />,
    },
    {
      title: "Elite Founder Panel",
      description: "5,000+ VC-backed operators ready to give product-tested feedback.",
      icon: <UsersRound className="size-6" aria-hidden />,
    },
    {
      title: "AI Precision Match",
      description: "LLM routes briefs to ideal users for sharper decisions.",
      icon: <HandCoins className="size-6" aria-hidden />,
    },
  ],
  expert: [
    {
      title: "Instant Payouts",
      description: "Share a video, call, or survey—cash hits Stripe in minutes.",
      icon: <HandCoins className="size-6" aria-hidden />,
    },
    {
      title: "Cred-Checked Network",
      description: "Collaborate with top founders & operators, no tire-kickers.",
      icon: <UsersRound className="size-6" aria-hidden />,
    },
    {
      title: "Smart Gig Feed",
      description: "Offers auto-match to your stack & stage—no outreach needed.",
      icon: <Sparkles className="size-6" aria-hidden />,
    },
  ],
};

export default function FeaturesSection() {
  const searchParams = useSearchParams();
  const persona: Persona =
    searchParams.get("persona") === "expert" ? "expert" : "provider"; // default provider

  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reduce motion for better performance and accessibility
  const y1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      className="py-16 md:py-32 bg-background overflow-hidden relative"
      data-animate
      key={persona}
    >
      {/* Animated background elements - disabled on reduced motion */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            style={{ y: y1, opacity, willChange: "transform" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          </motion.div>

          <motion.div
            style={{ y: y2, opacity, willChange: "transform" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 right-10 w-16 h-16 bg-green-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-yellow-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1.5s' }} />
          </motion.div>
        </>
      )}

      <div className="mx-auto max-w-5xl px-6 overflow-visible relative z-10">
        <motion.div
          key={`features-header-${persona}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h2
            className={cn(
              "text-balance text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 overflow-visible pb-2",
              shouldReduceMotion && "bg-none text-foreground"
            )}
            animate={shouldReduceMotion ? {} : {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={shouldReduceMotion ? {} : {
              backgroundSize: "200% 200%",
              willChange: "background-position"
            }}
          >
            Partnering VC-backed founders with the SaaS they can&apos;t live without.
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            SaaS companies, reward the founders who love you.
          </motion.p>
        </motion.div>

        <motion.div
          key={`features-grid-${persona}`}
          className="mx-auto mt-16 grid max-w-sm gap-8 md:mt-24 md:max-w-none md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
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
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                animate={shouldReduceMotion ? {} : {
                  borderRadius: ["1rem", "1.2rem", "1rem"],
                }}
                transition={shouldReduceMotion ? {} : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7
                  }}
                />
                <div className="relative flex flex-col items-center p-8">
                  <EnhancedCardDecorator index={index}>{feature.icon}</EnhancedCardDecorator>
                  <motion.h3
                    className="mt-6 text-xl font-semibold text-center text-card-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="mt-4 text-base text-muted-foreground text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Performance-optimized floating particles */}
                {!shouldReduceMotion && (
                  <>
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      style={{ willChange: "transform, opacity" }}
                    />
                    <motion.div
                      className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/40 rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 4, 0],
                        opacity: [0.4, 0.9, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5 + 1
                      }}
                      style={{ willChange: "transform, opacity" }}
                    />
                  </>
                )}
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
    <motion.div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      animate={{
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4
      }}
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
