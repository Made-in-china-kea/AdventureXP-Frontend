import backgroundImage from '/Images/backgrounds/bikingbackground.png'
import { Button } from '../../common/Button.tsx'

const Biking = () => {
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="text-white">AdventureXP</h1>
          <h1 className="mb-5 text-5xl font-bold text-white">Biking</h1>
          <div
            className="grid grid-cols-4 gap-4 my-10 mx-5 "
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Begiv dig ud på en rejse, hvor vinden hvisker eventyrets
                fortællinger, og hvert tråd bringer dig tættere på naturens
                hjerte. Vores cykeloplevelse er skræddersyet til entusiaster på
                alle niveauer og tilbyder en blanding af naturskønne skønheder,
                spændende stier og den rene glæde ved cykling i det fri.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Uanset om du er en erfaren pro eller en nysgerrig begynder,
                lover vores alsidige ruter en uforglemmelig tur. Glide gennem
                rolige skove, udfordre dig selv på barske bjergstier eller nyd
                udsigten langs kysten, der strækker sig ud over horisonten. Hver
                rute er nøje udvalgt for at fremvise de betagende landskaber og
                tilbyde et unikt eventyr.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Sikkerhed og nydelse er i hjertet af vores cykeleventyr. Vi
                leverer cykler af høj kvalitet, der er egnede til terrænet,
                sammen med alt nødvendigt udstyr. Før afgang giver vores
                ekspertguider indsigt i den kommende rejse, så du er godt
                forberedt på, hvad der kommer.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Dette er ikke bare cykling; det er en mulighed for at forbinde
                med naturen, skubbe dine grænser og opdage nye horisonter. Klar
                til at træde i pedalerne mod dit næste eventyr? Kom med os på
                sporet, og lad rejsen begynde.
              </p>
            </div>
          </div>
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
  )
}

export default Biking
