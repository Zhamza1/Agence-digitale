import { useRef,React } from 'react'
import ServicesCard from '../components/servicesCard'
import APropos from './aPropos'
import {
  Link
} from "react-router-dom";

import { FaBars,FaTimes } from 'react-icons/fa';
import "../components/header.css"
import Logo from "../asset/Logo.svg"
import {Helmet} from "react-helmet-async"
import LogoComponent from '../components/logo';


const Home = (name) => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <>
      <Helmet>
        <title> Zhamza | Développeur Web </title>
        <meta name='description' content="Je suis un développeur Web, le développement Web est ma passion et je m'assure que chaque projet sur lequel je travaille est qualitatif."  />
        <link rel="canonical" href="/" />
      </Helmet>
   
    <section className=' bg-header2 lg:bg-header1024 sm:bg-header425 bg-no-repeat 2xl:pb-[8rem]  pb-[6rem] text-white w-full rounded-bl-[8rem] lg:pb-[4rem]'>
       <header className='pt-[2.8rem] pb-[3.4rem] md:flex md:flex-row-reverse '>
        <nav className='z-[100000]' ref={navRef} > 
          <ul className='flex justify-around px-[15rem] text-white items-center font-regular text-[2rem] md:flex-col md:text-[40px] '>
            <Link to="/" className="w-[8rem] h-[10rem] " > <img src={Logo} alt="logo du site zhamza" /> </Link>
            <Link to="/realisations" ><li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 uppercase '>Réalisations</li> </Link>
            <Link to="/services"> <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >SERVICES</li></Link>
            <Link to="/contact" > <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >CONTACT</li> </Link>
          </ul>
          <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
        </nav>
        <button className="nav-btn nav-open-btn " 
        onClick={showNavbar}>
				  <FaBars />
			  </button>
      </header>
      <div className='text-center' >
        <h1 className='text-[4.8rem] font-semibold' >Faites appel à nous pour donner vie à votre <br /> projet et augmenter votre visibilité en ligne.</h1>
        <h3 className='text-[2.4rem] font-medium' > Grâce à notre équipe expérimentée et passionnée, nous aidons nos clients à atteindre leurs <br /> objectifs en matière de marketing numérique.

</h3>

        <div className='pt-[3rem]' ><Link to="/contact" > <button type='submit' className=' text-[#FE6965] bg-[#FFFFFF] font-medium px-[4rem] py-[0.5rem] rounded-full text-[2rem] hover:bg-[#EFEFEF]  transition ease-in-out delay-100 ' >Contact</button> </Link> </div>
        </div>
        
    </section>

    <section >
      <h1 className=' flex justify-center mt-[8rem] mb-[4rem] '>Transformation digitale </h1>
      <h3 className='flex justify-center ' >Nous vous accompagnons dans votre transformation digitale avec une expertise <br /> multi-domaines. Nous créons des sites web professionnels, développons votre <br /> présence en ligne et mettons en place des stratégies marketing efficaces. Nous <br /> vous garantissons un suivi et une mise en œuvre sur mesure pour atteindre vos <br /> objectifs commerciaux.</h3>
      <LogoComponent/>
    </section>

    
      <APropos/>
    

    </>
  )
}

export default Home