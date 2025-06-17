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
  { name: t('nav.solution'), href: "/solution" },
  { name: t('nav.pricing'), href: "/pricing" },
  { name: t('nav.team'), href: "/team" },
];

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] w-full px-4 lg:px-6">
      <nav
        className={cn(
          "mx-auto transition-all duration-500 ease-out",
          isScrolled
            ? "mt-2 max-w-5xl rounded-2xl shadow-md bg-background/95 lg:backdrop-blur-md"
            : "mt-0 max-w-6xl"
        )}
      >
        <div className="px-4 lg:px-6">
          <div className={cn(
            "flex items-center justify-between lg:justify-start lg:relative transition-all duration-500",
            isScrolled ? "py-2 lg:py-3" : "py-4 lg:py-5"
          )}>
            {/* Logo */}
            <div className="flex items-center lg:flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200"
                aria-label="home"
              >
                <Logo />
              </Link>
            </div>

            {/* Centered Desktop Navigation - Using Flexbox instead of Transform */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
              <ul className="flex gap-6 text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative font-medium transition-all duration-300 py-2 px-2 text-muted-foreground hover:text-foreground group rounded-lg overflow-hidden",
                        pathname === item.href
                          ? "text-foreground"
                          : ""
                      )}
                    >
                      {/* Background highlight on hover */}
                      <span className="absolute inset-0 bg-[#7F5BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                      {/* Purple underline - using margin centering instead of transform */}
                      <span className={cn(
                        "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#7F5BFF] transition-all duration-300",
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      )}></span>
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center gap-3 lg:flex-shrink-0">
              <Button
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-transparent border border-border px-4"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90 hover:scale-[1.02] transition-all duration-200 hover:shadow-lg text-white border-0 px-4"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 relative z-50"
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="size-6 text-muted-foreground" />
              ) : (
                <Menu className="size-6 text-muted-foreground" />
              )}
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isClient && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[70] lg:hidden"
          onClick={closeMobileMenu}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

          {/* Menu Panel */}
          <div
            className="absolute top-[72px] left-4 right-4 bg-background/95 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-6">
              {/* Navigation Links */}
              <nav className="px-6">
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                          pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted/50 hover:text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 px-6 space-y-3">
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <Link href="/login" onClick={closeMobileMenu}>Login</Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90 text-white border-0"
                >
                  <Link href="/signup" onClick={closeMobileMenu}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroHeader;
