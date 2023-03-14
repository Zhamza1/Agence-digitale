import React from 'react'
import EDT from "../asset/EDT.jpg"
import Shoppy from "../asset/Shoppy.jpg"
import Weexa from "../asset/Weexa.jpg"
import Lumieres from "../asset/lumieres.jpg"
import Loop from "../asset/Loop.jpg"
import Mcdo from "../asset/Mcdo.jpg"
import Brikabrak from "../asset/Brikabrak.jpg"
import VeuveCliquot from "../asset/Veuve-Cliquot.jpg"
import LoiDeFinances from "../asset/Loi-de-finances.jpg"
import TwoCans from "../asset/Two-cans.jpg"
import GraphicDesigner from "../asset/Graphic-designer.jpg"
import Vinyle from "../asset/Vinyle.jpg"



import RealisationsCard from '../components/realisationsCard'
import Header from '../components/header'
import Footer from '../components/footer'
import {Helmet} from 'react-helmet-async'



const Realisations = (services) => {

 /*  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  } */
  return (
      <>
      <Helmet>
          <title> Zhamza | Réalisations </title>
          <meta name='description' content='Mes récents travaux | Vous retrouverez ici les derniers travaux que j’ai pu réaliser '  />
          <link rel="canonical" href="/realisations" />
        </Helmet>
    
      <section>
      <Header/>
        <h1 className=' mt-[8rem] flex justify-center sm:w-[90%] sm:justify-start sm:ml-[5%] ' >Réalisations </h1>
         <div className='justify-center flex ' > <h3 className='flex justify-center text-center w-[105rem] sm:w-[90%] sm:text-left ' >Voici un aperçu des projets sur lesquels nous avons travaillé avec succès. Elle montre notre expertise et notre capacité à répondre aux besoins spécifiques de nos clients, en mettant en avant les projets les plus récents et les plus pertinents.</h3> </div> 
    
        <div className=' mx-[5%] flex justify-between !mt-[6.4rem]  sm:flex-col !mb-[10rem] flex-wrap desk:my-[0] desk:mx-[auto] desk:max-w-[1440px] '>
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] ' link="https://www.group-edt.fr/" alt="Image Site EDT" img={EDT} />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] sm:mt-[0rem] sm:mt-[0rem] ' link="https://weexa.com/fr/accueil/" alt="Image Site Weexa" img={Weexa}  />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] lg:mt-[2rem] sm:mt-[0rem] ' link="https://xn--lumiresdeparis-yjb.fr/" alt="Image Site Lumieres de paris" img={Lumieres} />
    
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="https://shoppy1.netlify.app/" alt="Image Site Shoppy" img={Shoppy} />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="https://www.youtube.com/watch?v=cCuqr_BOEEc&ab_channel=WEEXA" alt="Image motion design loi de finances" img={LoiDeFinances}  data-category="motion-design" />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="https://www.behance.net/gallery/160851993/Loop-Animation" alt="Image Motion design Loop animation" img={Loop}  />
        
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="https://www.behance.net/gallery/161172421/Projet-McDonalds" alt="Image graphic design Mcdo" img={Mcdo} />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="https://www.behance.net/gallery/162539439/VEUVE-CLICQUOT" alt="Image graphic design Veuve Cliquot " img={VeuveCliquot} />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] ' link="http://www.saricharaf.fr/identite-visuelle/" alt="Image graphic design graphic designer" img={GraphicDesigner} />
          
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem]  ' link="http://www.saricharaf.fr/identite-visuelle/#twocans" alt="Image design Two-cans" img={TwoCans}  />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem]'  link="http://www.saricharaf.fr/graphisme_02/#vinyle" alt="Image design Vinyle" img={Vinyle}  />
          <RealisationsCard style='w-[30%] lg:w-[45%]  sm:w-[100%] sm:mb-[3.6rem] mt-[2rem] sm:mt-[0rem] '  link="https://shoppy1.netlify.app/" alt="Image Site Shoppy" img={Brikabrak}  />
        </div>
    
      </section>
      <Footer />
      </>
  )
}

export default Realisations


/* 
   <div className='flex' >
          <button>All</button>
          <button>Site internet</button>
          <button>Graphic design</button>
          <button>Motion design</button>
        </div>
        style={{ textAlign: '-webkit-center' }}
) */



// <>
// <Helmet>
//     <title> Zhamza | Réalisations </title>
//     <meta name='description' content='Mes récents travaux | Vous retrouverez ici les derniers travaux que j’ai pu réaliser '  />
//     <link rel="canonical" href="/realisations" />
//   </Helmet>

//   <section>
//   <Header />
//   <h1 className="mt-[5rem] flex justify-center">Réalisations</h1>
//   <h4 className="flex justify-center text-center">
//     Voici un aperçu des projets sur lesquels nous avons travaillé avec
//     succès. Elle montre notre expertise et notre capacité à répondre aux
//     besoins spécifiques de nos clients, en mettant en avant les projets les
//     plus récents et les plus pertinents.
//   </h4>

//   <div className="flex">
//     <button onClick={() => handleCategorySelect("All")}>All</button>
//     <button onClick={() => handleCategorySelect("Site internet")}>
//       Site internet
//     </button>
//     <button onClick={() => handleCategorySelect("Graphic design")}>
//       Graphic design
//     </button>
//     <button onClick={() => handleCategorySelect("Motion design")}>
//       Motion design
//     </button>
//   </div>
//   <div className="flex justify-around mt-[6.4rem] mx-[1rem] sm:flex-col flex-wrap mb-[13rem]">
//     {/* {services
//       .filter((service) =>
//         selectedCategory === "All"
//           ? true
//           : service["data-category"] === selectedCategory
//       )
//       .map((service) => (
//         <RealisationsCard
//           key={service.id}
//           link={service.link}
//           alt={service.alt}
//           img={service.img}
//           data-category={service["data-category"]}
//         />
//       ))} */}
//   </div>
// </section>
// <Footer />
// </>