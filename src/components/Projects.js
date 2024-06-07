import React, { useContext, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate data fetching
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
          { name: "JavaScript", color: "#f0db4f", percentage: "70%" },
          { name: "HTML/CSS", color: "#61dafb", percentage: "30%" }
        ]
      },
      {
        title: "Project 3",
        image: "https://placehold.co/400",
        features: ["Feature X", "Feature Y", "Feature Z"],
        languages: [
          { name: "JavaScript", color: "#f0db4f", percentage: "70%" },
          { name: "HTML/CSS", color: "#61dafb", percentage: "30%" }
        ]
      }
    ]);
  }, []);

  return (
    <section className="container row mx-auto">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className={`mb-4 display-5 text-center`}>Projects</h2>
          <p className="text-secondary mb-5 text-center lead fs-4">
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            title={project.title}
            features={project.features}
            languages={project.languages}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
