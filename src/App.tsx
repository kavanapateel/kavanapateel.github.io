import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [showFullEducation, setShowFullEducation] = useState(false);

  const toggleEducation = () => {
    setShowFullEducation(!showFullEducation);
  };

  return (
    <div className="App">
      <div className="portfolio-layout">
        <div className="side-elements left-side">
          <div className="side-card certificate-card">
            <h2 className="card-title">Certificates</h2>
            <div className="certificate-list">
              <div className="certificate-item">
                <h3>Image Processing</h3>
                <p>Applied image processing techniques for data analysis and visualization</p>
              </div>
              <div className="certificate-item">
                <h3>JavaScript Foundations</h3>
                <p>MicroDegree Course: Advanced knowledge in JavaScript, ES6+ features, DOM manipulation, and asynchronous programming</p>
              </div>
            </div>
          </div>
          <div className="side-card project-card">
            <h2 className="card-title">Projects</h2>
            <div className="project-list">
              <div className="project-item">
                <h3>Art of Cakes</h3>
                <p>PHP & MySQL web application simulating bakery environment with customer and bakery modules</p>
                <a href="https://github.com/kavanapateel/ArtOfCakes" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
              <div className="project-item">
                <h3>Hostel Management</h3>
                <p>Android (Java) & SQLite application for hostel operations with student ID functionality</p>
                <a href="https://github.com/kavanapateel/Hostel-Manager" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
              <div className="project-item">
                <h3>Simple Calculator</h3>
                <p>HTML5, CSS3 & JS calculator application with standard calculator functions</p>
                <a href="https://kavanapateel.github.io/Calculator/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="main-content">
          <div className="header-section">
            <div className="brand">Kavana</div>
            <nav className="main-nav">
              <a href="#about" className="nav-link">About Me</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#certificate" className="nav-link">Certificate</a>
              <a href="#contact" className="nav-link">Contact Me</a>
            </nav>
          </div>

          <div className="content-section">
            <div className="greeting">HEY SLIM,</div>
            <div className="profile-container">
              <div className="profile-image">
                <img src="/assets/profile.jpg" alt="Profile" />
              </div>
            </div>
            <div className="tagline">Building Ideas, Building Solutions</div>
            <div className="side-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="social-icons">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>

          <div className="sections-grid">
            <About />
            <div className="education-section" id="education">
              <h2 className="section-title">Education</h2>
              <div className="section-content">
                <div className="text-block">
                  <div className="education-details">
                    <h3>Master of Computer Applications (MCA)</h3>
                    <p className="duration">2022 - 2024</p>
                    <p className="grade"><span>7.41</span> CGPA</p>
                    <p className="institution">St. Aloysius Institute of Management and Technology, Beeri</p>
                  </div>

                  {showFullEducation && (
                    <div className="extended-content">
                      <div className="education-details">
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <p className="duration">2019 - 2022</p>
                        <p className="grade"><span>7.66</span> CGPA</p>
                        <p className="institution">Canara College, Mangaluru</p>
                      </div>

                      <div className="education-details">
                        <h3>Pre-University (12th)</h3>
                        <p className="duration">2017 - 2019</p>
                        <p className="grade"><span>61.16</span>%</p>
                        <p className="institution">Sharada PU College</p>
                      </div>
                    </div>
                  )}
                  
                  <button className="read-more-btn" onClick={toggleEducation}>
                    {showFullEducation ? 'Show Less' : 'View More Education'}
                  </button>
                </div>
              </div>
            </div>
            <Experience />
          </div>
        </div>
        
        <div className="side-elements right-side">
          <div className="circular-elements">
            <div className="circle">
              <span>Kavana</span>
            </div>
            <div className="circle empty"></div>
          </div>
          <div className="cylindrical-element">
            <div className="text">Kavana</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 