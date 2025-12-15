"use client";

import { motion } from "framer-motion";
import { LogoTimeline } from "@/components/ui/logo-timeline";

export default function SkillsCarousel() {
  const skills = [
    // Frontend - Row 1
    { label: "React", icon: "devicon-react-original colored", animationDelay: 0, animationDuration: 20, row: 1 },
    { label: "TypeScript", icon: "devicon-typescript-plain colored", animationDelay: -5, animationDuration: 20, row: 1 },
    { label: "Next.js", icon: "devicon-nextjs-original", animationDelay: -10, animationDuration: 20, row: 1 },
    { label: "JavaScript", icon: "devicon-javascript-plain colored", animationDelay: -15, animationDuration: 20, row: 1 },
    
    // Frontend - Row 2
    { label: "HTML5", icon: "devicon-html5-plain colored", animationDelay: -2, animationDuration: 25, row: 2 },
    { label: "CSS3", icon: "devicon-css3-plain colored", animationDelay: -7, animationDuration: 25, row: 2 },
    { label: "Redux", icon: "devicon-redux-original colored", animationDelay: -12, animationDuration: 25, row: 2 },
    { label: "Tailwind", icon: "devicon-tailwindcss-plain colored", animationDelay: -17, animationDuration: 25, row: 2 },
    
    // Backend - Row 3
    { label: "Node.js", icon: "devicon-nodejs-plain colored", animationDelay: -3, animationDuration: 30, row: 3 },
    { label: "Express", icon: "devicon-express-original", animationDelay: -8, animationDuration: 30, row: 3 },
    { label: "GraphQL", icon: "devicon-graphql-plain colored", animationDelay: -13, animationDuration: 30, row: 3 },
    { label: "C#", icon: "devicon-csharp-plain colored", animationDelay: -18, animationDuration: 30, row: 3 },
    
    // Tools & Others - Row 4
    { label: "Git", icon: "devicon-git-plain colored", animationDelay: -4, animationDuration: 35, row: 4 },
    { label: "Figma", icon: "devicon-figma-plain colored", animationDelay: -9, animationDuration: 35, row: 4 },
    { label: "Docker", icon: "devicon-docker-plain colored", animationDelay: -14, animationDuration: 35, row: 4 },
    { label: "Jest", icon: "devicon-jest-plain colored", animationDelay: -19, animationDuration: 35, row: 4 },
  ];

  return (
    <section id="skills" className="py-6 overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-center text-base font-semibold leading-7 text-foreground">Skills</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            Skills & Technologies
          </h2>
        </motion.div>

        <LogoTimeline 
          items={skills}
          height="h-[500px]"
          animateOnHover={false}
        />
        

        {/* Add Devicon stylesheet */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </div>
    </section>
  );
}