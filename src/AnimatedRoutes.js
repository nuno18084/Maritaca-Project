import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage/HomePage";
import MenuPage from "./components/MenuPage/MenuPage";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import NewsPage from "./components/NewsPage/NewsPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PrivacyPage from "./components/PrivacyPage/PrivacyPage";
import TermsConditions from "./components/TermsConditions/TermsConditions";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promocoes" element={<PromotionPage />} />
        <Route path="/novidades" element={<NewsPage />} />
        <Route path="/contactos" element={<ContactsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos-condicoes" element={<TermsConditions />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
