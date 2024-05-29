import React, { useState, useEffect } from 'react';
import '../styles/Services.css'

const Services = () => {
  // Define an array of services with images and descriptions
  const services = [
    {
      title: 'Web Developing',
      image: 'https://img.freepik.com/free-vector/organic-flat-computer-programming-illustration_23-2148955255.jpg?t=st=1716910884~exp=1716914484~hmac=cc030ee6ad2e4eee066747a3b1d46dc527ab7ffb34f156bdb68cc554b94378ea',
      description: 'We create stunning and user-friendly websites tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      image: 'https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1863.jpg?t=st=1716910982~exp=1716914582~hmac=4287498ee9ee034ad74f49821cc20790163b773b502e5e8d8ecbea5dd914fe3d',
      description: 'Build custom mobile applications for iOS and Android platforms.',
    },
    {
      title: 'UX/UI Design',
      image: 'https://img.freepik.com/free-vector/ui-ux-app-development-concept_52683-48848.jpg?t=st=1716911061~exp=1716914661~hmac=40b3224fe66539f72773c2c5fc4c04737345ef14d9eacf23e4e4f508588b899e',
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
