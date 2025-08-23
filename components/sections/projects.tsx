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
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-5xl dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent">
            Featured Projects
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/DANIEL%20HIKANTANDIKA%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 hover:dark:bg-neutral-800"
            >
              View CV (PDF)
            </a>
            <a
              href="/DANIEL%20HIKANTANDIKA%20CV.pdf"
              download
              className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black dark:bg-neutral-100 dark:text-neutral-900 hover:dark:bg-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <div className="mt-6 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((s) => (
              <motion.div
                key={s.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/40 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {/* favicon via google s2 */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(s.url)}&sz=64`}
                      alt=""
                      className="size-5"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">{s.name}</h3>
                    <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">{s.url.replace(/^https?:\/\//, "")}</p>
                  </div>
                </div>
                <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800/60 dark:bg-black/30">
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    {/* Zoomed-out iframe preview */}
                    <div
                      className="absolute inset-0 origin-top-left"
                      style={{ transform: "scale(0.4)", width: "250%", height: "250%" }}
                    >
                      <iframe
                        src={s.url}
                        title={s.name}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-black dark:bg-neutral-100 dark:text-neutral-900 hover:dark:bg-white"
                  >
                    Open Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}