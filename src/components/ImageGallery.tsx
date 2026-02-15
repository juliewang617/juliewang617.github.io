import React from "react";
import "../App.css";

interface ImageGalleryProps {
  images: string[];
  onImageClick: (url: string) => void; // Add this prop
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className="gallery-grid">
      {images.map((url, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => onImageClick(url)} // Trigger the parent function
        >
          <img src={url} alt={`Gallery item ${index}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
