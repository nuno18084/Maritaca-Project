import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarLogo from "./BurgerMenu/NavBarLogo";

const NavbarContainer = () => {
  const location = useLocation();

  return location.pathname.includes("/menu") ||
    location.pathname.includes("/promocoes") ||
    location.pathname.includes("/novidades") ||
    location.pathname.includes("/contactos") ||
    location.pathname.includes("/galeria") ||
    location.pathname.includes("/privacidade") ||
    location.pathname.includes("/termos-condicoes") ? (
    <NavBarLogo />
  ) : (
    <NavBar />
  );
};

export default NavbarContainer;
