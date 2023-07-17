import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const navContainer = document.querySelector(".nav-container");
      if (navContainer) {
        const rect = navContainer.getBoundingClientRect();
        if (rect.top <= 0) {
          navContainer.classList.add("fixed");
        } else {
          navContainer.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-placeholder">
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
              <Link
                onClick={closeMenu}
                to="/novidades"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="nav-list">Novidades</div>
              </Link>
              <Link
                onClick={closeMenu}
                to="/galeria"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="nav-list">Galeria</div>
              </Link>
              <Link
                onClick={closeMenu}
                to="/contactos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="nav-list">Contactos</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
