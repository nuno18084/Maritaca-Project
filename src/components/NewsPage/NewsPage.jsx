import React from "react";
import "./NewsPage.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const NewsPage = () => {
  return (
    <motion.div
      className="news-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1>Novidades</h1>
      <h1>Novidades</h1>
      <h1>Novidades</h1>
      <h1>Novidades</h1>
      <h1>Novidades</h1>
      <Footer />
    </motion.div>
  );
};

export default NewsPage;
