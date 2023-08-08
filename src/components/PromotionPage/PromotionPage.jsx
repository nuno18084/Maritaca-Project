import React from "react";
import "./PromotionPage.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Promotions from "./Promotions";

const PromotionPage = () => {
  return (
    <>
      <motion.div
        className="promotion-page"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div>
          <h1>Promoções</h1>
          <div>
            <Promotions />
          </div>
        </div>
      </motion.div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PromotionPage;
