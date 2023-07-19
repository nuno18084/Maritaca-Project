import React from "react";
import "./GalleryPage.css";
import Footer from "../Footer/Footer";
import GalleryCard from "./GalleryCard/GalleryCard";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <GalleryCard />
      {/* <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1>
      <h1>Galeria</h1> */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
