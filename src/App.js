import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./page/home"
import Services from "./page/services"
import Realisations from "./page/realisations"
import Contact from "./page/contact"
import Site from "./page/siteInternet"
import Charte from "./page/charteGraphique"
import Design from "./page/webDesign"
import Montage from "./page/montageVideo"
import Photographie from "./page/photographie"
import CreationLogo from "./page/creationLogo"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/realisations" element={<Realisations/>} />
          <Route path="/services" element={<Services/>} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services/site-internet" element={< Site />} />
          <Route path="/services/web-design" element={< Design />} />
          <Route path="/services/charte-graphique" element={< Charte />} />
          <Route path="/services/montage-video" element={< Montage />} />
          <Route path="/services/photographie" element={< Photographie />} />
          <Route path="/services/creation-logo" element={< CreationLogo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
