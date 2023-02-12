import { useRef,React } from 'react'
import APropos from './aPropos'
import {
  Link
} from "react-router-dom";

import { FaBars,FaTimes } from 'react-icons/fa';
import "../components/header.css"
import Logo from "../asset/Logo.svg"
import {Helmet} from "react-helmet-async"
import LogoComponent from '../components/logo';
import Vector from "../asset/vector.png"
import Charte from "../asset/charte-graphique.png"
import CreationLogo from "../asset/creation-logo.png"
import LogoWebDesign from "../asset/logo-web-design.png"
import MotionDesign from "../asset/motion-design.png"
import Photo from "../asset/photo.png"

const Home = (name,picto,pictoH3,pictoP,alt) => {

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
      <h3 className='flex justify-center text-center  ' >Nous vous accompagnons dans votre transformation digitale avec une expertise <br /> multi-domaines. Nous créons des sites web professionnels, développons votre <br /> présence en ligne et mettons en place des stratégies marketing efficaces. Nous <br /> vous garantissons un suivi et une mise en œuvre sur mesure pour atteindre vos <br /> objectifs commerciaux.</h3>
      
      <div className='flex justify-around mt-[8rem] ' >
        <LogoComponent picto={Vector} pictoH3="Site Internet" pictoP="Nous créons des sites web professionnels sur mesure en collaboration avec nos clients, avec des services de maintenance pour assurer leur bon fonctionnement à long terme." alt="Logo qui illustre le codage informatique" />
        <LogoComponent picto={LogoWebDesign} pictoH3="Web Design" pictoP="Notre designer crée des designs uniques et fonctionnels pour votre site web. Nous nous assurons qu'il soit esthétique et facile à utiliser pour vos utilisateurs." alt="Logo qui illustre le web design" />
        <LogoComponent picto={Charte} pictoH3="Charte graphique" pictoP="Nous créons une charte graphique pour votre entreprise qui reflète votre image de marque pour une présentation cohérente sur tous vos supports de communication."alt="Logo qui illustre les charte graphique que nous proposons" />
      </div>
      <div className='flex justify-around mt-[10rem] ' >
        <LogoComponent picto={CreationLogo} pictoH3="Création de logo" pictoP="Nous offrons des services de création de logo professionnels pour vous aider à créer une image de marque forte et mémorable pour votre entreprise." alt="Logo qui illustre la création de logo"/>
        <LogoComponent picto={MotionDesign} pictoH3="Motion Design" pictoP="Nous créons des animations vidéo professionnelles pour promouvoir votre entreprise sur internet et les réseaux sociaux." alt="Logo qui illustre le motion design"/>
        <LogoComponent picto={Photo} pictoH3="Photographie professionnelle" pictoP="Nous proposons des services de photographie pour mettre en valeur vos produits, de vos locaux, de vos employés, etc. pour utiliser sur votre site web, vos réseaux sociaux et vos supports de communication." alt="Logo qui illustre les photos que l'on peut prendre pour vous"/>
      </div>

      <div className='flex justify-center mt-[8rem] mb-[7rem] ' >
       <button className='text-[#FE856E] font-bold text-[2rem] px-[2rem] py-[1rem] rounded-[1rem] hover:bg-[#F0BDB3] transition ease-in-out delay-100 border-[1px] border-[#FE856E] hover:text-[#24252D] ' ><Link to="/services" > Tous nos services</Link></button>
      </div> 
      <div className=' lg:bg-spaceBetween-1024 xl:bg-spaceBetween w-[100%] h-[100%] bg-no-repeat	pt-[6rem] bg-spaceBetween-2560 rounded-tr-[10rem] rounded-bl-[10rem] ' >
        <h2 className=' text-main text-center mt-[6rem] ' >Pour en savoir plus sur notre équipe et nos <br /> compétences, n'hésitez pas à nous <br /> contacter pour discuter de votre projet.</h2>
         <div className='flex justify-center mt-[4rem]  ' > <button className=' flex justify-center text-[#FE856E] font-bold text-[2rem] px-[2rem] py-[1rem] rounded-[1rem] hover:bg-[#F0BDB3] transition ease-in-out delay-100 border-[1px] border-[#FE856E] hover:text-[#24252D] mb-[10rem] bg-main'><Link to="/contact">Contact</Link></button></div>
      </div>

    </section>
      <APropos/>
    

    </>
  )
}

export default Home