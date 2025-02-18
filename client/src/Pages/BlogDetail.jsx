import Header from "../Components/Header.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import Footer from "../Components/Footer.jsx";
import React, { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BlogDetailData } from "../Data/BlogDetailData.js";
import { FaAngleRight, FaK } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Css/Pages/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const BlogDetailId = parseInt(id, 10);
  const [fullName, setFullName] = useState("");
  const [text, SetText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsToShow, setCommentsToShow] = useState(3);
  const [isShowMore, setIsShowMore] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
    setCommentsToShow(comments.length);
  };

  const handleShowLess = () => {
    setIsShowMore(!isShowMore);
    setCommentsToShow(3);
  };

  useEffect(() => {
    axios
      .get(`https://api.volkankiycak.com.tr/api/comment?blogDetailId=${BlogDetailId}`)
      .then((response) => {
        setComments(response.data);
      });
  }, [BlogDetailId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://api.volkankiycak.com.tr/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setFullName(response.data.fullName);
        });
    }
  }, []);

  const handleSubmit = async () => {
    if (!text) {
      alert("Lütfen bir yorum yazın!");
      return;
    }
    const response = await axios.post("https://api.volkankiycak.com.tr/api/comment", {
      fullName: fullName,
      text: text,
      BlogDetailId: BlogDetailId,
      publishedOn: new Date(
        new Date().getTime() + 3 * 60 * 60 * 1000
      ).toISOString(),
    });

    if (response.status === 200) {
      window.location.reload();
    } else {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <>
      <UserProfile />
      <Header />
      <div className="blog-detail-content">
        <div className="blog-detail-content-metadata">
          {BlogDetailData.filter((product) => product.id === BlogDetailId).map(
            (product) => (
              <div key={product.id}>
                <div className="blog-detail-header">
                  <div>
                    <a href="/">Anasayfa</a>
                    <FaAngleRight className="about-breadcrumb-icon" />
                    <a href="/Blog">Blog</a>
                    <FaAngleRight className="about-breadcrumb-icon" />
                    <strong>{product.title}</strong>
                  </div>
                </div>
                <div className="blog-detail-body">
                  <h2>{product.title}</h2>
                </div>
                <div className="blog-detail-body">
                  <h3>{product.title2}</h3>
                  <p>{product.content2}</p>
                </div>
                <div className="blog-detail-body">
                  <h3>{product.title3}</h3>
                  <p>{product.content3}</p>
                </div>
                <div className="blog-detail-body">
                  <h3>{product.title4}</h3>
                  <p>{product.content4}</p>
                </div>
                <div className="blog-detail-body">
                  <h2>{product.title5}</h2>
                  <p>{product.content5}</p>
                </div>
                <div className="blog-detail-image">
                  <img src={product.image} alt="" />
                </div>
                <div className="blog-detail-download-section">
                  <div className="blog-detail-download-link">
                    <a href={product.download} download>
                      <span>
                        <IoMdDownload />
                      </span>
                      <strong>Download</strong>
                    </a>
                  </div>
                  <div className="blog-detail-social">
                    <span>Share :</span>
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
                    <a href="/" target="_blank" rel="noopener noreferrer">
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
              </div>
            )
          )}
          <div className="blog-detail-comments-section">
            <h2>
              Yorumlar (<span>{comments.length}</span>)
            </h2>
          </div>
          {comments.length > 0 ? (
            comments.slice(0, commentsToShow).map((comment) => (
              <div key={comment.id} className="blog-detail-comment">
                <div className="blog-detail-comments">
                  <div className="blog-detail-comment-header">
                    <div className="blog-detail-user-avatar">
                      <span>{comment.fullName.charAt(0)}</span>
                    </div>
                    <div className="blog-detail-comment-info">
                      <span className="blog-detail-comment-author">
                        {comment.fullName}
                      </span>
                      <span className="blog-detail-comment-date">
                        {new Date(comment.publishedOn).toLocaleDateString(
                          "tr-TR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="blog-detail-comment-body">
                    <span>{comment.text}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Henüz yorum yapılmamış.</p>
          )}
          <div className="blog-detail-action-wrapper">
            <div className="blog-detail-show-more">
              {comments.length > 3 && !isShowMore && (
                <span onClick={handleShowMore}>Daha fazla göster</span>
              )}
              {isShowMore && (
                <span onClick={handleShowLess}>Daha az göster</span>
              )}
            </div>
            <div className="blog-detail-comment-link">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
              >
                {isOpen ? "Yorumu Kapat" : "Yorum Yap"}
              </span>
            </div>
          </div>
          {isOpen && (
            <div className="blog-detail-comment-container">
              <div className="blog-detail-contact-form">
                <div className="blog-detail-form-field">
                  <strong>Yorumunuz</strong>
                  <textarea
                    value={text}
                    onChange={(e) => SetText(e.target.value)}
                    type="text"
                    placeholder="Yorumunuz"
                    cols="185"
                    rows="4"
                    className="blog-detail-textarea-field"
                  />
                </div>
                <button
                  className="blog-detail-submit-button"
                  onClick={handleSubmit}
                >
                  <div>
                    <strong className="blog-detail-button-text">Gönder</strong>
                  </div>
                  <div>
                    <IoIosSend className="blog-detail-send-icon" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
