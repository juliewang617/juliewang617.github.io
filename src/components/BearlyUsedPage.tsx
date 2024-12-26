import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import cover from "../assets/ecommerce-proj/cover.png";
import githubIcon from "../assets/github.svg";

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
        <img className="project-main-image" src={cover} />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Development Process</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Takeaways</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BearlyUsedPage;
