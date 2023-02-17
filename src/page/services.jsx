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
      <div className='flex justify-center' > <h3 className=' mb-[8rem] text-center w-[105rem] ' >Services sur mesure pour nos clients nous comprenons que chaque client a des besoins uniques et c'est pour cela que nous nous adaptons à chaque client en proposant des services personnalisés pour répondre à leurs besoins spécifiques.</h3> </div>


      <div>
        <div className=' flex justify-center flex-wrap  '  >
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-wordpress lg:bg-wordpress-1024 sm:bg-wordpress-425" title="Site internet" link="/services/site-internet" /> 
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-webdesignsvg  lg:bg-webdesignsvg-1024 sm:bg-webdesignsvg-425" title="Web design" link="/services/web-design"  />
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-motionDesign  lg:bg--1024 sm:bg--425" title="Montage vidéo" link="/services/motion-design" />
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-photographie  lg:bg--1024 sm:bg--425 " title="Photographie" link="/services/photographie" />
       
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-charteGraphique  lg:bg--1024 sm:bg--425  mt-[2rem] " title="Charte graphique" link="/services/charte-graphique" />
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-creationLogo  lg:bg--1024 sm:bg--425  mt-[2rem] " title="Création de logo" link="/services/creation-logo"/>
            <ServicesCard style="cursor-pointer font-medium text-[3.6rem] text-[36px] w-[34rem] h-[59rem] rounded-[1rem] mx-[3rem] xl:w-[20%] xl:h-[70rem] xl:mx-[1rem] md:w-[80%] md:h-[150rem] md:mt-[4rem] bg-no-repeat bg-center bg-maintenance  lg:bg-maintenance-1024 sm:bg-maintenance-425 mt-[2rem] " title="Maintenance site " link="/services/maintenance-site" />

            <div className={` w-[34rem] h-[59rem] xl:w-[20%] xl:h-[70rem] mx-[3rem] xl:mx-[1rem] md:hidden  `}> 
            </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default tarif