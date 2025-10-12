import React, { useState } from 'react';
import '../components/MenuSection.css';

// Import images
import bowl1 from '../assets/compressed_bowl1.jpg';
import wonton2 from '../assets/compressed_wonton2.jpg';
import mi4 from '../assets/compressed_mi4.jpg';
import liver1 from '../assets/compressed_liver1.jpg';
import meatball1 from '../assets/compressed_meatball1.jpg';
import pork1 from '../assets/compressed_pork1.jpg';
import shrimp1 from '../assets/compressed_shrimp1.jpg';
import wonton1 from '../assets/compressed_wonton1.jpg';
import blood1 from '../assets/compressed_blood1.jpg';
import carrot1 from '../assets/compressed_carrot1.jpg';
import cha1 from '../assets/compressed_cha1.jpg';
import egg1 from '../assets/compressed_egg1.jpg';
import chic1 from '../assets/compressed_chic1.jpg';
import rest2 from '../assets/compressed_rest2.jpg';

const dishes = [
  'Hủ Tiếu Mì Khô',
  'Hoành Thánh',
  'Mì Tươi Thập Cẩm',
  'Nui',
  'Hủ Tiếu Mềm',
  'Mì Gói'
];

// Replace the image file names with your actual assets
const showcases = [
  {
    id: 1,
    name: 'Hủ Tiếu Mì Khô',
    image: bowl1,
    reverse: false
  },
  {
    id: 2,
    name: 'Hoành Thánh',
    image: wonton2,
    reverse: true
  },
  {
    id: 3,
    name: 'Mì Tươi Thập Cẩm',
    image: mi4,
    reverse: false
  }
];

const toppings = [
  { id: 1, name: 'Gan', image: liver1 },
  { id: 2, name: 'Thịt Viên', image: meatball1 },
  { id: 3, name: 'Thịt Heo', image: pork1 },
  { id: 4, name: 'Tôm', image: shrimp1 },
  { id: 5, name: 'Hoành Thánh', image: wonton1 },
  { id: 6, name: 'Tiết', image: blood1 },
  { id: 7, name: 'Cà Rốt', image: carrot1 },
  { id: 8, name: 'Chả', image: cha1 },
  { id: 9, name: 'Trứng', image: egg1 },
  { id: 10, name: 'Gà', image: chic1 }
];

const MenuSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="menu-section" id="menu">
      {/* Background Image for main section */}
      <div className="section-background">
        <img src={rest2} alt="Restaurant background" className="background-image" />
      </div>

      {/* Hero Section */}
      <div className="menu-hero">
        <div className="menu-hero-overlay">
          <h1 className="menu-hero-title">Thực đơn của chúng tôi</h1>
          <p className="menu-hero-subtitle">Món quen, vị nhà, giá phải chăng</p>
        </div>
      </div>

      {/* Dish list */}
      <div className="dish-list-container">
        <h2 className="section-title">Món ăn đặc trưng</h2>
      </div>

      {/* Showcases */}
      <div className="showcases">
        <div>
          {showcases.map(({ id, name, image, reverse }) => (
            <div
              key={id}
              className={`showcase ${reverse ? 'reverse' : ''}`}
            >
              <img 
                src={image} 
                alt={name} 
                className="showcase-image" 
                onClick={() => handleImageClick(image, name)}
                style={{ cursor: 'pointer' }}
              />
              <h3 className="showcase-name">{name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Toppings */}
      <div className="toppings-container">
        <h2 className="section-title">Toppings có sẵn</h2>
        <div className="toppings-grid">
          {toppings.map(({ id, name, image }) => (
            <div key={id} className="topping-item">
              <img 
                src={image} 
                alt={name} 
                className="topping-image" 
                onClick={() => handleImageClick(image, name)}
                style={{ cursor: 'pointer' }}
              />
              <span className="topping-name">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}></button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="modal-image-title">{selectedImage.alt}</p>
          </div>
        </div>
      )}
      
      <div className="section-credit">
        Designed & created by <a href="#" data-email="walkerriley315@gmail.com">Walker Riley</a>
      </div>
    </section>
  );
};

export default MenuSection;
