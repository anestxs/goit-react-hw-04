import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName="overlay"
    >
      <div className={css.container}>{image && <img src={image} />}</div>
    </Modal>
  );
}
