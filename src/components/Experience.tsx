import React, { useState } from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="text-block">
          <div className="experience-details current">
            <h3>Software Engineer Trainee</h3>
            <p className="company">NearTekPod APAC Technologies</p>
            <p className="duration">Jan 2025 - Present</p>
            <ul className="responsibilities">
              <li>Developing and optimizing full-stack applications using React.js, Next.js, and Node.js with Node-RED workflows improving API efficiency by 40%</li>
              <li>Implementing RESTful APIs & backend logic, enhancing system performance & reducing response time by 25%</li>
            </ul>
          </div>

          {showFullContent && (
            <div className="extended-content">
              <div className="experience-details">
                <h3>Software Developer Intern</h3>
                <p className="company">RDL Technologies Pvt Ltd.</p>
                <p className="duration">Apr - Sep 2024</p>
                <ul className="responsibilities">
                  <li>Improved Process Monitoring System using ReactJS and NodeJS, increasing operational efficiency by 25%</li>
                  <li>Developed and deployed a user authentication system, reducing login errors by 30%</li>
                  <li>Assisted in Docker deployment, reducing deployment time</li>
                </ul>
              </div>

              <div className="experience-details">
                <h3>Web Developer Intern</h3>
                <p className="company">CodSoft</p>
                <p className="duration">Feb 2024 - Mar 2024</p>
                <ul className="responsibilities">
                  <li>Developed responsive web applications using HTML5, CSS3, and JavaScript</li>
                  <li>Created a functional calculator application with modern UI/UX design</li>
                  <li>Collaborated with team members to implement best practices in web development</li>
                </ul>
              </div>
            </div>
          )}
          
          <button className="read-more-btn" onClick={toggleContent}>
            {showFullContent ? 'Show Less' : 'View More Experience'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience; 