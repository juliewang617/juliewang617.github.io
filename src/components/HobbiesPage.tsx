import "../App.css";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";
import { useState } from "react";
import ImageModal from "./ImageModal.tsx";

import aw1 from "../assets/fun/artwork/1.png";
import aw2 from "../assets/fun/artwork/2.jpg";
import aw3 from "../assets/fun/artwork/3.gif";
import aw5 from "../assets/fun/artwork/5.png";
import aw6 from "../assets/fun/artwork/6.png";
import aw7 from "../assets/fun/artwork/7.png";
import aw9 from "../assets/fun/artwork/9.png";
import aw10 from "../assets/fun/artwork/10.jpg";
import p1 from "../assets/fun/photos/1.jpeg";
import p2 from "../assets/fun/photos/2.jpeg";
import p3 from "../assets/fun/photos/3.jpeg";
import p4 from "../assets/fun/photos/4.jpeg";
import p5 from "../assets/fun/photos/5.jpeg";

import ImageGallery from "./ImageGallery.tsx";

const HobbiesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage("");
  };

  return (
    <div className="container-fluid main-content">
      <Navbar />

      {selectedImage && (
        <ImageModal image={selectedImage} handleClose={handleClose} />
      )}

      <div className="section-container" id="hobbies">
        <div>
          <p className="text-center fw-bold">Artwork</p>
          <ImageGallery
            images={[aw1, aw2, aw3, aw5, aw6, aw7, aw9, aw10]}
            onImageClick={handleImageClick} // Pass the handler here
          />
        </div>

        <div>
          <p className="text-center fw-bold">Photos</p>
          <ImageGallery
            images={[p1, p2, p3, p4, p5]}
            onImageClick={handleImageClick} // Pass the handler here
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HobbiesPage;
