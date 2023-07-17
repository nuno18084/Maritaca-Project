import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/maritacaLogo.png";
import "./HomePage.css";
import { AiOutlineArrowDown } from "react-icons/ai";

const HomePage = () => {
  return (
    <>
      <div className="home-main">
        <img src={Logo} alt="logo" className="main-page-logo" />
        <Link to="/menu" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="bottom-section">
            <div>
              <h2 className="home-menu">Menu</h2>
            </div>
            <div>
              <AiOutlineArrowDown style={{ color: "#F3B431" }} size={35} />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
