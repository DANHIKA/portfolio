import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience'; // Corrected typo
import ProjectCard from './components/ProjectCard';
import ProjectCardSkeleton from './skeletons/ProjectCardSkeleton';
import Testimonial from './components/Testimonial';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setProjects([
        {
          title: "Project 1",
          image: "https://placehold.co/400",
          features: ["Feature 1", "Feature 2", "Feature 3"],
          languages: [
            { name: "JavaScript", color: "#f0db4f", percentage: "70%" },
            { name: "HTML/CSS", color: "#61dafb", percentage: "30%" }
          ]
        },
        {
          title: "Project 2",
          image: "https://placehold.co/400",
          features: ["Feature A", "Feature B", "Feature C"],
          languages: [
            { name: "Python", color: "#3572a5", percentage: "80%" },
            { name: "Java", color: "#b07219", percentage: "20%" }
          ]
        },
        {
          title: "Project 3",
          image: "https://placehold.co/400",
          features: ["Feature X", "Feature Y", "Feature Z"],
          languages: [
            { name: "Ruby", color: "#701516", percentage: "60%" },
            { name: "PHP", color: "#8892bf", percentage: "40%" }
          ]
        }
      ]);
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds of loading time
  }, []);

  return (
    <div className={`${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Header />
      <HeroSection />
      <Skills />
      <Experience />
      <div className="container row mx-auto">
        {isLoading ? (
          Array(3).fill().map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
        ) : (
          projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              features={project.features}
              languages={project.languages}
            />
          ))
        )}
      </div>
      <Testimonial />
    </div>
  );
}

export default App;
