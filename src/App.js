import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPage";
import PromotionPage from "./components/PromotionPage/PromotionPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promoções" element={<PromotionPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
