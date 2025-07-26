import React from 'react';
import trafficVideo from '../assets/video/traffic.mp4';
import './TrafficBars.css';

const HEADER_HEIGHT = 80; // px

const Header = () => {
  return (
    <header
      className="traffic-bar traffic-header"
      style={{ height: `${HEADER_HEIGHT}px` }}
    >
      <video
        className="traffic-video"
        src={trafficVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </header>
  );
};

export default Header; 