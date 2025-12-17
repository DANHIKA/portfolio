"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggleButton4 } from "@/components/ui/theme-toggle-button4";
import { SimpleStaggeredMenu } from "./SimpleStaggeredMenu";
import ElasticLine from "@/components/fancy/physics/elastic-line";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Why Me", href: "#why-choose-me" },
  { name: "Contact", href: "/contact" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://linkedin.com/in/hika-ntandika-34961b28" },
  { label: "GitHub", link: "https://github.com/DANHIKA" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (href: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home page with hash
      window.location.href = `/${href}`;
    } else {
      // If on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Convert navItems to StaggeredMenu format
  const staggeredMenuItems = navItems.map((item) => ({
    label: item.name,
    link: item.href,
    ariaLabel: `Navigate to ${item.name} section`,
  }));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-md py-3 shadow-sm" 
            : "py-5"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 z-50">
              <span className="text-xl font-heading font-semibold text-primary">DN</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              item.name === "Contact" ? (
                <AnimatedShinyButton key={item.name} url={item.href}>
                  {item.name}
                </AnimatedShinyButton>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 rounded-md transition-colors hover:text-primary hover:bg-accent"
                >
                  {item.name}
                </button>
              )
            ))}
            <ThemeToggleButton4 className="ml-2 h-9 w-9 border border-border hover:bg-accent" />
          </nav>
        </div>
        {/* Elastic line divider below header */}
        <div className="absolute bottom-0 left-0 right-0 h-1 text-border overflow-visible border-0 bg-transparent outline-none pointer-events-auto" aria-hidden style={{ border: 'none', boxShadow: 'none' }}>
          <ElasticLine isVertical={false} strokeWidth={1} className="text-border" />
        </div>
      </header>

      {/* Mobile Staggered Menu */}
      <div className="md:hidden fixed inset-0 z-50">
        <SimpleStaggeredMenu
          position="right"
          // @ts-expect-error - StaggeredMenu items prop type not defined
          items={staggeredMenuItems}
          // @ts-expect-error - StaggeredMenu socialItems prop type not defined
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          accentColor="hsl(var(--primary))"
        />
      </div>
    </>
  );
}