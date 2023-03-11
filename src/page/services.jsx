import React from 'react'
import Header from "../components/header"
import ServicesCard from '../components/servicesCard'
import Footer from '../components/footer'
import {Helmet} from 'react-helmet-async'


const tarif = (site, prix, description, description2, gris,bgColor) => {
  return (
    <>
      <Helmet>
        <title> Zhamza | Services </title>
        <meta name='description' content='Services | Un tarif adapté pour un site internet de qualité ! '  />
        <link rel="canonical" href="/services" />
      </Helmet>

      <Header/>
      <section className=' mt-[8rem] mb-[10rem]' >
      <h1 className=' flex justify-center sm:justify-start sm:ml-[5%] '>Nos Services </h1>
      <div className='flex justify-center' > <h3 className=' mb-[8rem] text-center w-[105rem] sm:w-[90%] sm:text-left  ' >Services sur mesure pour nos clients nous comprenons que chaque client a des besoins uniques et c'est pour cela que nous nous adaptons à chaque client en proposant des services personnalisés pour répondre à leurs besoins spécifiques.</h3> </div>


      <div>
        <div className=' flex justify-between flex-wrap desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] mx-[5%] '  >
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-wordpress md:bg-wordpress lg:bg-wordpress-1024 sm:bg-wordpress-1024" title="Site internet" link="/services/site-internet" /> 
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-webdesignsvg md:bg-webdesignsvg sm:bg-webdesignsvg-1024  lg:bg-webdesignsvg-1024 " title="Web design" link="/services/web-design"  />
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-motionDesign md:bg-motionDesign sm:bg-motionDesign-1024  lg:bg-motionDesign-1024 " title="Montage vidéo" link="/services/motion-design" />
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-photographie md:bg-photographie sm:bg-photographie-1024  lg:bg-photographie-1024 " title="Photographie" link="/services/photographie" />
       
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-charteGraphique md:bg-charteGraphique sm:md:bg-charteGraphique-1024  lg:bg--1024 mt-[2rem] " title="Charte graphique" link="/services/charte-graphique" />
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-creationLogo md:bg-creationLogo sm:bg-creationLogo-1024  lg:bg-creationLogo-1024 mt-[2rem] " title="Création de logo" link="/services/creation-logo"/>
            <ServicesCard style="cursor-pointer rounded-[1rem] w-[23%] h-[70rem] md:w-[55%] md:h-[150rem] md:mt-[4rem] bg-center bg-maintenance md:bg-maintenance sm:bg-maintenance-1024  lg:bg-maintenance-1024 mt-[2rem] " title="Maintenance site " link="/services/maintenance-site" />

            <div className={`w-[23%] h-[70rem] md:hidden  `}> 
            </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default tarif