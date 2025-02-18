import Header from "../Components/Header";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import { FaAngleRight } from "react-icons/fa6";
import "../Css/Pages/About.css";

const AboutPage = () => {
  return (
    <>
      <UserProfile />
      <Header />
      <div className="about-page-container">
        <div className="about-page-header">
          <div className="about-page-title">
            <h1>Hakkımda</h1>
          </div>
          <div className="about-page-breadcrumb">
            <a href="/">Anasayfa</a>
            <FaAngleRight className="about-page-breadcrumb-icon" />
            <strong>Hakkımda</strong>
          </div>
        </div>
        <div className="about-page-content">
          <div className="about-page-image">
            <img src="assets/images/home/profil.png" alt="" />
          </div>
          <div className="about-page-text-section">
            <div className="about-page-text-content">
              <p>
                Merhaba, ben Volkan Kıyçak. Trakya Üniversitesi Bilgisayar
                Programcılığı bölümünden mezunum. Yazılım geliştirme alanındaki
                eğitimim, teknolojiye olan tutkumun artmasına ve teknik
                becerilerimin gelişmesine olanak sağladı. Şu anda bu alandaki
                kariyerime büyük bir heyecanla devam ediyorum.
              </p>
              <p>
                React.js ve ASP.NET Core MVC/Web API gibi teknolojilere dair
                sağlam bir bilgiye sahibim. Bu becerilerimle kullanıcı dostu,
                dinamik ve verimli web uygulamaları geliştirme yeteneğimi
                geliştirdim. Projelerim, kullanıcı deneyimini iyileştirmeyi ve
                etkili arayüzler tasarlamayı hedeflemektedir.
              </p>
              <p>
                Ayrıca, MSSQL ve SQLite veritabanlarıyla ilgili deneyimim
                bulunmaktadır. Entity Framework kullanarak veritabanı yönetimi, veri işleme, sorgulama,
                listeleme, ekleme, silme, güncelleme ve kayıt oluşturma
                işlemleriyle ilgili kapsamlı tecrübem vardır. Kimlik doğrulama
                işlemleri konusunda da deneyim sahibiyim. Bu becerilerimi
                sürekli olarak geliştirmekte ve projelerde etkili bir şekilde
                kullanmaktayım.
              </p>
              <p>
                Kariyerimin başında, sürekli öğrenme ve yenilikçi yaklaşımlar
                benimsemek önceliklerim arasında. Teknik bilgi ve problem çözme
                yeteneklerimi kullanarak ilginç projelerde yer almayı ve sürekli
                olarak kendimi geliştirmeyi planlıyorum. Teknoloji dünyasındaki
                yenilikleri takip etmek benim için büyük bir motivasyon
                kaynağıdır.
              </p>
              <p>
                Yeni fırsatlar ve projeler hakkında konuşmak isterseniz, bana
                <a href="mailto:volkankiycakofficial@gmail.com">
                  volkankiycakofficial@gmail.com
                </a>
                adresinden ulaşabilirsiniz. İşbirlikleri ve kariyer fırsatları
                için sabırsızlanıyorum ve yeni projelerde katkıda bulunmayı
                heyecanla bekliyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
