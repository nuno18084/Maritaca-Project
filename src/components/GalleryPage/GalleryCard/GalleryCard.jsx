/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";
import "./GalleryCard.css";
import Delivery from "../../../Images/Other/Delivery.jpg";
import MediaRolinho from "../../../Images/Other/MediaRolinho.jpeg";
import Review from "../../../Images/Other/Review.jpeg";
import Timeout from "../../../Images/Other/Timeout.jpeg";
import TimeoutMaritaca from "../../../Images/Other/TimeoutMaritaca.jpeg";
import Wallpaper from "../../../Images/Other/Wallpaper.jpeg";
import Entrance from "../../../Images/Room/Entrance.jpg";
import PlateWine from "../../../Images/Food/Plate-wine.jpg";
import Room from "../../../Images/Room/Room.jpg";
import RoomLamp1 from "../../../Images/Room/RoomLamp1.png";
import RoomLamp2 from "../../../Images/Room/RoomLamp2.png";
import RoomMushroom from "../../../Images/Room/RoomMushroom.png";
import RoomTomato from "../../../Images/Room/RoomTomato.png";
import EntranceDark from "../../../Images/Room/EntranceDark.jpeg";
import Pasta from "../../../Images/Food/Pasta.png";
import Soup from "../../../Images/Food/Soup.png";
import Burrata from "../../../Images/Food/Burrata.png";
import Calzone from "../../../Images/Food/Calzone.png";
import FoodPizza1 from "../../../Images/Food/FoodPizza1.png";
import FoodPizza2 from "../../../Images/Food/FoodPizza2.png";
import Parmesian from "../../../Images/Food/Parmesian.png";
import Piadina from "../../../Images/Food/Piadina.jpeg";

function GalleryCard() {
  return (
    <div className="galery-card-container">
      <div className="galery-title-container">
        <h1 className="gallery-page-title">Galeria</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel-1">
          <h2 className="gallery-sub-title">O Nosso Espaço</h2>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img
                    className="carousel-image"
                    src={EntranceDark}
                    alt="Room"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img className="carousel-image" src={Room} alt="PlateWine" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-card">
                <div className="image-wrapper">
                  <img
                    className="carousel-image"
                    src={RoomLamp1}
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
                    src={RoomLamp2}
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
                    src={RoomMushroom}
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
                    src={RoomTomato}
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
              <img className="carousel-image" src={PlateWine} alt="PlateWine" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Soup} alt="Soup" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Pasta} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Burrata} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Calzone} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={FoodPizza1} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={FoodPizza2} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Parmesian} alt="Pasta" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Piadina} alt="Pasta" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="carousel-3">
          <h2 className="gallery-sub-title">Nos Media</h2>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="carousel-image" src={Timeout} alt="PlateWine" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Delivery} alt="PlateWine" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={TimeoutMaritaca}
                alt="PlateWine"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={Review} alt="PlateWine" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={MediaRolinho}
                alt="Entrance"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={Wallpaper}
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
