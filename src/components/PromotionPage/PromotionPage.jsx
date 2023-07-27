import React from "react";
import "./PromotionPage.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const PromotionPage = () => {
  return (
    <motion.div
      className="promotion-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <h1>Promoções</h1>
      <Footer />
    </motion.div>
  );
};

export default PromotionPage;
