'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatedGroup } from './ui/animated-group';
import { TextEffect } from './ui/text-effect';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import RevenueCalculator from './RevenueCalculator';
import FloatingTabsPill from './FloatingTabsPill';
import BenefitsSection from '@/components/BenefitsSection';
import { UserCheck, MessageSquare, DollarSign, FileText, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const personas = {
    expert: {
        h1: 'Turn expertise into recurring revenue.',
        sub: 'TrustedApp matches you with providers who\'ll pay for your product feedback, content, and discovery calls.',
        cta: { label: 'Sign up as Expert', href: 'https://calendly.com/trustedapp/30min' },
        why: [
            {
                title: 'Turn knowledge into income',
                desc: 'Earn recurring revenue by talking about the tools you already love and use every day.',
            },
            {
                title: 'Curated brand offers',
                desc: 'Get invitations from VC-backed SaaS teams—no generic "influencer" spam, ever.',
            },
            {
                title: 'Own your schedule',
                desc: 'Pick live calls, async video, or written reviews; 15 minutes can fund your coffee habit for a week.',
            },
        ],
        howItWorks: {
            subtitle: 'Apply once → Accept gigs → Cash in on repeat',
            steps: [
                {
                    icon: UserCheck,
                    title: 'Apply & Get Verified',
                    desc: 'Two‑minute form + LinkedIn/Google. We green‑light you in under 24 h—no paperwork parade.',
                    cta: { label: 'Start Application', href: '/experts/apply' }
                },
                {
                    icon: MessageSquare,
                    title: 'Choose Gigs, Share Insight',
                    desc: 'Browse live briefs, accept what fits, and drop your know‑how via call, survey, or video.',
                    cta: { label: 'View Offers', href: '/experts/offers' }
                },
                {
                    icon: DollarSign,
                    title: 'Instant + Recurring Payouts',
                    desc: 'Stripe drops cash within 48 h—then pays royalties any time your content gets reused.',
                    cta: { label: 'Learn More', href: '/experts/payouts' }
                }
            ]
        }
    },
    provider: {
        h1: 'Book insights from users who live in your product.',
        sub: 'Instantly schedule calls, surveys, and content sessions with vetted power-users — zero recruiting overhead.',
        cta: { label: 'Start as Provider', href: 'https://calendly.com/trustedapp/30min' },
        why: [
            {
                title: 'Ship the right features—fast',
                desc: 'Make confident roadmap calls with insights from the power-users who push your product to its limits.',
            },
            {
                title: 'Zero recruiting overhead',
                desc: 'Book calls, async videos, or surveys in two clicks—no chasing calendars or cold DMs.',
            },
            {
                title: 'Pay only for actionable insight',
                desc: 'Credits are charged only when a session is delivered, so every dollar traces back to a datapoint you can use.',
            },
        ],
        howItWorks: {
            subtitle: 'Post a brief → Meet your match → Own every deliverable',
            steps: [
                {
                    icon: FileText,
                    title: 'Post a Brief',
                    desc: 'Tell us the question, we polish the brief, so experts know exactly how to deliver.',
                    cta: { label: 'Start Request', href: '/providers/request' }
                },
                {
                    icon: Users,
                    title: 'Match & Meet',
                    desc: 'Get a vetted shortlist in minutes, then book a call or async video in two clicks.',
                    cta: { label: 'See Experts', href: '/providers/experts' }
                },
                {
                    icon: TrendingUp,
                    title: 'Own the Content & Data',
                    desc: 'Recordings, notes, and AI summaries are yours to slice, share, and reuse—forever.',
                    cta: { label: 'View Pricing', href: '/providers/pricing' }
                }
            ]
        }
    },
} as const;

const heroGradient = 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent';

export default function HeroTabs() {
    const router = useRouter();
    const search = useSearchParams();
    const shouldReduceMotion = useReducedMotion() ?? false;

    const [active, setActive] = useState<'expert' | 'provider'>(
        (search.get('persona') as 'expert' | 'provider') ?? 'provider'
    );
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Debounce rapid persona changes to prevent blank states
        const timeoutId = setTimeout(() => {
            router.replace(`/?persona=${active}`, { scroll: false });
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [active, router]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const data = personas[active];

    // Performance-optimized animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 40,
            scale: shouldReduceMotion ? 1 : 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: shouldReduceMotion ? 0.1 : 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
                delayChildren: shouldReduceMotion ? 0 : 0.1
            }
        }
    };

    return (
        <>
            {/* Floating Tabs Pill - only show when scrolled */}
            {isScrolled && (
                <FloatingTabsPill
                    active={active}
                    onActiveChange={setActive}
                    isScrolled={isScrolled}
                />
            )}

            <div className="relative">
                {/* Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[70vh] lg:min-h-screen pt-4 sm:pt-2 lg:-mt-4 pb-2 sm:pb-8 lg:pb-12 overflow-hidden px-4 sm:px-6 lg:px-8 bg-background"
                    data-animate
                >
                    {/* Background Elements - Completely removed */}

                    <div className="relative z-10 flex flex-col w-full">
                        {/* Tabs */}
                        <div className="flex justify-center mb-6 sm:mb-5 lg:mb-8">
                            <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                                {(['expert', 'provider'] as const).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setActive(p)}
                                        className={cn(
                                            "px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 touch-target",
                                            active === p
                                                ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        )}
                                        aria-selected={active === p}
                                        role="tab"
                                    >
                                        {p === 'provider' ? 'Provider' : 'Expert'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatedGroup className="w-full text-center" key={active}>
                            <motion.h1
                                key={`h1-${active}`}
                                className={`mx-auto text-center font-bold leading-[1.1] tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl ${heroGradient} mb-4 sm:mb-6 lg:mb-8 max-w-5xl px-2`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
                            >
                                {data.h1}
                            </motion.h1>
                            <div
                                key={`subtitle-${active}`}
                                className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-14 max-w-2xl mx-auto px-4 leading-relaxed"
                            >
                                {active === 'expert' ? (
                                    <TextEffect
                                        key="expert-text"
                                        preset={shouldReduceMotion ? "fade" : "fade-in-blur"}
                                        speedSegment={shouldReduceMotion ? 1 : 0.3}
                                        delay={shouldReduceMotion ? 0 : 0.2}
                                    >
                                        TrustedApp matches you with providers who&apos;ll pay for your product feedback, content, and discovery calls.
                                    </TextEffect>
                                ) : (
                                    <TextEffect
                                        key="provider-text"
                                        preset={shouldReduceMotion ? "fade" : "fade-in-blur"}
                                        speedSegment={shouldReduceMotion ? 1 : 0.3}
                                        delay={shouldReduceMotion ? 0 : 0.2}
                                    >
                                        {data.sub}
                                    </TextEffect>
                                )}
                            </div>
                        </AnimatedGroup>

                        {/* CTA Buttons with gradient hover animation */}
                        <motion.div
                            key={`cta-${active}`}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
                        >
                            <motion.a
                                href={data.cta.href}
                                className="inline-block rounded-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg border border-primary/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 hover:scale-[1.03] touch-target"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                                style={{ willChange: shouldReduceMotion ? "auto" : "transform" }}
                            >
                                {data.cta.label} →
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <BenefitsSection persona={active === 'expert' ? 'expert' : 'provider'} />

                {/* How it Works Section */}
                <section className="py-8 sm:py-12 lg:py-16 bg-background">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            key={`how-it-works-header-${active}`}
                            className="text-center mb-8 sm:mb-12"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: "easeOut" }}
                        >
                            <h2 className="mb-4 text-center text-4xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                    How it Works
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
                                {data.howItWorks.subtitle}
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* decorative halo */}
                            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial" />

                            <motion.div
                                key={`how-it-works-steps-${active}`}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {data.howItWorks.steps.map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        variants={cardVariants}
                                        className="group relative rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 ring-1 ring-purple-200/50
                                                   dark:from-purple-950/30 dark:to-indigo-950/30 dark:ring-purple-900/60 text-center overflow-hidden"
                                        style={{
                                            minHeight: 300,
                                            willChange: shouldReduceMotion ? "auto" : "transform",
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                        }}
                                        whileHover={shouldReduceMotion ? {} : {
                                            y: -8,
                                            scale: 1.02,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Hover glow effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Shimmer effect */}
                                        {!shouldReduceMotion && (
                                            <motion.div
                                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                animate={{
                                                    translateX: ["0%", "200%"],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    delay: i * 0.6 + 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 15,
                                                }}
                                            />
                                        )}

                                        <div className="relative z-10 flex flex-col items-center h-full">
                                            <motion.div
                                                className="mb-6 p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <step.icon size={40} className="text-purple-600 dark:text-purple-400" />
                                            </motion.div>

                                            <motion.h3
                                                className="text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {step.title}
                                            </motion.h3>

                                            <motion.p
                                                className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow"
                                                initial={{ opacity: 0.8 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {step.desc}
                                            </motion.p>

                                            <motion.button
                                                className="px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base
                                                           bg-gradient-to-r from-purple-600 to-indigo-600 text-white
                                                           hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg
                                                           transition-all duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {step.cta.label}
                                            </motion.button>
                                        </div>

                                        {/* Enhanced sliding underline */}
                                        <motion.span
                                            className="absolute bottom-6 left-1/2 h-px bg-gradient-to-r from-purple-500 to-indigo-500"
                                            initial={{ width: 0, x: "-50%" }}
                                            whileHover={{
                                                width: "60px",
                                                transition: { duration: 0.4, ease: "easeOut" }
                                            }}
                                        />

                                        {/* Corner accent */}
                                        <motion.div
                                            className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-3xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Revenue Calculator Section - Only for Experts */}
                {active === 'expert' && (
                    <section className="relative z-10 bg-muted/30 py-8 sm:py-12 lg:py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                key={`revenue-header-${active}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-8 sm:mb-12"
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                        Estimate Your Revenue
                                    </span>
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                                    See what your expertise could earn on TrustedApp
                                </p>
                            </motion.div>

                            <motion.div
                                key={`revenue-calculator-${active}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <RevenueCalculator />
                            </motion.div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
} 