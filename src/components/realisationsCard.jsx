import React from 'react'

const realisationsCard = (props) => {
  return (
    <>
        <div className={`${props.style}`} >
          <a href={`${props.link}`} target="_blank" > <img src={`${props.img}`} alt={`${props.alt}`} className='w-[100%] rounded-[1rem] ' />  </a>
        </div>
    </>
  )
}

export default realisationsCard