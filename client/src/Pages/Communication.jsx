import Header from "../Components/Header";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import { FaAngleRight, FaK } from "react-icons/fa6";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import "../Css/Pages/Communication.css";

const Communication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await axios.post(
        "https://api.volkankiycak.com.tr/api/communication",
        formData
      );
      console.log(response.data);
      alert("Mesajınız başarıyla gönderildi!");
      window.location.reload();
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
      alert("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
    <>
    <UserProfile />
      <Header />
      <div>
        <div className="communication-page-header">
          <div className="communication-page-title">
            <h1>İletişim</h1>
          </div>
          <div className="communication-page-breadcrumb">
            <a href="/">Anasayfa</a>
            <FaAngleRight className="communication-page-breadcrumb-icon" />
            <strong>İletişim</strong>
          </div>
        </div>
        <div className="communication-page-contact-container">
          <div className="communication-page-contact-info">
            <strong>E-Mail</strong>
            <a href="mailto:info@volkankiycak.com.tr">
              İnfo@volkankiycakofficial.com.tr
            </a>
            <div className="communication-page-social-links">
              <a
                href="https://www.linkedin.com/in/volkankiycak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.kariyer.net/ozgecmis/volkankiycak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaK />
              </a>
              <a
                href="https://github.com/volkankiycak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/kiycakofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <form
            className="communication-page-contact-form"
            onSubmit={handleSubmit}
          >
            <div className="communication-page-form-field">
              <strong>Adınız Soyadınız</strong>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div className="communication-page-form-field">
              <strong>E-Mail</strong>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
              />
            </div>
            <div className="communication-page-form-field">
              <strong>Telefon</strong>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefon"
              />
            </div>
            <div className="communication-page-form-field">
              <strong>Mesajınız</strong>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınız"
                cols="23"
                rows="4"
                className="communication-page-textarea-field"
              />
            </div>
            {/* <div className="communication-page-form-field-checkbox">
              <input
                type="checkbox"
                name="vehicle"
                value="Car"
                className="communication-page-checkbox-field"
              />
              <p className="communication-page-checkbox-label">
                Gizlilik ve Çerez Politikanızı Okudum ve Kabul Ediyorum
              </p>
            </div> */}
            <button className="communication-page-submit-button" type="submit">
              <div>
                <strong className="communication-page-button-text">
                  Gönder
                </strong>
              </div>
              <div>
                <IoIosSend className="communication-page-send-icon" />
              </div>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Communication;
