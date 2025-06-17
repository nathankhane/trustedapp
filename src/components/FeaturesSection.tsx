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
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            SaaS companies, reward the founders who love you.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-sm gap-8 md:mt-24 md:max-w-none md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                {/* Enhanced Card Decorator */}
                <EnhancedCardDecorator
                  icon={feature.icon}
                  shouldReduceMotion={shouldReduceMotion}
                  index={index}
                />

                <div className="relative z-10 p-8 lg:p-10">
                  <h3 className="mb-4 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
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

// Performance-optimized EnhancedCardDecorator
const EnhancedCardDecorator: React.FC<{
  icon: ReactNode;
  shouldReduceMotion?: boolean;
  index: number;
}> = ({ icon, shouldReduceMotion, index }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Icon container with optimized animations */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center backdrop-blur-sm"
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
        style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
      >
        <div className="text-primary">
          {icon}
        </div>

        {/* Grid pattern background - static for performance */}
        <div className="absolute inset-0 rounded-xl" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '8px 8px'
        }} />
      </motion.div>

      {/* Corner accents - simplified for mobile */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/20 rounded-tr-lg hidden md:block" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/20 rounded-bl-lg hidden md:block" />
    </div>
  );
};
