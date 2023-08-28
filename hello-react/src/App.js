import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import Portfolio from './component/Portfolio';
import AboutMe from './component/AboutMe';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
