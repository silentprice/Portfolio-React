import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="social-links">
          <li>
            <a href="https://github.com/silentprice">GitHub</a>
          </li>
          <br/>
          <li>
            <a href="https://www.linkedin.com/in/nickpriceusha/">LinkedIn</a>
          </li>
          <li>
            {" "}
            <p>
              Feel free to email me at{" "}
              <a href="mailto:nprice0502@yahoo.com">nprice0502@yahoo.com</a> for
              any inquiries or questions.
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
