import React from "react";
import "./NewsPage.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import News from "./News";

const NewsPage = () => {
  return (
    <>
      <motion.div
        className="news-page"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div>
          <h1>Novidades</h1>
          <div>
            <News />
          </div>
        </div>
      </motion.div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
