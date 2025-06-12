import React from 'react';
import './App.css';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App; 