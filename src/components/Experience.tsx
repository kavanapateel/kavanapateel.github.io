import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="exp">
      <h1>
        Exp<span>erience</span>
      </h1>
      <div className="sub-section">
        <div className="details">
          <p>
            Web Developer Intern
            <a
              href="https://www.linkedin.com/company/codsoft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @CodSoft
            </a>
          </p>
          <p>Feb 2024 - Mar 2024</p>
        </div>
        <div className="details">
          <p>
            Full Stack Developer
            <a
              href="https://www.linkedin.com/company/research-design-lab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Research Design Labs
            </a>
          </p>
          <p>Mar 2024 - Sept 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Experience; 