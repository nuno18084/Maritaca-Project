import React from "react";
import "./GalleryPage.css";
import Footer from "../Footer/Footer";
import GalleryCard from "./GalleryCard/GalleryCard";
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <motion.div
      className="gallery-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <GalleryCard />
      {/* <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1> */}
      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
