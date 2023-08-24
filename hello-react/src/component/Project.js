import React from 'react';
import './Project.css'; 

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.imageSrc} alt={`${project.title} Screenshot`} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <div className="project-links">
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a> {/*Link with rel="noopener noreferrer" for enhanced security and privacy for users */}
      </div>
    </div>
  );
}

export default Project;
