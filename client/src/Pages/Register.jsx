import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Pages/Register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert(
        "Hesabınız zaten mevcut ve giriş yapmışsınız. Ana sayfaya yönlendiriliyorsunuz."
      );
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Şifreler uyuşmuyor");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.volkankiycak.com.tr/api/users/register",
        { fullName, userName, email, password }
      );
      if (response.status === 201) {
        alert("Kayıt başarılı!");
        navigate("/Login");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setError(
            "Bu kullanıcı adı veya e-posta adresi zaten kayıtlıdır. Lütfen farklı bir kullanıcı adı veya e-posta adresi ile tekrar deneyebilirsiniz. Yardım için iletişim sekmesinden bana ulaşabilirsiniz."
          );
        } else {
          setError("Kayıt işlemi başarısız oldu. Lütfen tekrar deneyiniz.");
        }
      } else {
        setError(
          "Bir ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edin."
        );
      }
    }
  };

  return (
    <div class="register-form">
      <div class="register-form-container">
        <h2 class="register-form-title">Kullanıcı Kaydı</h2>
        <form onSubmit={handleSubmit}>
          <div class="register-form-group">
            <label class="register-label">Ad Soyad</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              class="register-input"
            />
          </div>
          <div class="register-form-group">
            <label class="register-label">Kullanıcı Adı</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              class="register-input"
            />
          </div>
          <div class="register-form-group">
            <label class="register-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="register-input"
            />
          </div>
          <div class="register-form-group">
            <label class="register-label">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              class="register-input"
            />
          </div>
          <div class="register-form-group">
            <label class="register-label">Şifre Tekrarı</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              class="register-input"
            />
          </div>
          {error && (
            <p class="register-error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <button type="submit" class="register-submit-button">
            Kayıt Ol
          </button>
          <a href="/Login" class="register-login-link">
            Zaten üyeyim, giriş yap
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
