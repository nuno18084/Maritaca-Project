import React from "react";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import NavBarLogo from "./components/NavBar/BurgerMenu/NavBarLogo";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import NavbarContainer from "./components/NavBar/NavBarContainer";

function App() {
  // document.cookie = "cookieName=value; SameSite=Lax";

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
