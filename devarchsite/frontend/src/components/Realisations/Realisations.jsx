import React from 'react'
import './Realisations.css'
import { assets } from '../../assets/assets'

const Realisations = () => {
  return (
    <div className='realisation' id='realisation'>
        <h1> NOS REALISATIONS  </h1>
        <p>Dans notre portfolio, vous pouvez parcourir les derniers produits développés pour nos clients à des fins commerciales différentes.
         Notre équipe qualifiée de concepteurs d'interfaces et de développeurs de logiciels est toujours prête à créer quelque chose d'unique pour vous.</p>
        <div className="realisation-content">
            <div className="card-realisation">
                <a><img src={assets.devarch_ecolo_cleaner_system} alt="" /></a>
                <p> ECOLO CLEANER SYSTEM </p>
            </div>
            <div className="card-realisation">
                <a><img src={assets.devarch_bio_orthesy_france} alt="" /></a>
                <p> BIO ORTHESY FRANCE </p>
            </div>
            <div className="card-realisation">
                <a><img src={assets.devarch_foody_realisation} alt="" /></a>
                <p> FOODY APP </p>
            </div>
            <div className="card-realisation">
                <a><img src={assets.devarch_bio_orthesy_france} alt="" /></a>
                <p> BIO ORTHESY FRANCE </p>
            </div>
            <div className="card-realisation">
                <a><img src={assets.devarch_foody_realisation} alt="" /></a>
                <p> FOODY APP </p>
            </div>
        </div>   
    </div>
  )
}

export default Realisations
