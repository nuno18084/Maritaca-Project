import React from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import BirdLogo from "../../../Images/BirdLogo.png";
import "./BurgerMenu.css";

const NavBarLogo = () => {
  return (
    <div className="navbar-logo-container">
      <Link to="/">
        <div>
          <img src={BirdLogo} alt="bird-logo" width={75} height={50} />
        </div>
      </Link>
      <div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBarLogo;
