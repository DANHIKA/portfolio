"use client";

import { AnimatedLink } from "@/components/ui/animated-link";

export default function Footer() {
  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Name */}
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Daniel Ntandika
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-col flex-wrap gap-6 text-sm">
            <AnimatedLink
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              target="_self"
            >
              About
            </AnimatedLink>
            <AnimatedLink
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              target="_self"
            >
              Projects
            </AnimatedLink>
            <AnimatedLink
              href="#experience"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              target="_self"
            >
              Experience
            </AnimatedLink>
            <AnimatedLink
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              target="_self"
            >
              Contact
            </AnimatedLink>
          </nav>

          {/* Right: Contact & Social Links */}
          <div className="flex flex-col gap-3 text-sm">
            <AnimatedLink
              href="mailto:hdntandika@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              hdntandika@gmail.com
            </AnimatedLink>
            <AnimatedLink
              href="tel:+265994425036"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              +265 994 425 036
            </AnimatedLink>
            <div className="flex gap-4 mt-2">
              <AnimatedLink
                href="https://linkedin.com/in/hika-ntandika-34961b28"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                LinkedIn
              </AnimatedLink>
              <AnimatedLink
                href="https://github.com/DANHIKA"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                GitHub
              </AnimatedLink>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}