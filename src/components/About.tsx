import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About</h2>
      <div className="section-content">
        <div className="text-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-block">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default About; 