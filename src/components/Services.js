import React, { useState, useEffect } from 'react';
import '../styles/Services.css'

const Services = () => {
  // Define an array of services with images and descriptions
  const services = [
    {
      title: 'Web Developing',
      image: 'https://placehold.co/400',
      description: 'We create stunning and user-friendly websites tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      image: 'https://placehold.co/400',
      description: 'Build custom mobile applications for iOS and Android platforms.',
    },
    {
      title: 'UX/UI Design',
      image: 'https://placehold.co/400',
      description: 'Craft intuitive and visually appealing user interfaces for optimal user experience.',
    },
  ];

  // State to track the active service index
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // UseEffect to update the active service every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className='container'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center">Services</h2>
          <p className="text-secondary mb-5 text-center lead fs-4">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="active-service position-relative">
            <h4>{services[activeServiceIndex].title}</h4>
            <img src={services[activeServiceIndex].image} alt={services[activeServiceIndex].title} className="service-image" style={{ width: '400px', minHeight: '400px' }} />
            <p>{services[activeServiceIndex].description}</p>
          </div>
        </div>
        {/* Right Column (Show all services with dot navigation) */}
        <div className="col-md-4">
          <div className="row">
            {/* Left Column for Vertical Line and Dots */}
            <div className="col-1">
              <div className="vertical-line"></div>
              <div className="dot-navigation">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`dot ${index === activeServiceIndex ? 'active-dot' : ''}`}
                    onClick={() => setActiveServiceIndex(index)}
                  >
                  </div>
                ))}
              </div>
            </div>
            {/* Right Column for Services */}
            <div className="col-11">
              <div className="dot-navigation">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`dot ${index === activeServiceIndex ? 'active-dot' : ''}`}
                    onClick={() => setActiveServiceIndex(index)}
                  >
                                        <img src={service.image} alt={service.title} className="service-thumbnail" style={{ width: '80px', height: 'auto' }} />

                    <div className="service-title">{service.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
