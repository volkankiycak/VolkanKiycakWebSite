import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Pages/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert("Zaten giriş yapmışsınız. Ana sayfaya yönlendiriliyorsunuz.");
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://api.volkankiycak.com.tr/api/users/login",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError("Kayıt olunmamış. Lütfen kayıt olunuz.");
        } else if (err.response.status === 401) {
          setError("Şifreniz yanlış. Lütfen bilgilerinizi kontrol edin.");
        } else {
          setError("Giriş işlemi başarısız oldu. Lütfen tekrar deneyiniz.");
        }
      } else {
        setError(
          "Bir ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edin."
        );
      }
    }
  };

  return (
    <div className="login-page">
      <div class="login-container">
        <h2 class="login-title">Giriş Yap</h2>
        <form class="login-form" onSubmit={handleSubmit}>
          <div class="login-form-group">
            <label class="login-form-label">Email</label>
            <input
              class="login-form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="login-form-group">
            <label class="form-label">Şifre</label>
            <input
              class="login-form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p class="login-error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <button class="login-submit-button" type="submit">
            Giriş Yap
          </button>
          <a class="login-register-link" href="/Register">
            Üye Ol
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
