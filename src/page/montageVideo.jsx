import React from 'react'
import ServicesPages from '../components/servicesPages'
import Montage from "../asset/services-montage.png"

const montageVideo = () => {
  return (
    <>
      <ServicesPages 
        h1="Montage vidéo"
        h2="Vidéos animées atout marketing" 
        h4first="Faire appel à un motion designer ou un service de post-production pour créer une vidéo pour votre site internet est un investissement stratégique pour votre marketing."
        h4second="En effet, une vidéo animée ou montée est un moyen puissant pour attirer l'attention des visiteurs sur votre site internet et les inciter à en savoir plus sur votre entreprise ou votre produit."
        h4third="Les vidéos sont également un moyen efficace pour communiquer des informations complexes de manière claire et concise. En outre, les vidéos peuvent augmenter le taux de conversion sur votre site internet, car elles permettent aux utilisateurs de visualiser votre produit ou service en action, ce qui peut les inciter à acheter ou faire appel à vous. "
        h4fourth="Enfin, les vidéos peuvent également être utilisées pour améliorer votre référencement naturel sur les moteurs de recherche, car elles peuvent aider à augmenter le temps passé sur votre site internet par les utilisateurs."  
        illu={Montage} alt="Image qui illustre le texte concernant le service de montage vidéo " />
    </>
  )
}

export default montageVideo