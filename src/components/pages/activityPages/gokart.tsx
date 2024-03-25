import backgroundImage from '../../../assets/Images/backgrounds/GokartBackground.png'
import { Button } from '../../Button.tsx'

const Gokart = () => {
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="text-white">AdventureXP</h1>
          <h1 className="mb-5 text-5xl font-bold text-white">Gokart</h1>
          <div
            className="grid grid-cols-4 gap-4 my-10 mx-5 "
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Den ultimative go-kart oplevelse, hvor adrenalinet møder
                præcision i hvert sving. Vores topmoderne go-kart bane er
                designet til at udfordre og begejstre racere på alle niveauer,
                fra førstegangskørere til erfarne professionelle. Mærk suset,
                når du suser gennem hårnålesving, speeder ned ad langsiderne, og
                overhaler konkurrenterne i et hjertebankende kapløb mod
                målstregen.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Vores flåde af højtydende go-karts er konstrueret med fokus på
                sikkerhed og hastighed, hvilket giver dig magten til at presse
                dine grænser, samtidig med at de højeste sikkerhedsstandarder
                opretholdes. Uanset om du er her for at sætte en ny personlig
                rekord eller konkurrere med venner, tilbyder vores bane den
                perfekte blanding af konkurrence og sjov.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Før det grønne flag løftes, vil vores erfarne team udstyre dig
                med alt det nødvendige udstyr og viden for at sikre, at du har
                en sikker og spændende oplevelse. Fra tilpasning af hjelme til
                racing tips, har vi dækket dig ind.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Go-kart racing er mere end bare en tur - det er et eventyr, der
                tester dine færdigheder, timing og mod. Perfekt for
                enkeltpersoner, grupper og fester, lover vores racingoplevelse
                uforglemmelige minder og et sus som intet andet. Klar til at
                mærke spændingen fra racet? Spænd sikkerhedsbæltet, træd på
                gassen, og lad eventyret begynde!
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

export default Gokart
