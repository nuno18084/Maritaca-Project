/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactsPage.css";
import Footer from "../Footer/Footer";

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1768992886728!2d-9.166853984655026!3d38.71374737959947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193361abcff4df%3A0x3204be170d95ac18!2sMaritaca!5e0!3m2!1spt-PT!2spt!4v1689645242417!5m2!1spt-PT!2spt"
          width="290"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1>Contactos</h1>
      <h1>Contactos</h1>
      <h1>Contactos</h1>
      <h1>Contactos</h1>
      <h1>Contactos</h1>
      <h1>Contactos</h1>
      <Footer />
    </div>
  );
};

export default ContactsPage;
