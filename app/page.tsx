"use client"

import AboutMe from "@/components/sections/about-me";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
// import Testimonials from "@/components/sections/testimonials";
import SkillsSlider from "@/components/sections/skills";
import Stats from "@/components/sections/stats";
import CurvedLoop from "@/animations/CurvedLoop/CurvedLoop";

export default function Home() {
  return (
    <>
      <Hero />
      <CurvedLoop
        marqueeText="✦ By The Numbers ✦ Stats ✦  Insights ✦ Metrics ✦ Data ✦ Performance ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      />
      <Stats /> 
      <CurvedLoop
        marqueeText="✦ About Me ✦ Developer ✦ Designer ✦ Builder ✦ Problem Solver ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      />
      <AboutMe />
      <CurvedLoop
        marqueeText="✦ Skills ✦ Frontend ✦ Backend ✦ DevOps ✦ Cloud ✦ AI ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102  overflow-hidden"
        curveAmount={100}
      />
      <SkillsSlider />
      <CurvedLoop
        marqueeText="✦ Projects ✦ Case Studies ✦ Open Source ✦ Experiments ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      />
      <Projects />
      <CurvedLoop
        marqueeText="✦ Testimonials ✦ Kind Words ✦ Recommendations ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      />
      {/* <Testimonials />
      <CurvedLoop
        marqueeText="✦ Experience ✦ Roles ✦ Achievements ✦ Impact ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      /> */}
      <Experience />
      <CurvedLoop
        marqueeText="✦ Get In Touch ✦ Contact ✦ Email ✦ Connect ✦ Collaborate ✦"
        compact
        interactive={false}
        className="text-[4rem] md:text-[6rem] fill-gray-900 dark:fill-white"
        containerClassName="h-80 md:h-102 overflow-hidden"
        curveAmount={100}
      />
      <Contact />
    </>
  );
}

