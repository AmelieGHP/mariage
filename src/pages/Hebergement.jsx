import React from "react";
import Nav from "../components/Nav";
import { TbHexagon } from "react-icons/tb";
import { TbExternalLink } from "react-icons/tb";

const Hebergement = () => {
  return (
    <div className="pageContent">
      <div className="container programmeBox">
        <h3>Hébergement</h3>
        <div className="textContainer">
          <p>
            <TbHexagon className="noMargin" />
            Plusieurs gîtes sont disponibles sur place, pour un total d'une
            trentaine de couchages, attenants à la salle de réception.
            Informations détaillées ci-dessous.
          </p>{" "}
          <p>
            <TbHexagon className="noMargin" />
            Vans, camping-car et tentes sont autorisés sur le domaine, mais en
            nombre limité : nous consulter.{" "}
          </p>{" "}
          <p>
            <TbHexagon className="noMargin" />
            Des gîtes, chambres ou logements sont également disponibles à
            proximité, par exemple ici :
          </p>{" "}
          <div className="links">
            <a
              href="https://www.gites-de-france.com/fr/search?destination=Fay-de-Bretagne&towns=52333&seed=53216103"
              target="_blank"
            >
              <TbExternalLink />
              Gîtes de France
            </a>
            <a
              href="https://www.airbnb.fr/s/Fay~de~Bretagne--France/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&place_id=ChIJ7ZM4KkiIBUgRRCVnTLlMA8I&date_picker_type=calendar&checkin=2023-05-06&checkout=2023-05-07&adults=0&source=structured_search_input_header&search_type=filter_change"
              target="_blank"
            >
              <TbExternalLink />
              Airbnb
            </a>
            <a
              href="https://hotel-nantes-vigneux.brithotel.fr/"
              target="_blank"
            >
              <TbExternalLink />
              Hôtel
            </a>
          </div>
          <p>
            <TbHexagon className="noMargin" />
            Il n'y a pas de terrain de camping sur la commune.{" "}
          </p>{" "}
        </div>
      </div>
      <div className="container programmeBox">
        <h3>Gîtes du Thiemay</h3>
        <div className="textContainer">
          <p className="accentText" style={{ textAlign: "center" }}>
            {" "}
            Vous trouverez ici les différents gîtes disponibles à la réservation
            pour notre mariage, ainsi que leur tarif, dégressif à partir de la
            deuxième nuit.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Nous centralisons les réservations, le règlement individuel se fera
            auprès de nous.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Draps et serviettes en option.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            Il n'est pas possible de rajouter de couchage supplémentaire dans
            les gîtes.
          </p>
          <p>
            {" "}
            <TbHexagon className="noMargin" />
            N'hésitez pas à nous contacter pour toute question ou demande de
            réservation.
          </p>
        </div>
        <div className="textContainer innerBox">
          <h4>La Chambre du Gardien - 2 à 4 personnes - Disponible -</h4>
          <p>
            De plain pied : 1 lit 2 places (160*200), 1 banquette convertible 2
            places (2x80*200), WC, salle d'eau avec douche{" "}
          </p>
          <p>
            Tarif gîte entier : 120€ la première nuit, 70€ les nuits suivantes.
          </p>
        </div>
        <div className="textContainer innerBox">
          <h4>
            Gîte de la Tour - 12 à 14 personnes <span>- Complet -</span>
          </h4>
          <p>Tour historique du 19e, rénovée. </p>
          <p>
            RDC : salon avec canapé convertible 2 places (140*200), espace
            cuisine, WC{" "}
          </p>
          <p>
            1er étage : 2 lits 1 place (90*200), 1 lit 2 places (140*200), salle
            de bain avec baignoire, WC
          </p>
          <p>
            {" "}
            2e étage : 2 lits 1 place (90*200), 1 lit 2 places (140*200), salle
            d'eau avec douche, WC{" "}
          </p>
          <p>3e étage : dortoir de 4 lits 1 place (90*200) </p>
          <p>
            Tarif gîte entier : 350€ la première nuit, 170€ les nuits suivantes.
          </p>
        </div>
        <div className="textContainer innerBox">
          <h4>
            La Maison du Milieu - 4 à 6 personnes <span>- Complet -</span>
          </h4>
          <p>
            RDC : salon avec canapé convertible 2 places (140*200) et 1 lit 1
            place (90*200), espace cuisine, WC, salle d'eau avec douche
          </p>
          <p>Mezzanine : 3 lits 1 place (90*200)</p>
          <p>
            Tarif gîte entier : 180€ la première nuit, 90€ les nuits suivantes.
          </p>
        </div>
        <div className="textContainer innerBox">
          <h4>
            La Maison du Gardien - 6 à 8 personnes <span>- Complet -</span>
          </h4>
          <p>
            De plain pied : salon avec canapé convertible 2 places (140*200), 2
            chambres avec 2 lits 1 place (90*200), 1 chambre avec 1 lit 2 places
            (160*200), espace cuisine, WC, salle d'au avec douche
          </p>
          <p>
            Tarif gîte entier : 240€ la première nuit, 110€ les nuits suivantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hebergement;
