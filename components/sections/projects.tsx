"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const sites = [
    { name: "MarketWeb MW", url: "https://www.marketwebmw.com" },
    { name: "MalawiNest", url: "https://malawinest.com/home" },
    { name: "Excellence Jobs MW", url: "https://excellencejobsmw.com" },
    { name: "VJ Marketing", url: "https://vj-marketing.vercel.app" },
    { name: "QR Code Generator", url: "https://qr-code-generator-silk-seven.vercel.app" },
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent py-6">
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 px-4 text-center"
        >
          <h2 className="text-6xl font-bold text-neutral-900 sm:text-5xl dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-6 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site, index) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer flex h-full flex-col overflow-hidden transition-all duration-300"
                onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')}
              >
                {/* Main content area */}
                <div className="relative flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 m-4 mb-2">
                  <div className="flex h-48 items-center justify-center">
                    {/* Simple preview placeholder */}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Project info */}
                <div className="p-4 pt-2">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {site.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {site.url.replace(/^https?:\/\//, "")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}