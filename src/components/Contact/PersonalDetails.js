import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { fetchUserLocation } from '../../services/locationService';

const PersonalDetails = ({ formData, handleChange, handlePhoneChange, handleNextStep }) => {
  const [defaultCountry, setDefaultCountry] = useState('US'); // Default to 'US'

  useEffect(() => {
    const getLocation = async () => {
      try {
        const data = await fetchUserLocation();
        if (data && data.country_code) {
          setDefaultCountry(data.country_code);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h3>Personal Details</h3>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <PhoneInput
          international
          defaultCountry={defaultCountry}
          value={formData.phone}
          onChange={handlePhoneChange}
          className="form-control"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          required
        />
      </Form.Group>
      <Button variant="primary" onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default PersonalDetails;
