import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  technologies: string[];
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, technologies, liveDemoLink }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {liveDemoLink && (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="live-demo-link">
          Live Demo
        </a>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData = [
    {
      imageSrc: '/images/chat_application.png', // Placeholder, adjust path
      title: 'Chat Application',
      technologies: ['React', 'Node js'],
    },
    {
      imageSrc: '/images/ecommerce_website.png', // Placeholder, adjust path
      title: 'E-commerce Website',
      technologies: ['React', 'Node js'],
    },
    {
      imageSrc: '/images/movie_browser.png', // Placeholder, adjust path
      title: 'Movie Browser',
      technologies: ['React', 'SQL'],
    },
    {
      imageSrc: '/images/task_management.png', // Placeholder, adjust path
      title: 'Task Management',
      technologies: ['Live Demo'],
      liveDemoLink: '#', // Replace with actual link
    },
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