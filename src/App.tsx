import React from 'react';
import './App.css';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

export default App; 