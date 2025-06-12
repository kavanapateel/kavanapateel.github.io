import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="experience-left">
        <h2>Experience</h2>
        <div className="job-entry">
          <h3>Software Engineer</h3>
          <p>2023-</p>
        </div>
        <div className="job-entry">
          <h3>Web Developer</h3>
          <p>2022-2023</p>
          <p>full stack web application</p>
        </div>
      </div>
      <div className="experience-right">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2023-2024</p>
              <h3 className="timeline-title">Software Engineer</h3>
              <p className="timeline-description">AI chatbot meeting</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2021-2022</p>
              <h3 className="timeline-title">Web Developer</h3>
              <p className="timeline-description">Recent projects reem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 