import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const mentionLegales = () => {
  return (
    <>
        <Header/>
        <section className=' mx-[5%] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] desk:px-[0rem]   ' >
            <div className='mt-[8rem]' >
                <h2 className=' text-secondary ' >MENTIONS LÉGALES</h2>
                <p className='mt-[1rem] ' >Le Site Eskimoz.fr est édité par la société Groupe Ydyle, S.A.R.L au capital de 26.000 euros. <br />
                    Siège social : 19, rue du dôme – 92100 Boulogne Billancourt. <br />
                    RCS de Paris sous le numéro 528 338 494. <br />
                    Numéros de TVA : FR89 – 528338494 <br />
                    Directeur de publication : Andrea Bensaid. <br />
                    Adresse de courrier électronique : Andrea.bensaid7@gmail.com <br />
                    Le site à fait l’objet d’un enregistrement à la CNIL sous le numéro 1469537 <br />
                </p>
            </div>

            <div className='pb-[8rem] mt-[2rem] ' >
                <h2 className=' text-secondary ' >RÉSPONSABILITÉ</h2>
                <p className='mt-[1rem]' >Le propriétaire du site web assure la responsabilité des informations fournies et assure au mieux la mise à jour et l’exactitude de celles-ci. Il se réserve le droit de modifier le contenu à tout moment et sans préavis.</p>

                <p className='mt-[1rem]' >    Toutes les marques citées dans ce site appartiennent à leur firmes respectives. Tous les produis, logos et images cités dans ce site appartiennent à leur marque respective. </p>

                <p className='mt-[1rem]' >    Traitement des données personnelles <br />
                    Les informations provenant de l’enregistrement de l’utilisateur sur le site lors d’une commande seront gardées confidentiellement et ne seront en aucun cas divulguées à un tiers.
                </p>    

                <p className='mt-[1rem]' >   Eskimoz est partenaire exclusif de l’agence Ydyle depuis 2016. </p>
                
            </div>
        </section>
        <Footer  css=" fixed bottom-0 " />
    </>
  )
}

export default mentionLegales