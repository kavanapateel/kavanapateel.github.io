import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, technologies, liveDemoLink }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {liveDemoLink && (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="live-demo-link">
          View Project
        </a>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData = [
    {
      imageSrc: '/quiz.png',
      title: 'Flashcard-Quiz-App',
      description: 'A simple and interactive quiz web app where it presents a set of flashcards with multiple questions, allowing users to test their knowledge on the fly. It dynamically shuffles questions, checks answers in real-time, and gives instant correct answer.',
      technologies: ['ViteReact', 'CSS3','HTML5', 'JavaScript'],
      liveDemoLink: 'https://kavanapateel.github.io/Flashcard-Quiz-App/',
    },
    {
      imageSrc: '/calc.png',
      title: 'Simple Calculator',
      description: 'A calculator project developed during Internship at CodSoft. Demonstrates functions of a regular calculator.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemoLink: 'https://kavanapateel.github.io/Calculator/',
    },
    {
      imageSrc: '/cake.jpg',
      title: 'The Art of Cakes',
      description: 'A PHP based MySQL web application that simulates the bakery environment. Supports both customer and bakery modules.',
      technologies: ['PHP', 'MySQL', 'Web Development'],
      liveDemoLink: 'https://github.com/kavanapateel/ArtOfCakes',
    },
    {
      imageSrc: '/hostel.bmp',
      title: 'Hostel Management',
      description: 'An Android(Java) - SQLite project that demonstrates online applications for a hostel. The student login serves as an Identity card.',
      technologies: ['Java', 'Android', 'SQLite'],
      liveDemoLink: 'https://github.com/kavanapateel/Hostel-Manager', 
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 