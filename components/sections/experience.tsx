"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  logo?: string;
}

export default function ExperienceSection() {
  // Function to highlight important technical terms in responsibility descriptions
  const highlightKeywords = (text: string) => {
    // Define important technical terms to highlight
    const keywords = [
      // Core technologies and frameworks
      'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'Vue.js', 'C#', '.NET', 'PHP',
      'RESTful APIs', 'database schemas', 'UI/UX', 'secure authentication workflows',
      
      // Tools and platforms
      'PayPal', 'PayChangu', 'Microsoft 365', 'Active Directory', 'Sophos', 'Sage ESS/Payroll', 'Bosch',
      
      // Specific technical terms requested
      'CCTV', 'fingerprint access', 'fire alarms', 'Excel macros', 
      'ICT inventory management system', 'fuel voucher system', 'User Acceptance Testing',
      'licensing system', 'renewal licensing system', 'ICT issue ticketing and document repository system',
      'delivered staff training', 'troubleshooting processes', 'Documented technical specifications',
      // Platform names and descriptions
      'nordin.mw', 'Social platform', 'malawinest.com', 'tourism website',
      'excellencejobsmw.com', 'job recruitment platform', 'owlplanetshop.com', 'E-commerce platform'
    ];

    // Split text into words and highlight matching keywords
    let result: React.ReactNode[] = [text];
    
    keywords.forEach(keyword => {
      const newResult: React.ReactNode[] = [];
      result.forEach((part, index) => {
        if (typeof part === 'string') {
          const parts = part.split(new RegExp(`(${keyword})`, 'gi'));
          parts.forEach((str, i) => {
            if (str.toLowerCase() === keyword.toLowerCase()) {
              newResult.push(
                <TextHighlighter key={`${index}-${i}`} highlightColor="hsl(160, 50%, 70%)">
                  {str}
                </TextHighlighter>
              );
            } else {
              newResult.push(str);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });

    return result;
  };

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
    <div className="mx-auto min-h-screen w-full max-w-7xl lg:border-x">
      <div className="mx-4 grid grid-cols-1 border-x md:mx-0 md:grid-cols-2 md:border-x-0">
        <div className="space-y-4 px-4 pt-12 pb-4 md:border-r">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-primary">Experience</h2>
          <p className="text-muted-foreground">
            Here's a timeline of my professional journey and the impactful work I've done at various organizations.
          </p>
        </div>
        <div className="place-items-start pt-12">
          <Accordion defaultValue="item-0" type="single">
            {experiences.map((exp, index) => (
              <AccordionItem
                className="first:border-t last:border-b data-[state=open]:bg-card px-4"
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex gap-4 items-start w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 mt-0.5">
                      {exp.logo ? (
                        <div className="h-10 w-10 rounded bg-background flex items-center justify-center overflow-hidden">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={40}
                            height={40}
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
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
                        <p className="text-xs text-muted-foreground self-start mt-0.5">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-0 pb-4">
                  <div className="pl-14 pr-2">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary/60 mt-1.5 flex-shrink-0">•</span>
                          <span>{highlightKeywords(resp)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
