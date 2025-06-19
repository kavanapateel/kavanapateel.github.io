import React from 'react';
import './App.css';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Header from './components/Header';
import './components/Header.css';
import Footer from './components/Footer';
import './components/Footer.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App; 