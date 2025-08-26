"use client";

import { Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-gray-200/30 dark:border-gray-800/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Credits */}
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 flex-wrap justify-center">
            <span>© {currentYear} Daniel Ntandika.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using
            </span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:text-primary transition-colors underline"
            >
              Next.js
            </a>
            <span>+</span>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:text-primary transition-colors underline"
            >
              Tailwind
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
} 