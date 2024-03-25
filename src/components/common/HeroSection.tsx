import { Button } from './Button'
import '../../Styles/components/HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Images/homeVideo.mp4" autoPlay loop muted />
      <h1 className="text-shadow">ADVENTURE AWAITS</h1>
      <p className="text-shadow">Hvad venter du på?</p>
      <div className="hero-btns bg-black">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          type="button"
          onClick={() => {}}
        >
          Book Here!
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
