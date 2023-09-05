import React from "react";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutMe from "./pages/About/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [activeSection, setActiveSection] = React.useState("about");
  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Content activeSection={activeSection} />
      <Footer />

      {/* <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<AboutMe/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
        </Router>
      </div> */}
    </div>
  );
}

export default App;
