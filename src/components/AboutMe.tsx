import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image-wrapper">
        <img src={"/profile.jpg"} alt="Profile" className="profile-image" />
        <a 
          href="https://www.linkedin.com/in/kavana-31dec/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          View My LinkedIn Profile
        </a>
      </div>
      <div className="about-me-content">
        <h3>Hello,</h3>
        <h1>I'm <span>Kavana</span>.</h1>
        <p>👋 Welcome to my portfolio!  <br />
          I'm a passionate Software Developer, and this page is just a glimpse into my journey.
          Scroll through to explore some of the details, I've worked on — each one is a piece
          of what I've learned and loved building. <br />
          I hope you enjoy checking them out as much as I enjoyed creating them!
        </p>
        <p>📄 Want to see more?  <br />
          Click below to view or download my resume.
        </p>
        <button className="resume-button">
          <a href="/Kavana_FullStack_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe; 