import React from 'react'
import ServicesPages from '../components/servicesPages'
import Photo from "../asset/services-photo.png"

const photographie = () => {
  return (
    <>
      <ServicesPages 
        h1="Photographie"
        h2="Visuels professionnels, clé de la présentation de votre entreprise" 
        h4first="Il est important de disposer de visuels de qualité pour présenter votre entreprise ou votre marque sur votre site internet.Les images et les vidéos jouent un rôle clé dans la première impression que vos clients auront de vous. "
        h4second="En faisant appel à un photographe professionnel qui propose des services de photographie et de tournage vidéo, vous pourrez disposer de visuels de qualité qui mettront en valeur votre entreprise.  "
        h4third="Les photos de qualité sont essentielles pour une présentation professionnelle, tandis que les vidéos peuvent ajouter une dimension dynamique et interactive à votre site internet.Cela vous permettra de vous démarquer de vos concurrents et de donner une meilleure expérience utilisateur à vos clients." 
        illu={Photo} alt="Image qui illustre le texte concernant le service de photographie " />
    </>
  )
}

export default photographie


