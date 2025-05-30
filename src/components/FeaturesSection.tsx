"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowUp,
  CalendarCheck,
  Globe,
  Play,
  Plus,
  Signature,
  Sparkles,
  Target,
  HandCoins,
  UsersRound,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <HandCoins className="size-6" aria-hidden />,
      title: "Earn on Every Insight",
      description:
        "Record a two-minute video, jump on a micro-interview, or answer a lightning survey. Each action credits your Stripe balance in real time, turning product opinions into a recurring revenue stream—no affiliate hacks or lifetime-deal gimmicks.",
    },
    {
      icon: <UsersRound className="size-6" aria-hidden />,
      title: "Verified Founder Network",
      description:
        "Only Tier-1 VC–backed founders are admitted. Vendors tap 5 000 + operators who already run the tools they're improving—so feedback is informed, actionable, and trusted by procurement teams.",
    },
    {
      icon: <Sparkles className="size-6" aria-hidden />,
      title: "AI-Matched Feedback Loops",
      description:
        "Our LLM reads vendor research briefs and instantly routes them to founders with matching stack, stage, and spend. Result: higher response rates for vendors, less noise for founders, and product-market fit accelerates.",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-background overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/8 rounded-full blur-lg animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-green-500/8 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-yellow-500/8 rounded-full blur-md animate-bounce" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      <div className="mx-auto max-w-5xl px-6 overflow-visible relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h2
            className="text-balance text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 overflow-visible pb-2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Partnering Tier 1 Founders with the SaaS they love
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SaaS companies, reward the founders who love you.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-sm gap-8 md:mt-24 md:max-w-none md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl bg-card shadow transition-all"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                animate={{
                  borderRadius: ["1rem", "1.2rem", "1rem"],
                }}
                transition={{
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
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="mt-4 text-base text-muted-foreground text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Floating particles */}
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
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
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

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="mt-9 aspect-video p-4">
      <div className="relative hidden h-fit">
        <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-background shadow-md shadow-red-500/35">
          PDF
        </div>
        <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
      </div>
      <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">2:30 - 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        <div className="flex -space-x-1.5">
          {[
            { src: MESCHAC_AVATAR, alt: "Méschac Irung" },
            { src: BERNARD_AVATAR, alt: "Bernard Ngandu" },
            { src: THEO_AVATAR, alt: "Théo Balick" },
            { src: GLODIE_AVATAR, alt: "Glodie Lukose" },
          ].map((avatar, index) => (
            <div
              key={index}
              className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"
            >
              <img
                className="aspect-square rounded-full object-cover"
                src={avatar.src}
                alt={avatar.alt}
                height="460"
                width="460"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        ML Pipeline Discussion
      </div>
    </Card>
  );
};

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative mt-6">
      <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <img
              className="aspect-square rounded-full object-cover"
              src={MESCHAC_AVATAR}
              alt="M Irung"
              height="460"
              width="460"
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            Méschac Irung
          </span>

          <span className="text-muted-foreground/75 text-xs">2m</span>
        </div>

        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>

        <Signature className="ml-8 mt-3 size-5" />
      </Card>
      <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card
      aria-hidden
      className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">
          How can I optimize my neural network to reduce inference time while
          maintaining accuracy?
        </p>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask AI Assistant</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Globe />
            </Button>
          </div>

          <Button size="icon" className="size-7 rounded-2xl bg-foreground text-background">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
