import React from "react";
import "./PromotionPage.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { promotionsData } from "../MenuPage/Specials/SpecialsData";

const PromotionPage = () => {
  const promotions = promotionsData;
  const numPromotions = promotions.length;

  return (
    <motion.div
      className="promotion-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div>
        {numPromotions > 0 ? (
          <div className="specials-section">
            {/* <img src={PizzaImg} alt="pizza" className="map-image" /> */}
            <ul className="specials-pizzas">
              {promotions.map((promotion) => (
                <Promotion promotionObject={promotion} key={promotion.name} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <Footer />
    </motion.div>
  );
};

function Promotion({ promotionObject }) {
  return (
    <li className={`pizza ${promotionObject.soldOut ? "sold-out" : ""}`}>
      <div className="menu-page">
        <h3>{promotionObject.name}</h3>
        <p>{promotionObject.ingredients}</p>
        <span>
          {promotionObject.soldOut ? "SOLD OUT" : promotionObject.price}€
        </span>
      </div>
    </li>
  );
}

export default PromotionPage;
