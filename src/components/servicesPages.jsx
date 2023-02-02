import React from 'react'   
import Footer from './footer'
import Header from './header'

const servicesPages = (props) => {
  return (
    <>
        <Header/>
        <h1 className='flex justify-center m-[4rem] ' >Site internet</h1>
        <section className='flex justify-center mt-[8rem] mb-[30rem] ' >
            <div className='w-[45%]' >
                <h2> {props.h2} </h2>
                <h4> {props.h4} </h4>
            </div>
            <div className='w-[45%]' >
                <img src={`${props.illu}`} alt={`${props.alt}`} />
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default servicesPages