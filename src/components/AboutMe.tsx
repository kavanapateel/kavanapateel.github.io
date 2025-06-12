import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image-wrapper">
        <img src={"./assets/profile.jpg"} alt="Profile" className="profile-image" />
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>Ausca ren a perscn preparring for software developm̃ent interviews.</p>
        <p>In project experiencé ·em.</p>
      </div>
    </div>
  );
};

export default AboutMe; 