"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
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
  const pathname = usePathname();

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

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] w-full px-4 lg:px-6">
        <nav
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            isScrolled
              ? "mt-2 mx-2 lg:mx-auto max-w-5xl rounded-2xl shadow-md bg-background/95 backdrop-blur-md"
              : "mt-0 max-w-6xl"
          )}
        >
          <div className={cn(
            "transition-all duration-500",
            isScrolled ? "px-3 lg:px-6" : "px-4 lg:px-6"
          )}>
            <div className={cn(
              "flex items-center justify-between lg:justify-start lg:relative transition-all duration-500",
              isScrolled ? "py-2" : "py-4 lg:py-5"
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

              {/* Centered Desktop Navigation */}
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
                        {/* Purple underline */}
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

              {/* Desktop Right side buttons */}
              <div className="hidden lg:flex items-center gap-3 lg:flex-shrink-0">
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-foreground hover:bg-transparent border border-border px-4 hover:scale-105 hover:shadow-md hover:border-primary/30 transition-all duration-300"
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
                className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 relative z-[80]"
                aria-label="Toggle mobile menu"
                type="button"
              >
                {isMobileMenuOpen ? (
                  <X className="size-6 text-foreground" />
                ) : (
                  <Menu className="size-6 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - V1 Style with Proper Frosted Glass */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden mobile-menu-overlay">
          {/* Solid backdrop with frosted glass effect */}
          <div
            className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-black/80"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div className="relative z-[75] flex flex-col h-full">
            {/* Header Space */}
            <div className="h-[72px]" />

            {/* Menu Items */}
            <div className="flex-1 px-6 py-8">
              <nav>
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block text-2xl font-medium py-2 transition-colors duration-200",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="mt-12 space-y-4">
                <Button
                  variant="outline"
                  asChild
                  className="w-full h-12 text-base hover:scale-[1.02] hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <Link href="/login" onClick={closeMobileMenu}>Login</Link>
                </Button>
                <Button
                  asChild
                  className="w-full h-12 text-base bg-gradient-to-r from-[#7F5BFF] to-purple-600 hover:from-[#7F5BFF]/90 hover:to-purple-600/90 text-white border-0"
                >
                  <Link href="/signup" onClick={closeMobileMenu}>Sign Up</Link>
                </Button>
              </div>
            </div>

            {/* Mode Toggle at Bottom - V1 Style */}
            <div className="p-6 flex justify-end">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroHeader;
