import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import cover from "../assets/ecommerce-proj/cover.png";
import githubIcon from "../assets/github.svg";
import Carousel from "react-bootstrap/Carousel";
import Project from "./Project.tsx";
import ezedCover from "../assets/ezed-proj/cover.png";
import carpoolCover from "../assets/carpool-proj/cover.png";
import emailCalCover from "../assets/email-cal-proj/cover.png";

const BearlyUsedPage: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="project-page">
        <div className="project-header">
          <h1>Bearly Used</h1>
          <p>
            A buy/sell platform for Brown and RISD students to exchange used
            items.
          </p>
        </div>
        <Carousel className="project-main-image">
          <Carousel.Item interval={3000}>
            <img className="carousel-img" src={cover} alt="Image One" />
            <Carousel.Caption>
              <p>Watercolor painting of oranges</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="carousel-img" src={cover} alt="Image One" />
            <Carousel.Caption>
              <p>Watercolor painting of oranges</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="project-info">
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Role</h5>
              <p>Developer (backend and integration)</p>
            </div>
            <div className="project-info-div">
              <h5>Timeline</h5>
              <p>November-December 2024</p>
            </div>
          </div>
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Skills</h5>
              <p>Java, TypeScript, React, PostgreSQL, E2E Testing</p>
            </div>
            <div className="project-info-div">
              <h5>Team</h5>
              <p>4 Developers</p>
            </div>
          </div>
          <div className="project-info-row">
            <div
              className="project-github-link"
              onClick={() => window.open("https://github.com/juliewang617")}
            >
              <img className="icon" src={githubIcon}></img>
              Github Link
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="project-paragraph">
            <h5>Overview</h5>
            <p>
              Bearly Used is a platform designed to facilitate sustainable
              buying, selling, and trading within the Brown University and RISD
              communities. The application spawned from the observation that
              many usable items on campus are wasted due to a lack of places for
              students to exchange or give away unwanted items throughout the
              school year, leading to overflowing trash rooms and abundant
              waste. To mitigate this issue, my team created Bearly Used, which
              includes features for users to list items, search through
              available listings, and communicate with other users.
              Authentication is managed such that only authorized users from
              Brown and RISD can access the platform.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Development Process</h5>
            <p>
              The application consists of a TypeScript and React frontend and a
              Java backend, served through a REST API, that communicates with a
              PostgreSQL database. I was in charge of backend development and
              integration. After writing the project proposal and finalizing the
              project structure, I set up the Postgres database and developed
              Java handlers to manage user and listing information, and search
              filtering, which I handled through parameterized SQL queries.
              Afterward, I collaborated with my teammates to integrate the
              frontend and backend by utilizing TypeScript to call the REST API
              rather than hard-coded mock data.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Takeaways</h5>
            <p>
              Through this project, I was able to identify a major problem -
              on-campus waste - and work with a team to create a solution from
              scratch. I was able to work on both the frontend and backend of
              the site, and learned a great deal about database management and
              REST APIs.
            </p>
          </div>
        </div>
      </div>
      <h4 className="text-center pt-3">Check out my other projects!</h4>
      <div className="other-projects-container">
        <Project
          title={"Email to Calendar REST API"}
          image={emailCalCover}
          date={"Dec 2024"}
          tags={["REST API", "Node.js", "Express", "JavaScript"]}
          caption={
            "A script, served through a REST API, that parses your emails for possible events through an LLM and adds them to your calendar."
          }
          githubLink={"Link"}
          viewMoreLink={"#/projects/email-to-cal"}
        />
        <Project
          title={"Carpool Organizer"}
          image={carpoolCover}
          date={"Dec 2024"}
          tags={["React", "TypeScript", "Bootstrap", "Git"]}
          caption={
            "An application to organize carpools for my local robotics team of over 100 members."
          }
          githubLink={"Link"}
          viewMoreLink={"#/projects/carpool"}
        />
        <Project
          title={"Machine Learning Eczema Tool"}
          image={ezedCover}
          date={"Dec 2024"}
          tags={["TensorFlow", "React", "JavaScript"]}
          caption={
            "A web application to combat inequities in eczema treatment, featuring an ML identifier model. Selected as a finalist for Deloitte's Health Equity Challenge."
          }
          githubLink={"Link"}
          viewMoreLink={"#/projects/ez-ed"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BearlyUsedPage;
