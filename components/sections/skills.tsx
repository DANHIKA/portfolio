"use client";

import { motion } from "framer-motion";
import { LogoLoop } from "@/components/logo-loop";

export default function SkillsCarousel() {
  const skills = [
    // Frontend
    { name: "React", icon: "devicon-react-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Redux", icon: "devicon-redux-original colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    
    // Backend
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "GraphQL", icon: "devicon-graphql-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    
    // Tools & Others
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Jest", icon: "devicon-jest-plain colored" },
  ];

  return (
    <section id="skills" className="py-6 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-6xl font-semibold tracking-tight text-primary">
              Skills & Technologies
            </h2>
        </motion.div>

        <LogoLoop items={skills} />
        

        {/* Add Devicon stylesheet */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </div>
    </section>
  );
}