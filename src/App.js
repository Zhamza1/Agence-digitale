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
import Services from "./page/services"
import Realisations from "./page/realisations"
import Contact from "./page/contact"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/realisations" element={<Realisations/>} />
          <Route path="/services" element={<Services/>} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
