import React from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";

interface ImageModalProps {
  image: string;
  handleClose: () => void;
}
const ImageModal: React.FC<ImageModalProps> = ({ image, handleClose }) => {
  return (
    <Modal size="lg" show={!!image} onHide={handleClose} centered>
      <Modal.Header closeButton />
      <Modal.Body className="text-center">
        <img src={image} alt="Expanded View" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
