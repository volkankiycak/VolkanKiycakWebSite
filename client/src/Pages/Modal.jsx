import React, { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "../Css/Modal.css";

const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <div className={`modal-overlay ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <div className="modal-close">
          <FaRegTimesCircle className="modal-close-icon" onClick={closeModal} />
        </div>
        <div className="modal-text">
          <h2>Hoş Geldiniz</h2>
          <p>
            Merhaba, ben Volkan Kıyçak. Web siteme hoş geldiniz. Bu platform,
            web geliştirme sürecimde öğrendiğim bilgileri uygulayarak
            oluşturduğum test amaçlı bir site olup, gelecekte daha fazla içerik
            ve özellik eklemeyi planlıyorum.
          </p>
          <p>
            İçeriklerimi inceleyebilmeniz için sitemize üye olmanız ve giriş
            yapmanız gerekmektedir. Kayıt olup giriş yaptıktan sonra, sunduğum
            içeriklere erişebilirsiniz.
          </p>
        </div>
        <div className="modal-buttons">
          <a href="Login">Giriş Yap</a>
          <a href="Register">Kayıt Ol</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
