import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';

const Navbar = ({setShowDevis}) => {

    const [menu, setMenu] = useState('accueil');

  return (
    <div className='navbar'>

        <img src={assets.mya_digital_logo} alt='logo de agence web MYA DIGITAL' className='logo' />
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu('accueil')} className={menu==='accueil'?'active':''}>Accueil</Link>
            <a href='#about-us' onClick={()=>setMenu('qui-sommes-nous')} className={menu==='qui-sommes-nous'?'active':''}>Qui sommes nous?</a>
            <a href='#services'onClick={()=>setMenu('services')} className={menu==='services'?'active':''}>Services</a>
            <a href='#avis'onClick={()=>setMenu('temoignages')} className={menu==='temoignages'?'active':''}>Temoignages</a>
            <Link to='/contact'onClick={()=>setMenu('contact')} className={menu==='contact'?'active':''}>Contact</Link>
        </ul>

        <div className="navbar-right">
            <button onClick={()=>setShowDevis(true)} className='btn-devis'> Demandez un devis </button>
            <div className="social-media-icon">
                <img src={assets.facebook} alt='page facebook de agance web devarch' className='social-media-facebook-icon' />
                <img src={assets.instagram} alt='page instagram de agance web devarch' className='social-media-instagram-icon' />
                <img src={assets.linkedin} alt="page linkedin de agence web devarch" className='social-media-linkedin-icon' />
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
