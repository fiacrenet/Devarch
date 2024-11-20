import React from 'react'
import './Header.css'

const Header = ({setShowDevis}) => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>MYA DIGITAL</h2> 
            <h3>Votre agence web et SEO</h3>  
            <p>Chez MYA DIGITAL nous vous accompagnons dans votre processus de digitalisation. 
                Maximisez votre impact digital avec nos solutions web innovantes et évolutives. 
                Génèrez des résultats concrets grace à nos siteweb , applications mobiles , 
                applications web et boutiques en ligne.</p>
            <button onClick={()=>setShowDevis(true)}>Demander un devis</button>
        </div>     
    </div>
  );
}

export default Header
