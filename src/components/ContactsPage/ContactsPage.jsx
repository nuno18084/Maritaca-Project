/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactsPage.css";
import Footer from "../Footer/Footer";

const ContactsPage = () => {
  const phoneNumber = "912 625 557";
  const storeNumber = "211 929 411";

  return (
    <>
      <div className="contacts-page">
        <div>
          <h1>Contactos</h1>
          <h2>Morada</h2>
          <p>Rua do Patrocínio 44A</p>
          <p>1350-230 Lisboa</p>
          <br />
          <p>3ª feira a Domingo: 12:00 - 15:00</p>
          <p>19:00 - 22:30</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>geral@maritaca.pt</p>
        </div>
        <div>
          <h2>Telefone</h2>
          <p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </a>
          </p>
          <p>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href={`tel:${storeNumber}`}
            >
              {storeNumber}
            </a>
          </p>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1768992886728!2d-9.166853984655026!3d38.71374737959947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193361abcff4df%3A0x3204be170d95ac18!2sMaritaca!5e0!3m2!1spt-PT!2spt!4v1689645242417!5m2!1spt-PT!2spt"
            width="100%"
            height="400"
            allowfullscreen=""
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div>
          <h1>Delivery</h1>
          <p>
            Entregas três vezes por semana (terças, quintas-feiras e sábados,
            com uma antecedência mínima de 24 horas), em Lisboa e nos concelhos
            de Oeiras e Cascais, a partir de um valor mínimo para entrega
            consoante a área geográfica, e com valores de entrega entre os 5€ e
            os 20€.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
