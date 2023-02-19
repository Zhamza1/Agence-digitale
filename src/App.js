import React, {useEffect,useState,useRef} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
import MaintenanceSite from "./page/maintenanceSite";
import "./index.css"
import CustomCursor from "./components/CustomCursor";

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
            <Route path="/services/motion-design" element={< Montage />} />
            <Route path="/services/photographie" element={< Photographie />} />
            <Route path="/services/creation-logo" element={< CreationLogo />} />
            <Route path="/services/maintenance-site" element={< MaintenanceSite />} />
          </Routes>
        </Router>
  
      </>
    );
}

export default App;


/*   let curseurRef = useRef();

  useEffect(() => {
    const mousePos = (e) => {
      curseurRef.current.setAttribute(
        "style",
        `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`
      );
    };

    document.addEventListener("mousemove", mousePos);

    return () => {
      document.removeEventListener("mousemove", mousePos);
    };
  }, []); */


{/*   <div onMouseMove={mousePos} className="App" >
    <div ref={curseurRef} className="curseur-perso"  > */}


     {/* </div>
  </div> */} 




//   import React, {useRef} from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Home from "./page/home"
// import Services from "./page/services"
// import Realisations from "./page/realisations"
// import Contact from "./page/contact"
// import Site from "./page/siteInternet"
// import Charte from "./page/charteGraphique"
// import Design from "./page/webDesign"
// import Montage from "./page/montageVideo"
// import Photographie from "./page/photographie"
// import CreationLogo from "./page/creationLogo"
// import MaintenanceSite from "./page/maintenanceSite";
// import "./index.css"

// function App() {

//   let curseurRef = useRef();

//   const mousePos = (e) => {

//     curseurRef.current.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px`)

//   }

//   return (
//     <>
//   <div onMouseMove={mousePos} className="App"  >
//     <div ref={curseurRef} className="curseur-perso" >
//       {/* <Router>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/realisations" element={<Realisations/>} />
//           <Route path="/services" element={<Services/>} /> 
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/services/site-internet" element={< Site />} />
//           <Route path="/services/web-design" element={< Design />} />
//           <Route path="/services/charte-graphique" element={< Charte />} />
//           <Route path="/services/motion-design" element={< Montage />} />
//           <Route path="/services/photographie" element={< Photographie />} />
//           <Route path="/services/creation-logo" element={< CreationLogo />} />
//           <Route path="/services/maintenance-site" element={< MaintenanceSite />} />
//         </Routes>
//       </Router> */}
//   </div>
//   </div>
//     </>
//   );
// }

// export default App;
