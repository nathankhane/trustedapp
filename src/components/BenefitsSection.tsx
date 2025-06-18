'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';

type Persona = 'expert' | 'provider';

const copy: Record<Persona, { title: string; body: string }[]> = {
    expert: [
        {
            title: 'Turn knowledge into income',
            body: 'Earn recurring revenue by talking about the tools you already love and use every day.',
        },
        {
            title: 'Curated brand offers',
            body: 'Get invitations from VC-backed SaaS teams—no generic "influencer" spam, ever.',
        },
        {
            title: 'Own your schedule',
            body: 'Pick live calls, async video, or written reviews; 15 minutes can fund your coffee habit for a week.',
        },
    ],
    provider: [
        {
            title: 'Ship the right features—fast',
            body: 'Make confident roadmap calls with insights from the power-users who push your product to its limits.',
        },
        {
            title: 'Zero recruiting overhead',
            body: 'Book calls, async videos, or surveys in two clicks—no chasing calendars or cold DMs.',
        },
        {
            title: 'Pay only for actionable insight',
            body: 'Credits are charged only when a session is delivered—every dollar maps to a datapoint you can use.',
        },
    ],
};

export default function BenefitsSection({ persona }: { persona: Persona }) {
    const BENEFITS = copy[persona];
    const shouldReduceMotion = useReducedMotion() ?? false;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-8 sm:py-12 lg:py-16" key={persona}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <motion.h2
                    className="mb-8 sm:mb-12 text-center text-4xl font-bold tracking-tight"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                        Why Choose Trusted
                    </span>
                </motion.h2>

                <div className="relative">
                    {/* decorative halo */}
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial" />

                    {/* grid */}
                    <motion.div
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {BENEFITS.map(({ title, body }, index) => (
                            <motion.div
                                key={title}
                                variants={cardVariants}
                                className="group relative rounded-3xl bg-indigo-50 p-8 ring-1 ring-gray-200
                           dark:bg-indigo-950/30 dark:ring-indigo-900/60 text-center overflow-hidden"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                }}
                            >
                                {/* Hover glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 rounded-3xl opacity-0"
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
                                            duration: 2,
                                            delay: index * 0.5 + 2,
                                            repeat: Infinity,
                                            repeatDelay: 12,
                                        }}
                                    />
                                )}

                                <div className="relative z-10">
                                    <motion.h3
                                        className="mb-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text
                               text-lg font-semibold text-transparent text-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {title}
                                    </motion.h3>
                                    <motion.p
                                        className="mx-auto max-w-prose text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-center"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {body}
                                    </motion.p>
                                </div>

                                {/* Enhanced sliding underline */}
                                <motion.span
                                    className="absolute bottom-6 left-1/2 h-px bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                                    initial={{ width: 0, x: "-50%" }}
                                    whileHover={{
                                        width: "60px",
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                />

                                {/* Corner accent */}
                                <motion.div
                                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-tr-3xl opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 