"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const experiences: Experience[] = [
    {
      company: "Tech Innovations Ltd",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: [
        "Led the development of a next-generation customer dashboard using Next.js and TypeScript, resulting in a 40% improvement in user engagement metrics.",
        "Implemented responsive design principles and accessibility standards across all company products.",
        "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
        "Collaborated with designers and product managers to create intuitive user interfaces that align with business goals."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Jest"]
    },
    {
      company: "WebSolutions Inc",
      position: "Frontend Developer",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple React applications for enterprise clients.",
        "Integrated RESTful APIs and GraphQL endpoints with frontend applications.",
        "Optimized application performance by implementing code splitting and lazy loading techniques.",
        "Participated in agile development processes including daily standups and sprint planning."
      ],
      technologies: ["React", "JavaScript", "CSS3", "GraphQL", "Webpack"]
    },
    {
      company: "Creative Digital Agency",
      position: "Web Developer",
      period: "2017 - 2019",
      description: [
        "Built responsive websites for clients across various industries using modern frontend technologies.",
        "Collaborated with designers to implement pixel-perfect designs.",
        "Optimized website performance and SEO.",
        "Maintained existing client websites and implemented new features as requested."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"]
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-4">
      <h2>Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-medium">{exp.position}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.company}</p>
              </div>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-light">{exp.period}</span>
            </div>
            
            <div className={`${index === activeIndex ? "block" : "hidden"}`}>
              <ul className="space-y-3 my-4 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)} 
              className="mt-4 flex items-center text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              {index === activeIndex ? (
                <>View less <ChevronUp size={16} className="ml-1" /></>
              ) : (
                <>View details <ChevronDown size={16} className="ml-1" /></>
              )}
            </button>
          </div>
        ))}
      </div>
      
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
