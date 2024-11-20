import React from 'react'
import './Accueil.css'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Realisations from '../../components/Realisations/Realisations'
import Avis from '../../components/Avis/Avis'
import Slider from '../../components/slider/Slider'
import Footer from '../../components/Footer/Footer'


const Accueil = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Realisations />
      <Avis />
    </div>
      
  )
}

export default Accueil
