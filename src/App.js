import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPage";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import NewsPage from "./components/NewsPage/NewsPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promoções" element={<PromotionPage />} />
        <Route path="/novidades" element={<NewsPage />} />
        <Route path="/contactos" element={<ContactsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
