import React, { useState } from 'react';
import AboutMe from './component/AboutMe'; 
import Portfolio from './component/Portfolio'; 
import Contact from './component/Contact'; 
import Resume from './component/Resume'; 
import './Content.css'; 

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
