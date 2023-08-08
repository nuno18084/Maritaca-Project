import React from "react";
import BurgerMenu from "./BurgerMenu";
import BirdLogo from "../../../Images/BirdLogo.png";

const NavBarLogo = () => {
  return (
    <div>
      <div>
        <img src={<BirdLogo />} alt="bird-logo" />
      </div>
      <div>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBarLogo;
