import React from "react";
import { NavLink } from "react-router-dom";
import { RiHotelBedFill } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { TbGift } from "react-icons/tb";
import cadre from "../assets/cadre.jpg";

function Nav({ handleClick }) {
  return (
    <div className="sidebarContainer">
      <div className="avatar">
        <div className="imgContainer">
          <img className="imgCadre" alt="cadre avec feuilles" src={cadre} />
          <div className="interior">
            <h3>Amélie</h3>
            <h3> &</h3>
            <h3> Ferdinand</h3>
            <h4>6 mai 2023</h4>
          </div>
        </div>
      </div>
      <div className="tabs">
        <NavLink
          to="/Mariage"
          className={({ isActive }) => (isActive ? "tabFocus" : "tabDefault")}
          onClick={window.innerWidth < 1000 && handleClick}
        >
          <RiHomeHeartFill style={{ fontSize: "20px" }} />
          <p> Accueil</p>
        </NavLink>
        <NavLink
          to="/Mariage/infos-pratiques"
          className={({ isActive }) => (isActive ? "tabFocus" : "tabDefault")}
          onClick={window.innerWidth < 1000 && handleClick}
        >
          <RiInformationLine style={{ fontSize: "20px" }} />
          <p> Infos pratiques</p>
        </NavLink>
        <NavLink
          to="/Mariage/hebergement"
          className={({ isActive }) => (isActive ? "tabFocus" : "tabDefault")}
          onClick={window.innerWidth < 1000 && handleClick}
        >
          <RiHotelBedFill style={{ fontSize: "20px" }} />
          <p> Hébergement</p>
        </NavLink>
        <NavLink
          to="/Mariage/plans"
          className={({ isActive }) => (isActive ? "tabFocus" : "tabDefault")}
          onClick={window.innerWidth < 1000 && handleClick}
        >
          <RiMapPinLine style={{ fontSize: "20px" }} />
          <p> Plans d'accès</p>
        </NavLink>
        <NavLink
          to="/Mariage/liste-mariage"
          className={({ isActive }) => (isActive ? "tabFocus" : "tabDefault")}
          onClick={window.innerWidth < 1000 && handleClick}
        >
          <TbGift style={{ fontSize: "20px" }} />
          <p>Liste de mariage</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
