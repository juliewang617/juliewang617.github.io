import React from "react";
import "../styles/Styles.css";
import Carousel from "react-bootstrap/Carousel";
import bees from "../assets/fun/bees.jpg";
import joobie from "../assets/fun/joobie.jpg";
import oranges from "../assets/fun/oranges.jpg";
import digitalArt from "../assets/fun/digital_art.jpg";
import boston from "../assets/fun/boston.jpeg";
import aquarium from "../assets/fun/aquarium.jpeg";

const Fun: React.FC = () => {
  return (
    <div className="section" id="hobbies">
      <div className="column-section">
        <div className="column">
          <h1>Hobbies</h1>
          <p>
            I've been drawing and painting for as long as I can remember. I've
            worked with many mediums, from watercolor to acrylic to digital art.
            I especially love expressing myself through color. I also love to
            crochet: I picked up crochet during finals week of my first
            semester. I love crocheting amigurumi (plushies) and clothing
            accessories like bags or scarves.
          </p>
          <p>
            My other hobbies include going on walks, training at the gym,
            exploring cafes, and taking pretty pictures with my brother's
            camera.
          </p>
        </div>
        <div className="column">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={oranges} alt="Image One" />
              {/* <Carousel.Caption>
                <p>Watercolor painting of oranges</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={digitalArt} alt="Image Two" />
              {/* <Carousel.Caption>
                <p>Digital painting of a cozy Christmas night.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={bees} alt="Image Two" />
              {/* <Carousel.Caption>
                <p>Crocheted bees!</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={joobie} alt="Image Two" />
              {/* <Carousel.Caption>
                <p>Joobie, my crocheted mushroom friend!</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={aquarium} alt="Image Two" />
              {/* <Carousel.Caption>
                <p>The New England Aquarium</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="carousel-img" src={boston} alt="Image Two" />
              {/* <Carousel.Caption>
                <p>A beautiful Boston evening.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Fun;
