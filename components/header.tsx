"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import Image from "next/image";
import { StaggeredMenu } from "./StaggeredMenu";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com/yourusername" },
  { label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
  { label: "GitHub", link: "https://github.com/yourusername" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert navItems to StaggeredMenu format
  const staggeredMenuItems = navItems.map((item) => ({
    label: item.name,
    link: item.href,
    ariaLabel: `Navigate to ${item.name} section`,
  }));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? "backdrop-blur-md py-3 shadow-sm border-border" 
            : "py-5 border-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 z-50">
              <span className="text-xl font-semibold text-primary">Daniel</span><span className="hidden sm:inline text-xl font-semibold text-primary"> Ntandika</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 rounded-md transition-colors hover:text-primary hover:bg-accent"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="ml-2">
              Get in Touch
            </Button>
            <AnimatedThemeToggler className="ml-2 h-9 w-9 rounded-md border border-border hover:bg-accent" />
          </nav>
        </div>
      </header>

      {/* Mobile Staggered Menu */}
      <div className="md:hidden fixed inset-0 z-50">
        {/* @ts-ignore - StaggeredMenu is a JSX component without TypeScript definitions */}
        <StaggeredMenu
          position="right"
          colors={["#5b46f8", "#8b5cf6", "#a78bfa"]}
          // @ts-ignore
          items={staggeredMenuItems}
          // @ts-ignore
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          isFixed={true}
          accentColor="#5b46f8"
          menuButtonColor="#e9e9ef"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          // logoUrl="https://api.dicebear.com/7.x/notionists/svg?seed=Daniel&backgroundColor=5b46f8"
        />
      </div>
    </>
  );
}