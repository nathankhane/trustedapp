"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const [isClient, setIsClient] = React.useState(false);
  const pathname = usePathname();

  // Enhanced scroll tracking
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  // Transform values based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);
  const headerPadding = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const headerBlur = useTransform(scrollY, [0, 50, 150], ["blur(0px)", "blur(8px)", "blur(12px)"]);
  const headerOpacity = useTransform(scrollY, [0, 50], ["0.95", "0.98"]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
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

  const isScrolled = scrollPosition > 50;

  return (
    <header>
      <motion.nav
        className="fixed z-50 w-full px-2"
        style={{
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
        }}
      >
        <motion.div
          className={cn(
            "mx-auto mt-2 px-4 sm:px-6 transition-all duration-500 lg:px-12",
            isClient && isScrolled &&
            "bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-border/20 lg:px-8",
          )}
          style={{
            maxWidth: isScrolled ? "80rem" : "96rem",
            scale: headerScale,
            opacity: headerOpacity,
          }}
          animate={{
            maxWidth: isScrolled ? "80rem" : "96rem",
            y: isScrolled ? 4 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0"
            style={{
              height: headerHeight,
              padding: headerPadding,
            }}
            animate={{
              paddingTop: isScrolled ? "0.75rem" : "1rem",
              paddingBottom: isScrolled ? "0.75rem" : "1rem",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Logo and Mobile Menu Button */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200 z-50 relative"
              >
                <motion.div
                  style={{ scale: logoScale }}
                  whileHover={{ scale: isScrolled ? 0.95 : 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Logo />
                </motion.div>
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
            <motion.div
              className="absolute inset-0 m-auto hidden size-fit lg:block"
              animate={{
                scale: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={index}>
                      <motion.div
                        whileHover={{
                          y: -2,
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "relative text-muted-foreground font-medium transition-all duration-300 hover:text-foreground block px-3 py-2 rounded-lg",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:rounded-lg before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:scale-105",
                            "after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full",
                            isActive && "text-foreground bg-muted/20 after:w-full"
                          )}
                        >
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Desktop Auth Buttons */}
            <motion.div
              className="hidden lg:flex lg:items-center lg:gap-3"
              animate={{
                scale: isScrolled ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size={isScrolled ? "sm" : "sm"}
                  className="hover:shadow-md transition-all duration-200 border-border/40 hover:border-border"
                >
                  <Link href="/login">Login</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size={isScrolled ? "sm" : "sm"}
                  className="hover:shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {menuState && (
        <motion.div
          className="lg:hidden fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-background/90 backdrop-blur-xl absolute inset-0" />
          <motion.div
            className="fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-2xl border-t border-border/30 p-6 shadow-2xl overflow-y-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {/* Mobile Navigation Links */}
              <ul className="space-y-4">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className={cn(
                          "text-muted-foreground hover:text-foreground block duration-200 transition-all hover:translate-x-2 px-4 py-3 rounded-lg hover:bg-muted/20 text-lg font-medium",
                          isActive && "text-foreground bg-muted/20 border-l-4 border-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile Auth Buttons */}
              <motion.div
                className="flex flex-col space-y-4 pt-6 border-t border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 hover:shadow-md"
                  onClick={() => setMenuState(false)}
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 hover:shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setMenuState(false)}
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};
