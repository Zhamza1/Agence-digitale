import { useRef,React } from 'react'

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
import Illu1 from "../asset/illu1.png"
import Footer from "../components/footer"
import Illu3 from "../asset/illu3.png"
import Header from '../components/header';

const Home = (name,picto,pictoH3,pictoP,alt,css) => {

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
    <Header css="hidden"   />
    <section className=' bg-header2 lg:bg-header1024 sm:bg-header425  2xl:pb-[8rem]  pb-[6rem] text-white w-full rounded-bl-[80px] sm:rounded-bl-[80px] lg:pb-[4rem]'>
       <header className='pt-[2.8rem] pb-[3.4rem] md:bg-header2 md:flex-row-reverse md:sticky md:top-0 md:hidden '>
        <nav className='z-[100000] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] mx-[5%] md:mx-[0%] ' ref={navRef} > 
          <ul className='flex justify-between text-white items-center font-regular md:flex-col text-[2.4rem] lg:text-[20px] md:text-[40px] '>
            <Link to="/" className="w-[8rem] h-[10rem] md:w-[12rem] md:h-[15rem] " > <img src={Logo} alt="logo du site zhamza" /> </Link>
            <Link to="/realisations" ><li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 uppercase '>Réalisations</li> </Link>
            <Link to="/services"> <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >SERVICES</li></Link>
            <Link to="/contact" > <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 active:opacity-100 ' >CONTACT</li> </Link>
          </ul>
          <button
					className="nav-btn nav-close-btn "
					onClick={showNavbar}>
					<FaTimes className='w-[30px] h-[30px]' />
				</button>
        </nav>
        <button className="nav-btn nav-open-btn " 
        onClick={showNavbar}>
				  <FaBars className='w-[30px] h-[30px]' />
			  </button>
      </header>
      <div  >
        <div className='flex justify-center' > <h1 className=' w-[103rem] sm:mb-[3rem] max-w-[90%] ' >Faites appel à nous pour donner vie à votre projet et augmenter votre visibilité en ligne.</h1> </div> 
        <div className='flex justify-center' > <h3 className='  w-[103rem] sm:mb-[3rem] max-w-[90%] ' > Grâce à notre équipe nous aidons nos clients à atteindre leurs objectifs en matière de marketing numérique. </h3></div> 

        <div className='pt-[3rem] text-center sm:mb-[3rem]' >
          <Link to="/contact" > <button type='submit' className=' text-[#FE6965] bg-main font-medium px-[4rem] py-[0.5rem] rounded-full hover:bg-[#EFEFEF]  transition ease-in-out delay-100 text-[2rem] md:text-[16px]  ' >Contact</button> </Link> 
          <Link to="/services" > <button type='submit' className=' ml-[2rem] text-[#FFFFFF] bg-[#FF7167] font-medium px-[4rem] py-[0.5rem] rounded-full hover:bg-[#EFEFEF]  transition ease-in-out delay-100 text-[2rem] md:text-[16px] border-[2px] border-[main] ' >Learn More</button> </Link>        
        </div>
        </div>
        
    </section>

    <section >
      <h1 className=' flex justify-center mt-[8rem] mb-[3rem] sm:justify-start sm:ml-[5%] '>Transformation digitale </h1>
      <div className='flex justify-center  ' ><h3 className='w-[96rem] text-center md:w-[117rem] sm:w-[90%] sm:text-left ' >Nous vous accompagnons dans votre transformation digitale avec une expertise multi-domaines. Nous créons des sites web professionnels, développons votre présence en ligne et mettons en place des stratégies marketing efficaces. Nous vous garantissons un suivi et une mise en œuvre sur mesure pour atteindre vos objectifs commerciaux.</h3></div>
      
      <div className='flex justify-between !mt-[8rem] flex-wrap mx-[5%] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px]  ' >
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] " picto={Vector} pictoH3="Site Internet" pictoP="Nous créons des sites web professionnels sur mesure en collaboration avec nos clients, avec des services de maintenance pour assurer leur bon fonctionnement à long terme." alt="Logo qui illustre le codage informatique" />
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] sm:mt-[8rem] " picto={LogoWebDesign} pictoH3="Web Design" pictoP="Notre designer crée des designs uniques et fonctionnels pour votre site web. Nous nous assurons qu'il soit esthétique et facile à utiliser pour vos utilisateurs." alt="Logo qui illustre le web design" />
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] sm:mt-[8rem] md:mt-[3rem]" picto={Charte} pictoH3="Charte graphique" pictoP="Nous créons une charte graphique pour votre entreprise qui reflète votre image de marque pour une présentation cohérente sur tous vos supports de communication."alt="Logo qui illustre les charte graphique que nous proposons" />
        
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] sm:mt-[8rem] mt-[3rem] " picto={CreationLogo} pictoH3="Création de logo" pictoP="Nous offrons des services de création de logo professionnels pour vous aider à créer une image de marque forte et mémorable pour votre entreprise." alt="Logo qui illustre la création de logo"/>
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] sm:mt-[8rem] mt-[3rem]" picto={MotionDesign} pictoH3="Motion Design" pictoP="Nous créons des animations vidéo professionnelles pour promouvoir votre entreprise sur internet et les réseaux sociaux." alt="Logo qui illustre le motion design"/>
        <LogoComponent style="w-[30%] md:w-[45%] sm:w-[90%] sm:mt-[8rem] mt-[3rem] " picto={Photo} pictoH3="Photographie" pictoP="Nous proposons des services de photographie pour mettre en valeur vos produits, de vos locaux, de vos employés, etc. pour utiliser sur votre site web, vos réseaux sociaux et vos supports de communication." alt="Logo qui illustre les photos que l'on peut prendre pour vous"/>
      </div>

      <div className='flex justify-center mt-[8rem] mb-[7rem] ' >
       <button className='text-[#FE856E] font-bold px-[20px] py-[1rem] rounded-[1rem] md:rounded-[8px] hover:bg-[#F0BDB3] transition ease-in-out delay-100 border-[1px] border-[#FE856E] hover:text-[#24252D] text-[2.0rem] md:text-[16px] ' ><Link to="/services" > Tous nos services</Link></button>
      </div> 
      <div className='bg-spaceBetween-2560 xl:bg-spaceBetween sm:bg-spaceBetween-2560 w-[100%] md:h-[56rem] sm:h-[75rem] mini:h-[90rem] rounded-tr-[10rem] sm:rounded-tr-[90px] rounded-bl-[10rem] sm:rounded-bl-[90px]  ' >
        <div className='flex justify-center' > <h2 className=' md:text-[24px] w-[84rem] text-main mt-[8rem] sm:w-[90%]'>Pour en savoir plus sur notre équipe et nos compétences, n'hésitez pas à nous contacter pour discuter de votre projet. </h2></div>
        <div className='flex justify-center mt-[4rem]'> <button className=' flex justify-center text-[#FE856E] font-bold px-[2rem] py-[1rem] rounded-[1rem] hover:bg-[#F0BDB3] transition ease-in-out delay-100 border-[1px] border-[#FE856E] hover:text-[#24252D] mb-[10rem] bg-main text-[2.0rem] md:text-[16px] md:rounded-[8px] '><Link to="/contact">Contact</Link></button></div>
      </div>

    </section>
    <section>
      <h1 className='flex justify-center mt-[3rem]' > A propos de nous  </h1>
      <div className='flex !mt-[6rem] justify-between mx-[5%]  pb-[8rem] md:flex-col desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] '>
          <img src={Illu1} alt="Illustration à propos" className=' md:w-[90%] w-[45%] h-[45%] ' />
        <div className=' w-[50%] md:w-[90%] md:mt-[4rem] ' > 
          <h2 className='justify-center flex font-semibold md:mt-[4rem] sm:w-[90%] sm:justify-start '>Qui sommes-nous</h2>
        
        <h4 className='mt-[1.5rem]  ' >
          Notre agence digitale est composée d'une équipe de 3 personnes talentueuses et complémentaires. Hamza est notre chef de projet et développeur web, il gère les projets de bout en bout et veille à leur bon déroulement. 
          Charaf est notre designer, il est responsable de tout ce qui concerne le web design, la création de logo et la charte graphique. Enfin, Oscar s'occupe du motion design et de la photographie, 
          il est responsable de donner vie à vos projets en les animant et en les mettant en scène. Ensemble, nous mettons notre expertise au service de vos projets pour vous aider à atteindre vos objectifs.
        </h4>
        </div>
      </div>

      <div className='flex mt-[4rem] justify-between pb-[8rem] mx-[5%] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] '>
        <div className=' w-[50%] md:w-[90%] ' > 
          <h2 className='justify-center flex font-semibold sm:w-[90%] sm:justify-start '>Quels sont nos atouts </h2>
        
        <h4 className='mt-[1.5rem] ' >
          Notre agence digitale se distingue des autres grâce à notre petite taille d'équipe qui nous permet d'avoir une plus grande facilité à travailler ensemble pour vous offrir des solutions sur mesure.
          Nous avons également la capacité de prendre en charge toute la chaîne de production d'un site, allant du design à la réalisation technique, en passant par le développement web. 
          Nous vous offrons également des services supplémentaires tels que le motion design et la photographie professionnelle, qui permettent d'ajouter une plus-value à votre projet et de le rendre encore plus attractif pour votre public cible. 
          En somme, nous sommes une équipe flexible et compétente capable de vous offrir une solution globale et de qualité pour votre projet digital.
        </h4>
        </div>
          <img src={Illu3} alt="Illustration à propos" className=' md:hidden w-[45%] h-[45%] sm:w-[45%] ' />
        </div>

      </section>
      <Footer/>
    </>
  )
}

export default Home

