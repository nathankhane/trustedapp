"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Team", href: "/team" },
  { name: "Solution", href: "/solution" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Experts", href: "/experts" },
  { name: "Providers", href: "/providers" },
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
      setIsScrolled(window.scrollY > 50);
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
      <nav className="fixed z-50 w-full top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo and Mobile Menu Button */}
              <div className="flex items-center">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200"
                >
                  <Logo />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/20",
                        isActive && "text-foreground bg-muted/20"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-colors duration-200"
              >
                <Menu className={cn(
                  "h-6 w-6 transition-all duration-200",
                  menuState && "rotate-180 scale-0 opacity-0"
                )} />
                <X className={cn(
                  "absolute h-6 w-6 transition-all duration-200",
                  menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                )} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuState && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="fixed inset-x-0 top-16 bottom-0 bg-background border-t border-border/30 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className={cn(
                        "block text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-muted/20 text-lg font-medium transition-colors duration-200",
                        isActive && "text-foreground bg-muted/20 border-l-4 border-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-4 pt-6 border-t border-border/30">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200"
                  onClick={() => setMenuState(false)}
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setMenuState(false)}
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
