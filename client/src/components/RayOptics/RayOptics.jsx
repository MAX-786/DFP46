import React from 'react';
import './WebsiteIframe.css'; // Import CSS file for styling

const RayOptics = () => {
  return (
    <div className="website-iframe-container">
      <iframe
        src="https://max-786.github.io/website-iframe/"
        title="My website"
        className="website-iframe"
      ></iframe>
    </div>
  );
};

export default RayOptics;