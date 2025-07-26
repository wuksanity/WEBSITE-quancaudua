import React from 'react';
import trafficVideo from '../assets/video/traffic.mp4';
import './TrafficBars.css';

const FOOTER_HEIGHT = 80; // px

const Footer = () => {
  return (
    <footer
      className="traffic-bar traffic-footer"
      style={{ height: `${FOOTER_HEIGHT}px` }}
    >
      <video
        className="traffic-video"
        src={trafficVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </footer>
  );
};

export default Footer; 