import React from 'react'
import ServicesPages from '../components/servicesPages'
import SiteInternet from "../asset/services-site-internet.png"

const siteInternet = (h2,h4,illu,alt) => {
  return (
    <> 
      <ServicesPages h2="Site internet un essentiel" h4="Avoir <br /> <br /> un site internet est devenu essentiel pour les entreprises de toutes tailles et de tous secteurs. En effet, un site internet permet de donner une présence en ligne à votre entreprise, ce qui est crucial pour vous connecter avec vos clients potentiels et actuels.Il permet également de montrer votre expertise et vos produits ou services de manière professionnelle et efficace. De plus, il vous donne la possibilité de collecter des données sur vos visiteurs, ce qui peut vous aider à cibler vos efforts de marketing et à améliorer l'expérience utilisateur. Il est donc important d'avoir un site pour renforcer votre image de marque, augmenter votre visibilité et améliorer votre capacité à générer des leads et des ventes. En somme, c’est un outil incontournable pour toute entreprise qui souhaite prospérer sur le marché actuel."  
      illu={SiteInternet} alt="Image qui illustre le texte concernant les sites internet" />
    </> 
  )
}

export default siteInternet