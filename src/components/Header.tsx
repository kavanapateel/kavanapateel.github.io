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
          <li><a href="#about" className="nav-link">About Me</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#certificate" className="nav-link">Certificate</a></li>
          <li><a href="#contact" className="nav-link">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;