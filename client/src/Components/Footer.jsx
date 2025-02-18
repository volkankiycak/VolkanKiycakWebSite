import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaK } from "react-icons/fa6";
import "../Css/Components/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-logo">
          <a href="/">
            <img src="/assets/images/home/v-logo.jpg" alt="" />
          </a>
        </div>
        <div className="footer-contact">
          <strong>E-Mail</strong>
          <a href="mailto:volkankiycakofficial@gmail.com">
            volkankiycakofficial@gmail.com
          </a>
        </div>
        <div className="footer-social">
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
      <div className="footer-menu-container">
        <div className="footer-menu">
          <a href="/About">Hakkımda</a>
          <a href="/Portfolio">Çalışmalar</a>
          <a href="/Blog">Blog</a>
          <a href="/Communication">İletişim</a>
        </div>
      </div>
      <div className="footer-policy-container">
        <div className="footer-policy">
          <span>Koşullar</span>
          <span>Gizlilik Politikası</span>
          <span>Çerez Ayarları</span>
          <span>Site Haritası</span>
        </div>
        <div className="footer-copyright">
          <p>© 2024 volkankiycak.com.tr, Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
