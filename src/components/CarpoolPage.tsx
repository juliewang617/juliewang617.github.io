import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import githubIcon from "../assets/github.svg";
import Project from "./Project.tsx";
import ezedCover from "../assets/ezed-proj/cover.png";
import emailCalCover from "../assets/email-cal-proj/cover.png";
import bearlyUsedCover from "../assets/ecommerce-proj/cover.png";
import img1 from "../assets/carpool-proj/1.png";
import img2 from "../assets/carpool-proj/2.png";
import img3 from "../assets/carpool-proj/3.png";
import img4 from "../assets/carpool-proj/4.png";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import ImageModal from "./ImageModal.tsx";

const CarpoolPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage("");
  };
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="project-page">
        <div className="project-header">
          <h1>LigerBots Carpool Organizer</h1>
          <p>An application to organize carpools for my local robotics team.</p>
        </div>
        <Carousel className="project-main-image">
          <Carousel.Item interval={3000}>
            <img
              className="carousel-img"
              src={img1}
              onClick={() => handleImageClick(img1)}
              style={{ cursor: "ponter" }}
            />
            <Carousel.Caption>
              <p>Main UI</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="carousel-img"
              src={img2}
              onClick={() => handleImageClick(img2)}
              style={{ cursor: "ponter" }}
            />
            <Carousel.Caption>
              <p>Add carpool modal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="carousel-img"
              src={img3}
              onClick={() => handleImageClick(img3)}
              style={{ cursor: "ponter" }}
            />
            <Carousel.Caption>
              <p>Mock up draft, with notes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="carousel-img"
              src={img4}
              onClick={() => handleImageClick(img4)}
              style={{ cursor: "ponter" }}
            />
            <Carousel.Caption>
              <p>Mock up draft, with notes</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="project-info">
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Role</h5>
              <p>Sole Developer</p>
            </div>
            <div className="project-info-div">
              <h5>Timeline</h5>
              <p>June-August 2024</p>
            </div>
          </div>
          <div className="project-info-row">
            <div className="project-info-div">
              <h5>Skills</h5>
              <p>React, JavaScript, Docker, Bootstrap</p>
            </div>
          </div>
          <div className="project-info-row">
            <div
              className="project-github-link"
              onClick={() =>
                window.open("https://github.com/juliewang617/carpool-organizer")
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
              Over the summer, I worked with my local robotics team, the
              LigerBots, to create a carpool organizer. With over 100 students,
              organizing carpools to meets and competitions was an arduous
              process, especially since they were too large to use free
              organization options. This meant carpools were organized by hand
              by student leaders and coaches, which took precious time away
              during build season.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Development Process</h5>
            <p>
              I started by holding meetings with coaches and students to
              understand their needs, which I documented within user stories and
              a requirements document. To ensure the design met expectations, I
              created several mockups, presenting and refining them based on
              feedback from stakeholders. After nine iterations, the design was
              finalized.
            </p>
            <p>
              I also collaborated with a coach to determine the application’s
              data structure and technology stack. We decided on a React
              JavaScript frontend, a Node.js and Express backend, and a SQLite
              database, with additional discussions about implementing user
              authentication. In August, I developed the frontend, carefully
              designing the UI with React and JavaScript. I focused on writing
              clear, modular code, using reusable React components to ensure the
              project could be easily maintained and expanded by future
              developers.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Takeaways</h5>
            <p>
              This project taught me how to translate user needs into actionable
              requirements, manage iterative design processes, and deliver a
              practical solution to a real-world problem. By working directly
              with stakeholders, I developed a strong understanding of effective
              communication and project planning.
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
          title={"Email to Calendar REST API"}
          image={emailCalCover}
          date={"Dec 2024"}
          tags={["REST API", "Node.js", "Express", "JavaScript"]}
          caption={
            "A script, served through a REST API, that parses your emails for possible events through an LLM and adds them to your calendar."
          }
          githubLink={"https://github.com/juliewang617/gmail-to-calendar"}
          viewMoreLink={"#/projects/email-to-cal"}
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
      <ImageModal image={selectedImage} handleClose={handleClose} />
      <Footer />
    </div>
  );
};

export default CarpoolPage;
