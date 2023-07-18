import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const phoneNumber = "912 625 557";
  const storeNumber = "211 929 411";

  const handleComplaints = () => {
    window.open("https://www.livroreclamacoes.pt/Inicio/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/maritaca_pizzaria/", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/maritaca.pizzaria/", "_blank");
  };

  const handleAdress = () => {
    window.open(
      "https://www.google.com/maps/dir//maritaca+pizzaria/@38.7262654,-9.1670146,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd193361abcff4df:0x3204be170d95ac18!2m2!1d-9.1646653!2d38.7137474?entry=ttu",
      "_blank"
    );
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-main">
        <h2>Morada</h2>
        <p onClick={handleAdress} style={{ cursor: "pointer" }}>
          Rua do Patrocínio 44A
        </p>
        <p>1350-230 Lisboa</p>
        <br />
        <p>3ª feira a Domingo: 12:00 - 15:00</p>
        <p>19:00 - 22:30</p>
        <br />
        <h2>Contactos</h2>
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
              onClick={handleLinkClick}
            >
              <>Política de Privacidade |</>{" "}
            </Link>{" "}
            <Link
              to="/termos-condições"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleLinkClick}
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
