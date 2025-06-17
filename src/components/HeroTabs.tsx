'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatedGroup } from './ui/animated-group';
import { TextEffect } from './ui/text-effect';
import { motion } from 'framer-motion';
import RevenueCalculator from './RevenueCalculator';
import { UserCheck, MessageSquare, DollarSign, FileText, Users, TrendingUp } from 'lucide-react';
import FloatingTabsPill from './FloatingTabsPill';
import { cn } from '@/lib/utils';

const personas = {
    expert: {
        h1: 'Turn expertise into recurring revenue.',
        sub: 'TrustedApp matches you with providers who\'ll pay for your product feedback, content, and discovery calls.',
        cta: { label: 'Sign up as Expert', href: '/experts/onboard' },
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
            subtitle: 'Apply once → Pick offers → Earn on repeat',
            steps: [
                {
                    icon: UserCheck,
                    title: 'Apply & Get Approved',
                    desc: 'Tell us what tools you live in. Our team verifies you within 24 hrs—no endless forms.',
                    cta: { label: 'Start Application', href: '/experts/apply' }
                },
                {
                    icon: MessageSquare,
                    title: 'Pick Offers & Share Insight',
                    desc: 'Browse live requests from SaaS teams, choose the ones that excite you, and drop your best advice.',
                    cta: { label: 'View Offers', href: '/experts/offers' }
                },
                {
                    icon: DollarSign,
                    title: 'Receive Recurring Payouts',
                    desc: 'Stripe handles the cash, you collect it. Every follow-up session or content reuse means more earnings.',
                    cta: { label: 'Learn More', href: '/experts/payouts' }
                }
            ]
        }
    },
    provider: {
        h1: 'Book insights from users who live in your product.',
        sub: 'Instantly schedule calls, surveys, and content sessions with vetted power-users — zero recruiting overhead.',
        cta: { label: 'Start as Provider', href: '/providers/onboard' },
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
            subtitle: 'Post a request → Meet your match → Own every deliverable',
            steps: [
                {
                    icon: FileText,
                    title: 'Post a Request',
                    desc: 'Tell us what insight you need. We\'ll fine-tune the brief so experts know exactly how to help.',
                    cta: { label: 'Start Request', href: '/providers/request' }
                },
                {
                    icon: Users,
                    title: 'Match & Meet',
                    desc: 'Within 24 hrs we pair you with power-users who fit your use case. Book a call or async session in two clicks.',
                    cta: { label: 'See Experts', href: '/providers/experts' }
                },
                {
                    icon: TrendingUp,
                    title: 'Own the Content & Data',
                    desc: 'Recordings, notes, and actionable recommendations are yours to keep and reuse—forever.',
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
    const [active, setActive] = useState<'expert' | 'provider'>(
        (search.get('persona') as 'expert' | 'provider') ?? 'expert'
    );
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        router.replace(`/?persona=${active}`, { scroll: false });
    }, [active, router]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const data = personas[active];

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

            <section className="relative overflow-hidden bg-background pb-16 sm:pb-20 lg:pb-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                            {(['expert', 'provider'] as const).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setActive(p)}
                                    className={cn(
                                        "px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
                                        active === p
                                            ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    )}
                                    aria-selected={active === p}
                                    aria-controls={`hero-${p}`}
                                    role="tab"
                                >
                                    {p === 'provider' ? 'Provider' : 'Expert'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Animated Hero Content */}
                    <AnimatedGroup className="w-full text-center">
                        <h1
                            className={`mx-auto text-center font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${heroGradient} mb-8 sm:mb-10 lg:mb-12 max-w-5xl px-4`}
                        >
                            {data.h1}
                        </h1>
                        <div className="text-center text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 sm:mb-12 lg:mb-14 max-w-3xl mx-auto px-4 leading-relaxed">
                            {active === 'expert' ? (
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.2}
                                >
                                    TrustedApp matches you with providers who&apos;ll pay for your product feedback, content, and discovery calls.
                                </TextEffect>
                            ) : (
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.2}
                                >
                                    {data.sub}
                                </TextEffect>
                            )}
                        </div>
                        <a
                            href={data.cta.href}
                            className="inline-block rounded-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg border border-primary/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 hover:scale-[1.03]"
                        >
                            {data.cta.label} →
                        </a>
                    </AnimatedGroup>
                </div>
            </section>

            {/* Why Choose Trusted Section */}
            <section className="relative z-10 bg-muted/20 pt-16 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className={`mb-10 sm:mb-12 lg:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-center ${heroGradient}`}>
                        Why Choose Trusted
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {data.why.map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="rounded-2xl bg-card shadow-lg border border-border/50 p-6 sm:p-7 flex flex-col items-center justify-center text-center h-full transition-all duration-300 cursor-pointer group hover:shadow-xl hover:border-primary/20 hover:shadow-primary/10"
                                style={{ minHeight: 220 }}
                            >
                                <div className={`text-base sm:text-lg font-semibold mb-4 text-center ${heroGradient} group-hover:drop-shadow-md`}>
                                    {card.title}
                                </div>
                                <div className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center">
                                    {card.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="relative z-10 bg-background pt-16 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            How it works
                        </h2>
                        <p className="mb-8 text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                            {data.howItWorks.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {data.howItWorks.steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:shadow-primary/10"
                                style={{ minHeight: 300 }}
                            >
                                <div className="text-muted-foreground mb-6">
                                    <step.icon size={40} className="mx-auto sm:w-12 sm:h-12" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                                    {step.desc}
                                </p>
                                <button className="px-4 sm:px-6 py-2 border border-border rounded-lg text-muted-foreground font-medium hover:bg-muted/30 hover:text-foreground transition-colors duration-200 text-sm sm:text-base">
                                    {step.cta.label}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Revenue Calculator Section - Only for Experts */}
            {active === 'expert' && (
                <section className="relative z-10 bg-muted/30 pt-16 pb-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8 sm:mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Estimate Your Revenue
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                                See what your expertise could earn on TrustedApp
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <RevenueCalculator />
                        </motion.div>
                    </div>
                </section>
            )}
        </>
    );
} 