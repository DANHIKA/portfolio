import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  // Sample features for demonstration
  const project1Features = ["Feature 1", "Feature 2", "Feature 3"];
  const project2Features = ["Feature A", "Feature B", "Feature C"];
  const project3Features = ["Feature X", "Feature Y", "Feature Z"];

  return (
    <div className={`${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Header />
      <HeroSection />
      <div className="container row mx-auto">
        <ProjectCard 
          image="https://media0.giphy.com/media/hp3O8SmKpALO1sQm56/200.webp?cid=ecf05e47y0umqh66auo7g39axsk6d2gsdq6oltuvakhkprwy&ep=v1_gifs_search&rid=200.webp&ct=g"
          title="Project 1" 
          features={project1Features} // Pass features for Project 1
        />
        <ProjectCard 
          image="https://media2.giphy.com/media/XBoCNi0bplBm88c6Bd/200.webp?cid=ecf05e47y0umqh66auo7g39axsk6d2gsdq6oltuvakhkprwy&ep=v1_gifs_search&rid=200.webp&ct=g"
          title="Project 2" 
          features={project2Features} // Pass features for Project 2
        />
        <ProjectCard
          image="https://media0.giphy.com/media/wpzoxeqixOEc4qcJal/200.webp?cid=ecf05e47530tyzbvz8ofoso7f7i1rvkvgk2kxb5upp5kmpb0&ep=v1_gifs_search&rid=200.webp&ct=g" 
          title="Project 3"  
          features={project3Features} // Pass features for Project 3
        />
        <ProjectCard
          image="https://media1.giphy.com/media/hXutauEVFmy9HT6JcP/200.webp?cid=ecf05e4718qxce8ycr40on4z116q4wpz153cg0hm00nr36gx&ep=v1_gifs_search&rid=200.webp&ct=g" 
          title="Project 4"  
          features={project3Features} // Pass features for Project 3
        />
      </div>
      <a>
        <FontAwesomeIcon />
      </a>
    </div>
  );
}

export default App;
