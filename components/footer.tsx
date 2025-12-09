"use client";

import { AnimatedLink } from "@/components/ui/animated-link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full bg-transparent border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 md:gap-12 mb-12">
          {/* Left Column: Branding, Description, Contact, Social */}
          <div className="flex flex-col gap-6">
            {/* Logo/Branding */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-lg">D</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base">Daniel Ntandika</span>
                  <span className="text-muted-foreground text-xs font-medium">Full Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              Passionate developer creating innovative web experiences with modern technologies and creative solutions.
            </p>

            {/* Dot Separator */}
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground font-medium">
              <AnimatedLink
                href="mailto:hdntandika@gmail.com"
                className="hover:text-foreground transition-colors font-medium"
              >
                hdntandika@gmail.com
              </AnimatedLink>
              <AnimatedLink
                href="tel:+265994425036"
                className="hover:text-foreground transition-colors font-medium"
              >
                +265 994 425 036
              </AnimatedLink>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-auto">
              <AnimatedLink
                href="https://linkedin.com/in/hika-ntandika-34961b28"
                className="w-6 h-6 hover:opacity-70 transition-opacity"
                target="_blank"
              >
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </AnimatedLink>
              <AnimatedLink
                href="https://github.com/DANHIKA"
                className="w-6 h-6 hover:opacity-70 transition-opacity"
                target="_blank"
              >
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </AnimatedLink>
            </div>
          </div>

          {/* Middle Column: Navigation Menu */}
          <div className="flex flex-col">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <AnimatedLink
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-3 text-sm group",
                      "hover:text-foreground transition-colors"
                    )}
                    target={item.href.startsWith("#") ? "_self" : "_blank"}
                  >
                    <span className="text-muted-foreground group-hover:text-foreground font-semibold">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </AnimatedLink>
                  {index < navItems.length - 1 && (
                    <div className="h-px bg-border"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Column: Call to Action */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground">
              Ready to start a project?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Share your ideas with me, and let's begin turning your vision into reality today.
            </p>
          </div>
        </div>

        {/* Footer Bar: Copyright spanning middle and right columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-border">
          <div></div>
          <div className="md:col-span-2 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-medium">
            <span>Daniel Ntandika © 2025</span>
            <span>Website by Daniel Ntandika</span>
          </div>
        </div>
      </div>
    </footer>
  );
}