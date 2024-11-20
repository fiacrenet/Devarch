import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-container">
            <div className="footer-logo">
                <div className="footer-logo-card">
                    <img src={assets.mya_digital_footer_logo} alt="logo de l'agence web devarch paris" />
                </div> 
                <p> L'agence de developpement des solutions Mya Digital Paris dispose d'une gamme d'offres pour realiser 
                    votre rêve de trasformation digital. Avec notre agence votre business sera booster de maniere optimal </p>
                <div className="social-media-icon">
                    <img src={assets.facebook} alt='page facebook de agance web devarch' className='social-media-facebook-icon' />
                    <img src={assets.instagram} alt='page instagram de agance web devarch' className='social-media-instagram-icon' />
                    <img src={assets.linkedin} alt="page linkedin de agence web devarch" className='social-media-linkedin-icon' />
                </div>
            </div>
            <div className="footer-contact">
                <div className='footer-adresse-siege'>
                  <img src={assets.mya_adress_footer} alt="Adresse physique du siege de l'agence web devarch paris" />
                  <p>58 rue Monceau, 75008 Paris</p>
                </div>

                <div className='footer-contact-tel'>
                  <img src={assets.mya_tel_footer} alt="Contact telephonique de l'agence web devarch paris" />
                  <p>Tel : +33(0)780720010</p>
                </div>

                <div className='footer-contact-email'>
                  <img src={assets.mya_contact_email} alt="Contact email de l'agence web devarch paris" />
                  <p>contact@devarch-paris.fr </p>
                </div>

            </div>
            <div className="footer-liens">
              <h3>Nos solutions</h3>
              <a href='#'> <p>Création de site internet</p> </a>
              <a href='#'> <p>Référencement de site internet </p></a>
              <a href='#'> <p>Marketing digital</p> </a>
              <a href='#'> <p>Maintenance de site internet </p></a>
              <a href='#'> <p>hébergement de site internet </p></a>
              <a href='#'> <p>Contentu réseaux sociaux</p> </a>
              <a href='#'> <p>Conception de logo </p> </a>
          </div>
        </div>
        <div className="section-confidential">
              <a href=""><p id='politique'> Politique de confidentialité </p> </a>
              <a href=""><p id='mention'> Mention légale </p></a>
              <p id='copyright'>DEVARCH PARIS – Agence Web © 2024 – Tous droits réservés</p>
        </div>
     </div>
  )
}

export default Footer
