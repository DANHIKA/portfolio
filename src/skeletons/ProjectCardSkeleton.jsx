import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProjectCard.css';

const LanguageBarSkeleton = () => {
  return (
    <div className="mt-3">
      {/* Progress bar skeleton */}
      <div className="language-bar-container">
        <Skeleton height={20} width="100%" />
      </div>

      {/* Language names with color-coded bullets skeleton */}
      <div className="language-names mt-2">
        {Array(3).fill().map((_, index) => (
          <div key={index} className="language d-flex align-items-center">
            <Skeleton circle={true} height={10} width={10} />
            <Skeleton width={60} className="ms-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCardSkeleton = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow-lg mb-5 border-0 h-100 me-2 bg-light">
        <Skeleton height={200} />
        <div className="card-body">
          <h2 className="card-title">
            <Skeleton width="60%" />
          </h2>
          
          <div className="row row-cols-auto mb-2">
            {Array(3).fill().map((_, index) => (
              <div key={index} className="col">
                <div className="feature-box shadow-lg">
                  <Skeleton width={100} height={20} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Language Bar Skeleton */}
          <LanguageBarSkeleton />

          <div className="d-flex align-items-center mt-auto">
            <Skeleton width={100} />
            <FontAwesomeIcon icon={faArrowRight} className="ms-2 text-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
