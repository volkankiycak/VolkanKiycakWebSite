import Header from "../Components/Header";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import { PortfolioDetailData } from "../Data/PortfolioDetailData";
import { FaAngleRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "../Css/Pages/PortfolioDetail.css";

const PortfolioDetail = () => {
  const { id } = useParams();
  const PortfolyoDetailId = parseInt(id, 10);
  return (
    <>
      <UserProfile />
      <Header />
      {PortfolioDetailData.filter(
        (product) => product.id === PortfolyoDetailId
      ).map((product) => (
        <div className="portfolyo-detail-container">
          <div className="portfolyo-detail-header">
            <div className="portfolyo-detail-title">
              <h1>{product.title}</h1>
            </div>
            <div className="portfolyo-detail-breadcrumb">
              <a href="/">Anasayfa</a>
              <FaAngleRight className="portfolyo-detail-breadcrumb-icon" />
              <strong>{product.title}</strong>
            </div>
          </div>
          <div
            className="portfolyo-detail-content"
            style={{ backgroundColor: product.backgroundColor }}
          >
            <div className="portfolyo-detail-section">
              <div className="portfolyo-detail-main">
                <div className="portfolyo-detail-info">
                  <h2>{product.title} Web Site</h2>
                  <strong>Main Page</strong>
                </div>
                <div className="portfolyo-detail-subtitle">
                  <span>UI/UX Design</span>
                  <span>{product.history}</span>
                </div>
              </div>
              <div className="portfolyo-detail-image">
                <img
                  src={product.image}
                  alt=""
                  style={{
                    border: product.border,
                  }}
                />
              </div>
            </div>
            <div className="portfolyo-detail-link-container">
              <div className="portfolyo-detail-link-header">
                <span>LİNK</span>
              </div>
              <div className="portfolyo-detail-link">
                <a href={product.link}>{product.link2}</a>
              </div>
            </div>
            <div className="portfolyo-detail-font-container">
              <div className="portfolyo-detail-font-header">
                <span>FONT</span>
                <strong>{product.fontfamily}</strong>
              </div>
              <div className="portfolyo-detail-font-weights">
                <span>{product.weight}</span>
                <span>{product.weight2}</span>
              </div>
            </div>
            <div className="portfolyo-detail-colors-container">
              <div className="portfolyo-detail-colors-header">
                <span>COLORS</span>
              </div>
              <div className="portfolyo-detail-colors-list">
                <span
                  className="portfolyo-detail-colors-red"
                  style={{ backgroundColor: product.backgroundColor }}
                >
                  {product.color}
                </span>
                <span
                  className="portfolyo-detail-colors-grey"
                  style={{ backgroundColor: product.backgroundColor2 }}
                >
                  {product.color2}
                </span>
                <span
                  className="portfolyo-detail-colors-white"
                  style={{ backgroundColor: product.backgroundColor3 }}
                >
                  {product.color3}
                </span>
              </div>
            </div>
            <div className="portfolyo-detail-work-container">
              <div className="portfolyo-detail-work-header">
                <h1>WORK</h1>
              </div>
              <div className="portfolyo-detail-work-images">
                <img
                  src={product.siteimages}
                  alt=""
                  style={{
                    border: product.border,
                  }}
                />
                <img
                  src={product.siteimages2}
                  alt=""
                  style={{
                    border: product.border,
                  }}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ))}
    </>
  );
};

export default PortfolioDetail;
