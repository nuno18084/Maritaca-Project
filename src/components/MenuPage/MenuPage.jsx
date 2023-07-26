import React from "react";
import "./MenuPage.css";
import Menu from "./Specials/Specials";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

// import PizzaPic from "../../Images/MenuPic.png";

const MenuPage = () => {
  return (
    <>
      <motion.div
        className="menu-page"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div className="pizza-specialities">
          <h1>Especialidades</h1>
          <Menu />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default MenuPage;
