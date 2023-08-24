import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import './App.css'; // import own styling here

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
