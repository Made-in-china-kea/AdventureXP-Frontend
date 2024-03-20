import "../assets/styles/components/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Tjek vores fede aktiviter!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../public/Images/biking.jpg"
              text="Go cruise the trails!"
              label="Biking"
              path="/biking"
            />
            <CardItem
              src="../public/Images/Gokart.jpg"
              text="Race against your family and friends on our tracks"
              label="Go-karting"
              path="/gokart"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../public/Images/paintball.jpg"
              text="Shoot your friends on the course"
              label="Paintball"
              path="/paintball"
            />
            <CardItem
              src="../public/Images/minigolf.jpg"
              text="Experience our fantastic minigolf course"
              label="Minigolf"
              path="/minigolf"
            />
            <CardItem
              src="../public/Images/sumo-suits-redditch.jpg"
              text="Put on a 50 kg suit and destroy your friends"
              label="Sumo-Wrestling"
              path="/Sumo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
