import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const handleComplaints = () => {
    window.open("https://www.livroreclamacoes.pt/Inicio/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/maritaca_pizzaria/", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/maritaca.pizzaria/", "_blank");
  };

  return (
    <div className="footer-container">
      <div className="footer-main">
        <h2>Morada</h2>
        <p>Rua do Patrocínio 44A</p>
        <p>1350-230 Lisboa</p>
        <br />
        <p>3ª feira a Domingo: 12:00 - 15:00</p>
        <p>19:00 - 22:30</p>
        <br />
        <h2>Contactos</h2>
        <p>912 625 557</p>
        <p>211 929 411</p>
        <br />
        <h2>Siga-nos</h2>
        <div className="social-media">
          <div>
            <FaInstagram
              size={25}
              onClick={handleInstagram}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <FaFacebookF
              size={25}
              onClick={handleFacebook}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <br />
        <div>
          <h5>
            <Link
              to="/privacidade"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <>Plítica de Privacidade |</>{" "}
            </Link>{" "}
            <Link
              to="/termos-condições"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <>Termos e Condições |</>{" "}
            </Link>{" "}
            <br />{" "}
            <div onClick={handleComplaints} style={{ cursor: "pointer" }}>
              Livro de reclamações
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
