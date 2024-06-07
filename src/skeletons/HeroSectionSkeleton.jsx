import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/HeroSection.css'; // Ensure this CSS file exists and is imported for consistent styling

const HeroSectionSkeleton = () => {

  return (
    <section className={`hero-section py-5`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left side with text */}
          <div className="col-lg-7 text-start">
            <h1 className="display-1 fw-bold">
              <Skeleton width={500} height={80} />
            </h1>
            <h1 className="display-1">
              <Skeleton width={600} height={80} />
            </h1>
            <p className="lead">
              <Skeleton width={450} height={20} />
            </p>
            <p>
              <Skeleton width={500} height={20} />
            </p>
            <div className="d-flex align-items-center mt-4">
              <Skeleton width={120} height={40} className="me-3" />
              <Skeleton width={120} height={40} />
            </div>
          </div>
          {/* Right side with image */}
          <div className="col-lg-5 text-center">
            <Skeleton circle={true} height={200} width={200} className="mb-4" />
            <div className="open-to-work mb-3">
              <Skeleton width={120} height={30} />
            </div>
            <div className="d-flex justify-content-center">
              <Skeleton width={40} height={40} circle={true} className="me-2" />
              <Skeleton width={40} height={40} circle={true} className="me-2" />
              <Skeleton width={40} height={40} circle={true} className="me-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSkeleton;
