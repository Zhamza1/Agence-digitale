import React from 'react'
import Illu1 from "../asset/illu1.png"
import Footer from "../components/footer"

const aPropos = () => {
  return (
    <>
  <section>
      <h1 className='flex justify-center mt-[3rem] text-[4.8rem] font-medium ' > A propos </h1>
      <div className='flex pt-[4rem] justify-around pb-[8rem] '>
          <img src={Illu1} alt="Illustration à propos" className='w-[35%] h-[40%] sm:w-[45%] ' />
        <div className='self-center w-[50%] ' > 
          <h2 className='justify-center flex text-[3.6rem] font-semibold '>Un développeur Web polyvalent</h2>
        
        <p className='pt-[1.5rem]  flex justify-center text-[2rem] font-regular  ' >
        Je suis Hamza, un développeur web fullstack expérimenté et polyvalent. J'excelle dans la création de sites web à l'aide de WordPress, tout en étant également compétent en React. 
        Je suis passionné par la création de sites web performants et irréprochable graphiquement, et je m'efforce de fournir des résultats de haute qualité à chaque projet sur lequel je travaille.
        <br /><br /> Vous trouverez mon travail de premier ordre et convivial tout en étant suffisamment professionnel pour impressionner vos clients. N'hésitez pas à m'envoyer un message si vous avez des questions
          ou des conseils sur les services que je propose. 

        </p>
        </div>
      </div>
      </section>
      <Footer/>
    </>
  )
}

export default aPropos