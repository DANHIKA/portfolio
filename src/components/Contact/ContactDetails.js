import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="row my-4 ">
        <div className="col-md-6 mb-3 d-flex align-items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-4" size='2x' />
          <div className='border-start ps-4'>
          <p className="mb-0">Area 3</p>
          <p className="mb-0">Lilongwe</p>
          <p className="mb-0">Malawi</p>
          </div>
        </div>
        <div className="col-md-6 mb-3 d-flex align-items-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="me-4" size='2x' />
          <div className='border-start ps-4'>
          <p className="mb-0">+123 456 7890</p>
          <p className="mb-0">+987 654 3210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
