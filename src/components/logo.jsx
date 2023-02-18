import React from 'react'


const Logo = (props) => {
  return (
      <>
      <article className={`${props.style}`} >
        <figure><img className='w-[8rem] h-[7rem] md:w-[70px] md:h-[60px] ' src={`${props.picto}`} alt={`${props.alt}`} /></figure>
        <h3 className='mt-[1rem] font-medium  ' > {props.pictoH3} </h3>
        <p className='mt-[1rem]  ' > {props.pictoP} </p>
      </article>
      
        
      </>
  
  )
}

export default Logo