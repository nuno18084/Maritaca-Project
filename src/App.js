import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import NavbarContainer from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <div>
      <Router>
        <NavbarContainer />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
