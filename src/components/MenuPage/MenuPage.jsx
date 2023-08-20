/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MenuPage.css";
import Menu from "./Specials/Specials";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import MenuPicture from "../../Images/Other/Maritaca Menu.png";
import MenuPicture2 from "../../Images/Other/Maritaca Menu 2.png";

function handleMenuClick1() {
  window.open("https://ibb.co/PQZ0NG3", "_blank");
}

function handleMenuClick2() {
  window.open("https://ibb.co/xfyNr66", "_blank");
}

const MenuPage = () => {
  return (
    <>
      <div className="main-menu-page">
        <motion.div
          className="menu-page"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <div className="pizza-specialities">
            <h1 className="pizza-specialities-h1">Especialidades</h1>
            <div>
              <Menu />
            </div>
          </div>
        </motion.div>

        <div className="complete-menu-container pizza-specialities">
          <h1 className="complete-menu-container-h1">Menu Completo</h1>
          <div className="images-flex">
            <img
              src={MenuPicture}
              alt="menu-image"
              className="menu-image"
              onClick={handleMenuClick1}
            />
            <img
              src={MenuPicture2}
              alt="menu-image"
              className="menu-image"
              onClick={handleMenuClick2}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
