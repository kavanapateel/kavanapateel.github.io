import React from 'react';
import './ProjectsShowcase.css';

const ProjectsShowcase: React.FC = () => {
  return (
    <div className="projects-section" id="projects-showcase">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
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
                Android (Java) - SQLite project for hostel management.
                Features student login and digital ID card functionality.
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
                Modern calculator application built with HTML5, CSS3, and JavaScript.
                Developed during internship at CodSoft.
              </p>
              <a 
                href="https://github.com/kavanapateel/Simple-Calculator" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase; 