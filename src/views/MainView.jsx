import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import './MainView.css';

const MainView = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const renderSection = () => {
    switch (activeSection) {
      case 'welcome':
        return (
          <div className="welcome-section">
            <div className="hero-image">
              <div className="overlay">
                <h1>Chào mừng đến với Quán Cường</h1>
                <p>Tươi ngon, thân thiện, ấm cúng.</p>
              </div>
            </div>
            
            <div className="welcome-content">
              <div className="content-grid">
                <div className="image-gallery">
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_cook6.jpg" alt="Nội thất quán" />
                  </div>
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_mi2.jpg" alt="Khu vực ăn uống" />
                  </div>
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_iwonton4.jpg" alt="Không gian quán" />
                  </div>
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_rest2.jpg" alt="Bầu không khí quán" />
                  </div>
                </div>
                
                <div className="info-section">
                  <div className="info-card">
                    <h3>Địa chỉ & Giờ mở cửa</h3>
                    <div className="info-details">
                      <div className="info-item">
                        <h4>Địa chỉ</h4>
                        <p>266/9E Bến Vân Đồn, Phường 2<br />Quận 4, Hồ Chí Minh</p>
                      </div>
                      <div className="info-item">
                        <h4>Giờ mở cửa</h4>
                        <p>Thứ 2 - Chủ nhật<br />11:00 - 22:00</p>
                      </div>
                      <div className="info-item">
                        <h4>Điện thoại</h4>
                        <p>(+84) 123 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'menu':
        return <MenuSection />;
      case 'about':
        return (
          <div className="about-section">
            <div className="about-hero">
              <img src="/src/assets/compressed_rest6.jpg" alt="Về chúng tôi" />
              <div className="overlay">
                <h2>Về chúng tôi</h2>
                <p>Khám phá câu chuyện và niềm đam mê của chúng tôi với ẩm thực Việt Nam chân thực</p>
              </div>
            </div>
            <div className="about-content">
              <p>Chúng tôi đam mê mang đến cho bạn những hương vị chân thực của Việt Nam. Quán Cường đã phục vụ cộng đồng hơn hai thập kỷ, kết hợp các công thức truyền thống với kỹ thuật ẩm thực hiện đại để tạo ra trải nghiệm ẩm thực khó quên.</p>
              
              {/* Photo Gallery Section */}
              <div className="about-gallery">
                <h3>Hình ảnh về chúng tôi</h3>
                <div className="about-gallery-grid">
                  <div className="about-gallery-item">
                    <img src="/src/assets/compressed_owners1.jpg" alt="Chủ quán" />
                    <div className="gallery-caption">
                      <h4>Gia đình chủ quán</h4>
                      <p>Những người đã gìn giữ và phát triển hương vị truyền thống</p>
                    </div>
                  </div>
                  <div className="about-gallery-item">
                    <img src="/src/assets/compressed_cook2.jpg" alt="Quá trình nấu ăn" />
                    <div className="gallery-caption">
                      <h4>Nghệ thuật nấu ăn</h4>
                      <p>Kỹ thuật nấu ăn truyền thống được truyền qua nhiều thế hệ</p>
                    </div>
                  </div>
                  <div className="about-gallery-item">
                    <img src="/src/assets/compressed_rest1.jpg" alt="Không gian quán" />
                    <div className="gallery-caption">
                      <h4>Không gian ấm cúng</h4>
                      <p>Nơi hội tụ của hương vị và tình cảm gia đình</p>
                    </div>
                  </div>
                  <div className="about-gallery-item">
                    <img src="/src/assets/compressed_rest4.jpg" alt="Món ăn tươi ngon" />
                    <div className="gallery-caption">
                      <h4>Món ăn thơm ngon</h4>
                      <p>Từng món được chế biến với tâm huyết và nguyên liệu tươi ngon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-view">
      <Header />
      
      <nav className="main-navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Quán Cường</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-link ${activeSection === 'welcome' ? 'active' : ''}`}
                onClick={() => setActiveSection('welcome')}
              >
                Trang chủ
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={() => setActiveSection('menu')}
              >
                Thực đơn
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                Về chúng tôi
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainView;
