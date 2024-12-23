import React from "react";
import "../styles/Styles.css";

const Footer: React.FC = () => {
  return (
    <nav className="footer">
      <ul className="footer-items">
        <li>@2024 Julie Wang. Developed with React and Bootstrap</li>
        <div className="footer-links">
          <li>
            <a href="#resume">GitHub</a>
          </li>
          <li>
            <a href="#resume">LinkedIn</a>
          </li>
          <li>
            <a href="#resume">Email</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Footer;
