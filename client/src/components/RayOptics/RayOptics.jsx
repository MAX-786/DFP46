import React from 'react';
import './WebsiteIframe.css'; // Import CSS file for styling

const RayOptics = () => {
  return (
    <div className="website-iframe-container">
      <iframe
        src="http://localhost:5500/"
        title="My website"
        className="website-iframe"
      ></iframe>
    </div>
  );
};

export default RayOptics;