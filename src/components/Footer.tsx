import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-boxes">
      <div className="footer-box socials-box">
        <div className="footer-vertical-label">SOCIALS</div>
        <div className="footer-box-content">
          <a href="https://www.linkedin.com/in/kavana-31dec/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <span className="footer-social-icon linkedin-icon" /> LinkedIn
          </a>
          <a href="https://github.com/kavanapateel" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <span className="footer-social-icon github-icon" /> Github
          </a>
          <a href="mailto:kavanapateel@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <span className="footer-social-icon mail-icon" /> Mail Me
          </a>
        </div>
      </div>
      <div className="footer-box contact-box">
        <div className="footer-vertical-label">CONTACT</div>
        <form className="footer-box-content contact-form" onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:kavanapateel@gmail.com'; }}>
          <label htmlFor="footer-name">Name</label>
          <input id="footer-name" name="name" type="text" autoComplete="off" />
          <label htmlFor="footer-email">Email Address</label>
          <input id="footer-email" name="email" type="email" autoComplete="off" />
          <label htmlFor="footer-message">Message</label>
          <textarea id="footer-message" name="message" rows={4} />
          <button type="submit" className="footer-send-btn">Send mail</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer; 