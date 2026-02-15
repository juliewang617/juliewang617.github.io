import React from "react";
import "../styles/Styles.css";
import me from "../assets/me.png";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

const About: React.FC = () => {
  return (
    <div className="section-container" id="about">
      <div className="column-section">
        <div className="column">
          <img src={me} className="intro-picture" />
        </div>
        <div className="column">
          <h1>Julie Wang</h1>
          <p>
            I'm currently studying computer science at Brown University with
            interests in backend software engineering and systems. This past
            summer, I worked on HubSpot's access management infrastructure as a
            SWE intern.
          </p>
          <p>
            On campus, I'm a TA for intro CS and DSA and an undergraduate
            researcher in the{" "}
            <a href="https://etos.cs.brown.edu/">ETOS Group</a>. In my free
            time, I like to go on long walks.
          </p>
          {/* <div className="skills-section">
            <h4>Interests</h4>
            <div className="tags-container">
              <div className="tag">Operating Systems</div>
              <div className="tag">Networks</div>
              <div className="tag">Software Engineering</div>
            </div>
          </div> */}
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
