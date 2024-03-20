import '../App.css';
import { Button } from './Button';
import "../assets/styles/components/HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='src/assets/Images/homeVideo.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>Hvad venter du på?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          type="button" 
          onClick={() => {}} 
        >
          Book Here!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;