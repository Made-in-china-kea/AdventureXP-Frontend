import '../../Styles/components/Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1 className="text-5xl text-black">Tjek vores fede aktiviter!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/Images/activities/biking.jpg"
              text="Go cruise the trails!"
              label="Biking"
              path="/biking"
            />
            <CardItem
              src="/Images/activities/gokart.jpg"
              text="Race against your family and friends on our tracks"
              label="Go-karting"
              path="/gokart"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/Images/activities/paintball.jpg"
              text="Shoot your friends on the course"
              label="Paintball"
              path="/paintball"
            />
            <CardItem
              src="/Images/activities/mini-golf.jpg"
              text="Experience our fantastic minigolf course"
              label="Minigolf"
              path="/minigolf"
            />
            <CardItem
              src="/Images/activities/sumowrestling.jpg"
              text="Put on a 50 kg suit and destroy your friends"
              label="Sumo-Wrestling"
              path="/Sumo"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
