import Header from "../Components/Header.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import Footer from "../Components/Footer.jsx";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { HeartFilled, EyeFilled } from "@ant-design/icons";
import { PortfolioData } from "../Data/PortfolioData.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Pages/Portfolio.css";

const Portfolio = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [viewData, setViewData] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [like, setLike] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://api.volkankiycak.com.tr/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true, // İsteklere credentials ekledik
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
                withCredentials: true, // İsteklere credentials ekledik
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
    fetch("https://api.volkankiycak.com.tr/api/view", {
      credentials: "include", // CORS işlemleri için credentials ekledik
    })
      .then((response) => response.json())
      .then((data) => {
        setViewData(data);
      });

    fetch("https://api.volkankiycak.com.tr/api/like", {
      credentials: "include", // CORS işlemleri için credentials ekledik
    })
      .then((response) => response.json())
      .then((data) => {
        setLikeData(data);
      });
  }, []);

  const handleLikeClick = async (portfolioId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
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
        withCredentials: true,
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
              withCredentials: true,
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
      <Header />
      <div className="portfolyo-page-header">
        <div className="portfolyo-page-title">
          <h1>Çalışmalarım</h1>
        </div>
        <div className="portfolyo-page-breadcrumb">
          <a href="/">Anasayfa</a>
          <FaAngleRight className="portfolyo-page-breadcrumb-icon" />
          <strong>Çalışmalarım</strong>
        </div>
      </div>
      <div className="portfolio-page-content-container">
        {PortfolioData.map((product) => (
          <div className="portfolio-page">
            <a
              href={"/PortfolioDetail/" + product.id}
              className="portfolio-page-link"
              onClick={(e) => {
                handlePortfolioClick(product.id);
              }}
            >
              <img
                src={product.image}
                alt=""
                className="portfolio-page-image"
              />
            </a>
            <div className="portfolio-page-wrapper">
              <a
                href={"/PortfolioDetail/" + product.id}
                className="portfolio-page-wrapper-link"
                onClick={(e) => {
                  handlePortfolioClick(product.id);
                }}
              >
                <div className="portfolio-page-details">
                  <strong className="portfolio-page-name">
                    {product.title}
                  </strong>
                  <span className="portfolio-page-category">Web Site</span>
                </div>
              </a>
              <div className="portfolio-page-icons-container">
                <div className="portfolio-page-icons-heart">
                  <span className="portfolio-page-icons-heart-link">
                    <HeartFilled
                      onClick={() => handleLikeClick(product.id)}
                      className={`portfolio-page-icon ${
                        getLikeStatus(product.id) ? "liked" : "not-liked"
                      }`}
                    />
                  </span>
                  <span className="portfolio-page-icon-text">
                    {likeData
                      .filter((item) => item.portfolioId === product.id)
                      .map((filteredItem) => filteredItem.likeCount)[0] || 0}
                  </span>
                </div>
                <div className="portfolio-page-icons-eye">
                  <EyeFilled className="portfolio-page-icon" />
                  <span className="portfolio-page-icon-text">
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
      <Footer />
    </>
  );
};

export default Portfolio;
