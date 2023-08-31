/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const NavBar = () => {
  return (
    <div className="navbar-main-container">
      <div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
