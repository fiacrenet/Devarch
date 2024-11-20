import React from 'react'
import './Services.css'
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'
import Tab from '../../components/Tab/Tab'

const Services = () => {
  return (
    <div class='service-container'>
      <div className="service-animation">
         <img src={assets.devarch_animation} alt="" />
      </div>
      <div className="service-details">
        <Tab />
        
      </div>
      

      
    </div>
  )
}

export default Services
