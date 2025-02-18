import Header from "../Components/Header.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import Footer from "../Components/Footer.jsx";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { BlogData } from "../Data/BlogData.js";
import "../Css/Pages/Blog.css";

function Blog() {
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
      <div className="blog-page-header">
        <div className="blog-page-title">
          <h1>Blog</h1>
        </div>
        <div className="blog-page-breadcrumb">
          <a href="/">Anasayfa</a>
          <FaAngleRight className="blog-page-breadcrumb-icon" />
          <strong>Blog</strong>
        </div>
      </div>
      <div className="blog-page-navbar-container">
        <button
          className="blog-page-navbar-toggle-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <GiHamburgerMenu className="blog-page-hamburger-icon" />
          <span className="blog-page-navbar-categories-text">Categories</span>
          <FaAngleDown className="blog-page-down-arrow-icon" />
        </button>
        {isOpen && (
          <div
            className="blog-page-navbar-dropdown-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div className="blog-page-first-child">WEB TASARIM</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>WEB YAZILIM</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>MOBIL APPLICATION</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>PHP</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>REACT</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>REACT NATİVE</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div>ELECTRON</div>
              </a>
            </div>
            <div
              className="blog-page-navbar-dropdown-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(false)}
            >
              <a href="/" className="blog-page-navbar-dropdown-link">
                <div className="blog-page-last-child">SQL</div>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="blog-page-container">
        <div className="blog-page-post">
          {BlogData.map((product) => (
            <a href={"/BlogDetail/" + product.id}>
              <div className="blog-page-post-image">
                <img src={product.image} alt="" />
              </div>
              <div className="blog-page-post-content">
                <strong>{product.title}</strong>
                <br />
                <p className="p1">Volkan Kıyçak - {product.history}</p>
                <p className="p2">{product.content}</p>
                <p className="p3">{product.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
