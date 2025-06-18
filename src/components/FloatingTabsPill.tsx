"use client";

import React from 'react';
import { motion } from "framer-motion";
import { PillToggle } from "@/components/ui/pill-toggle";

interface FloatingTabsPillProps {
    active: 'expert' | 'provider';
    onActiveChange: (active: 'expert' | 'provider') => void;
    isScrolled: boolean;
}

const FLOATING_OPTIONS = [
    { value: "expert" as const, label: "Expert" },
    { value: "provider" as const, label: "Provider" },
];

export default function FloatingTabsPill({ active, onActiveChange, isScrolled }: FloatingTabsPillProps) {
    // Hide the floating pill when mobile menu is open (detected by body overflow hidden)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const checkMobileMenu = () => {
            setIsMobileMenuOpen(document.body.style.overflow === 'hidden');
        };

        // Check immediately
        checkMobileMenu();

        // Create a MutationObserver to watch for style changes on body
        const observer = new MutationObserver(checkMobileMenu);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style']
        });

        return () => observer.disconnect();
    }, []);

    // Don't render the floating pill when mobile menu is open
    if (isMobileMenuOpen) {
        return null;
    }

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed left-1/2 transform -translate-x-1/2 z-[70] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-xl p-1 ${isScrolled ? 'top-20' : 'top-24'}`}
        >
            <PillToggle
                options={FLOATING_OPTIONS}
                active={active}
                onActiveChange={onActiveChange}
                size="sm"
            />
        </motion.div>
    );
} 