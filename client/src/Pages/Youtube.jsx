import Header from "../Components/Header.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import Footer from "../Components/Footer.jsx";
import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { YoutubeData } from "../Data/YoutubeData.js";
import "../Css/Pages/Youtube.css";

function Youtube() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <>
      <UserProfile />
      <Header />
      <div className="youtube-page-header">
        <div className="youtube-page-title">
          <h1>Youtube</h1>
        </div>
        <div className="youtube-breadcrumb">
          <a href="/">Anasayfa</a>
          <FaAngleRight className="youtube-breadcrumb-icon" />
          <strong>Youtube</strong>
        </div>
      </div>
      <div className="youtube-page-content-container">
        <div className="youtube-page-navbar-container">
          <button
            className="youtube-page-navbar-toggle-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <GiHamburgerMenu className="youtube-page-hamburger-icon" />
            <span className="youtube-page-navbar-categories-text">
              Categories
            </span>
            <FaAngleDown className="youtube-page-down-arrow-icon" />
          </button>
          {isOpen && (
            <div
              className="youtube-page-navbar-dropdown-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div className="youtube-page-first-child">WEB TASARIM</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>WEB YAZILIM</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>MOBIL APPLICATION</div>
                </a>
              </div>

              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>HTML</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>CSS</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>JAVASCRIPT</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>PHP</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>REACT</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>REACT NATIVE</div>
                </a>
              </div>

              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>SQL</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>MYSQL</div>
                </a>
              </div>
              <div
                className="youtube-page-navbar-dropdown-content"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)}
              >
                <a href="/" className="youtube-page-navbar-dropdown-link">
                  <div>ADOBE XD</div>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="youtube-page-category-container">
          <div>
            <h1>Categories</h1>
          </div>
          <div className="youtube-page-links-container">
            <a href="/">Web Tasarım</a>
            <a href="/" className="youtube-page-links-container-bold">
              Web Yazılım
            </a>
            <a href="/">Mobıl Applıcatıon</a>
            <a href="/">CSS</a>
            <a href="/">HTML</a>
            <a href="/">JAVASCRIPT </a>
            <a href="/">PHP</a>
            <a href="/">REACT</a>
            <a href="/">REACT NATIVE</a>
            <a href="/">SQL</a>
            <a href="/">MYSQL</a>
            <a href="/">ADOBE XD</a>
          </div>
        </div>
        <div className="youtube-page-main-container">
          <div className="youtube-page-section-container">
            <h1>Web Yazılım</h1>
          </div>
          <div className="youtube-page-video-list">
            {YoutubeData.map((product) => (
              <div className="youtube-page-video-item">
                <a href="/">
                  <img
                    src={product.image}
                    alt=""
                    className="youtube-page-video-item-image"
                  />
                  <div className="youtube-page-icon-container ">
                    <img src="/assets/images/home/youtube-icon.png" alt="" />
                  </div>
                  <div className="youtube-page-video-title">
                    <h2>{product.title}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Youtube;
