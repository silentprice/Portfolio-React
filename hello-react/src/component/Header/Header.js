import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="developer-name">Nick Price</h1>
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </header>
  );
}

export default Header;
