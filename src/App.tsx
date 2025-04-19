import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="portfolio-layout">
        <div className="side-elements left-side">
          <div className="side-card name-card">
            <h2>Kavana</h2>
          </div>
          <div className="side-card branding-card">
            <h2>KAVANA</h2>
            <div className="decorative-element">
              <img src="/assets/pampas-grass.png" alt="Decorative pampas grass" />
            </div>
          </div>
        </div>
        
        <div className="main-content">
          <div className="header-section">
            <div className="brand">Kavana</div>
            <nav className="main-nav">
              <a href="#" className="nav-link">experience</a>
              <a href="#" className="nav-link">education</a>
              <a href="#" className="nav-link">technology</a>
              <a href="#" className="nav-link">projects</a>
              <a href="#" className="nav-link">skills</a>
              <a href="#" className="nav-link">portfolio</a>
              <a href="#" className="nav-link">timeline</a>
              <a href="#" className="nav-link">resume</a>
              <div className="login-circle">
                <span className="login-icon"></span>
              </div>
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
            <div className="middle-section">
              <h2>E</h2>
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