import React from "react";
import Nav from "../components/Nav";
import { TbHexagon } from "react-icons/tb";

const Photos = () => {
  return (
    <div className="pageContent">
      <div className="container programmeBox">
        <h3>Photos </h3>
        <div className="textContainer">
          <p>
            <TbHexagon className="noMargin" />
            Nous avons créé un Drive Google pour regrouper toutes les photos de
            notre grand jour !
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Nous avons ajouté toutes les photos de la borne photo dans le
            dossier correspondant, n'hésitez pas à les télécharger !
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Vous pouvez consulter et télécharger les photos qui vous intéressent
            et ajouter les votres dans le dossier "Photos des invités". Vous
            devez avoir un compte Google et y être connecté pour pouvoir ajouter
            vos images.
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Attention : merci de ne supprimer aucune photo de ces dossiers car
            elles seraient perdues pour nous également !
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Pour accéder aux photos de la borne et des invités,{" "}
            <a
              href="https://drive.google.com/drive/folders/1IvUTN2E0sFet9n1koVl9Ygqqc4DjYKTj?usp=sharing"
              target="_blank"
            >
              {" "}
              cliquez ici
            </a>
            .
          </p>
          <p>
            <TbHexagon className="noMargin" />
            Les photos de notre photographe sont libres de téléchargement pour chacun sur sa galerie, en HD :{" "}
            <a
              href="https://twinheart.pic-time.com/JTxSyuYJEqiMh"
              target="_blank"
            > {" "}
              cliquez ici
            </a>
          .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photos;
