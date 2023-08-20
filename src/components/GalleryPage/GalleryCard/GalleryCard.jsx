/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";
import "./GalleryCard.css";
import Delivery from "../../../Images/Other/Delivery.jpg";
import EntranceBig from "../../../Images/Room/Entrance-big.jpg";
import Entrance from "../../../Images/Room/Entrance.jpg";
import Experiment from "../../../Images/Food/Experiment.jpg";
import PlateWine from "../../../Images/Food/Plate-wine.jpg";
import Room from "../../../Images/Room/Room.jpg";
import Tabuleiro from "../../../Images/Food/Tabuleiro.jpg";
// import MaritacaLogo from "../../../Images/maritacaLogo.png";

function GalleryCard() {
  return (
    <div className="galery-card-container">
      <div className="galery-title-container">
        <h1>Galeria</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel-1">
          <h2 className="gallery-sub-title">O Nosso Espaço</h2>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img className="carousel-image" src={Room} alt="Room" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img
                    className="carousel-image"
                    src={PlateWine}
                    alt="PlateWine"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img
                    className="carousel-image"
                    src={Entrance}
                    alt="Entrance"
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="carousel-2">
          <h2 className="gallery-sub-title">Os Nossos Pratos</h2>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="carousel-image" src={Delivery} alt="Delivery" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={EntranceBig}
                alt="EntranceBig"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Tabuleiro} alt="Tabuleiro" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="carousel-3">
          <h2 className="gallery-sub-title">O Nosso espaço</h2>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="carousel-image"
                src={Experiment}
                alt="Experiment"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Room} alt="Room" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Tabuleiro} alt="Tabuleiro" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="carousel-4">
          <h2 className="gallery-sub-title">Menções</h2>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="carousel-image" src={PlateWine} alt="PlateWine" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Entrance} alt="Entrance" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={EntranceBig}
                alt="EntranceBig"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
