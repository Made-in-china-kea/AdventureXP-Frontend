import backgroundImage from '../../../assets/Images/backgrounds/MinigolfBackground.png'
import { Button } from '../../Button.tsx'

const Minigolf = () => {
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="text-white">AdventureXP</h1>
          <h1 className="mb-5 text-5xl font-bold text-white">Mini Golf</h1>
          <div
            className="grid grid-cols-4 gap-4 my-10 mx-5 "
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Vores fortryllende mini golf bane, hvor eventyr
                venter ved hvert hul! Vores bane er designet til at levere sjov
                og udfordringer for alle aldre, hvilket gør det til det perfekte
                udflugtsmål for familier, venner og par, der søger en hyggelig
                og konkurrencepræget aktivitet.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Med temaer, der spænder fra frodige jungler til undersøiske
                vidundere, vil hver bane tage dig på en spændende rejse gennem
                fantasifulde landskaber. Vores velholdte baner er spækket med
                kreative forhindringer, såsom snoede strømme, hemmelige tunneler
                og listige fælder, der tester din præcision og tålmodighed.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Uanset om du er en ivrig golfentusiast eller nybegynder,
                tilbyder vores mini golf oplevelse en afslappende, men alligevel
                spændende udfordring. Før du begynder, vil vores venlige
                personale sørge for, at du har alt, hvad du behøver – fra
                golfkøller i alle størrelser til farverige bolde, så du kan
                vælge din favorit og sætte dit personlige præg på spillet.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Er du klar til at tage udfordringen op og bevise dine mini golf
                færdigheder? <br></br> Besøg os for en dag fuld af sjov, latter og magiske
                øjeblikke. Perfekt til fødselsdage, familieudflugter eller en
                afslappende dag i det fri – vores mini golf bane er stedet, hvor
                magi og eventyr mødes.{' '}
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

export default Minigolf
