import React from "react";
import "../styles/Styles.css";

const Footer: React.FC = () => {
  return (
    <nav className="footer">
      <ul className="footer-items">
        <li>@2026 Julie Wang</li>
        <div className="footer-links">
          <li>
            <a target="_blank" href="https://github.com/juliewang617">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/juliewang617/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:julie_wang2@brown.edu">Email</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Footer;
