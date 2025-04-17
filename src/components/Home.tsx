import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello,</h3>
        <h1>I'm <span>Kavana</span>.</h1>
        <p>
          Welcome to my portfolio! I am a Developer and this page is just a part
          of my developer's knowledge. Scroll through my projects (hope you like
          them), and you may contact me through my easy-to-contact socials. To
          view my resume, all you have to do is click the button below.
        </p>
        <div className="btn-box">
          <a
            href="./assets/resume_kavana.pdf"
            target="_blank"
            className="btn-1"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          <a href="#education" className="btn-2">
            Education
          </a>
        </div>
      </div>
      <div className="img-box">
        <img src="assets/profile.jpg" alt="My Image" />
        <a
          href="https://www.linkedin.com/in/kavana-31dec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Home; 