"use client";

import {
  motion
} from "framer-motion";
import { Iphone } from "@/components/ui/iphone";
import { AnimatedLink } from "@/components/ui/animated-link";

export default function Projects() {
  const sites = [
    { name: "Nordin", url: "https://nordin.mw/" },
    { name: "School Management System", url: "https://edunest-bay.vercel.app/" },
    { name: "Owl Planet Shop", url: "https://www.owlplanetshop.com/" },
    { name: "MarketWeb MW", url: "https://www.marketwebmw.com" },
    { name: "MalawiNest", url: "https://malawinest.com/home" },
    { name: "Excellence Jobs MW", url: "https://excellencejobsmw.com" },
    { name: "Safe Home", url: "/case-studies/safe-home", internal: true, previewSrc: "/projects/Safe%20Home/wireframes/Home.png" },
  ];

  return (
    <section id="projects" className="relative flex w-screen -mx-[calc((100vw-100%)/2)] flex-col items-center justify-center overflow-hidden py-6">
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center justify-center px-4 text-center"
        >
          <p className="text-center text-base font-semibold leading-7 text-foreground">Projects</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-6 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sites.map((site, index) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden transition-all duration-300"
              >
                {/* Iframe or iPhone for internal case studies */}
                <div className="relative m-4 mb-2 flex-1 min-h-[400px]">
                  {"internal" in site ? (
                    <Iphone src={(site as { previewSrc?: string }).previewSrc || ""} className="mx-auto h-72 w-auto drop-shadow-lg" />
                  ) : (
                    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-border bg-background shadow-lg">
                      <div style={{ 
                        width: "125%", 
                        height: "125%", 
                        transform: "scale(0.8)", 
                        transformOrigin: "top left",
                        position: "relative"
                      }}>
                        <iframe
                          src={site.url}
                          className="border-0"
                          style={{ 
                            width: "100%", 
                            height: "100%",
                            minWidth: "100%"
                          }}
                          title={site.name}
                          scrolling="no"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Project info */}
                <div className="p-4 pt-2">
                  <div className="mb-1">
                    <AnimatedLink
                      href={site.url}
                      className="font-semibold text-neutral-900 dark:text-neutral-100"
                      target={(site as { internal?: boolean }).internal ? "_self" : "_blank"}
                    >
                      {site.name}
                    </AnimatedLink>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {site.url.startsWith("/") ? site.url : site.url.replace(/^https?:\/\//, "")}
                  </p>
                  {/* Underlined case study link for internal case study items */}
                  {"internal" in site ? (
                    <div className="mt-2">
                      <AnimatedLink
                        href={site.url}
                        className="text-sm"
                      >
                        Case study
                      </AnimatedLink>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}