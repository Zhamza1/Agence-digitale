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
      <h1 className=' flex justify-center '>Nos Services </h1>
      <h4 className='flex justify-center mb-[8rem] text-center mx-[13%] ' >Services sur mesure pour nos clients Nous comprenons que chaque client a des besoins uniques et c'est pour cela que nous nous adaptons à chaque client en proposant des services personnalisés pour répondre à leurs besoins spécifiques.</h4>


      <div>
        <div className=' flex justify-center flex-wrap  '  >
            <ServicesCard title="Site internet" bgImage="bg-wordpress lg:bg-wordpress-1024 sm:bg-wordpress-425 " link="/services/site-internet" /> 
            <ServicesCard title="Web design" bgImage="bg-webdesignsvg  lg:bg-webdesignsvg-1024 sm:bg-webdesignsvg-425 " link="/services/web-design"  />
            <ServicesCard title="Montage vidéo" bgImage="bg-motionDesign  lg:bg--1024 sm:bg--425 " link="/services/motion-design" />
            <ServicesCard title="Photographie" bgImage="bg-photographie  lg:bg--1024 sm:bg--425 " link="/services/photographie" />
        </div>
        
        <div className='flex justify-center flex-wrap mt-[1%] '  >
          <ServicesCard title="Charte graphique" bgImage="bg-charteGraphique  lg:bg--1024 sm:bg--425 " link="/services/charte-graphique" />
          <ServicesCard title="Création de logo" bgImage="bg-creationLogo  lg:bg--1024 sm:bg--425 " link="/services/creation-logo"/>
          <ServicesCard title="Maintenance site " bgImage="bg-maintenance  lg:bg-maintenance-1024 sm:bg-maintenance-425  " link="/services/maintenance-site" />

          <div className={` w-[34rem] h-[59rem] rounded-[1rem] xl:w-[20%] xl:h-[70rem] mx-4 bg-no-repeat bg-center  `}> 
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default tarif