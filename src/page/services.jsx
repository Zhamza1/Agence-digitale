import React from 'react'
import Header from "../components/header"
import TarifsCard from '../components/tarifsCard'
import Footer from '../components/footer'
import {Helmet} from 'react-helmet-async'

const tarif = (site, prix, description, description2, gris,bgColor) => {
  return (
    <>
      <Helmet>
        <title> Zhamza | Tarifs </title>
        <meta name='description' content='Tarifs | Un tarif adapté pour un site internet de qualité ! '  />
        <link rel="canonical" href="/tarifs" />
      </Helmet>

      <Header/>
      <section className='mb-[4rem]' >
        <h1 className='font-medium text-[4.8rem] flex justify-center mt-[4rem] ' > Tarifs </h1>
        <h2 className=' text-[2rem] font-regular flex justify-center mb-[4rem] ' > Un tarif adapté pour un site internet de qualité ! </h2>
        <TarifsCard site="STANDARD" prix="499" description="POUR UN SITE AVEC La FORMULE LA PLUS SIMPLE " description2="Toutes les fonctionnalités essentielles dont vous avez besoin " bgColor="bg-[#FFF3F1]" bgButton="bg-secondary" textButton="text-[#FFFFFF] " gris="text-[#DDBCBC]" maquette="✓  Charte graphique à partir d'une maquette pré-définie" animation="hover:bg-[#F0BDB3] transition ease-in-out delay-100  hover:text-[#24252D]" />

        <TarifsCard site="PERSONNALISÉ" prix="699" description="Pour un site en accord avec vos gouts et couleurs" description2="Fonctionnalités avancées pour un contrôle total " bgColor="bg-secondary" bgButton="bg-[#FFFFFF]" textButton="text-[#000000]" textColor="text-[#FFFFFF]" animation=" hover:bg-[#EFEFEF] transition ease-in-out delay-100 "/>
      </section>
      <Footer />
    </>
  )
}

export default tarif