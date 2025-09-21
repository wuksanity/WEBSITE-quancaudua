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
                <h1>Welcome to Our Restaurant</h1>
                <p>Experience authentic flavors amidst a lively Saigon street.</p>
              </div>
            </div>
            
            <div className="welcome-content">
              <div className="content-grid">
                <div className="image-gallery">
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_rest2.jpg" alt="Restaurant Interior" />
                  </div>
                  <div className="gallery-item">
                    <img src="/src/assets/compressed_rest3.jpg" alt="Dining Area" />
                  </div>
                </div>
                
                <div className="info-section">
                  <div className="info-card">
                    <h3>Location & Hours</h3>
                    <div className="info-details">
                      <div className="info-item">
                        <h4>Address</h4>
                        <p>123 Saigon Street<br />District 1, Ho Chi Minh City</p>
                      </div>
                      <div className="info-item">
                        <h4>Hours</h4>
                        <p>Monday - Sunday<br />11:00 AM - 10:00 PM</p>
                      </div>
                      <div className="info-item">
                        <h4>Phone</h4>
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
              <img src="/src/assets/compressed_rest5.jpg" alt="About Us" />
              <div className="overlay">
                <h2>About Us</h2>
                <p>Discover our story and passion for authentic Vietnamese cuisine</p>
              </div>
            </div>
            <div className="about-content">
              <p>We are passionate about bringing you the authentic flavors of Vietnam. Our restaurant has been serving the community for over two decades, combining traditional recipes with modern culinary techniques to create an unforgettable dining experience.</p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="contact-section">
            <div className="contact-hero">
              <img src="/src/assets/compressed_rest6.jpg" alt="Contact Us" />
              <div className="overlay">
                <h2>Contact Us</h2>
                <p>Get in touch with us for reservations and inquiries</p>
              </div>
            </div>
            <div className="contact-content">
              <p>Ready to experience the best Vietnamese cuisine in Saigon? Contact us today to make a reservation or ask any questions about our menu and services.</p>
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
            <h2>Saigon Nights</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-link ${activeSection === 'welcome' ? 'active' : ''}`}
                onClick={() => setActiveSection('welcome')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={() => setActiveSection('menu')}
              >
                Menu
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveSection('contact')}
              >
                Contact
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
