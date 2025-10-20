"use client";

import { Heart, ExternalLink } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
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

          {/* Right: Social Links */}
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
            >
              Twitter
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
            >
              LinkedIn
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
            >
              Facebook
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}