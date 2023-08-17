import React from "react";
import "./PromotionPage.css";
import { motion } from "framer-motion";
import { promotionsData } from "../MenuPage/Specials/SpecialsData";

const Promotions = () => {
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
          <div>
            <ul className="promotions-list">
              {promotions.map((promotion) => (
                <Promotion promotionObject={promotion} key={promotion.name} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

function Promotion({ promotionObject }) {
  return (
    <li className="promotion-list-item">
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

export default Promotions;
