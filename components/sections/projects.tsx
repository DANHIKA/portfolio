"use client";

import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";



const images = [
  "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  "https://aceternity.com/images/products/thumbnails/new/ui-pack.png",
  "https://aceternity.com/images/products/thumbnails/new/ace-template.png",
  "https://aceternity.com/images/products/thumbnails/new/tail-ui.png",
  "https://aceternity.com/images/products/thumbnails/new/market.png",
  "https://aceternity.com/images/products/thumbnails/new/hooks.png",
  "https://aceternity.com/images/products/thumbnails/new/gradient.png",
  "https://aceternity.com/images/products/thumbnails/new/animated-ui.png",
  "https://aceternity.com/images/products/thumbnails/new/ace-dashboard.png",
  "https://aceternity.com/images/products/thumbnails/new/fragments.png",
];

// Duplicate the images array to have enough items for the marquee
const duplicatedImages = [...images, ...images, ...images];

export default function Projects() {
  

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 py-20">
      <div className="pointer-events-none absolute inset-0 z-0 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-900 to-neutral-950"></div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 px-4 text-center"
        >
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>

        </motion.div>
        <ThreeDMarquee images={duplicatedImages} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-50 transition-colors hover:bg-neutral-800"
          >
            <span>View More on GitHub</span>
            <svg
              className="size-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}