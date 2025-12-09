"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DrawText } from "../ui/draw-text";

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  logo?: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "CodeTechMw",
      position: "Software Developer",
      period: "May 2023 — Present",
      responsibilities: [
        "Developed full-stack web applications using JavaScript (ES6+), TypeScript, Node.js, React.js, Vue.js, PHP, and C# (.NET).",
        "Designed and implemented RESTful APIs, database schemas, and secure authentication workflows.",
        "Built Nordin (nordin.mw): Social platform with posts, comments, likes, surveys, referrals, and rewards system. Managed frontend, backend, and database design.",
        "Built MalawiNest (malawinest.com): Dynamic tourism website with enhanced UI/UX and interactive features.",
        "Built Excellence Jobs MW (excellencejobsmw.com): Dynamic job recruitment platform with secure data management.",
        "Built Owl Planet Shop (owlplanetshop.com): E-commerce platform with PayPal and PayChangu payment integration.",
        "Built SmartDrive Car Hire (smartdrivecarhire.vercel.app): Car rental platform with booking system, vehicle management, payment integration, and responsive UI/UX.",
      ],
    },
    {
      company: "MERA",
      position: "Officer and Software Developer Intern",
      period: "Sept 2024 — Present",
      responsibilities: [
        "Conducted User Acceptance Testing (UAT) for the new licensing system, ensuring functionality and usability requirements were met before launch.",
        "Supported contractors in deploying and maintaining the renewal licensing system, ensuring smooth integration with existing infrastructure.",
        "Developed a fuel voucher system for motorcyclists generating daily QR codes from national IDs, reducing fuel misuse and smuggling.",
        "Built an ICT issue ticketing and document repository system to organize support requests and improve documentation access.",
        "Created an ICT inventory management system to track issuance and return of equipment, enhancing accountability and record accuracy.",
        "Designed a simplified forms application similar to Microsoft Forms to streamline meetings and internal data collection.",
        "Developed automated Excel macros and functions for fuel inspection reports, improving processing speed and accuracy.",
        "Assisted in systems integration and setup of servers, IP phones, and Bosch security systems (CCTV, fingerprint access, fire alarms).",
        "Provided technical support for software tools and enterprise applications (Sophos, Microsoft 365, Active Directory, Sage ESS/Payroll).",
        "Documented technical specifications, troubleshooting processes, and delivered staff training on software tools and ICT best practices.",
      ],
      logo: "/experience/mera.png",
    },
    {
      company: "Ministry of Energy Malawi",
      position: "ICT Officer Intern",
      period: "March 2024 — Sept 2024",
      responsibilities: [
        "Assisted in organizing and tracking daily ICT support tasks to ensure timely resolution of technical issues.",
        "Provided basic technical support for office equipment, including printers, scanners, and other devices.",
        "Supported staff with common software and hardware issues, ensuring smooth day-to-day operations.",
      ],
      logo: "/experience/energy.png",
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-16 lg:py-24 w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <DrawText
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
            >
              Experience
            </DrawText>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have worked with innovative organizations to help build their top-notch products and systems, delivering impactful solutions that drive efficiency and growth.
            </p>
          </motion.div>

          {/* Right Side - Accordion Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {experiences.map((exp, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/60 rounded-lg px-4 bg-background/40 hover:bg-background/60 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex gap-4 items-start w-full">
                      {/* Logo */}
                      <div className="flex-shrink-0 mt-1">
                        {exp.logo ? (
                          <div className="h-10 w-10 rounded-full bg-background border border-border/60 flex items-center justify-center overflow-hidden">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={40}
                              height={40}
                              className="object-contain p-1"
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-center">
                            <span className="text-base font-bold text-primary">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {exp.position}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              @{exp.company}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground sm:text-right whitespace-nowrap">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-0 pb-4">
                    <div className="pl-14">
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary/60 mt-1.5 flex-shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
