import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import flower from "../assets/flower.svg";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigates to the homepage and scrolls to the section
  const handleNavigation = (path: string, section: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 200,
      offset: -70,
    });
  };

  return (
    <nav className="navbar">
      <ScrollLink
        className="title"
        to="about"
        smooth={true}
        duration={200}
        offset={-70}
        onClick={() => handleNavigation("/", "about")}
      >
        <img src={flower} style={{ marginRight: "0.5em" }} alt="Flower" />
        Julie Wang
      </ScrollLink>
      <ul className="nav-links">
        <li>
          <a onClick={() => handleNavigation("/", "about")}>About</a>
        </li>
        <li>
          <a onClick={() => handleNavigation("/", "projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => handleNavigation("/", "hobbies")}>Hobbies</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1MN14Zd6YfQrrObuCb35UDeV41uScSnEA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
