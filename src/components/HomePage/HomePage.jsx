import React from "react";
import Logo from "../../Images/Logos/maritacaLogo.png";
import "./HomePage.css";
import "../../App.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <motion.div
        className="home-main"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <img src={Logo} alt="logo" className="main-page-logo" />
      </motion.div>
    </>
  );
};

export default HomePage;
