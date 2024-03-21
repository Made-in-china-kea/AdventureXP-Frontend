import backgroundImage from '../../../assets/Images/backgrounds/sumoBackground.png'
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
          <h1 className="mb-5 text-5xl font-bold text-white">Sumo Wrestling</h1>
          <div
            className="grid grid-cols-4 gap-4 my-10 mx-5 "
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Gør dig klar til en unik og uforglemmelig oplevelse med vores
                Sumo Wrestling eventyr, hvor du kan prøve kræfter med
                traditionel japansk sumo i en sjov og sikker version. Iført
                autentiske sumo-dragter, der vejer op til 50 kg, får du og dine
                venner muligheden for at opleve, hvordan det er at være en ægte
                sumo wrestler.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Vores sumo wrestling-oplevelse er designet for at bringe smil
                frem og skabe mindeværdige øjeblikke. Dragterne tilføjer en
                realistisk følelse af sumoens vægt og udfordring, mens de stadig
                sikrer deltagernes sikkerhed og komfort. Det handler ikke kun om
                styrke - strategi, balance og teknik spiller også en afgørende
                rolle i din vej mod sejr.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Inden kampen begynder, vil vores erfarne instruktører
                introducere dig til sumo wrestlingens grundlæggende teknikker og
                regler. Du lærer de klassiske sumo-stillinger, hvordan man
                udfører effektive skub og strategier for at få din modstander ud
                af ringen.
              </p>
            </div>
            <div>
              <p className="text-white text-left text-shadow bg-black bg-opacity-40 p-3 rounded-md h-full">
                Sumo wrestling med os er den perfekte aktivitet for
                teambuilding, polterabender, familiefester eller bare en sjov
                dag med venner. Det er en sjælden chance for at slippe
                hverdagens stress, grine med venner og opleve spændingen ved
                sumo wrestling i sikre og kontrollerede omgivelser.
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
