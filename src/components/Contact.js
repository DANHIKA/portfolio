import React from 'react';
import ContactForm from './Contact/ContactForm';
import ContactDetails from './Contact/ContactDetails';
import Map from './Contact/Map';

const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="mt-5">
      <section id="ContactUs" name="Contact Us" className="py-5">
        <div className="container">
          <div className="row justify-content-between">
            
            <div className="col-md-5">
            <h4 className='mb-4'>We'd love to here from you</h4>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
            <div className="col-md-6">
            <h4 className='mb-4'>Reach out to us directly</h4>
              <ContactDetails />
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
