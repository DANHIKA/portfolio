import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'message') {
      const words = value.trim().split(/\s+/);
      setWordCount(words.length > 300 ? 300 : words.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center">
      <div className="row my-4">
        <div className="col-md-6 col-12 mb-4 mb-md-0">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>
      </div>
      
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="10"
          required
          maxLength="300"
          style={{ height: '200px', width: '100%' }}
        ></textarea>
        <label htmlFor="message">Message</label>
        <div className="form-text">{wordCount}/300 words</div>
      </div>
      <button type="submit" className="btn btn-outline-dark align-items-center">Submit <FontAwesomeIcon icon={faArrowRight} className="ms-2" size='1x' /></button>
    </form>
  );
};

export default ContactForm;
