import React from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import BirdLogo from "../../../Images/BirdLogo.png";
import "../../NavBar/NavBar.css";

const NavBarLogo = () => {
  return (
    <div className="navbar-logo-container">
      <Link to="/">
        <div>
          <img src={BirdLogo} alt="bird-logo" width={80} height={60} />
        </div>
      </Link>
      <div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBarLogo;
