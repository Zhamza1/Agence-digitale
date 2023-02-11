import React from 'react'
import ServicesPages from '../components/servicesPages'
import MaintenanceSite from "../asset/services-maintenance-site.png"

const maintenanceSite = () => {
  return (
    <>
    <ServicesPages 
      h1="Maintenance de site "
      h2="Assurez la stabilité et la performance de votre présence en ligne" 
      h4first="Faire appel à un expert en maintenance de site internet est crucial pour assurer la stabilité, la sécurité et la performance de votre site.  "
      h4second="De nos jours, un site web est souvent la première impression que les clients ont de votre entreprise. Il est donc important de s'assurer que votre site est toujours opérationnel et fonctionne à la perfection. "
      h4third="La maintenance régulière de votre site peut aider à prévenir les erreurs techniques, les vulnérabilités de sécurité et les temps d'arrêt coûteux. En confiant la maintenance de votre site à un expert, vous pouvez vous concentrer sur votre activité principale tout en sachant que votre site est entre de bonnes mains. " 
      h4fourth="Faire appel à un expert en maintenance de site internet est un investissement rentable pour assurer la pérennité et la réussite de votre présence en ligne."
      illu={MaintenanceSite} alt="Image qui illustre le texte concernant le service de Maintenance de site" />
  </>
  )
}

export default maintenanceSite