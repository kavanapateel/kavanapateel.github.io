import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h1>
        <span>Education</span>
      </h1>
      <div className="education-list">
        <div className="education-item">
          <h3>Master of Computer Applications (MCA)</h3>
          <p className="duration">2022 - 2024</p>
          <p className="grade"><span>7.45</span> CGPA</p>
          <p className="institution">St. Aloysius Institute of Management and Technology, Beeri</p>
        </div>
        
        <div className="education-item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p className="duration">2019 - 2022</p>
          <p className="grade"><span>7.66</span> CGPA</p>
          <p className="institution">Canara College, Mangaluru</p>
        </div>
        
        <div className="education-item">
          <h3>Pre-University (12th)</h3>
          <p className="duration">2017 - 2019</p>
          <p className="grade"><span>61.16</span>%</p>
          <p className="institution">Sharada PU College,Mangaluru</p>
        </div>
      </div>
    </section>
  );
};

export default Education; 