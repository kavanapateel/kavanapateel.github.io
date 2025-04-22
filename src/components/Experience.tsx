import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="text-block">
          <div className="projects-grid">
            <div className="project-card">
              <img src="./assets/cake.jpg" alt="Art of Cakes" />
              <div className="project-overlay">
                <h3>Art of Cakes</h3>
                <p>
                  The Art of Cakes is my BCA project. 
                  It is a PHP based MySQL web application that simulates the bakery environment. 
                  Supports both customer and bakery modules. 
                  To view this project, click on the button below.
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
                  
                The Hostel Management is an Android(Java) - SQLite project, that typically demonstrates online applications 
                for a hostel. The student login serves also serves as an Identity card. To view this project, click on the button below.
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
                The Simple Calculator project was one of the tasks assigned during my Internship at CodSoft. 
                Demonstrates functions of a regular calculator using HTML5, CSS3 and JS. To view this project, click on the button below.
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