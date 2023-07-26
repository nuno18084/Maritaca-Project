/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import "./MenuPage.css";
import Menu from "./Specials/Specials";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const MenuImage = ({ imageURL }) => {
  const imageRef = useRef(null);

  const handleImageClick = () => {
    if (imageRef.current && imageRef.current.requestFullscreen) {
      imageRef.current.requestFullscreen().catch((error) => {
        console.log("Error attempting to enable fullscreen:", error.message);
      });
    }
  };

  return (
    <img
      ref={imageRef}
      src={imageURL}
      alt="menu-image"
      className="fullscreen-image"
      onClick={handleImageClick}
      style={{ width: "25vw", height: "50%" }}
    />
  );
};

const MenuPage = () => {
  const menuImages = [
    "https://scontent.flis5-4.fna.fbcdn.net/v/t39.30808-6/345631410_262183662930763_8996491348591735034_n.png?_nc_cat=108&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=ofFHhEq0PhoAX_elz07&_nc_ht=scontent.flis5-4.fna&oh=00_AfBdDrzIHLesuZF-KkOlew74a8IH0Pa3AYGaE6hVg21lWg&oe=64C5F19A",
    "https://scontent.flis5-3.fna.fbcdn.net/v/t39.30808-6/345648446_778148770694697_2207015203367209588_n.png?_nc_cat=104&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=bCw5u3XuwBwAX9xOHKS&_nc_ht=scontent.flis5-3.fna&oh=00_AfAjsKxDPZ5SraCEcwnLHsOEPRmhceqt_7xHHdrLbYLUhw&oe=64C5FA28",
  ];

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

      <div className="complete-menu-container pizza-specialities">
        <h1 className="complete-menu-container-h1">Menu Completo</h1>
        <div className="images-flex">
          {menuImages.map((imageURL, index) => (
            <div key={index}>
              <MenuImage imageURL={imageURL} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
