/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MenuPage.css";
import Menu from "./Specials/Specials";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import MenuPicture from "../../Images/Maritaca Menu.png";
import MenuPicture2 from "../../Images/Maritaca Menu 2.png";

// const MenuImage = () => {
// const imageRef = useRef(null);
// const handleImageClick = () => {
//   if (imageURL === menuImages[0]) {
//     window.open(
//       "https://scontent.flis5-4.fna.fbcdn.net/v/t39.30808-6/345631410_262183662930763_8996491348591735034_n.png?_nc_cat=108&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=ofFHhEq0PhoAX_elz07&_nc_ht=scontent.flis5-4.fna&oh=00_AfBdDrzIHLesuZF-KkOlew74a8IH0Pa3AYGaE6hVg21lWg&oe=64C5F19A",
//       "_blank"
//     );
//   } else {
//     window.open(
//       "https://scontent.flis5-3.fna.fbcdn.net/v/t39.30808-6/345648446_778148770694697_2207015203367209588_n.png?_nc_cat=104&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=bCw5u3XuwBwAX9xOHKS&_nc_ht=scontent.flis5-3.fna&oh=00_AfAjsKxDPZ5SraCEcwnLHsOEPRmhceqt_7xHHdrLbYLUhw&oe=64C5FA28",
//       "_blank"
//     );
//   }
// };
// };

// const menuImages = [
//   "https://scontent.flis5-4.fna.fbcdn.net/v/t39.30808-6/345631410_262183662930763_8996491348591735034_n.png?_nc_cat=108&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=ofFHhEq0PhoAX_elz07&_nc_ht=scontent.flis5-4.fna&oh=00_AfBdDrzIHLesuZF-KkOlew74a8IH0Pa3AYGaE6hVg21lWg&oe=64C5F19A",
//   "https://scontent.flis5-3.fna.fbcdn.net/v/t39.30808-6/345648446_778148770694697_2207015203367209588_n.png?_nc_cat=104&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=bCw5u3XuwBwAX9xOHKS&_nc_ht=scontent.flis5-3.fna&oh=00_AfAjsKxDPZ5SraCEcwnLHsOEPRmhceqt_7xHHdrLbYLUhw&oe=64C5FA28",
// ];
const MenuPage = () => {
  return (
    <div className="main-menu-page">
      <motion.div
        className="menu-page"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div className="pizza-specialities">
          <h1>Especialidades</h1>
          <div>
            <Menu />
          </div>
        </div>
      </motion.div>

      <div className="complete-menu-container pizza-specialities">
        <h1 className="complete-menu-container-h1">Menu Completo</h1>
        <div className="images-flex">
          <img src={MenuPicture} alt="menu-image" className="menu-image" />
          <img src={MenuPicture2} alt="menu-image" className="menu-image" />
          {/* {menuImages.map((imageURL, index) => (
            <div key={index}>
              <MenuImage imageURL={imageURL} />
              console.log(menuImages);
            </div>
          ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
