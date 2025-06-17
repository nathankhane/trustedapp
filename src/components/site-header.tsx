/* components/site-header.tsx */
"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

export default function SiteHeader() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const h = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/80 transition-colors",
                scrolled && "border-b"
            )}
        >
            <div className="container flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                    <span className="font-semibold">Trusted</span>
                </Link>

                {/* desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/solution">Solution</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/team">Team</Link>
                    <Link
                        href="/#cta"
                        className="rounded-full border px-4 py-1 text-sm hover:bg-muted"
                    >
                        Request Access
                    </Link>
                </nav>

                {/* mobile nav */}
                <Sheet>
                    <SheetTrigger className="md:hidden p-2">
                        <Menu className="h-5 w-5" />
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <div className="pt-6 pb-8 pl-6 pr-8 space-y-6 text-base">
                            <MobileLink href="/solution">Solution</MobileLink>
                            <MobileLink href="/pricing">Pricing</MobileLink>
                            <MobileLink href="/team">Team</MobileLink>
                            <MobileLink href="/#cta">Request Access</MobileLink>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

/* utils */
function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block w-full rounded-md py-2 font-medium hover:bg-muted"
        >
            {children}
        </Link>
    );
} 