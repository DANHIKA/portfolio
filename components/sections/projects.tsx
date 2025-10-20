"use client";

import {
  motion
} from "framer-motion";
import { Safari } from "@/components/ui/safari";

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
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-6xl font-semibold tracking-tight text-primary">
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
                {/* Safari mockup */}
                <div className="relative m-4 mb-2 flex-1">
                  <Safari
                    url={site.url.replace(/^https?:\/\//, "")}
                    mode="simple"
                    className="w-full drop-shadow-lg"
                  />

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Project info */}
                <div className="p-4 pt-2">
                  <h3 className="text-6xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
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