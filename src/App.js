import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Header from "./components/header"
import Home from "./page/home"
import Footer from "./components/footer"
import Tarif from "./page/services"
import Portfolio from "./page/realisations"
import Contact from "./page/contact"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/realisations" element={<Portfolio/>} />
          <Route path="/services" element={<Tarif/>} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
