/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactsPage.css";
import Footer from "../Footer/Footer";
import "../../App.css";
import { motion } from "framer-motion";

const ContactsPage = () => {
  const phoneNumber = 912625557;
  const storeNumber = 211929411;

  function setCookie() {
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }

  setCookie();

  return (
    <>
      <motion.div
        className="contacts-page"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div>
          <h1 className="first-h1">Delivery</h1>
          <p className="contacts-page-p">
            Entregas num raio de 2 kms. Valor mínimo para entrega de 20€.
          </p>
        </div>

        <div className="map-section">
          <h1 className="second-h1">Localização</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1768992886728!2d-9.166853984655026!3d38.71374737959947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193361abcff4df%3A0x3204be170d95ac18!2sMaritaca!5e0!3m2!1spt-PT!2spt!4v1689645242417!5m2!1spt-PT!2spt"
            width="100%"
            height="400"
            allowFullScreen=""
            style={{ border: "0" }}
            loading="lazy"
            // title="Google Map"
            // samesite="None"
          ></iframe>
        </div>
        <div>
          <h1 className="third-h1">Contactos</h1>
          <h2>Morada</h2>
          <p>Rua do Patrocínio 44A</p>
          <p className="contacts-page-p">1350-230 Lisboa</p>
          <h2>Horario</h2>

          <p className="contacts-page-p">
            3ª feira a Domingo: 12:00 - 15:00 | 19:00 - 22:30
          </p>
        </div>
        <div>
          <h2>Email</h2>
          <a
            className="contacts-page-p"
            href="mailto:quiosquemaritaca@gmail.com?subject=Feedback%20sobre%20a%20Maritaca!&body=Olá!%20Gostamos%20muito%20dos%20nossos%20clientes,%20por%20isso%20temos%20todo%20o%20gosto%20em%20receber%20sugestões%20e%20feedback.%20Obrigado!"
          >
            <p className="contacts-page-p">quiosquemaritaca@gmail.com</p>
          </a>
        </div>
        <div>
          <h2>Telefone</h2>
          <p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href={`tel:${phoneNumber}`}
            >
              +351 912 625 557
            </a>
          </p>
          <p className="contacts-page-p">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href={`tel:${storeNumber}`}
            >
              +351 211 929 411
            </a>
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ContactsPage;
