import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPage";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import NewsPage from "./components/NewsPage/NewsPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PrivacyPage from "./components/PrivacyPage/PrivacyPage";
import TermsConditions from "./components/TermsConditions/TermsConditions";

function App() {
  document.cookie = "cookieName=value; SameSite=Lax";

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
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos-condições" element={<TermsConditions />} />
      </Routes>
    </div>
  );
}

export default App;
