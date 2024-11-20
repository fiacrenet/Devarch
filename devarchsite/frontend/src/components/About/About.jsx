import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = ({setShowDevis}) => {
  return (
    <div className='about-us' id='about-us'>
        <h1> QUI SOMMES NOUS ? </h1>
        <div className="about-us-content">
            <div className="about-us-text-box">
              <p>
                Dans un contexte de digitalisation, les solutions web telle que les site web , les applications web et mobile sont indispensables
                pour le développement de votre entreprise. Votre activité mérite d’avoir un site internet représentatif de votre image sur le web.
                C’est très souvent le premier contact avec un potentiel futur partenaire ou client. C'est pour cela qu'une
                mise en valeur de votre entreprise sur le web vous permettra d’augmenter la visibilité de cette dernière et ainsi attirer de nouveau clients.
                Garder les clients acquises par l'attrativité de notre site internet requière la mise en place d'applications web pour offrir des services adaptés à
                leurs besoins. Ainsi facilité la gestion des clients , leurs besoins quotidiens, l'interactions avec les clients et votre entreprise est nécéssaire.
                C'est là qu'intervient <b>MYA DIGITAL PARIS </b> qui est une agence spécialisée dans les solutions Internet. fort de notre expérience , nous proposons 
                des services de digitalisation de votre entreprise de A à Z. N'hésitez pas à nous confier la création du site Internet de vos rêves. 
                Nous sommes disposé à vous accompagner dans un projet de digitalisation qui répond à vos besoins.
              </p>
            </div>

            <div className="about-us-img">
              <h3>POURQUOI CHOISIR MYA DIGITAL PARIS POUR VOS POUR VOTRE PROJET DE DIGITALISATION?  </h3>  
              <p id='text-left'>N'hésitez pas à nous confier la création du site Internet de vos rêves. 
                Nous sommes prêts à vous aider à développer un site Internet qui répond à vos besoins.</p>
              <button onClick={()=>setShowDevis(true)} >Demander un devis</button>
              <div className='contact-about'>
                <div className='contact-tel'>
                  <img src={assets.mya_contact_tel} alt="" />
                  <p>0780720010</p>
                </div>
                <div className='adresse-siege'>
                  <img src={assets.mya_adresse_siege} alt="" />
                  <p>58 rue Monceau, 75008 Paris</p>
                </div>
              </div> 
            </div>
            
        </div>
      
    </div>
  )
}

export default About
