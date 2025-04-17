import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1>
        <span>Proj</span>ects
      </h1>
      <div className="sub-section">
        <div id="artofcakes">
          <img src="./assets/cake.jpg" alt="Project1" />
          <p>
            The <b>Art of Cakes</b> is my BCA project. It is a PHP based MySQL
            web application that simulates the bakery environment. Supports both
            customer and bakery modules. To view this project,
            <a
              href="https://github.com/kavanapateel/ArtOfCakes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here.
            </a>
          </p>
        </div>
        <div id="hstl-mgt">
          <img src="./assets/pdep0aig.bmp" alt="Project2" />
          <p>
            The <b>Hostel Management System</b> is my MCA project. It is a
            comprehensive system built with React and Node.js for managing hostel
            operations. To view this project,
            <a
              href="https://github.com/kavanapateel/Hostel-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects; 