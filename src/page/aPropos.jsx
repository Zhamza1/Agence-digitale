import React from 'react'
import Illu1 from "../asset/illu1.png"
import Footer from "../components/footer"
import Illu3 from "../asset/illu3.png"


const aPropos = () => {
  return (
    <>
  <section className="mb-[0rem]" >
      <h1 className='flex justify-center mt-[3rem]' > A propos de nous  </h1>
      <div className='flex pt-[4rem] justify-around pb-[8rem] '>
          <img src={Illu1} alt="Illustration à propos" className='w-[40%] h-[40%] sm:w-[45%] ' />
        <div className='self-center w-[50%] ' > 
          <h2 className='justify-center flex text-[3.6rem] font-semibold '>Qui sommes-nous</h2>
        
        <h4 className='pt-[1.5rem]  flex justify-center   ' >
          Notre agence digitale est composée d'une équipe de 3 personnes talentueuses et complémentaires. Hamza est notre chef de projet et développeur web, il gère les projets de bout en bout et veille à leur bon déroulement. Charaf est notre designer, il est responsable de tout ce qui concerne le web design, la création de logo et la charte graphique. Enfin, Oscar s'occupe du motion design et de la photographie, il est responsable de donner vie à vos projets en les animant et en les mettant en scène. Ensemble, nous mettons notre expertise au service de vos projets pour vous aider à atteindre vos objectifs.

        </h4>
        </div>
      </div>

      <div className='flex pt-[4rem] justify-around pb-[8rem] '>
        <div className='self-center w-[50%] ' > 
          <h2 className='justify-center flex text-[3.6rem] font-semibold '>Quels sont nos atouts </h2>
        
        <h4 className='pt-[1.5rem]  flex justify-center   ' >
          Notre agence digitale se distingue des autres grâce à notre petite taille d'équipe qui nous permet d'avoir une plus grande facilité à travailler ensemble pour vous offrir des solutions sur mesure.
          <br /><br />
          Nous avons également la capacité de prendre en charge toute la chaîne de production d'un site, allant du design à la réalisation technique, en passant par le développement web. 
          <br /><br />
          Nous vous offrons également des services supplémentaires tels que le motion design et la photographie professionnelle, qui permettent d'ajouter une plus-value à votre projet et de le rendre encore plus attractif pour votre public cible. 
          En somme, nous sommes une équipe flexible et compétente capable de vous offrir une solution globale et de qualité pour votre projet digital.
        
        </h4>
        </div>
          <img src={Illu3} alt="Illustration à propos" className='w-[40%] h-[40%] sm:w-[45%] ' />
        </div>

      </section>
      <Footer/>
    </>
  )
}

export default aPropos