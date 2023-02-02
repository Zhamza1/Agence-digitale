import React from 'react'
import Header from "../components/header"
import ServicesCard from '../components/servicesCard'
import Footer from '../components/footer'
import {Helmet} from 'react-helmet-async'
import {
  Link
} from "react-router-dom";

const tarif = (site, prix, description, description2, gris,bgColor) => {
  return (
    <>
      <Helmet>
        <title> Zhamza | Services </title>
        <meta name='description' content='Services | Un tarif adapté pour un site internet de qualité ! '  />
        <link rel="canonical" href="/services" />
      </Helmet>

      <Header/>
      <section >
      <h1 className='text-[4.8rem] font-medium flex justify-center mt-[5rem] mb-[8rem] '>Mes Services </h1>

      <div>
        <div className=' flex justify-center flex-wrap mx-[9%] '  >
            <Link to="/services/site-internet" > <ServicesCard description="WordPress est un logiciel de la famille des CMS. Le CMS WordPress permet à la fois de gagner du temps de développement au niveau de la création de votre site internet et d’y ajouter facilement des pages, WordPress permet donc la création de sites dynamiques." title="Wordpress" bgImage="bg-wordpress lg:bg-wordpress-1024 sm:bg-wordpress-425 " /> </Link>
            <ServicesCard description="Le web design est la conception de l'interface web : l’architecture interactionnelle, l’organisation des pages, l’arborescence et la navigation dans un site web" title="Web design" bgImage="bg-webdesignsvg  lg:bg-webdesignsvg-1024 sm:bg-webdesignsvg-425 " />
            <ServicesCard description="Le référencement naturel, le SEO a pour but d’améliorer votre classement dans les résultats de recherche tel que Google afin d’augmenter le trafic de visiteurs sur votre site web." title="SEO" bgImage="bg-seo  lg:bg-seo-1024 sm:bg-seo-425 " />
        </div>
        
        <div className='flex justify-center flex-wrap mx-[9%] mt-[1%] '  >
          <ServicesCard description="Compatibilité desktop tablette & application mobile." title="Responsive design" bgImage="bg-responsive  lg:bg-responsive-1024 sm:bg-responsive-425 " />
          <ServicesCard description="Mise en place d’outils spécifiques telle que calendly, des outils de tracking, outil d’automation et d’autres encore " title="Mise en place d'outils" bgImage="bg-calendly  lg:bg-calendly-1024 sm:bg-calendly-425 " />
          <ServicesCard description="La maintenance d'un site web consiste à mener un ensemble d'actions qui vont garder votre site en bonne santé et à jour, sur le plan technique mais aussi éditorial. Il s'agit donc de détecter et corriger les problèmes qui peuvent se créer au fur et à mesure que votre site évolue." title="Maintenance site " bgImage="bg-maintenance  lg:bg-maintenance-1024 sm:bg-maintenance-425  " />
        </div>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default tarif