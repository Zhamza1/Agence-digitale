import React from 'react'
import ServicesPages from '../components/servicesPages'
import CreationLogo from "../asset/services-creation-logo.png"

const creationLogo = () => {
  return (
    <>
      <ServicesPages 
        h1="Création de logo"
        h2="Le logo un symbole de votre marque" 
        h4first="Avoir un logo de qualité et personnel pour votre marque ou votre activité est essentiel pour vous démarquer de vos concurrents. Un logo bien conçu est la première chose que les clients remarquent lorsqu'ils découvrent votre entreprise. "
        h4second="Il est l'emblème de votre marque et il doit refléter ce que vous représentez. Un logo unique et bien conçu peut aider à créer une image de marque forte et mémorable, ce qui est important pour attirer et retenir les clients."
        h4third="Il est également important que votre logo soit facilement reconnaissable et utilisable sur différents supports de communication, comme votre site web, vos cartes de visite, vos réseaux sociaux, etc. Votre logo est un véritable atout pour votre marque et c'est un investissement sur le long terme." 
        illu={CreationLogo} alt="Image qui illustre le texte concernant le service de Creation Logo " />
    </>
  )
}

export default creationLogo

