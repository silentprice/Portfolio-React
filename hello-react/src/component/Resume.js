import React from 'react';
import './Resume.css'; 

function Resume() {

  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Git',
    // Add more proficiencies
  ];

  return (
    <section className="resume" id="resume">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>Download my resume:</p>
        <a href="path-to-resume.pdf" download>Download Resume</a>
        <h3>Proficiencies</h3>
        <ul className="proficiency-list">
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
