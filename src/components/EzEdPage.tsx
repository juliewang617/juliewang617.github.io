import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import githubIcon from "../assets/github.svg";
import Project from "./Project.tsx";
import ezedCover from "../assets/ezed-proj/cover.png";
import emailCalCover from "../assets/email-cal-proj/cover.png";
import bearlyUsedCover from "../assets/ecommerce-proj/cover.png";
import img1 from "../assets/ezed-proj/1.png";
import img2 from "../assets/ezed-proj/2.png";
import img3 from "../assets/ezed-proj/3.png";
import img4 from "../assets/ezed-proj/4.png";
import img5 from "../assets/ezed-proj/5.png";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import ImageModal from "./ImageModal.tsx";

const EzEdPage: React.FC = () => {
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
          <h1>Ez-Ed</h1>
          <p>
            A web application to combat inequities in eczema treatment,
            featuring an ML identifier model.
          </p>
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
              <p>Homepage</p>
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
              <p>Background on atopic dermatits</p>
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
              <p>ML Model to identify images of eczema</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="carousel-img"
              src={img4}
              onClick={() => handleImageClick(img5)}
              style={{ cursor: "ponter" }}
            />
            <Carousel.Caption>
              <p>Questionaire to help understand atopic dermatitis symptoms</p>
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
              <p>Action items for users to help atopic dermatits research</p>
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
              <p>React, JavaScript, TensorFlow, Teachable Machine</p>
            </div>
          </div>
          <div className="project-info-row">
            <div
              className="project-github-link"
              onClick={() =>
                window.open("https://github.com/juliewang617/ez-ed")
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
              When Kode with Klossy and Deloitte announced its latest tech
              challenge regarding health equity, I was inspired by my experience
              with eczema (atopic dermatitis, or A.D.) to create Eczema-Educate
              (Ez-Ed), a website dedicated to raising awareness about A.D. and
              addressing disparities in access to care. Ez-Ed aims to inform
              users about eczema’s impacts, guide them in identifying and
              managing symptoms, and provide resources to improve their quality
              of life.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Development Process</h5>
            <p>
              I first began by researching A.D. to learn more about inequities
              in treatment. Through research, I learned about the widespread
              prevalence of A.D. and the significant number of individuals
              worldwide who struggle to access proper treatment. Once I gathered
              enough information, I began working on Figma mockups of the site.
              I then developed the web app with React and JavaScript, building
              pages to educate users on A.D., provide symptom management support
              through a questionnaire, and encourage participation in
              eczema-related research initiatives.
            </p>
            <p>
              The highlight of the project is the ML model, created with
              Google's Teachable Machine and the Tensorflow library, that
              identifies images of various skin conditions. I trained the model
              on over 10,000 images of skin conditions, including eczema,
              melanoma, and basal cell carcinoma. This tool, integrated into the
              website, allows users with limited access to healthcare to
              identify potential skin conditions and seek appropriate guidance.
            </p>
            <p>
              After completing the project, I was thrilled to be selected as a
              finalist in the challenge, where I presented my work to Deloitte
              employees.
            </p>
          </div>
          <div className="project-paragraph">
            <h5>Takeaways</h5>
            <p>
              This project deepened my understanding of using technology for
              social impact. It strengthened my skills in user-centered design,
              web development, and machine learning integration, while also
              giving me the opportunity to address a real-world issue close to
              my heart. The experience of presenting my work to industry
              professionals further solidified my confidence in advocating for
              meaningful solutions.
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

export default EzEdPage;
