import React from 'react'
import { useState } from 'react'
import Header from "../components/header"
import Illu2 from  "../asset/illu2.png" 
import {Helmet}  from "react-helmet-async"
import LocalisationLogo from "../asset/localisationLogo.png"
import MailLogo from "../asset/mailLogo.png"
import MessageLogo from "../asset/messageLogo.png"

const Contact = () => {
  const [isError,setIsError] = useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [subject,setSubject] =useState("")
  const [message,setMessage] =useState("")


  return (
    <>
      <Helmet>
        <title> DendenWeb | Contact </title>
        <meta name='description' content='Contactez nous | Que vous ayez une question sur les fonctionnalités les prix ou autre, nous sommes prêt à répondre à toutes vos questions.'  />
        <link rel="canonical" href="/contact" />      
      </Helmet>

    <Header/>
      <section className='flex !mt-[8rem] justify-between pb-[4rem] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] mx-[5%] ' >
        <div className='w-[45%] md:w-[90%] ' >
        <div className='text-center text-red-500'>
          <p>{isError}</p>
        </div>
          <h1 className=' text-third font-semibold'>Contactez nous</h1>
          <h3 className=' mt-[1rem] pb-[0.5rem] text-[#ADA3A3] font-semibold text-[16px] ' >Que vous ayez une question sur les fonctionnalités les prix ou autre, je suis prêt à répondre à toutes vos questions.</h3>
          
          <form name='contact' className='mt-[2.5rem] ' method='post' data-netlify="true" onSubmit="submit" >
          <input type="hidden" name="form-name" value="contact" />
            <div className='flex w-[100%] justify-between '>

              <div className='flex-col flex w-[30%] ' >
                <label className='block text-[#ADA3A3] ' htmlFor="">Name :</label>
                <input type="text" name='name' className=' mt-[0.75rem] border-[#998C8C] py-[0.25rem]  px-[0.5rem] text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[0.3rem] bg-[#F8FAFB] text-[16px] font-regular  ' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className='flex-col flex w-[60%] ' >
                <label className='block text-[#ADA3A3] ' htmlFor="">Email :</label>
                <input name='email' type="email" className=' mt-3 border-[#998C8C] py-1  px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[0.3rem] bg-[#F8FAFB] text-[16px] font-regular ' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Sujet :</label>
              <input name='subject' type="text" className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[0.3rem] bg-[#F8FAFB] text-[16px] font-regular '  
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <label className='text-[#ADA3A3] ' htmlFor="">Message :</label>
              <textarea name='message' className=' w-full mt-3 border-[#998C8C] py-1 px-2 text-[#000000] border-x-0 border-t-0 focus:outline-none focus:border-blue-600 border-[0.3rem] bg-[#F8FAFB] text-[16px] font-regular  ' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='mt-7' >
              <button type='submit' className=' mt-[2rem] text-white bg-secondary px-[2rem] py-[1rem] rounded-[1rem] md:rounded-[8px] text-[20px] hover:bg-[#F0BDB3] transition ease-in-out delay-100  hover:text-[#24252D] md:text-6px]'>Envoyer</button>
            </div>
          </form>
        </div>
        <div className='w-[45%] md:hidden '> 
          <img className=' w-[100%] ' src={Illu2} alt="illustration d'une personne écrivant un mail" />
        </div>
        
       

      </section> 

      <section className='desk:my-[0] desk:mx-[auto] desk:max-w-[1440px]' >
        <div className='flex justify-center' >
          <h2 className='sm:w-[90%]' >Contacter notre service commercial</h2>
        </div>
        <div className='flex justify-around mt-[5rem] mb-[5rem] mx-[10rem] md:flex-col ' >
          <article>
            <figure style={{ textAlign: '-webkit-center' }} >
              <img className=' w-[11rem] h-[11rem] lg:w-[80px] lg:h-[80px] ' src={LocalisationLogo} alt="Logo définissant une localisation" />
              <h3 className='text-center mt-[0.2rem] text-[16px] ' >Paris</h3>
              <p className='text-center text-[#7D8CA8] font-bold mt-[0.2rem] ' >Localisation</p>
            </figure>
          </article>
          <article>
            <figure className='md:mt-[4rem]' style={{ textAlign: '-webkit-center' }} >
              <img className=' w-[11rem] h-[11rem] lg:w-[80px] lg:h-[80px]   ' src={MessageLogo} alt="Logo définissant les messages " />
              <h3 className='text-center mt-[0.2rem] text-[16px] ' >(+33) 7.67.33.69.79</h3>
              <p className='text-center text-[#7D8CA8] font-bold mt-[0.2rem] ' >Pour avoir un contact par téléphone</p>
            </figure>
          </article>
          <article>
            <figure className='md:mt-[4rem]' style={{ textAlign: '-webkit-center' }} >
              <img className=' w-[11rem] h-[11rem] lg:w-[80px] lg:h-[80px]  ' src={MailLogo} alt="Logo définissant les mails" />
              <h3 className='text-center mt-[0.2rem] text-[16px]' >dendenweb1@gmail.com</h3>
              <p className='text-center text-[#7D8CA8] font-bold mt-[0.2rem] ' >Pour toute question écrite</p>
            </figure>
          </article>
        </div>
      </section>

      </>
  )
}

export default Contact