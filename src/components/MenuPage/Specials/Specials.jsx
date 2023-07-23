/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { pizzaData, rolinhoData, saladData } from "./SpecialsData";

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

  //   function toggleData() {
  //     showPizza ? setShowRolinho(false) && setShowSalad(false) : setShowPizza;
  //     showRolinho ? setShowPizza(false) && setShowSalad(false) : null;
  //     showSalad ? setShowPizza(false) && setShowRolinho(false) : null;
  //     if (showPizza) {
  //       setShowPizza(true);
  //       setShowRolinho(!showRolinho);
  //       setShowSalad(!showSalad);
  //     } else if (showRolinho) {
  //       setShowRolinho(true);
  //       setShowPizza(!showPizza);
  //       setShowSalad(!showSalad);
  //     } else if (showSalad) {
  //       setShowSalad(true);
  //       setShowPizza(!showPizza);
  //       setShowRolinho(!showRolinho);
  //     }
  //   }

  return (
    <div className="menu-menu menu-page">
      <button
        onClick={() => {
          //   toggleData();
          togglePizza();
        }}
      >
        {showPizza ? "Pizzas" : "Pizzas"}
      </button>
      <button
        onClick={() => {
          //   toggleData();
          toggleRolinho();
        }}
      >
        {showRolinho ? "Rolinhos" : "Rolinhos"}
      </button>
      <button
        onClick={() => {
          //   toggleData();
          toggleSalad();
        }}
      >
        {showSalad ? "Saladas" : "Saladas"}
      </button>

      {showPizza && numPizzas > 0 ? (
        <>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}

      {showRolinho && numRolinhos > 0 ? (
        <>
          <ul className="pizzas">
            {rolinhos.map((rolinho) => (
              <Rolinho rolinhoObject={rolinho} key={rolinho.name} />
            ))}
          </ul>
        </>
      ) : null}

      {showSalad && numSalads > 0 ? (
        <>
          <ul className="pizzas">
            {salads.map((salad) => (
              <Salad saladObject={salad} key={salad.name} />
            ))}
          </ul>
        </>
      ) : null}
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
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
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
        <span>{rolinhoObject.soldOut ? "SOLD OUT" : rolinhoObject.price}</span>
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
        <span>{saladObject.soldOut ? "SOLD OUT" : saladObject.price}</span>
      </div>
    </li>
  );
}

export default specialsMenu;
