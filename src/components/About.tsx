import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <img src="assets/7nvivi77.bmp" alt="My Image" />

      <div className="about-content">
        <h2 className="heading">
          <span>About</span> Me
        </h2>
        <p>
          As a developer, I am passionate about continuously learning and
          expanding my skill set. Currently, I am focused on mastering newer
          technologies and languages such as ReactJS, NodeJS, and PHP. These
          technologies are widely used in modern web development and offer
          powerful tools for creating dynamic and interactive web applications.
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/kavana-31dec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/kavanapateel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 