import React from "react";
import "../styles/Styles.css";
import Project from "./Project";
import ezedCover from "../assets/ezed-proj/cover.png";
import carpoolCover from "../assets/carpool-proj/cover.png";
import bearlyUsedCover from "../assets/ecommerce-proj/cover.png";
import connect4Cover from "../assets/connect4/1.png";

const Projects: React.FC = () => {
  return (
    <div className="section" id="projects">
      <h1 className="m-auto">Projects</h1>
      <div className="column-section">
        <div className="projects-container">
          <Project
            title={"College Commerce Platform"}
            image={bearlyUsedCover}
            date={"Dec 2024"}
            tags={["Java", "React", "REST API", "PostgreSQL", "E2E Testing"]}
            caption={
              "A full-stack platform for students to exchange used goods, reducing waste across campus."
            }
            githubLink={"https://github.com/juliewang617/Bearly-Used"}
            viewMoreLink={"#/projects/bearly-used"}
          />
          {/* <Project
            title={"Email to Calendar REST API"}
            image={emailCalCover}
            date={"Oct 2024"}
            tags={["REST API", "Node.js", "Express", "JavaScript"]}
            caption={
              "A script, served through a REST API, that parses your emails for possible events through an LLM and adds them to your calendar."
            }
            githubLink={"https://github.com/juliewang617/gmail-to-calendar"}
            viewMoreLink={"#/projects/email-to-cal"}
          /> */}
          <Project
            title={"Carpool Organizer"}
            image={carpoolCover}
            date={"Jun-Aug 2024"}
            tags={["React", "TypeScript", "Bootstrap", "Git"]}
            caption={
              "An application to organize carpools for my local robotics team of over 100 members."
            }
            githubLink={"https://github.com/juliewang617/carpool-organizer"}
            viewMoreLink={"#/projects/carpool"}
          />
          <Project
            title={"Machine Learning Eczema Tool"}
            image={ezedCover}
            date={"Jul 2024"}
            tags={["TensorFlow", "React", "JavaScript"]}
            caption={
              "A web application to combat inequities in eczema treatment, featuring an ML identifier model. Selected as a finalist for Deloitte's Health Equity Challenge."
            }
            githubLink={"Link"}
            viewMoreLink={"#/projects/ez-ed"}
          />
          <Project
            title={"Connect4 AI"}
            image={connect4Cover}
            date={"May 2024"}
            tags={["Python", "Flask"]}
            caption={
              "A Connect4 web game, with an AI player that uses the minimax algorithm with alpha-beta pruning to calculate moves."
            }
            githubLink={"Link"}
            viewMoreLink={
              "https://github.com/juliewang617/Connect4-with-AI-Player"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
