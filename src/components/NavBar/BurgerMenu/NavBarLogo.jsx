import React from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import BirdLogo from "../../../Images/Logos/BirdLogo.png";
import "../../NavBar/NavBar.css";

const NavBarLogo = () => {
  return (
    <div className="navbar-logo-container">
      <style>
        {`
          .navbarLogo-transition {
            animation: logoFadeIn 0.3s ease-in 0.5s forwards;
            opacity: 0;
          }

          @keyframes logoFadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>

      <Link to="/">
        <div>
          <img
            className="navbarLogo-transition"
            src={BirdLogo}
            alt="bird-logo"
            width={80}
            height={60}
          />
        </div>
      </Link>
      <div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBarLogo;
