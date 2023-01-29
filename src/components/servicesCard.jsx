import React from 'react'

const servicesCard = (props) => {

  return (
    <>
        <div className={` cursor-pointer font-medium text-[3.6rem] w-[34rem] h-[59rem] rounded-[1rem] xl:w-[28%] xl:h-[70rem] mx-4 bg-no-repeat bg-center ${props.bgImage}`}> 
          <div className='pt-[4rem] text-center transition transition-opacity-25 backdrop-blur-[0.5rem] bg-[#000000] top-0 left-0 w-full h-full rounded-xl opacity-0 hover:opacity-60 transition-transform-25 hover:translate-y-[0px] translate-y-[2rem] px-[2rem] '>
            <div className='text-[#ffffff]' >{props.title}</div>
              <p className='text-[#ffffff] font-regular text-[1.4rem] text-center ' >{props.description}</p>
            
          </div>
        </div>
    </>
  )
} 

export default servicesCard
