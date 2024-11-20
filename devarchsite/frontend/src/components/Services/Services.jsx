import React from 'react'
import './Services.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Services = () => {

  return (
    <div className='services' id='services'>
        <h1> NOS SOLUTIONS </h1>
        <div className="services-content">
            <div className="service-data-left">
                <div className="service-card">
                    <div className="service-card-title">
                        <img src={assets.devarch_service_siteweb} alt="service de conception de site web de l'agence Mya Digital Paris" />
                        <Link to ='/Services'><h3> CONCEPTION DE SOLUTIONS WEB </h3> <hr /></Link>
                    </div>  
                    <div className="service-description">
                        <p>A Mya Digital Paris, votre agence web, nous concevons et déployons 
                        pour vous des sites et applications web personnalisées qui repondent à vos besoin quotidiens.</p>
                    </div>

                </div>
                <div className="service-card">
                    <div className="service-card-title">
                        <img src={assets.devarch_service_maintenance} alt="service de conception de site web de agence devarch" />
                        <Link to ='/Services'><h3> MAINTENANCE DE SOLUTIONS WEB </h3> <hr /></Link>
                    </div>  
                    <div className="service-description">
                    <p>Pas satisfait du rendement et/ou de la performancevotre de votre site ou application web existante ?
                        Nous vous offrons chez DevAch Paris une maintenance quotidienne et un audit complet de votre solution web pour y apporter
                        des améliorations.</p>
                    </div>

                </div>
                <div className="service-card">
                    <div className="service-card-title">
                        <img src={assets.devarch_service_seo} alt="service de conception de site web de agence devarch" />
                        <Link to ='/Services'><h3> REFERENCEMENT SITE WEB </h3> <hr /></Link>
                    </div>  
                    <div className="service-description">
                    <p>Chez Mya Digital Paris, nous ne créons pas que des solutions web ; nouys mettons aussi en place des référencements <b>SEO</b> et <b>SEA</b> pour optimiser
                        la visibilté de votre activité sur le web et obtenir des résultats concrets, mesurables et durables. 
                    </p>
                    </div>

                </div>
                <div className="service-card">
                    <div className="service-card-title">
                        <img src={assets.devarch_service_digital} alt="service de conception de site web de agence devarch" />
                        <Link to ='/Services'><h3> GESTION DE STRATEGIES DIGITALES </h3> <hr /></Link>
                    </div>  
                    <div className="service-description">
                    <p>Pour booter votre la productivité de votre entreprise, une bonne stratégie digitale est la clef de réussite. 
                        A DevArch Paris les architectes de notre agence web , mettent tout en oeuvre pour la mise en place d'une stratégie adaptée à vos besoins.
                    </p>
                    </div>

                </div>
            </div>
            <div className="service-data-right">
                <div className="technology-card">
                    <div className="technology-card-title">
                        <h3> LES TECHONOLGIES QUE NOUS UTILISONS <hr /></h3> 
                    </div> 
                    <div className="technology-card-description">
                        <p>Chez Mya Digital Paris pour donner vie à votre projet de transformation digital,
                            nous utilisons les technologies les plus modernes, afin de garantir l'évolutivité
                            de vos solutions. </p>
                    </div>
                    <div className="technology-card-img">
                        <img src={assets.devarch_technos} alt="" />
                    </div>
                    <Link to ='/Services' ><button>VOIR TOUTES NOS SOLUTIONS</button></Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
