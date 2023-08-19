import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import "./BurgerMenu.css";
import "../../../App.css";

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
    const debouncedHandleScroll = debounce(() => {
      const navContainer = document.querySelector(".nav-container");
      if (navContainer) {
        const rect = navContainer.getBoundingClientRect();
        if (rect.top <= 0) {
          navContainer.classList.add("fixed");
        } else {
          navContainer.classList.remove("fixed");
        }
      }
    }, 100);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav-placeholder">
      <div
        className="nav-container"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
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
              {/* <br /> */}
              <Link
                to="/"
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Home</h1>
              </Link>
              <Link
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                to="/menu"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Menu</h1>
              </Link>
              <Link
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                to="/promocoes"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Promoções</h1>
              </Link>
              <Link
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                to="/novidades"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Novidades</h1>
              </Link>
              <Link
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                to="/galeria"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Galeria</h1>
              </Link>
              <Link
                onClick={() => {
                  closeMenu();
                  handleLinkClick();
                }}
                to="/contactos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1 className="nav-list">Contactos</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
