import React from 'react'
import {
  Link
} from "react-router-dom";
import Logo from "../asset/Logo.svg"
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const footer = (props) => {

  var date = new Date();
  var year = date.getFullYear();

  return (
    <>
      <footer className={` bg-third text-white w-full pb-[1.2rem] sm:pb-[4rem] rounded-tr-[10rem] sm:rounded-tr-[90px] pt-[8rem] ${props.css} `}>
        <section className='sm:flex px-[0.5rem] sm:justify-around pb-[4.8rem] ' >
          <div className='flex sm:justify-center sm:flex-col justify-around
          
          ' >
            <div className='sm:w-[100%] flex justify-center sm:mt-[4rem]  ' >
              <Link to="/" className="w-[8rem] sm:w-[22rem] h-[10rem] " ><img src={Logo} className="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[12rem] " alt="logo du site zhamza" />  </Link>
            </div>
        
            <div className='sm:w-[100%] sm:mt-[8rem]  ' >
              <h4 className=' font-normal ' >Coordonnées</h4>
              
              <p className='pt-[1rem] font-light' >Paris, France
              </p>
              <a href="tel:+33 7 67 33 69 79"><p className='pt-[1rem] font-light ' >(+33) 7.67.33.69.79</p></a>

              <a href="mailto:hamza.mahmood@outlook.fr"><p className='pt-[1rem] font-light ' >hamza.mahmood@outlook.fr</p> </a>
            </div>

            <div className='sm:w-[100%] sm:mt-[8rem]  ' >
              <h4 className=' font-normal '>Connect</h4>
              <div className='flex pt-[2rem] ' >
                <a href="https://www.linkedin.com/in/hamza-mahmood-b19128217/" target="_blank" ><AiFillLinkedin className='w-[4rem] h-[4rem] lg:w-[30px] lg:h-[30px] cursor-pointer' /></a>
                <a href="tel:+33 7 67 33 69 79" target="_blank" ><AiOutlineWhatsApp  className='w-[4rem] h-[4rem] lg:w-[30px] lg:h-[30px]  ml-[1.5rem] cursor-pointer ' /></a>
              </div>
              <Link to="/contact" > <p className='pt-[2rem] font-light'>Contact</p> </Link>
              <p className='pt-[1rem] font-light cursor-pointer ' >Mentions légales </p>
              </div>
              </div>
            </section>

          <div className='text-center pt-[2rem] font-light text-[12px]  ' >Copyright © 2022-{year} HAMZA MAHMOOD - Développeur WEB</div>  
      </footer>
    </>
  )
}

export default footer