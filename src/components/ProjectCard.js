import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';

const ProjectCard = ({ title, features, image }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="col-lg-6 mb-4"> {/* Make each card wider */}
      <div className={`card shadow-lg mb-5 border-0 h-100 me-2 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="row row-cols-auto mb-2"> {/* Display features in a row */}
            {features.map((feature, index) => (
              <div key={index} className="col">
                <div className="feature-box shadow-lg">{feature}</div> {/* Small box for each feature */}
              </div>
            ))}
          </div>
          
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
