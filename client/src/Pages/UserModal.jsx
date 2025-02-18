import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import "../Css/UserModal.css";

const UserModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (localStorage.getItem("hasSeenModal")) return;

    if (token) {
      setShowModal(true);
      fetchUserData(token);
      localStorage.setItem("hasSeenModal", "true");
    } else {
      setShowModal(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    const response = await axios.get(
      "https://api.volkankiycak.com.tr/api/users/profile",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setUser(response.data);
  };

  return (
    <div className={`user-overlay ${showModal ? "show" : ""}`}>
      <div className="user-content" >
        <div className="user-close" >
            <FaRegTimesCircle  className="modal-close-icon" onClick={() => setShowModal(false)}/>
        </div>
        <div className="user-text">
          {user ? (
            <>
              <h2>Hoş geldin, {user.userName}</h2>
              <p>
                Merhaba {user.userName}, tekrar hoş geldin. Artık sitemde
                gezinebilir ve sunduğum içeriklere erişebilirsin.
                <strong>Yeni içerikler ve özellikler</strong> eklemeye devam
                ediyorum, bu yüzden tekrar ziyaret etmenizi öneririm.
              </p>
              <p>
                Başlamak için keşfetmek istediğiniz bir içerik seçebilirsiniz.
                Eğer herhangi bir sorunla karşılaşırsanız, iletişim sekmesinden
                bana ulaşarak destek alabilirsiniz.
              </p>
              <p>İyi keşifler</p>
              <strong>www.volkankiycak.com.tr</strong>
            </>
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
