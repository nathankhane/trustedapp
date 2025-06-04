"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface RealUser {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    testimonial: string;
    rating?: number;
}

export interface RealUserWallProps {
    users: RealUser[];
    title?: string;
    subtitle?: string;
    className?: string;
    variant?: "grid" | "carousel";
}

export const RealUserWall: React.FC<RealUserWallProps> = ({
    users,
    title = "Trusted by real users",
    subtitle = "Tier-1 founders and power users already on TrustedApp",
    className,
    variant = "grid",
}) => {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        {title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* User Grid */}
                <div className={cn(
                    "grid gap-6",
                    variant === "grid"
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1"
                )}>
                    {users.map((user, index) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            index={index}
                            variant={variant}
                        />
                    ))}
                </div>

                {/* Placeholder when no users */}
                {users.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center py-16"
                    >
                        <div className="bg-muted/20 rounded-2xl p-8 lg:p-12 max-w-md mx-auto">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                                Real Users Coming Soon
                            </h3>
                            <p className="text-muted-foreground">
                                We&apos;re collecting testimonials from our early users. Check back soon!
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

interface UserCardProps {
    user: RealUser;
    index: number;
    variant: "grid" | "carousel";
}

const UserCard: React.FC<UserCardProps> = ({ user, index, variant }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card/80 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                        <Image
                            src={user.avatar}
                            alt={`${user.name} avatar`}
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {user.role} at {user.company}
                        </p>
                    </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-muted-foreground leading-relaxed">
                    &ldquo;{user.testimonial}&rdquo;
                </blockquote>

                {/* Rating */}
                {user.rating && (
                    <div className="flex items-center mt-4 gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span
                                key={i}
                                className={cn(
                                    "text-sm",
                                    i < user.rating! ? "text-yellow-400" : "text-muted-foreground/30"
                                )}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}; 