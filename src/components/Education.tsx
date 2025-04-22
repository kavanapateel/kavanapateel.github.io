import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h1>
        Educ<span>ation</span>
      </h1>
      <div className="sub-section">
        <div id="mca">
          <h2>
            Master of Computer Applications <span>(2022 - 2024)</span>
          </h2>
          <h3>
            <span>7.45 </span>CGPA
          </h3>
          <p>
            <span className="clg_loc">St. Aloysius Institute of Management and Technology, Beeri</span>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8278844665065!2d74.86369657473111!3d12.789681587509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35c25b9787073%3A0x653d5e5dc9d82834!2sSt%20Aloysius%20Institute%20of%20Management%20%26%20Information%20Technology%20(AIMIT)!5e0!3m2!1sen!2sin!4v1712160960500!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIMIT Location"
          ></iframe>
        </div>
        <div id="bca">
          <h2>
            Bachelor of Computer Applications <span>(2019 - 2022)</span>
          </h2>
          <h3>
            <span>7.66 </span>CGPA
          </h3>
          <p>
            <span className="clg_loc">Canara College, Mangaluru</span>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4522071804754!2d74.83897197473277!3d12.878617987428258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0xc377faaf3db7a9c3!2sCanara%20College!5e0!3m2!1sen!2sin!4v1712162998113!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Canara College Location"
          ></iframe>
        </div>
        <div id="puc">
          <h2>
            Pre-University (12th) <span>(2017 - 2019)</span>
          </h2>
          <h3>
            <span>61.16</span>%
          </h3>
          <p>
            <span className="clg_loc">Sharada PU College, Mangaluru</span>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4847485761525!2d74.8372307747327!3d12.876521187430141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4550f8f3cb%3A0x5acd6b379350e87a!2sSharada%20Pre%20University%20College%20Mangalore!5e0!3m2!1sen!2sin!4v1712166428871!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sharada PU College Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Education; 