import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ProjectCard.css';

const LanguageBar = ({ languages }) => {
  // Calculate the total percentage of all languages
  const totalPercentage = languages.reduce((acc, cur) => acc + parseFloat(cur.percentage), 0);

  return (
    <div className="mt-3">
      {/* Progress bar */}
      <div className="language-bar-container">
        {languages.map((language, index) => (
          <div
            key={index}
            className="language-bar-segment"
            style={{ width: language.percentage, backgroundColor: language.color }}
          ></div>
        ))}
      </div>

      {/* Language names with color-coded bullets */}
      <div className="language-names">
        {languages.map((language, index) => (
          <div key={index} className="language">
            <span className="language-bullet" style={{ backgroundColor: language.color }}></span>
            <span className="language-name">{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};



const ProjectCard = ({ title, features, image, languages }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="col-lg-6 mb-4"> 
      <div className={`card shadow-lg mb-5 border-0 h-100 me-2 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="row row-cols-auto mb-2"> 
            {features.map((feature, index) => (
              <div key={index} className="col">
                <div className="feature-box shadow-lg">{feature}</div> 
              </div>
            ))}
          </div>
          
          {/* Language Bar */}
          <LanguageBar languages={languages} />

          <div className="d-flex align-items-center mt-auto">
            <a href="#" className="mt-3">
              Check it out <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
