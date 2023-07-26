import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  document.cookie = "cookieName=value; SameSite=Lax";

  return (
    <div>
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
