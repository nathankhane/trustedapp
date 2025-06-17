"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/WaitlistModal";
import { cn } from "@/lib/utils";
import { Users, DollarSign } from "lucide-react";

export interface DualCTAProps {
    expertLabel?: string;
    providerLabel?: string;
    expertSubtext?: string;
    providerSubtext?: string;
    className?: string;
}

export const DualCTA: React.FC<DualCTAProps> = ({
    expertLabel = "I'm an Expert",
    providerLabel = "I'm a Provider",
    expertSubtext = "Start earning from your expertise",
    providerSubtext = "Get insights from real users",
    className,
}) => {
    const [expertModalOpen, setExpertModalOpen] = React.useState(false);
    const [providerModalOpen, setProviderModalOpen] = React.useState(false);

    return (
        <>
            <section className={cn(
                "relative py-20 lg:py-28 overflow-hidden",
                "bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/10",
                className
            )}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,91,255,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(127,91,255,0.05)_50%,transparent_75%)]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join thousands already earning and learning through TrustedApp
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                        {/* Expert CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative p-8 lg:p-10 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <DollarSign className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        For Experts
                                    </h3>

                                    <p className="text-muted-foreground mb-8 leading-relaxed">
                                        {expertSubtext}
                                    </p>

                                    <Button
                                        onClick={() => setExpertModalOpen(true)}
                                        size="lg"
                                        className="w-full text-lg hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                                    >
                                        {expertLabel}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Provider CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative p-8 lg:p-10 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-3">
                                        For Providers
                                    </h3>

                                    <p className="text-muted-foreground mb-8 leading-relaxed">
                                        {providerSubtext}
                                    </p>

                                    <Button
                                        onClick={() => setProviderModalOpen(true)}
                                        size="lg"
                                        className="w-full text-lg hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                                    >
                                        {providerLabel}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-sm text-muted-foreground mb-6">
                            Trusted by teams at
                        </p>
                        <div className="flex justify-center items-center gap-8 lg:gap-12 opacity-80 flex-wrap">
                            <div className="flex items-center">
                                <Image
                                    src="/logos/companies/bild-ai.png"
                                    alt="Bild AI"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src="/logos/companies/airbills.png"
                                    alt="AirBills"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src="/logos/companies/billtrim.png"
                                    alt="BillTrim Inc"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src="/logos/companies/clickup.png"
                                    alt="ClickUp"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Waitlist Modals */}
            <WaitlistModal
                isOpen={expertModalOpen}
                onOpenChange={(open) => setExpertModalOpen(open)}
            />

            <WaitlistModal
                isOpen={providerModalOpen}
                onOpenChange={(open) => setProviderModalOpen(open)}
            />
        </>
    );
}; 