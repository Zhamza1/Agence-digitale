import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const mentionLegales = () => {
  return (
    <>
        <Header/>
        <section className=' mx-[5%] desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] desk:px-[0rem]   ' >
            <div className='mt-[8rem]' >
                <h2 className=' text-secondary '>MENTIONS LÉGALES</h2>
                <p className='mt-[1rem] ' >Le Site Zhamza.fr est édité par la société Zhamza<br />
                    Siège social : 210 avenue du 8 mai 1945 – 93150 Le Blanc Mesnil. <br />
                    N° Siret : 94848303700016 <br />
                    Directeur de publication : Hamza Mahmood. <br />
                    Adresse de courrier électronique : hamza.mahmood@outlook.fr <br />
                    Le site à fait l’objet d’un enregistrement à la CNIL sous le numéro 1469537 <br />
                </p>
            </div>

            <div className='pb-[16rem] mt-[2rem] ' >
                <h2 className=' text-secondary ' >RÉSPONSABILITÉ</h2>
                <p className='mt-[1rem]' >Le propriétaire du site web assure la responsabilité des informations fournies et assure au mieux la mise à jour et l’exactitude de celles-ci. Il se réserve le droit de modifier le contenu à tout moment et sans préavis.</p>

                <p className='mt-[1rem]' >    Toutes les marques citées dans ce site appartiennent à leur firmes respectives. Tous les produis, logos et images cités dans ce site appartiennent à leur marque respective. </p>

                <p className='mt-[1rem]' >    Traitement des données personnelles <br />
                    Les informations provenant de l’enregistrement de l’utilisateur sur le site lors d’une commande seront gardées confidentiellement et ne seront en aucun cas divulguées à un tiers.
                </p>    
            </div>
        </section>
        <Footer  css=" fixed bottom-0 xl:relative " />
    </>
  )
}

export default mentionLegales