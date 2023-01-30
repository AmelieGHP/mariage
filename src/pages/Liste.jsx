import React from "react";
import Nav from "../components/Nav";
import { TbHexagon } from "react-icons/tb";

const Liste = () => {
  return (
    <div className="pageContent">
      <div className="container programmeBox">
        <h3>Liste de mariage</h3>
        <div className="textContainer">
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Nous avons choisi de créer une liste en ligne, sur le site
            MilleMercis, une urne sera également présente sur place.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Une grande partie de cette liste concerne notre voyage de noces, à
            base de plage de sable fin, de mer turquoise et de petits parasols
            dans nos cocktails !
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Vous pouvez participer au cadeau de votre choix de façon partielle
            après l'avoir sélectionné.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Pour y accéder,{" "}
            <a
              href="https://www.millemercismariage.com/amelie-et-ferdinand/liste.html"
              target="_blank"
            >
              cliquez ici
            </a>
            .
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Un grand merci à vous !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Liste;
