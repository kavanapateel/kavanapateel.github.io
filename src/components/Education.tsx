import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      duration: "2022 - 2024",
      score: "7.45 CGPA",
      institution: "AIMIT, Beeri"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2019 - 2022",
      score: "7.66 CGPA",
      institution: "Canara College, Mangaluru"
    },
    {
      degree: "12th Standard",
      duration: "2017 - 2019",
      score: "61.16%",
      institution: "Sharada PU College"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <div className="education-details">
              <p className="duration">{edu.duration}</p>
              <p className="score">{edu.score}</p>
              <p className="institution">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 