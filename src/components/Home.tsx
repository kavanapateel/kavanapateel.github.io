import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="greeting-text">
          <h3>HEY SLIM,</h3>
        </div>
        
        <div className="profile-container">
          <div className="profile-image">
            <img src="/assets/profile.jpg" alt="Profile" />
          </div>
        </div>
        
        <div className="tagline">
          <h2>Building Ideas, Building Solutions</h2>
        </div>
        
        <div className="experience-highlights">
          <div className="experience-tag">EXPERIENCE</div>
          <div className="experience-tag">EXPERIENCE</div>
        </div>
        
        <div className="social-icons">
          <div className="icon-row">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="icon-container">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 