import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="section-content">
        <div className="text-block">
          <p>
            Full-Stack Software Engineer specializing in React.js, Next.js, and Node.js. Skilled in building high
            performance web applications, optimizing system efficiency, and integrating backend services. Passionate 
            about scalable software solutions and automation.
          </p>
          <div className="extended-content">
            <p>
              As a developer, I am passionate about continuously learning and expanding my skill set. 
              Currently, I am focused on mastering newer technologies and frameworks while building 
              robust and efficient web applications.
            </p>
            <div className="contact-info">
              <p>📧 kavanapateel31@gmail.com</p>
              <p>📱 +91 84313 95996</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kavana-31dec/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/kavanapateel" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 