/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { pizzaData, rolinhoData, saladData } from "./SpecialsData";
import "./Specials.css";

function specialsMenu() {
  const [showPizza, setShowPizza] = useState(true);
  const [showRolinho, setShowRolinho] = useState(false);
  const [showSalad, setShowSalad] = useState(false);

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  const rolinhos = rolinhoData;
  const numRolinhos = rolinhos.length;

  const salads = saladData;
  const numSalads = salads.length;

  const togglePizza = () => {
    setShowPizza(true);
    setShowRolinho(false);
    setShowSalad(false);
  };

  const toggleRolinho = () => {
    setShowRolinho(true);
    setShowPizza(false);
    setShowSalad(false);
  };

  const toggleSalad = () => {
    setShowSalad(true);
    setShowPizza(false);
    setShowRolinho(false);
  };

  return (
    <div className="menu-menu menu-page">
      <div className="specials-btn-container">
        <style>
          {`
          .specialsMenu-transition {
            animation: buttonFadeIn 0.15s ease-in 0.15s forwards;
            opacity: 0;
          }

          @keyframes buttonFadeIn {
            to {
              opacity: 1;
            }
          }
        `}
        </style>

        <button
          className={`${
            showPizza
              ? "specials-btn-active specialsMenu-transition"
              : "specials-btn"
          }`}
          onClick={() => {
            togglePizza();
          }}
        >
          Pizzas
        </button>
        <button
          className={`${
            showRolinho
              ? "specials-btn-active specialsMenu-transition"
              : "specials-btn"
          }`}
          onClick={() => {
            toggleRolinho();
          }}
        >
          Rolinhos
        </button>
        <button
          className={`${
            showSalad
              ? "specials-btn-active specialsMenu-transition"
              : "specials-btn"
          }`}
          onClick={() => {
            toggleSalad();
          }}
        >
          Saladas
        </button>
      </div>

      <div>
        {showPizza && numPizzas > 0 ? (
          <div className="specials-section">
            <ul className="specials-pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObject={pizza} key={pizza.name} />
              ))}
            </ul>
          </div>
        ) : null}

        {showRolinho && numRolinhos > 0 ? (
          <div className="specials-section">
            <ul className="specials-rolinhos">
              {rolinhos.map((rolinho) => (
                <Rolinho rolinhoObject={rolinho} key={rolinho.name} />
              ))}
            </ul>
          </div>
        ) : null}

        {showSalad && numSalads > 0 ? (
          <div className="specials-section">
            <ul className="specials-salads">
              {salads.map((salad) => (
                <Salad saladObject={salad} key={salad.name} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Em vez de passar props, passa-se {pizzaObject} para fazer destructuring
function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <div className="menu-page">
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}€</span>
      </div>
    </li>
  );
}

function Rolinho({ rolinhoObject }) {
  return (
    <li className={`pizza ${rolinhoObject.soldOut ? "sold-out" : ""}`}>
      <div className="menu-page">
        <h3>{rolinhoObject.name}</h3>
        <p>{rolinhoObject.ingredients}</p>
        <span>{rolinhoObject.soldOut ? "SOLD OUT" : rolinhoObject.price}€</span>
      </div>
    </li>
  );
}

function Salad({ saladObject }) {
  return (
    <li className={`pizza ${saladObject.soldOut ? "sold-out" : ""}`}>
      <div className="menu-page">
        <h3>{saladObject.name}</h3>
        <p>{saladObject.ingredients}</p>
        <span>{saladObject.soldOut ? "SOLD OUT" : saladObject.price}€</span>
      </div>
    </li>
  );
}

export default specialsMenu;
