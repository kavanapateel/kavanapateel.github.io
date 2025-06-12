import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image-wrapper">
        <img src={"/profile.jpg"} alt="Profile" className="profile-image" />
      </div>
      <div className="about-me-content">
        <h3>Hello,</h3>
        <h1>I'm <span>Kavana</span>.</h1>
        <p>👋 Welcome to my portfolio!  <br />
          I'm a passionate Software Developer, and this page is just a glimpse into my journey in tech.
          Scroll through to explore some of the projects I've worked on — each one is a piece
          of what I've learned and loved building. I hope you enjoy checking them out as much as I enjoyed creating them!
        </p>
        <p>📄 Want to see more?  
          Click below to view or download my resume.
        </p>
        <button className="resume-button">
          <a href="/Kavana_FullStack_Resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe; 