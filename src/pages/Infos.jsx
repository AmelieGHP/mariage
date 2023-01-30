import React from "react";
import Nav from "../components/Nav";
import { TbHexagon } from "react-icons/tb";

const Infos = () => {
  return (
    <div className="pageContent">
      <div className="container programmeBox">
        <h3>Infos pratiques</h3>
        <div className="textContainer">
          <p>
            <TbHexagon className="noMargin" />
            Nous avons choisi cette date en raison du weekend prolongé, plus
            pratique pour les invités habitant loin.
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Le vin d'honneur aura lieu en extérieur, nous prévoyons des
            solutions de repli en cas de météo défavorable.
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Il n'y a pas de restriction horaire concernant la musique, nous
            pourrons donc continuer la fête jusqu'au petit matin !
          </p>
          <p>
            <TbHexagon className="noMargin" />À savoir pour les enfants, nous
            préférons limiter leur présence au maximum. En effet, le domaine
            n'est pas adapté : il dispose de deux étangs, dont un non protégé,
            ainsi que de bâtiments en ruine. Nous ne prévoyons pas de
            babysitter. Pour les bébés, une nursery est présente dans la salle
            de réception, avec une table à langer et 3 berceaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
