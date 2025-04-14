import nousDeux from "../assets/Image1.jpg";
import brieuc from "../assets/brieuc.jpg";
import banquet from "../assets/banquet.png";
import church from "../assets/church.png";
import couple from "../assets/couple.png";
import discoball from "../assets/disco-ball.png";
import wine from "../assets/wine.png";
import weddingCar from "../assets/weddingCar.png";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <div className="pageContent">
        <div className="container bandeau">
          <div className="logo">
            <img src={brieuc} alt="Brieuc" className="photo" />
          </div>
          <div className="text">
            <h4 className="accentText">
              Bienvenue sur le site de notre famille !
            </h4>
            <p>
              Notre petit Brieuc est arrivé le 1er février 2025, pour notre plus
              grand bonheur !
            </p>
            <p>Il grandit bien, sourit beaucoup, mais dors très peu...</p>
            <p>
              Si vous souhaitez participer à sa liste de naissance,{" "}
              <a
                href="https://www.milirose.com/liste-cadeaux-875567.html"
                target="_blank"
              >
                c'est par ici
              </a>
              .
            </p>
          </div>
        </div>
        <div className="container bandeau">
          <div className="logo">
            <img src={nousDeux} alt="Nous deux" className="photo" />
          </div>
          <div className="text">
            <h4 className="accentText">Notre mariage</h4>
            <p>
              Merci pour votre participation à notre grand jour, que ce soit par
              votre présence ou par la pensée!
            </p>
            <p>
              Nous avons passé de merveilleux moments grâce à vous, et en
              garderons de jolis souvenirs.
            </p>
            <p>
              Nous laissons le site actif pour vous permettre d'accéder aux
              photos de l'évènement, dans la rubrique{" "}
              <NavLink to="/photos">Photos</NavLink>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
