"use client";

import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Name */}
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Daniel Ntandika
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-col flex-wrap gap-6 text-sm">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right: Contact & Social Links */}
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:hdntandika@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              hdntandika@gmail.com
            </a>
            <a
              href="tel:+265994425036"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              +265 994 425 036
            </a>
            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/in/hika-ntandika-34961b28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/DANHIKA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
              >
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}