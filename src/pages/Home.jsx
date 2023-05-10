import nousDeux from "../assets/Image1.jpg";
import banquet from "../assets/banquet.png";
import church from "../assets/church.png";
import couple from "../assets/couple.png";
import discoball from "../assets/disco-ball.png";
import wine from "../assets/wine.png";
import weddingCar from "../assets/weddingCar.png";
import { NavLink } from "react-router-dom";

export default function Home() {
//   console.log(
//     "Coucou les Dave! Pour les motivés, Nathalie propose de vous accueillir pour un barbecue entre le cocktail et le bal, vu qu'elle habite à côté! Voir avec elle pour l'orga!"
//   );
  return (
    <div className="homePage">
      <div className="pageContent">
        <div className="container bandeau">
          <div className="logo">
            <img src={nousDeux} alt="Nous deux" className="photo" />
          </div>
          <div className="text">
            <h4 className="accentText">
              Bienvenue sur le site de notre mariage !
            </h4>
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
//             <p>
//               {" "}
//               Nous espérons que vous trouverez ici toutes les informations dont
//               vous aurez besoin pour profiter au mieux de cet évènement à nos
//               côtés.{" "}
//             </p>
//             <p>
//               Vous pouvez nous confirmer votre présence, ou nous contacter pour
//               toute question ou remarque, par mail:
//             </p>
//             <p className="accentText boldText">
//               amelie-et-ferdinand@hotmail.com
//             </p>
            <p>Bonne navigation et à bientôt!</p>
          </div>
        </div>
//         <div className="container programmeBox">
//           <h3>Programme</h3>
//           <div className="bubbles">
//             <div className="programme">
//               <img src={couple} alt="mairie" />
//               <p>14h00</p>
//               <p className="accentText">Mairie</p>
//             </div>
//             <div className="programme">
//               <img src={church} alt="église" />
//               <p>15h00</p>
//               <p className="accentText">Église</p>
//             </div>
//             <div className="programme">
//               <img src={weddingCar} alt="voiture" />
//               <p>16h30</p>
//               <p className="accentText">En route</p>
//               <small>vers le domaine</small>
//             </div>
//             <div className="programme">
//               <img src={wine} alt="cocktail" />
//               <p>17h00</p>
//               <p className="accentText">Cocktail</p>
//             </div>
//             <div className="programme">
//               <img src={banquet} alt="dîner" />
//               <p>19h30</p>
//               <p className="accentText">Dîner </p>
//               <small>(sur invitation)</small>
//             </div>
//             <div className="programme">
//               <img src={discoball} alt="bal" />
//               <p>22h00</p>
//               <p className="accentText">Bal </p>
//               <small>jusqu'à 6h !</small>
//             </div>
//           </div>
//         </div>
      </div>
    </div>
  );
}
