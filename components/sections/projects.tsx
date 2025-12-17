"use client";

import {
  motion
} from "framer-motion";
import { Safari } from "@/components/ui/safari";
import { Iphone } from "@/components/ui/iphone";
import { AnimatedLink } from "@/components/ui/animated-link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid } from "@/components/ui/grid";
import { useState } from "react";

interface Site {
  name: string;
  url: string;
  internal: boolean;
  tech: string;
  previewSrc: string;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const sites: Site[] = [
    { 
      name: "Nordin", 
      url: "https://nordin.mw/", 
      internal: false, 
      tech: "React, Next.js, Tailwind CSS",
      previewSrc: "/projects/nordin.png"
    },
    { 
      name: "School Management System", 
      url: "https://edunest-bay.vercel.app/", 
      internal: false, 
      tech: "WordPress, PHP, MySQL",
      previewSrc: "/projects/edunest.png"
    },
    { 
      name: "Owl Planet Shop", 
      url: "https://www.owlplanetshop.com/", 
      internal: false, 
      tech: "Shopify, Liquid, JavaScript",
      previewSrc: "/projects/shop.png"
    },
    { 
      name: "MarketWeb MW", 
      url: "https://www.marketwebmw.com", 
      internal: false, 
      tech: "WordPress, PHP, MySQL",
      previewSrc: "/projects/marketweb.png"
    },
    { 
      name: "MalawiNest", 
      url: "https://malawinest.com/home", 
      internal: false, 
      tech: "React, Node.js, MongoDB",
      previewSrc: "/projects/malawinest.png"
    },
    { 
      name: "Safe Home", 
      url: "/case-studies/safe-home", 
      internal: true, 
      tech: "Figma, React, TypeScript",
      previewSrc: "/projects/Safe%20Home/wireframes/Home.png"
    },
  ];

  const filteredSites = sites.filter(site => {
    if (filter === "all") return true;
    if (filter === "web") return !site.internal;
    if (filter === "case") return site.internal;
    return true;
  });

  return (
    <section id="projects" className="relative flex flex-col items-center overflow-hidden py-6">
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 px-4 w-full max-w-6xl flex justify-between items-center"
        >
          <div className="flex flex-col">
            <p className="text-base font-semibold leading-7 text-foreground text-left">Projects</p>
            <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary text-left">
              Featured Projects
            </h2>
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter projects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="web">Web Projects</SelectItem>
              <SelectItem value="case">Case Studies</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <div className="mt-6 w-full max-w-6xl px-4 block md:hidden">
          {/* Mobile: Single column layout without Grid */}
          <div className="space-y-6">
            {filteredSites.map((site, index) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 border border-border rounded-lg p-4"
              >
                {/* Safari mockup or iPhone for internal case studies */}
                <div className="relative m-4 mb-2 flex-1">
                  {site.internal ? (
                    <Iphone src={site.previewSrc || ""} className="mx-auto h-72 w-auto drop-shadow-lg" />
                  ) : (
                    <Safari
                      url={site.url.startsWith("/") ? site.url : site.url.replace(/^https?:\/\//, "")}
                      imageSrc={site.previewSrc || ""}
                      iframeSrc={!site.previewSrc ? site.url : undefined}
                      mode="simple"
                      className="w-full drop-shadow-lg"
                    />
                  )}
                </div>

                {/* Project info */}
                <div className="p-4 pt-2">
                  <div className="mb-1">
                    <AnimatedLink
                      href={site.url}
                      className="font-semibold text-neutral-900 dark:text-neutral-100"
                      target={site.internal ? "_self" : "_blank"}
                    >
                      {site.name}
                    </AnimatedLink>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {site.tech.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full max-w-6xl px-4 hidden md:block">
          {/* Desktop: Grid layout */}
          <Grid 
            columns={2} 
            rows={Math.ceil(filteredSites.length / 2)} 
            height="h-auto" 
            width="w-full"
            showPlusIcons={true}
            className="border-border min-h-[400px]"
          >
            {filteredSites.map((site, index) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 p-4"
              >
                {/* Safari mockup or iPhone for internal case studies */}
                <div className="relative m-4 mb-2 flex-1">
                  {site.internal ? (
                    <Iphone src={site.previewSrc || ""} className="mx-auto h-72 w-auto drop-shadow-lg" />
                  ) : (
                    <Safari
                      url={site.url.startsWith("/") ? site.url : site.url.replace(/^https?:\/\//, "")}
                      imageSrc={site.previewSrc || ""}
                      iframeSrc={!site.previewSrc ? site.url : undefined}
                      mode="simple"
                      className="w-full drop-shadow-lg"
                    />
                  )}
                </div>

                {/* Project info */}
                <div className="p-4 pt-2">
                  <div className="mb-1">
                    <AnimatedLink
                      href={site.url}
                      className="font-semibold text-neutral-900 dark:text-neutral-100"
                      target={site.internal ? "_self" : "_blank"}
                    >
                      {site.name}
                    </AnimatedLink>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {site.tech.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Underlined case study link for internal case study items */}
                </div>
              </motion.div>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}