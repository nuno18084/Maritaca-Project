import React from "react";
import { motion } from "framer-motion";
import { newsData } from "../MenuPage/Specials/SpecialsData";

const News = () => {
  const news = newsData;
  const numNews = news.length;

  return (
    <motion.div
      className="promotion-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div>
        {numNews > 0 ? (
          <div>
            <ul className="news-list">
              {news.map((newItem) => (
                <NewItem newsObject={newItem} key={newItem.name} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

function NewItem({ newsObject }) {
  return (
    <li className="news-list-item">
      <div className="menu-page">
        <h3>{newsObject.name}</h3>
        <p>{newsObject.ingredients}</p>
        <span>{newsObject.soldOut ? "SOLD OUT" : newsObject.price}€</span>
      </div>
    </li>
  );
}

export default News;
