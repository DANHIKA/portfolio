import React, { useState } from 'react';
import { Container, Row, Col, Form, ProgressBar, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import PersonalDetails from './Contact/PersonalDetails';
import Services from './Contact/Services';
import ContactInfo from './Contact/ContactInfo';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: [],
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: checked
        ? [...prevData.services, name]
        : prevData.services.filter((service) => service !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use EmailJS to send the form data
    emailjs.send(
      'service_94q8oii', // Replace with your EmailJS service ID
      'template_nj1fz7i', // Replace with your EmailJS template ID
      formData,
      '2oRUv8b0jI39NS2yy' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((error) => {
      console.error('FAILED...', error);
    });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <ContactInfo />
        </Col>
        <Col md={8}>
          <ProgressBar now={(step / 2) * 100} className="mb-4" />
          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <PersonalDetails
                formData={formData}
                handleChange={handleChange}
                handlePhoneChange={handlePhoneChange}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 2 && (
              <Services
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handlePrevStep={handlePrevStep}
                handleSubmit={handleSubmit}
              />
            )}
            {step === 2 && (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
