import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import githubIcon from "../assets/github.svg";
import Project from "./Project.tsx";
import ezedCover from "../assets/ezed-proj/cover.png";
import carpoolCover from "../assets/carpool-proj/cover.png";
import emailCalCover from "../assets/email-cal-proj/cover.png";
import bearlyUsedCover from "../assets/ecommerce-proj/cover.png";

const EmailToCalPage: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="project-page">
        <div className="project-header">
          <h1>Email to Calendar REST API</h1>
          <p>
            A REST API that parses your emails for possible events and adds them
            to your calendar.
          </p>
        </div>
        <img className="project-main-image" src={emailCalCover}></img>
        <div className="project-info">
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Role</h5>
              <p>Sole Developer</p>
            </div>
            <div className="project-info-div">
              <h5>Timeline</h5>
              <p>October 2024</p>
            </div>
          </div>
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Skills</h5>
              <p>REST API, Node.js, Express, JavaScript</p>
            </div>
          </div>
          <div className="project-info-row">
            <div
              className="project-github-link"
              onClick={() =>
                window.open("https://github.com/juliewang617/gmail-to-calendar")
              }
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
              As a busy college student, my inbox is flooded daily with club
              events, meetings, talks, conferences, and more. Searching through
              emails and adding each event to my calendar I’m interested takes a
              long time — so I thought, what if I could automate this process?
              The EmailToCalendar Bot just does this: it searches your recent
              emails for possible events, suggests them to you in the form of
              JSON objects, then adds them as events to your calendar.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Development Process</h5>
            <p>
              The application incorporates a JavaScript backend with Node and
              Express to implement a RESTful API. The scripts to search your
              inbox and add them to your calender are housed at different
              endpoints, and activate when navigated to. The program seamlessly
              configures OAuth 2.0 to authenticate the user, then takes
              advantage of the Google Gemini LLM to parse emails for events.
              Caching is also implemented to reduce API calls.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Takeaways</h5>
            <p>
              Through this project, I was able to identify a real-life nuisance
              and build a solution for it. I gained experience in crafting a
              RESTful API with Node and Express. I also learned how to integrate
              Google’s Developer APIs—OAuth 2.0, Gmail, Calendar, and Gemini.
            </p>
          </div>
        </div>
      </div>
      <h4 className="text-center pt-3">Check out my other projects!</h4>
      <div className="other-projects-container">
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
        <Project
          title={"Carpool Organizer"}
          image={carpoolCover}
          date={"Dec 2024"}
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

export default EmailToCalPage;
