/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const NavBar = () => {
  return (
    <div>
      {/* <div className="navigation">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Promoções</li>
          <li>Novidades</li>
          <li>Galeria</li>
          <li>Contactos</li>
        </ul>
      </div> */}
      <BurgerMenu />
    </div>
  );
};

export default NavBar;
