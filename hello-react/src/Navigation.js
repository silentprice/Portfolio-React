import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS for styling

function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('about')}>
          About Me
        </li>
        <li className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={() => handleSectionClick('portfolio')}>
          Portfolio
        </li>
        <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleSectionClick('contact')}>
          Contact
        </li>
        <li className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`} onClick={() => handleSectionClick('resume')}>
          Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
