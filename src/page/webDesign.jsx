import React from 'react'
import ServicesPages from '../components/servicesPages'
import WebDesign from "../asset/services-web-design.png"


const webDesign = () => {
  return (
    <>
      <ServicesPages 
        h1="Web design"
        h2="L'importance du design" 
        h4first="Avoir un design de qualité pour son site est crucial pour garantir une expérience utilisateur satisfaisante. En effet, l'UX (expérience utilisateur) et l'UI (interface utilisateur) jouent un rôle clé dans la façon dont les utilisateurs interagissent avec votre site. "
        h4second="Un design bien pensé et bien exécuté peut non seulement améliore l'expérience utilisateur, mais cela peut également aider à augmenter la confiance des utilisateurs en votre marque et à les inciter à effectuer des actions telles que l'achat ou la conversion."
        h4third="Il est important de se rappeler que le design n'est pas seulement esthétique, mais il est également fonctionnel et doit être pensé pour faciliter la navigation et la compréhension de l'information pour l'utilisateur." 
        illu={WebDesign} alt="Image qui illustre le texte concernant le service de web design " />
    </>
  )
}

export default webDesign