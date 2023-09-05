import React from 'react';
import Project from '../../component/Project'; 
import './Portfolio.css'; 
import One from '../../images/screenshot.png'
import Two from '../../images/Screenshot 2023-07-21 at 12.00.51 AM.png'
function Portfolio() {
  
  const projects = [
    {
      title: 'Code Refactor',
      imageSrc: {One},
      deployedLink: 'https://silentprice.github.io/code-refactor',
      githubLink: 'https://silentprice.github.io/code-refactor',
    },
    {
      title: 'Group Project 2',
      imageSrc: {Two},
      deployedLink: 'https://pacific-wildwood-17680-8e953e055e35.herokuapp.com',
      githubLink: 'https://github.com/Anthonycodinach/Volunteer-Event-Tracker',
    },
    {
      title: 'Tech Blog',
      deployedLink: 'https://tranquil-peak-68625-13cde1ccacd8.herokuapp.com/',
      githubLink: 'https://github.com/silentprice/Tech-Blog',
    }
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
