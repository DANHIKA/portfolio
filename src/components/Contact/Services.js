import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Services = ({
  formData,
  handleChange,
  handleCheckboxChange,
  handlePrevStep,
  handleSubmit,
}) => {
  return (
    <div>
      <h3>Select Services</h3>
      <Form.Group controlId="formServices">
        <Form.Check
          type="checkbox"
          name="webDevelopment"
          label="Web Development"
          onChange={handleCheckboxChange}
        />
        {formData.services.includes('webDevelopment') && (
          <div className="mt-2">
            <div className="mb-2">
              <Form.Label htmlFor="webDevelopmentDetails">Project Details</Form.Label>
              <Form.Control
                type="text"
                id="webDevelopmentDetails"
                placeholder="Enter your project details"
                onChange={handleChange}
                name="webDevelopmentDetails"
              />
            </div>
          </div>
        )}

        <Form.Check
          type="checkbox"
          name="uiDesign"
          label="UI/UX Design"
          onChange={handleCheckboxChange}
        />
        {formData.services.includes('uiDesign') && (
          <div className="mt-2">
            <div className="mb-2">
              <Form.Label htmlFor="uiDesignDetails">Design Details</Form.Label>
              <Form.Control
                type="text"
                id="uiDesignDetails"
                placeholder="Enter your design requirements"
                onChange={handleChange}
                name="uiDesignDetails"
              />
            </div>
          </div>
        )}

        <Form.Check
          type="checkbox"
          name="seo"
          label="SEO Optimization"
          onChange={handleCheckboxChange}
        />
        {formData.services.includes('seo') && (
          <div className="mt-2">
            <div className="mb-2">
              <Form.Label htmlFor="seoDetails">SEO Details</Form.Label>
              <Form.Control
                type="text"
                id="seoDetails"
                placeholder="Enter your SEO requirements"
                onChange={handleChange}
                name="seoDetails"
              />
            </div>
          </div>
        )}

        <Form.Check
          type="checkbox"
          name="contentCreation"
          label="Content Creation"
          onChange={handleCheckboxChange}
        />
        {formData.services.includes('contentCreation') && (
          <div className="mt-2">
            <div className="mb-2">
              <Form.Label htmlFor="contentCreationDetails">Content Details</Form.Label>
              <Form.Control
                type="text"
                id="contentCreationDetails"
                placeholder="Enter your content requirements"
                onChange={handleChange}
                name="contentCreationDetails"
              />
            </div>
          </div>
        )}
      </Form.Group>
      <Button variant="secondary" onClick={handlePrevStep}>
        Previous
      </Button>
      <Button variant="primary" type="submit" className="ms-2">
        Submit
      </Button>
    </div>
  );
};

export default Services;
