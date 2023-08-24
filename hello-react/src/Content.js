import React, { useState } from 'react';
import AboutMe from './AboutMe'; // Import the AboutMe component
import Portfolio from './Portfolio'; // Import the Portfolio component
import Contact from './Contact'; // Import the Contact component
import Resume from './Resume'; // Import the Resume component
import './Content.css'; // Import the CSS for styling

function Content() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <main className="content">
      {renderSection()}
    </main>
  );
}

export default Content;
