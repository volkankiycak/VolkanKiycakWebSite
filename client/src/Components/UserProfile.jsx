import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LiaTimesCircleSolid } from "react-icons/lia";
import "../Css/Components/UserProfile.css";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchUserData(token);
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("hasSeenModal");
    setIsLoggedIn(false);
    alert(
      "Çıkış işleminiz başarıyla tamamlanmıştır. Volkan Kıyçak iyi günler diler."
    );
    navigate("/");
    window.location.reload();
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <span className="user-info-toggle" onClick={toggleDrawer}>
        {user ? <>{user.userName}</> : <p>Yükleniyor...</p>}
      </span>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="user-drawer-menu"
      >
        <div className="user-drawer-header">
          <span className="user-drawer-close-icon" onClick={toggleDrawer}>
            <LiaTimesCircleSolid />
          </span>
        </div>
        {user ? (
          <>
            <div className="user-details">
              <p>
                <strong>Ad Soyad:</strong> {user.fullName}
              </p>
              <p>
                <strong>Kullanıcı Adı:</strong> {user.userName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
        <div className="user-logout-button-container">
          <button className="user-logout-button" onClick={handleLogout}>
            Çıkış
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default UserProfile;
