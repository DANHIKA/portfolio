import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
  border: '0'
};

const Map = () => {
  return (
    <div style={containerStyle}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.2962880337964!2d33.75478467432263!3d-14.000437881345734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d328bd9b4cfb%3A0x376e5dbf04665b88!2sSenetecGas!5e0!3m2!1sen!2smw!4v1717825959019!5m2!1sen!2smw" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
