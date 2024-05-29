import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';

const LanguageBar = ({ languages }) => {
  return (
    <div>
      {/* Progress bar */}
      <div className="progress" style={{ height: '5px' }}>
        {languages.map((language, index) => (
          <div
            key={index}
            className="progress-bar"
            role="progressbar"
            style={{ width: language.percentage, backgroundColor: language.color }}
            aria-valuenow={parseFloat(language.percentage)}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        ))}
      </div>

      {/* Language names with color-coded bullets */}
      <div className="mt-3 d-flex flex-wrap">
        {languages.map((language, index) => (
          <div key={index} className="d-flex align-items-center me-3">
            <span
              className="d-inline-block rounded-circle"
              style={{ width: '12px', height: '12px', backgroundColor: language.color, marginRight: '0.5rem' }}
            ></span>
            <span>{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, features, image, languages }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section id='Projects' className="col-lg-4 col-md-6 mb-4">
      <div className={`card h-100 shadow-lg ${isDarkMode ? 'dark-bg text-light' : 'bg-light text-dark'}`}>
        <img src={image} className="card-img-top" alt={title} style={{ maxHeight: '250px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <div className="mb-3">
            <div className="row row-cols-auto">
              {features.map((feature, index) => (
                <div key={index} className="col mb-2">
                  <div className="border rounded p-2">{feature}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Bar */}
          <LanguageBar languages={languages} />

          <div className="mt-auto">
            <a href="#" className="btn btn-primary mt-3">
              Check it out <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
