import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <a href="#" className="logo">
          <span className="accent-text">Kav</span>ana
        </a>
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#technology" className="nav-link">Technology</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#timeline" className="nav-link">Timeline</a></li>
          <li><a href="#resume" className="nav-link">Resume</a></li>
        </ul>
        <div className="login-btn">
          <a href="#login" className="login-link">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 