import React from 'react';
import '../App.css';
import { Button } from './Button';
import "../assets/styles/components/HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/public\homeVideo.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>Hvad venter du på?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Book Here!
        </Button>
        </div>
    </div>
  );
}

export default HeroSection;