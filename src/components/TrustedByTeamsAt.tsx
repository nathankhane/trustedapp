"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedByTeamsAt() {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-lg font-medium text-muted-foreground mb-12">
                        Trusted by teams at
                    </h3>
                    <div className="flex justify-center items-center gap-12 lg:gap-16 opacity-80 flex-wrap max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <Image
                                src="/logos/companies/bild-ai.png"
                                alt="Bild AI"
                                width={140}
                                height={48}
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 dark:mix-blend-screen dark:opacity-80"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <Image
                                src="/logos/companies/airbills.png"
                                alt="AirBills"
                                width={140}
                                height={48}
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 dark:mix-blend-screen dark:opacity-80"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <Image
                                src="/logos/companies/billtrim.png"
                                alt="BillTrim Inc"
                                width={140}
                                height={48}
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 dark:mix-blend-screen dark:opacity-80"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <Image
                                src="/logos/companies/clickup.png"
                                alt="ClickUp"
                                width={140}
                                height={48}
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 dark:mix-blend-screen dark:opacity-80"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 