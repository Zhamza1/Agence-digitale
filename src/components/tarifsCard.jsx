import React from 'react'
import {
    Link
  } from "react-router-dom";


const tarifsCard = (props) => {
  return (
    <>
        <div className='relative flex justify-center drop-shadow-lg w-[90%] bg-[#FFFFFF] py-[1.5rem]  mx-[5%] rounded-[1.5rem] mb-[4rem] cursor-pointer transition-all duration-500 hover:top-[-1rem] hover:shadow-2xl ' >
            <div className={` w-[20%] ${props.bgColor} rounded-[1.5rem] text-center px-[3rem] pt-[4rem] ${props.textColor} xl:w-[25%] md:w-[26%] sm:w-[30%] pb-[2rem] sm:pb-[2rem] `} >
                <h3 className='font-semibold text-[2.5rem] ' >SITE VITRINE <br /> {props.site} </h3>
                <h2 className='font-semibold text-[3.2rem] ' >À PARTIR DE {props.prix}€ </h2>
                <h4 className='font-light text-[1.8rem] pb-[3rem] pt-[1rem] uppercase  ' > {props.description} </h4>
                <Link to="/contact" >    <button type='submit' className={`uppercase ${props.textButton} ${props.bgButton} px-6 py-[1rem] rounded-[0.7rem] text-[1.8rem] font-regular hover:bg-white mb-[2rem]  ${props.animation} `} > Nous contacter </button> </Link>
                <h4 className='font-light text-[1.8rem] uppercase' > {props.description2} </h4>
            </div>
            <div className='w-[37%] ml-[5rem] py-[2rem] font-regular text-[16px] xl:w-[33%] sm:w-[30%]' >
                <p className='leading-[5rem] text-[1.8rem] ' >
                    ✓  Développé sous WORDPRESS    <br />

                    ✓  Sélection d'une palette de couleur <br />

                    ✓  Domaine + hébergement + e-mail pendant 12 mois <br />

                    ✓  Formulaire de contact <br />

                    { props.maquette ? <> {props.maquette}  <br /> </> : "" }  

                    <span className={`${props.gris}`} >  ✓ Création charte graphique personnalisée <br /> </span>

                    <span className={`${props.gris}`} >  ✓ Création entière du design via Figma <br /> </span>
                </p>
            </div>
            <div className='w-[37%] ml-[2rem] py-[2rem] font-regular text-[1.6rem] xl:w-[33%] sm:w-[30%]' >
                <p className='leading-[5rem] text-[1.8rem] ' >
                    ✓  Site responsive <br />

                    ✓  Mise en place du contenu (textes & images) <br />

                    ✓  Liens de partage sur les réseaux sociaux <br />

                    ✓  Optimisation du référencement <br />

                    ✓  Statistiques de visite <br />

                    ✓  Mise en ligne du site <br />

                    <span className={`${props.gris}`} > ✓  Mise en place d’outil spécifique <br /> </span>

                    <span className={`${props.gris}`} > ✓  Création d’une page Google My Business  <br /> </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default tarifsCard