"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import Image from "next/image";
import { FullWidthDivider } from "@/components/ui/divider";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-50 right-50 z-40 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md py-3 shadow-sm"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 z-50">
          <div className="relative h-9 w-9 md:h-10 md:w-10">
            <Image
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Daniel&backgroundColor=5b46f8"
              alt="Daniel Ntandika"
              fill
              className="rounded-full ring-2 ring-primary/20"
            />
          </div>
          <span className="text-base font-semibold text-foreground md:text-lg">
            Daniel
            <span className="hidden sm:inline"> Ntandika</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="ml-2">
              <span className="flex items-center gap-1.5">Get in Touch</span>
            </Button>
            <AnimatedThemeToggler className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent transition-colors" />
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      <FullWidthDivider className="mt-3" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-24 px-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between group"
                >
                  <span>{item.name}</span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              ))}
              <div className="mt-4 pt-4">
                <AnimatedThemeToggler className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border hover:bg-accent transition-colors" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
