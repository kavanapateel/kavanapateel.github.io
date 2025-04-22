import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="section-content">
        <div className="text-block">
          <div className="projects-grid">
            <div className="project-card">
              <img src="./assets/cake.jpg" alt="Art of Cakes" />
              <div className="project-overlay">
                <h3>Art of Cakes</h3>
                <p>
                  PHP based MySQL web application that simulates the bakery environment.
                  Supports both customer and bakery modules.
                </p>
                <a
                  href="https://github.com/kavanapateel/ArtOfCakes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="./assets/pdep0aig.bmp" alt="Hostel Management System" />
              <div className="project-overlay">
                <h3>Hostel Management System</h3>
                <p>
                  A comprehensive system built with React and Node.js for managing
                  hostel operations.
                </p>
                <a
                  href="https://github.com/kavanapateel/Hostel-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="./assets/calc.png" alt="Simple Calculator" />
              <div className="project-overlay">
                <h3>Simple Calculator</h3>
                <p>
                  A modern calculator application with basic arithmetic operations
                  and a clean user interface.
                </p>
                <a href="https://github.com/kavanapateel/Simple-Calculator" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 