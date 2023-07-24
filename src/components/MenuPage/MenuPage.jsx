import React from "react";
import "./MenuPage.css";
import Menu from "./Specials/Specials";
import Footer from "../Footer/Footer";
// import PizzaPic from "../../Images/MenuPic.png";

const MenuPage = () => {
  return (
    <>
      <div className="menu-page">
        <div className="pizza-specialities">
          <h1>Especialidades</h1>
          <Menu />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
