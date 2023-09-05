import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ activeSection, setActiveSection }) {
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
        {/* <Link to="/">
          <li
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          >
            About Me
          </li>
        </Link>
        <Link to="/portfolio">
          <li
            className={`nav-item ${
              activeSection === "portfolio" ? "active" : ""
            }`}
          >
            Portfolio
          </li>
        </Link> */}
        <li
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleSectionClick("contact")}
        >
          Contact
        </li>
        <li
          className={`nav-item ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleSectionClick("resume")}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
