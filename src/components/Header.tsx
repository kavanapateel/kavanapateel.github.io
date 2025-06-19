import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/icons8-portfolium-32.png" alt="Logo" style={{height: 32}} />
          <span className="navbar-title">Kavana</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 