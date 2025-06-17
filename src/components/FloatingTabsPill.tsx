"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingTabsPillProps {
    active: 'expert' | 'provider';
    onActiveChange: (active: 'expert' | 'provider') => void;
    isScrolled: boolean;
}

export default function FloatingTabsPill({ active, onActiveChange, isScrolled }: FloatingTabsPillProps) {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-lg"
        >
            <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                {(['provider', 'expert'] as const).map((p) => (
                    <button
                        key={p}
                        onClick={() => onActiveChange(p)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
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
        </motion.div>
    );
} 