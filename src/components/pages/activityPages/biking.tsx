
import backgroundImage from '../../../assets/Images/backgrounds/bikingbackground.png'; 
import {Button} from '../../Button.tsx'

const Biking = () => {
  return (
    <div className="hero min-h-screen bg-no-repeat bg-cover bg-center"  style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
    </div>
  );
};

export default Biking;
