import React from 'react'

const realisationsCard = (props) => {
  return (
    <>
        <div className=' w-[38rem] h-[25rem] sm:w-[100%] sm:mb-[3.6rem] ml-[0rem] '>
          <a href={`${props.link}`} target="_blank" > <img src={`${props.img}`} alt={`${props.alt}`} className='w-[100%] rounded-[10px] ' />  </a>
        </div>
    </>
  )
}

export default realisationsCard