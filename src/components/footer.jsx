import React from 'react'
import {
  Link
} from "react-router-dom";
import Logo from "../asset/Logo.svg"
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const footer = (props) => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className={` bg-third text-white w-full pb-[1.2rem] sm:pb-[4rem] rounded-tr-[10rem] sm:rounded-tr-[90px] pt-[8rem] ${props.css} `}>
        <section className='sm:flex mx-[5%] sm:justify-around pb-[4.8rem] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] desk:px-[0rem]  ' >
          <div className='flex sm:justify-center sm:flex-col justify-between' >
            <div className='sm:w-[100%] md:hidden flex justify-center sm:mt-[4rem]  ' >
              <Link to="/" className="w-[12rem] h-[10rem] " ><img src={Logo} className="w-[100%] h-[100%]  " alt="logo du site zhamza" />  </Link>
            </div>
        
            <div className='sm:w-[100%] sm:mt-[6rem]  ' >
              <h4 className=' font-normal ' >Coordonnées</h4>
              
              <p className='pt-[1rem] font-light' >Paris, France
              </p>
              <a href="tel:+33 7 67 33 69 79"><p className='pt-[1rem] font-light ' >(+33) 7.67.33.69.79</p></a>

              <a href="mailto:dendenweb1@gmail.com"><p className='pt-[1rem] font-light ' >dendenweb1@gmail.com</p> </a>
            </div>

            <div className='sm:w-[100%] sm:mt-[8rem]' >
              <h4 className=' font-normal '>Connect</h4>
              <div className='flex pt-[2rem] ' >
                <a href="https://www.linkedin.com/in/hamza-mahmood-b19128217/" target="_blank" ><AiFillLinkedin className='w-[4rem] h-[4rem] lg:w-[30px] lg:h-[30px] cursor-pointer' /></a>
                <a href="tel:+33 7 67 33 69 79" target="_blank" ><AiOutlineWhatsApp  className='w-[4rem] h-[4rem] lg:w-[30px] lg:h-[30px]  ml-[1.5rem] cursor-pointer ' /></a>
              </div>
              <Link to="/contact" > <p className='pt-[2rem] font-light'>Contact</p> </Link>
              <Link to="/mentions-legales" > <p className='pt-[1rem] font-light cursor-pointer ' >Mentions légales </p></Link>
              </div>
              </div>
            </section>
          <div className='text-center pt-[2rem] font-light text-[12px]  ' >Copyright © 2022-{year} DENDEN WEB - Agence Digitale</div>  
      </footer>
    </>
  )
}

export default footer