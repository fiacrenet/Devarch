import React from 'react'
import './Avis.css'
import { assets } from '../../assets/assets'

const Avis = () => {
  return (
    <div className='avis' id='avis'>
        <h2> AVIS DE NOS CLIENTS  </h2>
        <div className="slider">
            <div className="slides-content">
                <div className="slide-avis">
                    <img src={assets.devarch_avis_hanane} alt="" />
                    <img src={assets.devarch_avis_star} alt='' />
                    <p> Grâce à Mya Digital Paris, notre site web a connu un véritable coup de boost ! 
                        Le design est moderne et épuré, et les fonctionnalités sont exactement ce dont nous avions besoin. 
                        L’équipe a été attentive à nos besoins et a toujours su répondre rapidement à nos questions. 
                        Nous sommes ravis des résultats ! </p>
                        <hr />
                        <h5>Hanane DAHOUMANE</h5>
                        <h5>Co-fondatrice ECS</h5>
                </div>
                <div className="slide-avis">
                    <img src={assets.devarch_avis_jeanmarie} alt="" />
                    <img src={assets.devarch_avis_star} alt='' />
                    <p> Grâce à Mya Digital Paris, notre site web a connu un véritable coup de boost ! 
                        Le design est moderne et épuré, et les fonctionnalités sont exactement ce dont nous avions besoin. 
                        L’équipe a été attentive à nos besoins et a toujours su répondre rapidement à nos questions. 
                        Nous sommes ravis des résultats ! </p>
                        <hr />
                        <h5>Jean-Marie DEPAILLAT</h5>
                        <h5>CEO Bio Orthesy France</h5>
                </div>
                <div className="slide-avis">
                    <img src={assets.devarch_avis_jeanmarie} alt="" />
                    <img src={assets.devarch_avis_star} alt='' />
                    <p> Grâce à Mya Digital Paris, notre site web a connu un véritable coup de boost ! 
                        Le design est moderne et épuré, et les fonctionnalités sont exactement ce dont nous avions besoin. 
                        L’équipe a été attentive à nos besoins et a toujours su répondre rapidement à nos questions. 
                        Nous sommes ravis des résultats ! </p>
                        <hr />
                        <h5>Hanane DAHOUMANE</h5>
                        <h5>Co-fondatrice ECS</h5>
                </div>
                <div className="slide-avis">
                    <img src={assets.devarch_avis_hanane} alt="" />
                    <img src={assets.devarch_avis_star} alt='' />
                    <p> Grâce à Mya Digital Paris, notre site web a connu un véritable coup de boost ! 
                        Le design est moderne et épuré, et les fonctionnalités sont exactement ce dont nous avions besoin. 
                        L’équipe a été attentive à nos besoins et a toujours su répondre rapidement à nos questions. 
                        Nous sommes ravis des résultats ! </p>
                        <hr />
                        <h5>Hanane DAHOUMANE</h5>
                        <h5>Co-fondatrice ECS</h5>
                </div>
                <div className="slide-avis">
                    <img src={assets.devarch_avis_jeanmarie} alt="" />
                    <img src={assets.devarch_avis_star} alt='' />
                    <p> Grâce à Mya Digital Paris, notre site web a connu un véritable coup de boost ! 
                        Le design est moderne et épuré, et les fonctionnalités sont exactement ce dont nous avions besoin. 
                        L’équipe a été attentive à nos besoins et a toujours su répondre rapidement à nos questions. 
                        Nous sommes ravis des résultats ! </p>
                        <hr />
                        <h5>Hanane DAHOUMANE</h5>
                        <h5>Co-fondatrice ECS</h5>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Avis
