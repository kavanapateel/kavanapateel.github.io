import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Journey</h2>
      <div className="experience-grid">
        <div className="experience-card current">
          <div className="card-header">
            <span className="company-badge">Current</span>
            <h3>Software Engineer Trainee</h3>
            <h4>@Neartekpod APAC Technologies</h4>
          </div>
          <div className="card-body">
            <div className="duration">
              <i className="far fa-calendar-alt"></i>
              <span>Jan 2025 - Present</span>
            </div>
            <p className="project-highlight">
            Developing and optimizing full-stack application using Next.js, and Node.js with Node-RED workflows
            </p>
            <div className="tech-stack">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Node-RED</span>
              <span className="tech-tag">DynamoDB</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">GitHub</span>

            </div>
          </div>
        </div>

        <div className="experience-card">
          <div className="card-header">
            <h3>Full Stack Developer Intern</h3>
            <h4>@Research Design Labs</h4>
          </div>
          <div className="card-body">
            <div className="duration">
              <i className="far fa-calendar-alt"></i>
              <span>Mar 2024 - Sept 2024</span>
            </div>
            <p className="project-highlight">
            Developed a full-stack application, 'Process Monitoring System,' using React, Node.js, and MySQL
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
        </div>

        <div className="experience-card">
          <div className="card-header">
            <h3>Web Developer Intern</h3>
            <h4>@CodSoft</h4>
          </div>
          <div className="card-body">
            <div className="duration">
              <i className="far fa-calendar-alt"></i>
              <span>Feb 2024 - Mar 2024</span>
            </div>
            <p className="project-highlight">
              Gained hands-on experience in web development and modern frameworks
            </p>
            <div className="tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 