// PersonalDetails.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <div className="personal-details">
      <h3>Contact Information</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <FontAwesomeIcon icon={faPhone} /> <span className="ms-2">+123 456 7890</span>
        </li>
        <li className="mb-3">
          <FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">example@example.com</span>
        </li>
        <li className="mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">123 Street, City, Country</span>
        </li>
      </ul>
      <h4>Social Media</h4>
      <ul className="list-inline">
        <li className="list-inline-item me-3">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </li>
        <li className="list-inline-item me-3">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </li>
        <li className="list-inline-item me-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
