import React from 'react'
import './DevisForm.css'
import { assets } from '../../assets/assets'

function DevisForm({setShowDevis}) {
  return (
    <div className='devis-form'>
      <form className='devis-form-container'>
        <div className='devis-form-title'>
            <h2>RECEVEZ VOTRE DEVIS</h2>
            <img onClick={()=>setShowDevis(false)} src={assets.cancel} alt="" />
        </div>
        <div className="devis-from-inputs">
            <label>
            Choisissez le service voulu :
                <select >
                    <option value="Siteweb">Création de site internet</option>
                    <option value="App">Conception d'application web et mobile </option>
                    <option value="Maintenance">Maintenance de site internet</option>
                    <option value="Referencement">Référencement de site internet</option>
                    <option value="Community">Community Management</option>
                    <option value="Community">Conception de logo </option>
                </select>
            </label>
            <label>Date estimative du début de projet: <input id='dateinput' type="date" placeholder='date echeance'/></label>
            <input type="text"  placeholder='Votre nom'/>
            <input type="text" placeholder='Votre prenom'/>
            <input type="email" placeholder='Votre email'/>
            <input type="tel" placeholder='Votre Numero de telephone'/>
            <input type="text" placeholder='Nom de votre entreprise'/>
            <textarea cols={30} rows={10} placeholder='Decrivez nous votre projet' />
        </div>
        <button>ENVOYER</button>
      </form>
    </div>
  )
}

export default DevisForm
