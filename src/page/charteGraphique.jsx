import React from 'react'
import ServicesPages from '../components/servicesPages'
import CharteGraphique from "../asset/services-charte-graphique.png"

const charteGraphique = () => {
  return (
    <>
      <ServicesPages 
        h1="Charte graphique"
        h2="Charte Graphique clé pour une marque Distincte" 
        h4first="Avoir une charte graphique pour votre marque ou votre activité est crucial pour vous démarquer de vos concurrents et pour créer une image de marque forte et mémorable."
        h4second="Elle permet de coller avec votre envie, votre secteur d'activité et de faire sens avec l'envie de vos clients. Cela inclut des éléments tels que les couleurs, les polices, les images et les icônes qui sont utilisés pour représenter votre entreprise."
        h4third="Des exemples de chartes graphiques marquantes incluent la charte graphique de Coca-Cola qui utilise des couleurs rouge et blanche pour représenter la marque et une police spécifique pour le nom de la marque. La charte graphique de Nike utilise un swoosh comme icône de marque et un style minimaliste pour leur design. " 
        h4fourth="La charte graphique de Apple est également très marquante, en utilisant des lignes épurées, des couleurs neutres et une police spécifique pour leur nom de marque. Ces chartes graphiques sont immédiatement reconnaissables et aident à renforcer l'image de marque de ces entreprises."
        illu={CharteGraphique} alt="Image qui illustre le texte concernant le service de Charte Graphique " />
    </>
  )
}

export default charteGraphique