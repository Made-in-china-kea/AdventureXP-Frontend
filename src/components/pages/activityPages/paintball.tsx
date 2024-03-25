import backgroundImage from '/Images/backgrounds/PaintballBackground.png'
import { Button } from '../../common/Button.tsx'

const Paintball = () => {
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="text-white">AdventureXP</h1>
          <h1 className="mb-5 text-5xl font-bold text-white">Paintball</h1>
          <div
            className="grid grid-cols-4 gap-4 my-10 mx-5 "
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Velkommen til en verden af paintball, hvor strategi, teamwork og
                adræthed er nøglen til sejr. Vores paintball-arena tilbyder en
                intens og farverig kampoplevelse, der garanteret vil få pulsen
                op hos alle deltagere. Uanset om du er en erfaren
                paintball-kriger eller en nybegynder, der søger spænding, er
                vores facilitet stedet, hvor venskabelig konkurrence og
                adrenalinfyldte øjeblikke mødes.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Vores spilleområder er designet til at simulere forskellige
                scenarier, fra tætte skovområder til åbne slagmarker, hvilket
                giver perfekte rammer for taktiske manøvrer og
                overraskelsesangreb. Udstyret med topmoderne sikkerhedsudstyr og
                højtydende paintball-markører, er du klar til at dykke ned i
                actionfyldte missioner, hvor dit holdes samarbejde og strategi
                bliver testet til det yderste.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Før spillet starter, vil vores erfarne instruktører guide dig
                gennem sikkerhedsreglerne og give tips til spilletaktik, så alle
                kan nyde spillet sikkert og med maksimal sjov. Paintball er den
                ultimative aktivitet for dig, der søger et adrenalinkick, ønsker
                at styrke holdånden, eller bare vil have en uforglemmelig dag
                med venner eller kollegaer.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Er du klar til at mærke spændingen, strategien og det tætte
                samarbejde, som kun paintball kan tilbyde? Uanset anledningen,
                fra polterabend til teambuilding, står vi klar til at gøre din
                dag actionfyldt. Tag sikkerhedsudstyret på, lad markøren, og gør
                dig klar til et eventyr, hvor farverne flyver, og helte fødes.
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

export default Paintball
