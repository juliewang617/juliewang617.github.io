import React, { useState } from "react";
import "../styles/Styles.css";
import Carousel from "react-bootstrap/Carousel";
import bees from "../assets/fun/bees.jpg";
import joobie from "../assets/fun/joobie.jpg";
import oranges from "../assets/fun/oranges.jpg";
import digitalArt from "../assets/fun/digital_art.jpg";
import boston from "../assets/fun/boston.jpeg";
import aquarium from "../assets/fun/aquarium.jpeg";
import ImageModal from "./ImageModal";

const Fun: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage("");
  };
  return (
    <div className="section" id="hobbies">
      <div className="column-section">
        <div className="column">
          <h1>Hobbies</h1>
          <p>
            I've been drawing and painting for as long as I can remember. I've
            worked with many mediums, from watercolor to acrylic to digital art.
            I especially love expressing myself through color. I also enjoy
            crochet, a hobby I picked up crochet during finals week of my first
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
              <img
                className="carousel-img"
                src={oranges}
                alt="Image One"
                onClick={() => handleImageClick(oranges)}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-img"
                src={digitalArt}
                alt="Image Two"
                onClick={() => handleImageClick(digitalArt)}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-img"
                src={bees}
                alt="Image Two"
                onClick={() => handleImageClick(bees)}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-img"
                src={joobie}
                alt="Image Two"
                onClick={() => handleImageClick(joobie)}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-img"
                src={aquarium}
                alt="Image Two"
                onClick={() => handleImageClick(aquarium)}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="carousel-img"
                src={boston}
                alt="Image Two"
                onClick={() => handleImageClick(boston)}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <ImageModal image={selectedImage} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Fun;
