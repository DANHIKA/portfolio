"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

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
    
    // Tools & Others
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Jest", icon: "devicon-jest-plain colored" },
  ];

  // Duplicate skills array to create seamless loop effect
  const fullSkillsSet = [...skills, ...skills];
  
  // References for the two carousels (moving in opposite directions)
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-6 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Simple, clean title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-center">Skills & Technologies</h2>
        </motion.div>

        {/* First carousel - moving right */}
        <div className="relative mb-8">
          <div className="overflow-hidden py-4 mb-2">
            <motion.div
              ref={carousel1Ref}
              className="flex"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {fullSkillsSet.map((skill, index) => (
                <div 
                  key={`${skill.name}-1-${index}`} 
                  className="flex-shrink-0 mx-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <i className={`${skill.icon} text-3xl md:text-4xl`}></i>
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second carousel - moving left */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <motion.div
              ref={carousel2Ref}
              className="flex"
              animate={{
                x: [-2000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {fullSkillsSet.reverse().map((skill, index) => (
                <div 
                  key={`${skill.name}-2-${index}`} 
                  className="flex-shrink-0 mx-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <i className={`${skill.icon} text-3xl md:text-4xl`}></i>
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Add Devicon stylesheet */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </section>
  );
}