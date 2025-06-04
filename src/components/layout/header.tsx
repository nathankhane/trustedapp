"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { t } from "@/lib/i18n";

const menuItems = [
  { name: t('nav.team'), href: "/team" },
  { name: t('nav.solution'), href: "/solution" },
  { name: t('nav.pricing'), href: "/pricing" },
  { name: t('nav.testimonials'), href: "/testimonials" },
  { name: t('nav.experts'), href: "/experts" },
  { name: t('nav.providers'), href: "/providers" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuState]);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-[60] w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isClient && isScrolled &&
            "bg-background/95 backdrop-blur-xl max-w-5xl rounded-2xl shadow-lg shadow-black/5 lg:px-8",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden hover:bg-muted/20 rounded-lg transition-colors duration-200"
              >
                <Menu className={cn(
                  "m-auto size-6 transition-all duration-200",
                  menuState && "rotate-180 scale-0 opacity-0"
                )} />
                <X className={cn(
                  "absolute inset-0 m-auto size-6 transition-all duration-200",
                  menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                )} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative text-muted-foreground font-medium transition-all duration-200 hover:text-foreground hover:-translate-y-0.5 block px-3 py-2 rounded-lg",
                          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100",
                          "after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full",
                          isActive && "text-foreground bg-muted/20 after:w-full"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop Right Utility Group - Single CTA only */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Button
                asChild
                size="sm"
                className="hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
              >
                <Link href="/signup">{t('nav.requestAccess')}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {menuState && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setMenuState(false)}
            />

            {/* Menu Content */}
            <div className="relative flex flex-col pt-20 px-6 pb-6">
              <div className="max-w-md mx-auto w-full">
                <ul className="space-y-4 mb-8">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuState(false)}
                          className={cn(
                            "text-lg text-muted-foreground hover:text-foreground block duration-200 transition-all hover:translate-x-2 px-4 py-3 rounded-lg hover:bg-muted/20",
                            isActive && "text-foreground bg-muted/20"
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="hover:scale-[1.03] transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90"
                    onClick={() => setMenuState(false)}
                  >
                    <Link href="/signup">{t('nav.requestAccess')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
