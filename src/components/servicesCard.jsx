import React from 'react'
import {
  Link
} from "react-router-dom";


const servicesCard = (props) => {

  return (
    <>
        <div className={` cursor-pointer font-medium text-[3.6rem] w-[34rem] h-[59rem] rounded-[1rem] xl:w-[20%] xl:h-[70rem] mx-4 bg-no-repeat bg-center ${props.bgImage}`}> 
          <div className='pt-[4rem] text-center transition transition-opacity-25 backdrop-blur-[0rem] bg-[#000000] top-0 left-0 w-full h-full rounded-xl opacity-0 hover:opacity-60 transition-transform-25 hover:translate-y-[0px] translate-y-[2rem] px-[2rem] '>
            <div className='text-[#ffffff] h-[5rem] ' >{props.title}</div>
            <div>  <Link to={props.link} > <button className='mt-[30rem] font-regular text-center text-[#FE856E] font-bold text-[2rem] px-[2rem] py-[1rem] rounded-[1rem] hover:bg-[#F0BDB3] transition ease-in-out delay-100 border-[1px] border-[#FE856E] hover:text-[#24252D] bg-main ' >Voir plus</button> </Link></div>
            
          </div>
        </div>
    </>
  )
} 

export default servicesCard

