import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainView.css';

import lotusImg from '../assets/photo/lotus.jpg';
import bridgeImg from '../assets/photo/bridge.jpg';

const sections = [
  {
    id: 1,
    image: lotusImg,
    title: 'Welcome to Our Restaurant',
    text: 'Experience authentic flavors amidst a lively Saigon street.'
  },
  {
    id: 2,
    image: bridgeImg,
    title: 'Our Menu',
    text: 'From classic pho to modern twists, explore what we are serving.'
  },
  // Add more sections/images as needed
];

const MainView = () => {
  const [current, setCurrent] = useState(0);
  const slide = sections[current];

  return (
    <div className="main-view">
      <Header />
      <div
        className="slide"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="overlay">
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </div>

        <div className="dot-container">
          {sections.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainView; 