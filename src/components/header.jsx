import { useRef,React } from 'react'
import {
  NavLink,
  Link
} from "react-router-dom";
import "./header.css"

import { FaBars,FaTimes } from 'react-icons/fa';
import Logo from "../asset/Logo.svg"

const Header = (props) => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  let activeLink = "font-bold text-[#EEEFEF] !opacity-100 underline hover:opacity-100 transition-all duration-300"
  
  

  return (
    <>
      <header className={` z-[100000] pt-[2.8rem] bg-header2 w-[100%] md:py-[1rem] md:flex md:flex-row-reverse md:sticky md:top-0 ${props.css} `} >
      
        <nav className='z-[100000] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] mx-[5%] md:mx-[0%] ' ref={navRef} >
          <ul className='flex justify-between text-white items-center text-[2.4rem] lg:text-[20px] md:flex-col md:text-[40px]  '  >
            <NavLink  to="/" className='w-[12rem] h-[10rem] md:w-[35rem] md:h-[23rem]  ' > <img className=' w-[100%] h-[100%] ' src={Logo} alt="logo du site zhamza" /> </NavLink> 
              <li className=' font-medium text-[#FFB2B1] hover:opacity-100 transition-all duration-500 uppercase '  > <NavLink to="/realisations" className={({ isActive }) => isActive ? activeLink : undefined}> Réalisations  </NavLink></li> 
              <li className=' font-medium text-[#FFB2B1] hover:opacity-100 transition-all duration-500 '  > <NavLink to="/services" className={({ isActive }) => isActive ? activeLink : undefined}>  SERVICES </NavLink> </li>
              <li className=' font-medium text-[#FFB2B1] hover:opacity-100 transition-all duration-500 '  > <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : undefined}>CONTACT </NavLink> </li>
          </ul>
          <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes className='w-[30px] h-[30px]' />
				</button>
        </nav>
        <button className="nav-btn nav-open-btn " 
        onClick={showNavbar}>
				  <FaBars className='w-[30px] h-[30px]' />
			  </button>
        <NavLink to="/" className="w-[8rem] h-[10rem] md:w-[90px] md:h-[70px] mr-auto ml-[5%] md:flex items-center hidden " > <img className=' w-[100%] h-[100%] ' src={Logo} alt="logo format mobile du site zhamza" /> </NavLink>
      </header>
    </>
  )
}

export default Header