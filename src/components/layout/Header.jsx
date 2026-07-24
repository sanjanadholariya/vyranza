"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-sky-100 py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Main Long Brand Logo */}
          <Link href="/" className="inline-flex items-center group overflow-visible">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center"
            >
              <img
                src="/logo/long_bg_remove.png"
                alt="Vyranza"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain scale-125 sm:scale-140 origin-left transition-all duration-300 group-hover:opacity-90 -my-3"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/80 border border-sky-100/80 rounded-full px-3 py-1.5 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300"
                >
                  {/* Animated sliding pill background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-100 to-sky-200/70 border border-sky-200/50"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover glow ring (non-active only) */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-sky-50/80 transition-opacity duration-300" />
                  )}

                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive ? "text-royal font-semibold" : "text-foreground/75 hover:text-royal"
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-royal hover:bg-royal-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-royal/20 hover:shadow-lg hover:shadow-royal/30"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-foreground/70 hover:bg-sky-50 transition-colors border border-sky-100/80"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl border border-sky-100 shadow-xl mt-2"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="relative block overflow-hidden"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="activeMobilePill"
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-100 to-sky-200/70 border border-sky-200/50"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        )}
                        <span
                          className={cn(
                            "relative z-10 block px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-300",
                            isActive
                              ? "text-royal font-semibold"
                              : "text-foreground/75 hover:text-royal hover:bg-sky-50"
                          )}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="pt-2"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-royal hover:bg-royal-dark text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-royal/20"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
