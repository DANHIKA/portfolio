"use client";

import { ArcTimeline } from "@/components/magicui/arc-timeline";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function ExperienceSection() {

  const experiences: Experience[] = [
    {
      company: "Ministry of Energy Malawi",
      position: "ICT Intern",
      period: "Sept 2024 - Present",
      description: [
        "Assisted in organizing and tracking daily ICT support tasks to ensure timely resolution of technical issues.",
        "Provided basic technical support for office equipment, including printers, scanners, and other devices.",
        "Supported staff with common software and hardware issues, ensuring smooth day-to-day operations."
      ],
      technologies: ["Microsoft 365", "Windows", "macOS", "Networking", "Helpdesk"]
    },
    {
      company: "MERA",
      position: "ICT Intern",
      period: "March 2024 - Sept 2024",
      description: [
        "Guided external contractors during the setup of servers and services in the data center.",
        "Assisted in the configuration and registration of IP phones.",
        "Worked with Bosch systems, including fingerprint access control, CCTV, and fire alarm systems.",
        "Provided technical support for various systems and applications.",
        "Supported and managed tools such as Sophos, Microsoft 365, Active Directory, Bosch, and Sage ESS and Payroll.",
        "Adapted quickly to using macOS for daily operations, improving cross-platform efficiency.",
        "Assisted in documenting technical specifications and troubleshooting processes.",
        "Helped deliver training sessions to staff on software tools and ICT best practices.",
        "Participated in the integration of new systems into MERA’s existing infrastructure, ensuring smooth performance and compatibility."
      ],
      technologies: ["Active Directory", "Sophos", "Bosch Systems", "IP Telephony", "Windows Server", "macOS"]
    },
    {
      company: "Staxo Group",
      position: "Helpdesk Volunteer",
      period: "Oct 2023 - Apr 2024",
      description: [
        "Received, logged, and tracked IT support tickets from staff, ensuring timely resolution of technical issues.",
        "Provided first-line support for hardware and software problems, including desktops, laptops, printers, and office applications.",
        "Assisted users with troubleshooting network connectivity issues, email, and system access.",
        "Escalated complex technical issues to senior IT staff while maintaining follow-up communication with end users.",
        "Documented solutions and maintained records of recurring issues to improve helpdesk knowledge and efficiency.",
        "Assisted in configuring and deploying new user accounts, devices, and software applications."
      ],
      technologies: ["Ticketing", "Windows", "Office Applications", "Networking", "User Provisioning"]
    }
  ];

  const timelineData = experiences.map((exp) => ({
    time: exp.period,
    steps: [
      {
        icon: <BriefcaseIcon />,
        content: (
          <span>
            {exp.position} @ {exp.company}
          </span>
        ),
      },
      ...exp.description.slice(0, 3).map((d, i) => ({
        icon: <DotIcon key={`desc-${i}`} />,
        content: d,
      })),
      {
        icon: <TechIcon />,
        content: exp.technologies.join(" • "),
      },
    ],
  }));

  return (
    <section id="experience" className="py-6 max-w-4xl mx-auto px-4">
      <h2>Experience</h2>

      <ArcTimeline
        className="w-full"
        data={timelineData}
        arcConfig={{
          circleWidth: 1600,
          angleBetweenMinorSteps: 1,
          lineCountFillBetweenSteps: 6,
          boundaryPlaceholderLinesCount: 24,
        }}
        defaultActiveStep={{ time: experiences[0]?.period, stepIndex: 0 }}
      />

      <div className="mt-12 text-center">
        <a
          href="#"
          className="text-sm border-b border-gray-400 hover:border-gray-600 dark:border-gray-500 dark:hover:border-gray-300 pb-0.5 transition-colors"
        >
          Download full resume
        </a>
      </div>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4h4a2 2 0 0 1 2 2v1h3a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3V6a2 2 0 0 1 2-2Zm0 3h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1Zm-4 5v7h12v-7h-3v1a1 1 0 1 1-2 0v-1h-2v1a1 1 0 1 1-2 0v-1H6Z" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6h16v10H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
