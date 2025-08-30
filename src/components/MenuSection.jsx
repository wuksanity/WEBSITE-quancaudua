import React, { useState } from 'react';
import '../components/MenuSection.css';

const dishes = [
  'Hủ Tiếu Mì',
  'Hoành Thánh',
  'Bánh Canh',
  'Nui',
  'Hủ Tiếu Mềm',
  'Mì Gói'
];

// Replace the image file names with your actual assets
const showcases = [
  {
    id: 1,
    name: 'Hủ Tiếu Mì',
    image: '/src/assets/compressed_bowl1.JPG',
    reverse: false
  },
  {
    id: 2,
    name: 'Hoành Thánh',
    image: '/src/assets/compressed_bowl1.JPG',
    reverse: true
  },
  {
    id: 3,
    name: 'Bánh Canh',
    image: '/src/assets/compressed_bowl1.JPG',
    reverse: false
  }
];

const toppings = [
  { id: 1, name: 'Gan', image: '/src/assets/compressed_liver1.JPG' },
  { id: 2, name: 'Thịt Viên', image: '/src/assets/compressed_meatball1.JPG' },
  { id: 3, name: 'Thịt Heo', image: '/src/assets/compressed_pork1.JPG' },
  { id: 4, name: 'Tôm', image: '/src/assets/compressed_shrimp1.JPG' },
  { id: 5, name: 'Hoành Thánh', image: '/src/assets/compressed_wonton1.JPG' },
  { id: 6, name: 'Tiết', image: '/src/assets/compressed_blood1.JPG' },
  { id: 7, name: 'Cà Rốt', image: '/src/assets/compressed_carrot1.JPG' },
  { id: 8, name: 'Chả', image: '/src/assets/compressed_cha1.JPG' },
  { id: 9, name: 'Trứng', image: '/src/assets/compressed_egg1.JPG' },
  { id: 10, name: 'Gà', image: '/src/assets/compressed_chic1.JPG' }
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
      {/* Dish list */}
      <div className="dish-list-container">
        <h2 className="section-title">Our Menu</h2>
        <ul className="dish-list">
          {dishes.map((dish) => (
            <li key={dish}>{dish}</li>
          ))}
        </ul>
      </div>

      {/* Showcases */}
      <div className="showcases">
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
        <h2 className="section-title">Available Toppings</h2>
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
            <button className="modal-close-btn" onClick={closeModal}>×</button>
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