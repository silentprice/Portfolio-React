import React, { useState } from 'react';
import AboutMe from '../../pages/About/AboutMe'; 
import Portfolio from '../../pages/Portfolio/Portfolio'; 
import Contact from '../../pages/Contact/Contact'; 
import Resume from '../../pages/Resume/Resume'; 
import './Content.css'; 

function Content({activeSection}) {

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
