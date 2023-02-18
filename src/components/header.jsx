import { useRef,React } from 'react'
import {
  NavLink
} from "react-router-dom";
import "./header.css"

import { FaBars,FaTimes } from 'react-icons/fa';
import Logo from "../asset/Logo.svg"

const Header = () => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  let activeLink = "font-bold opacity-100 text-white-800 text-[#FFFFFF] underline opacity-[1] opacity-100 "

  

  return (
    <>
      <header className=" pt-[2.8rem] bg-header2 w-[100%] md:py-[1rem] md:flex md:flex-row-reverse " >
        <nav className='z-[100000]' ref={navRef} >
          <ul className='flex justify-around px-[15rem] text-white items-center text-[2.4rem] lg:text-[20px] md:flex-col md:text-[40px]  '  >
            <NavLink  to="/" className='w-[8rem] h-[10rem] md:w-[12rem] md:h-[15rem] ' > <img src={Logo} alt="logo du site zhamza" /> </NavLink>
              <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 uppercase '  > <NavLink to="/realisations" className={({ isActive }) => isActive ? activeLink : undefined}> Réalisations  </NavLink></li> 
              <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 '  > <NavLink to="/services" className={({ isActive }) => isActive ? activeLink : undefined}>  SERVICES </NavLink> </li>
              <li className=' font-medium text-[#ffffff] opacity-50 hover:opacity-100 transition-all duration-500 '  > <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : undefined}>CONTACT </NavLink> </li>
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
      </header>
    </>
  )
}

export default Header