/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";
import "./GalleryCard.css";
import Delivery from "../../../Images/Delivery.jpg";
import EntranceBig from "../../../Images/Entrance-big.jpg";
import Entrance from "../../../Images/Entrance.jpg";
import Experiment from "../../../Images/Experiment.jpg";
import PlateWine from "../../../Images/Plate-wine.jpg";
import Room from "../../../Images/Room.jpg";
import Tabuleiro from "../../../Images/Tabuleiro.jpg";
// import MaritacaLogo from "../../../Images/maritacaLogo.png";

function GalleryCard() {
  return (
    <div className="galery-card-container">
      <div className="galery-title-container">
        <h1>Galeria</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel-1">
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
