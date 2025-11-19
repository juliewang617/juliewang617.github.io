import React from "react";
import "../styles/Styles.css";
import me from "../assets/me.png";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

const About: React.FC = () => {
  return (
    <div className="section" id="about">
      <div className="column-section">
        <div className="column">
          <img src={me} className="intro-picture" />
        </div>
        <div className="column">
          <h1>Hi, I'm Julie!</h1>
          <p>
            I'm currently studying computer science at Brown University with
            broad interests in software engineering and systems. This past
            summer, I was a backend SWE intern at HubSpot where I worked on
            access management systems on the HubSpot platform.
          </p>
          <p>
            On campus, I'm a head teaching assistant for several CS courses and
            a dancer for Brown's Asian Dance troupe. In my free time, I love to
            draw, crochet, and go on walks. Feel free to reach out on any of my
            socials — I'm always up to connect!
          </p>
          <div className="skills-section">
            <h4>Skills</h4>
            <div className="tags-container">
              <div className="tag">Java</div>
              <div className="tag">TypeScript</div>
              <div className="tag">JavaScript</div>
              <div className="tag">Python</div>
              <div className="tag">SQL</div>
              <div className="tag">React</div>
              <div className="tag">Node</div>
              <div className="tag">Git</div>
            </div>
          </div>
          <div>
            <h4 className="pt-1">Links</h4>
            <div className="icon-section">
              <img
                className="icon"
                src={emailIcon}
                onClick={() => (location.href = "mailto:julie_wang2@brown.edu")}
              ></img>
              <img
                className="icon"
                src={githubIcon}
                onClick={() => window.open("https://github.com/juliewang617")}
              ></img>
              <img
                className="icon"
                src={linkedInIcon}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/juliewang617/")
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
