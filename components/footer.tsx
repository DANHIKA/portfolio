"use client";

import { AnimatedLink } from "@/components/ui/animated-link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © 2025 Daniel Ntandika
          </span>
          <div className="flex gap-6">
            <AnimatedLink
              href="https://linkedin.com/in/hika-ntandika-34961b28"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="https://github.com/DANHIKA"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
            >
              GitHub
            </AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}