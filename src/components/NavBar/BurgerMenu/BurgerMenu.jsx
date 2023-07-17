import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("bar unclicked");

  const [menuClass, setMenuClass] = useState("menu hidden");

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("bar clicked");
      setMenuClass("menu visible");
      document.body.style.overflow = "hidden";
    } else {
      setBurgerClass("bar unclicked");
      setMenuClass("menu hidden");
      document.body.style.overflow = "auto";
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setBurgerClass("bar unclicked");
    setMenuClass("menu hidden");
    document.body.style.overflow = "auto";
    setIsMenuClicked(false);
  };

  return (
    <div className="nav-container">
      <div>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burgerClass} />
            <div className={burgerClass} />
            <div className={burgerClass} />
          </div>
        </nav>
        <div className={menuClass}>
          <div className="nav-ul">
            <br />
            <br />
            <Link
              to="/"
              onClick={closeMenu}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">Home</div>
            </Link>
            <Link
              onClick={closeMenu}
              to="/menu"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">Menu</div>
            </Link>
            <Link
              onClick={closeMenu}
              to="/promoções"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">Promoções</div>
            </Link>
            <div className="nav-list">Novidades</div>
            <div className="nav-list">Galeria</div>
            <div className="nav-list">Contactos</div>
          </div>
        </div>
      </div>
      {/* <Link to="/"> */}
      {/* <div className="logo" id="logo">
        <img
          className="logo-picture"
          src="https://images.ctfassets.net/eqlypemzu8y5/7jcRtl2ykLzTjejTQH8uqr/fa292df0bda2de1e9afdaabe16955901/Nobel_Logo_Dark.png"
          alt="logo"
          height="50px"
        />
      </div> */}
      {/* </Link> */}
    </div>
  );
};

export default BurgerMenu;
