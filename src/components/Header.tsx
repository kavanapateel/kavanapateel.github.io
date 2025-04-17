import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <a href="#" className="logo">
        <span>Kav</span>ana
      </a>

      <nav>
        <label htmlFor="load" aria-label="Menu">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="load-menu" id="load" />
        <div id="menu-items">
          <a href="#about">About Me</a>
          <a href="#exp">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 