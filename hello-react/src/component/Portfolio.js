import React from 'react';
import Project from './Project'; 
import './Portfolio.css'; 

function Portfolio() {
  // Sample project data, replace with your own project details
  const projects = [
    {
      title: 'Project 1',
      imageSrc: 'path-to-project-1-image.png',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      imageSrc: 'path-to-project-2-image.png',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
