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
      <footer className={` bg-third text-white w-full pb-[1.2rem] rounded-tr-[10rem] pt-[8rem] ${props.css} `} /* style="position: absolute;bottom: 0;" */ >
        <section className='flex px-[0.5rem] justify-around pb-[4.8rem]' >
        <div>
          <Link to="/" className="w-[8rem] h-[10rem] " ><img src={Logo} className="w-[8rem] h-[10rem]" alt="logo du site zhamza" />  </Link>
        </div>
    
        <div>
          <p className='text-[2rem] font-normal ' >Coordonnées</p>
          
          <p className='pt-[1rem] font-light text-[1.6rem]' >Paris, France
          </p>
          <a href="tel:+33 7 67 33 69 79"><p className='pt-[1rem] font-light text-[1.6rem] ' >(+33) 7.67.33.69.79</p></a>

          <a href="mailto:hamza.mahmood@outlook.fr"><p className='pt-[1rem] font-light text-[1.6rem]' >hamza.mahmood@outlook.fr</p> </a>
        </div>

        <div>
          <p className='text-[2rem] font-normal '>Connect</p>
          <div className='flex pt-[2rem] ' >
            <a href="https://www.linkedin.com/in/hamza-mahmood-b19128217/" target="_blank" ><AiFillLinkedin className='w-[3rem] h-[3rem] cursor-pointer' /></a>
            <a href="tel:+33 7 67 33 69 79" target="_blank" ><AiOutlineWhatsApp  className='w-[3rem] h-[3rem] ml-[1.5rem] cursor-pointer ' /></a>
          </div>
          <Link to="/contact" > <p className='pt-[2rem] font-light text-[1.6rem]'>Contact</p> </Link>
          <p className='pt-[1rem] font-light cursor-pointer text-[1.6rem] ' >Mentions légales </p>
          </div>
        </section>

        <div className='text-center pt-[2rem] font-light text-[1.2rem]  ' >Copyright © 2022-{year} HAMZA MAHMOOD - Développeur WEB</div>  
      </footer>
    </>
  )
}

export default footer