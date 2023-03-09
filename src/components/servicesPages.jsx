import React from 'react'   
import Footer from './footer'
import Header from './header'

const servicesPages = (props) => {
  return (
    <>
        <Header/>
        <h1 className='flex justify-center m-[4rem] ' > {props.h1} </h1>
        <section className='flex justify-center desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] !mt-[8rem] !mb-[30rem] md:flex-col-reverse ' >
            <div className='w-[45%] md:w-[90%] ml-[5%] ' >
                <h2> {props.h2} </h2>
                <h4 className='mt-[1rem]' > {props.h4first} </h4>
                <br /><br />
                <h4> {props.h4second} </h4>
                <br /><br />
                <h4> {props.h4third} </h4>
                <br /><br />
                <h4> {props.h4fourth} </h4>
            </div>
            <div className='w-[45%] md:w-[90%] ml-[5%] ' >
                <img className='w-[100%]' src={`${props.illu}`} alt={`${props.alt}`} />
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default servicesPages