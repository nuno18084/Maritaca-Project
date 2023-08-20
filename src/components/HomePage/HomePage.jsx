import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logos/maritacaLogo.png";
import "./HomePage.css";
import "../../App.css";
import { motion } from "framer-motion";

const HomePage = () => {
  const handleLinkClickMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        className="home-main"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <img src={Logo} alt="logo" className="main-page-logo" />
        <Link
          to="/menu"
          onClick={handleLinkClickMenu}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="bottom-section">
            <button className="home-menu">Ver o Menu</button>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default HomePage;
