import React from 'react'

const portfolioCard = (props) => {
  return (
    <>
        <div className=' w-[45%] h-[100%] rounded-[10px] sm:w-[100%] sm:mb-[3.6rem] '>
          <a href={`${props.link}`} target="_blank" > <img src={`${props.img}`} alt={`${props.alt}`} className='w-[100%]' />  </a>
        </div>
    </>
  )
}

export default portfolioCard