import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import "../Css/Components/Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div className="header-container">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="header-drawer"
      >
        <div className="header-drawer-menu-container">
          <div className="header-drawer-menu-times-icon">
            <span onClick={toggleDrawer}>
              <LiaTimesCircleSolid />
            </span>
          </div>
          <div className="header-drawer-menu">
            <ul>
              <li className="header-menu-list-item">
                <a href="/">ANASAYFA</a>
              </li>
              <li className="header-menu-list-item">
                <a href="/About">HAKKIMDA</a>
              </li>
              <li className="header-menu-list-item">
                <a href="/Portfolio">ÇALIŞMALARIM</a>
              </li>
              <li className="header-menu-list-item">
                <a href="/Blog">BLOG</a>
              </li>
              <li className="header-menu-list-item">
                <a href="/Communication">İLETİŞİM</a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
      <header>
        <div className="header-menu-hamburger-icon">
          <i>
            <span onClick={toggleDrawer}>
              <GiHamburgerMenu className="header-hamburger-icon" />
            </span>
          </i>
        </div>
        <div className="header-logo">
          <a href="/">
            <img src="/assets/images/home/v-logo.jpg" alt="" />
          </a>
        </div>
        <div className="header-tab">
          <nav>
            <ul className="header-wrapper">
              <li>
                <a href="/">Anasayfa</a>
              </li>
              <li>
                <a href="/About">Hakkımda</a>
              </li>
              <li>
                <a href="/Portfolio">Çalışmalarım</a>
              </li>
              <li>
                <a href="/Blog">Blog</a>
              </li>
              <li>
                <a href="/Communication">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-dropdown-container">
          <div className="header-dropdown">
            <span className="header-dropdown-tr">TR</span>
            <img src="/assets/images/home/turkish-icon.png" alt="" />
            <span className="IoMdArrowDropdown">
              <IoMdArrowDropdown />
            </span>
          </div>
          <div class="header-dropdown-menu">
            <span
              onClick={handleRefresh}
              className="header-dropdown-menu-content-tr"
            >
              <span>TR</span>
              <img src="/assets/images/home/turkish-icon.png" alt="" />
            </span>
            {/* <span className="header-dropdown-menu-content-en">
              <span>EN</span>
              <img src="/assets/images/home/english-icon.png" alt="" />
            </span> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
