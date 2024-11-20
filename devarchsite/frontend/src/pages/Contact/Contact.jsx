import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <form className="contact-form">
        <div className="form-title">
          <h3> FORMULAIRE DE CONTACT </h3>
        </div>
        <div className="form-inputs">
          <input type="text"  placeholder='Votre nom'/>
          <input type="text" placeholder='Votre prenom'/>
          <input type="email" placeholder='Votre email'/>
          <input type="tel" placeholder='Votre Numero de telephone'/>
          <input type="text" placeholder='Nom de votre entreprise'/>
          <textarea cols={30} rows={10} placeholder='Decrivez nous votre projet' />
        </div>
        <button>ENVOYEZ</button>
      </form>
      <span className='vertical-line'></span>
      <div className="contact-text">
        <h3> NOTRE LOCALISATION </h3>
        <img src="" alt="" />
        <p>58 rue Monceau, 75008 Paris</p>
        <p>Tel : +33(0)780720010</p>
        <p>Email : contact@devarch-paris.fr</p>

      </div>
      
    </div>
  )
}

export default Contact
