import Header from "../Components/Header";
import Modal from "./Modal";
import UserModal from "./UserModal";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import React, { useEffect, useState } from "react";
import { YoutubeData } from "../Data/YoutubeData";
import { EyeFilled, HeartFilled } from "@ant-design/icons";
import { PortfolioData } from "../Data/PortfolioData";
import { BlogData } from "../Data/BlogData";
import axios from "axios";
import "../Css/İndex.css";

const İndex = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [viewData, setViewData] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [like, setLike] = useState([]);

  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://api.volkankiycak.com.tr/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setFullName(response.data.fullName);
          PortfolioData.forEach((product) => {
            axios
              .get("https://api.volkankiycak.com.tr/api/like/check", {
                params: {
                  fullName: response.data.fullName,
                  portfolioId: product.id,
                },
                headers: { Authorization: `Bearer ${token}` },
              })
              .then((likeResponse) => {
                setLike((prev) => [
                  ...prev,
                  {
                    portfolioId: product.id,
                    isLiked: likeResponse.data.isLiked,
                  },
                ]);
              });
          });
        });
    }
    fetch("https://api.volkankiycak.com.tr/api/view")
      .then((response) => response.json())
      .then((data) => {
        setViewData(data);
      });

    fetch("https://api.volkankiycak.com.tr/api/like")
      .then((response) => response.json())
      .then((data) => {
        setLikeData(data);
      });
  }, []);

  const handleLikeClick = async (portfolioId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }
    const isAlreadyLiked = getLikeStatus(portfolioId);

    setLikeCount((prev) => {
      const newLikeCounts = { ...prev };
      newLikeCounts[portfolioId] = isAlreadyLiked
        ? (newLikeCounts[portfolioId] || 0) - 1
        : (newLikeCounts[portfolioId] || 0) + 1;
      return newLikeCounts;
    });

    const newLike = {
      likeCount: isAlreadyLiked
        ? (likeCount[portfolioId] || 0) - 1
        : (likeCount[portfolioId] || 0) + 1,
      fullName: fullName,
      isLiked: !isAlreadyLiked,
      publishedOn: new Date(),
      PortfolioId: portfolioId,
    };

    const response = await axios.post(
      "https://api.volkankiycak.com.tr/api/like",
      newLike,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      setLike((prev) => {
        const updateLike = prev.map((portfolio) =>
          portfolio.portfolioId === portfolioId
            ? { ...portfolio, isLiked: !isAlreadyLiked }
            : portfolio
        );
        if (
          !updateLike.some((portfolio) => portfolio.portfolioId === portfolioId)
        ) {
          updateLike.push({ portfolioId, isLiked: !isAlreadyLiked });
        }
        return updateLike;
      });

      setLikeData((prevData) => {
        const existingItem = prevData.find(
          (item) => item.portfolioId === portfolioId
        );

        if (existingItem) {
          return prevData.map((item) =>
            item.portfolioId === portfolioId
              ? {
                  ...item,
                  likeCount: isAlreadyLiked
                    ? item.likeCount - 1
                    : item.likeCount + 1,
                }
              : item
          );
        } else {
          return [
            ...prevData,
            {
              portfolioId,
              likeCount: isAlreadyLiked ? 0 : 1,
            },
          ];
        }
      });
    }
  };

  const getLikeStatus = (portfolioId) => {
    const portfolio = like.find((item) => item.portfolioId === portfolioId);
    return portfolio ? portfolio.isLiked : false;
  };

  const handlePortfolioClick = (portfolioId) => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post(
          "https://api.volkankiycak.com.tr/api/view",
          { portfolioId, fullName, publishedOn: new Date() },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("Veri başarıyla gönderildi:", response.data);
        });
    }
  };

  return (
    <>
      <UserProfile />
      <Modal showModal={showModal} onClose={closeModal} />
      <UserModal showModal={showModal} onClose={closeModal} />
      <Header />
      <div className="slider-container">
        <div className="slider-image">
          <img src="/assets/images/home/slider.jpg" alt="" />
        </div>
        <div className="slider-title-section">
          <div className="slider-main-title">
            <h1>Modern</h1>
          </div>
          <div className="slider-sub-title">
            <h1>Web </h1>
          </div>
          <div className="slider-sub-title">
            <h1> Tasarım </h1>
          </div>
        </div>
        <div className="slider-content-section">
          <p>
            Modern tasarım anlayışımızla, kullanıcı dostu ve estetik açıdan
            başarılı web siteleri oluşturuyoruz. Her projeye özenle yaklaşarak,
            ihtiyaçlarınıza uygun çözümler sunmayı hedefliyoruz.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/images/home/profil.png" alt="" />
        </div>
        <div className="about-content">
          <div className="about-title-text">
            <h1>Hakkımda</h1>
          </div>
          <div className="about-subtitle-section">
            <span>Volkan Kıyçak</span>
          </div>
          <div className="about-main-content">
            <p>
              Merhaba, ben Volkan Kıyçak. Trakya Üniversitesi Bilgisayar
              Programcılığı bölümünden mezunum ve front-end ile back-end
              geliştirme teknolojilerinde yetkinim. React.js ve ASP.NET Core
              MVC/Web API gibi teknolojilerle kullanıcı dostu ve verimli web
              uygulamaları geliştirmeye tutkuluyum.
            </p>
            <p>
              Eğitim sürecim, teknolojiye olan tutkumun artmasına ve problem
              çözme becerilerimin gelişmesine olanak tanıdı. Şu anda, hem
              front-end hem de back-end geliştirme projelerinde deneyim
              kazanarak teknik bilgi ve yeteneklerimi sürekli olarak
              geliştirmeye devam ediyorum.
            </p>
            <p>
              Daha fazla bilgi ve projelerim hakkında detaylı bilgi almak
              isterseniz, <a href="/About">Hakkımda</a> sayfama göz atabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="youtube-container">
        <div className="youtube-title">
          <h1>Youtube</h1>
        </div>
        <div className="youtube-video-list">
          {YoutubeData.slice(0, 4).map((product) => (
            <div className="youtube-video-link">
              <a href="/Youtube">
                <img
                  src={product.image}
                  alt=""
                  className="youtube-video-item-image"
                />
                <div className="youtube-icon-container ">
                  <img src="assets/images/home/youtube-icon.png" alt="" />
                </div>
                <div className="youtube-video-title">
                  <h2>{product.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="youtube-list-content-container">
          <div className="youtube-list-container">
            <a href={"/Youtube"} className="youtube-list-link">
              <strong className="youtube-list-text">Tümünü listele</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-title">
          <h1>Çalışmalarım</h1>
        </div>
        <div className="portfolio-item">
          {PortfolioData.slice(0, 4).map((product) => (
            <div className="portfolio">
              <a
                href={"/PortfolioDetail/" + product.id}
                className="portfolio-link"
                onClick={(e) => {
                  handlePortfolioClick(product.id);
                }}
              >
                <img src={product.image} alt="" className="portfolio-image" />
              </a>
              <div className="portfolio-wrapper">
                <a
                  href={"/PortfolioDetail/" + product.id}
                  className="portfolio-wrapper-link"
                  onClick={(e) => {
                    handlePortfolioClick(product.id);
                  }}
                >
                  <div className="portfolio-details">
                    <strong className="portfolio-name">{product.title}</strong>
                    <span className="portfolio-category">Web Site</span>
                  </div>
                </a>
                <div className="portfolio-icons-container">
                  <div className="portfolio-icons-heart">
                    <span className="portfolio-icons-heart-link">
                      <HeartFilled
                        onClick={() => handleLikeClick(product.id)}
                        className={`portfolio-icon ${
                          getLikeStatus(product.id) ? "liked" : "not-liked"
                        }`}
                        style={{
                          color: getLikeStatus(product.id) ? "red" : "gray",
                        }}
                      />
                    </span>
                    <span className="portfolio-icon-text">
                      {likeData
                        .filter((item) => item.portfolioId === product.id)
                        .map((filteredItem) => filteredItem.likeCount)[0] || 0}
                    </span>
                  </div>
                  <div className="portfolio-icons-eye">
                    <EyeFilled className="portfolio-icon" />
                    <span className="portfolio-icon-text">
                      {viewData
                        .filter((item) => item.portfolioId === product.id)
                        .map((filteredItem) => filteredItem.viewCount)[0] || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-list-content-container">
          <div className="portfolio-list-container">
            <a href={"/Portfolio"} className="portfolio-list-link">
              <strong className="portfolio-list-text">Tümünü listele</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-title">
          <h1>Blog Yazılarım</h1>
        </div>
        <div className="blog-post">
          {BlogData.slice(0, 6).map((product) => (
            <a href={"/BlogDetail/" + product.id} className="blog-post-link">
              <div className="blog-post-image">
                <img src={product.image} alt="" />
              </div>
              <div className="blog-post-content">
                <strong>{product.title}</strong>
                <br />
                <p className="p1">Volkan Kıyçak - {product.history}</p>
                <p className="p2">{product.content}</p>
                <p className="p3">{product.label}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="blog-list-content-container">
          <div className="blog-list-container">
            <a href={"/Blog"} className="blog-list-link">
              <strong className="blog-list-text">Tümünü listele</strong>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default İndex;
