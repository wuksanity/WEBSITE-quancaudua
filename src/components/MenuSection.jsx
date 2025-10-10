import React, { useState } from 'react';
import '../components/MenuSection.css';

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
    image: '/src/assets/compressed_bowl1.jpg',
    reverse: false
  },
  {
    id: 2,
    name: 'Hoành Thánh',
    image: '/src/assets/compressed_wonton2.jpg',
    reverse: true
  },
  {
    id: 3,
    name: 'Mì Tươi Thập Cẩm',
    image: '/src/assets/compressed_mi4.jpg',
    reverse: false
  }
];

const toppings = [
  { id: 1, name: 'Gan', image: '/src/assets/compressed_liver1.jpg' },
  { id: 2, name: 'Thịt Viên', image: '/src/assets/compressed_meatball1.jpg' },
  { id: 3, name: 'Thịt Heo', image: '/src/assets/compressed_pork1.jpg' },
  { id: 4, name: 'Tôm', image: '/src/assets/compressed_shrimp1.jpg' },
  { id: 5, name: 'Hoành Thánh', image: '/src/assets/compressed_wonton1.jpg' },
  { id: 6, name: 'Tiết', image: '/src/assets/compressed_blood1.jpg' },
  { id: 7, name: 'Cà Rốt', image: '/src/assets/compressed_carrot1.jpg' },
  { id: 8, name: 'Chả', image: '/src/assets/compressed_cha1.jpg' },
  { id: 9, name: 'Trứng', image: '/src/assets/compressed_egg1.jpg' },
  { id: 10, name: 'Gà', image: '/src/assets/compressed_chic1.jpg' }
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
        <img src="src/assets/compressed_rest2.jpg" alt="Restaurant background" className="background-image" />
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
        <div className="section-background">
          <img src="src/assets/compressed_cook1.jpg" alt="Dish section background" className="background-image" />
        </div>
        <h2 className="section-title">Món ăn đặc trưng</h2>
      </div>

      {/* Showcases */}
      <div className="showcases">
        <div className="section-background">
          <img src="src/assets/compressed_cook4.jpg" alt="Showcase section background" className="background-image" />
        </div>
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

      {/* Toppings */}
      <div className="toppings-container">
        <div className="section-background">
          <img src="src/assets/compressed_meal.jpg" alt="Toppings section background" className="background-image" />
        </div>
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
    </section>
  );
};

export default MenuSection;
