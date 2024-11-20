import React from 'react'
import './Tab.css'
import { useState } from 'react'

function Tab() {
    
    const [selectedTab, setSelectedTab] = useState(1)

    const selectTab = (index) => {
        setSelectedTab(index)
    }

    return (
        <div className='container'>
            <div className="tab-container">
                <div className={selectedTab ===1? 'tabs active-tabs': 'tabs'}
                onClick={()=> selectTab(1)}
                > SITE INTERNET </div>
                <div className={selectedTab ===2? 'tabs active-tabs': 'tabs'}
                onClick={()=> selectTab(2)} > APPLICATION WEB</div>
                <div className={selectedTab ===3? 'tabs active-tabs': 'tabs'}
                onClick={()=> selectTab(3)}>REFERENCEMENT SEO</div>
                <div className={selectedTab ===4? 'tabs active-tabs': 'tabs'}
                onClick={()=> selectTab(4)}>REFERENCEMENT SEA</div>
                <div className={selectedTab ===5? 'tabs active-tabs': 'tabs'}
                onClick={()=> selectTab(5)}>MAINTENANCE</div>
            </div>
            <div className={selectedTab === 1? 'content activeContent':'content'}>
                <h3> Création de site internet</h3>
                <hr />
                <div className="content-detail">
                    <p>Votre activité mérite d’avoir un site internet représentatif de votre image sur le web ! <br />
                    Un site internet est devenu incontournable pour le bon développement de l'activité d'une entreprise. 
                    C’est très souvent le premier contact avec un potentiel futur partenaire ou client. 
                    C'est pour cela qu'une mise en valeur de votre entreprise sur le web vous permettra d’augmenter la visibilité 
                    de cette dernière et ainsi attirer de nouveau clients. <br /> Pour réussir ce paris , il vous faudra des architectes compétents
                    et  expérimentés des solutions web. C'est là qu'intervient <b>DevArch Paris</b> qui est une agence spécialisée dans les solutions Internet. 
                    Ainsi nous proposons pour marquer un vos prospects dès le premier contact : <br /> 
                    <br /> 
                    <ul>
                        <li>La creation de vos sites web vitrine </li>
                        <li>La création de vos landing pages </li>
                        <li>La création de vos blogs </li>
                        <li>La création de vos sites professionnels</li>
                    </ul>
                     <br />
                    Nous disposons d'une gamme de template de site web vitrine pré-designée par notre équipe d'experts pour mettre en valeur votre activité sur 
                    le web. Nous concevons aussi pour vous des sur mesure afin de répondre à un besoin précis. Si vous avez une idée laissez nous la digitaliser 
                    pour vous.<br />
                    Notre travail au sein de l'équipe d'expertsde DevArch Paris est caractérisé par :
                     <br />
                     <br />
                     <ul>
                        <li> Un design soigné </li>
                        <li> Une accessibilité responsive (PC ,Tablette et mobile) </li>
                        <li> Une ergonomie pensée et réfléchie et responsive </li>
                        <li> Des informations claires et concises  </li>
                        <li> Un respect scrupuleux des normes RGPD</li>
                    </ul>
                    <br />
                    Nous concevons ces sites web avec les technologies les plus modernes et qui facilitent une optimisation de la performance globale de ces derniers.
                    </p>


                    <p>
                        Si les sites internet permettent de mettre en valeur les activités de votre entreprise, il n'en demeurre des moindres pour les sites de commerce
                        électronique ou e-commerce. Ces derniers jouent un double rôle dans la gestion de votre activité au sein de votre entreprise. La mise en valeur
                        de produits en ligne, le branding, la gestion commerciale en ligne. Ainsi avec nos experts et architectes du web, <b> DevArch Paris </b> l'agence web conçoit et deploie
                        des site d'e-commerces sur mesure et adaptés à vos besoins pour donner vie à vos idées. Nous mettons aussi en place des boutiques Shopify, Prestashop et WooCommerce selon votre
                        préférences pour vous permettre de gérer votre commerce en ligne et générer des ventes un peu partout dans le monde. <br />
                        Avec une approche d'amélioration et de déploiment continue , les experts de notre agence web à Paris mettent en place une methode DevOps 
                        afin de vous garantir une maintenance et une mise à jour rapide.
                        <br />
                        Vous avez une boutique physique et vous souhaitez développer une version digitale de celle-ci ? notre agence web est disponible pour vous
                        accompagner dans votre projet avec les technologies suivantes  : <br />
                        <br />
                        <ul>
                            <li> Prestashop </li>
                            <li> Shopify </li>
                            <li> Wordpress ( WooCommerce ) </li>
                            <li> Développment web sur mesure  avec python / django et Reactjs</li>
                        </ul>
                        <br />
                        Vous êtes TPE, PME ou plus grande structure, vous souhaitez un site plus poussé, avec des fonctionnalités plus avancées, 
                        alors nous établissons ensemble un cahier des charges qui nous servira de base pour la réalisation. Nous construisons ainsi 
                        votre site internet professionnel, d'e-commerce etc selon vos besoins.
                    </p>
                </div>
            </div>
            <div className={selectedTab === 2? 'content activeContent':'content'}>
                <h3> Créations d'applications web et mobile</h3>
                <hr />
                <div className="content-detail">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                        facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                        facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                        facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                        facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
                </div>
            </div>
            <div className={selectedTab === 3? 'content activeContent':'content'}>
                <h3> Référencements Naturels</h3>
                <hr />
                <h4>Augmentez votre visibilité et votre Trafic organique avec  notre DevArch Paris votre agence web à Paris </h4>
                <div className="content-detail">
                    <p>Dans un environnement numérique de plus en plus compétitif, la visibilité en ligne n'est plus une option, mais une nécessité. 
                    Chez DevArch Paris, votre agence web à Paris, nous mettons notre savoir-faire en SEO au service de votre succès digital. <br /> 
                    Notre objectif : vous positionner en tête des résultats de recherche Google grâce à une stratégie de référencement naturel (SEO) 
                    adaptée aux spécificités de votre marché. Forts de notre expertise, nous proposons une approche sur mesure qui allie techniques 
                    de pointe et pratiques éthiques, pour des résultats durables et un trafic qualifié. <br />
                    <b>Pourquoi choisir DevArch Paris, agence web à Paris, pour  optimiser votre visibilité ?</b> <br />
                    En tant qu’agence web à Paris spécialisée en SEO, nous savons que chaque site et chaque entreprise a des besoins uniques. 
                    C’est pourquoi nous créons des stratégies de référencement personnalisées et adaptées à votre secteur d’activité. <br />
                    En confiant la visibilité de votre site à DevArch Paris, vous bénéficiez de :<br />
                       <br />
                        <ul>
                            <li> Une analyse de marché personnalisée : Notre équipe étudie votre secteur pour identifier les opportunités de 
                                croissance spécifiques et les mots-clés à fort potentiel, afin d’optimiser le trafic et l'engagement.
                            </li>
                            <li> Une optimisation technique avancée : Nous veillons à ce que chaque page de votre site soit parfaitement optimisée 
                                pour les moteurs de recherche tout en assurant une expérience utilisateur fluide et agréable.
                            </li>
                            <li> Un contenu SEO ciblé : à DevArch PAris, nous comprenons l'importance d’un contenu pertinent et de qualité. 
                                Nos rédacteurs et experts en SEO développent des contenus qui captivent et retiennent les visiteurs, tout en améliorant votre 
                                classement dans les résultats de recherche.
                            </li>
                        </ul>
                        <br />
                        Nos clients constatent des améliorations tangibles dans leur positionnement et bénéficient d’une croissance organique durable, 
                        propulsant leur visibilité et leur notoriété en ligne.
                        <br />
                        <b>Une stratégie SEO résiliente aux mises à jour de Google</b> <br />
                        Chez DevArch Paris, votre agence web à Paris, nous savons que les mises à jour des algorithmes de Google (telles que Panda et Penguin) 
                        peuvent bouleverser le classement des sites. C’est pourquoi nous adoptons une stratégie SEO respectueuse des règles de Google,
                        pour une optimisation à l’épreuve des changements d’algorithmes. Notre approche se concentre sur un référencement propre et éthique, en veillant à : <br />
                        <br />
                        <ul>
                            <li>Optimiser le profil de backlinks de votre site, avec des liens de qualité qui renforcent votre autorité.</li>
                            <li>Éviter les pratiques à risque qui pourraient entraîner des pénalités sur Google</li>
                            <li>Corriger les pénalités existantes, qu’elles soient manuelles ou algorithmiques, pour rétablir le potentiel de visibilité de votre site.</li>
                        </ul>
                        <br />
                        Ainsi, nous assurons un SEO robuste, capable de s’adapter aux évolutions des algorithmes de Google tout en maximisant la durabilité de vos résultats.
                        <b>Une optimisation technique et structurelle complète</b> <br />
                        En tant qu’agence web à Paris , DevArch Paris s’assure que les fondations de votre site sont solides et optimisées. Cela inclut : <br />
                        <br />
                        <ul>
                            <li> <b>L’optimisation de la vitesse de chargement :</b> Nous améliorons le temps de chargement des pages, critère essentiel pour le SEO et l’expérience utilisateur.</li>
                            <li> <b>La structuration des pages et des balises SEO :</b> Grâce à une structure claire et intuitive, votre site est plus facilement parcouru par les moteurs de 
                                recherche et plus agréable à utiliser pour les visiteurs.</li>
                            <li> <b>La mise en place des meilleures pratiques SEO on-page :</b> Chaque élément est soigneusement configuré, des balises H1 aux balises ALT, pour maximiser la pertinence SEO.</li>
                        </ul>
                        <br />
                        Ces ajustements techniques garantissent que votre site est optimisé pour les moteurs de recherche et qu'il offre une expérience optimale à chaque visiteur.

                    </p>

                    <p> <b>Stratégie de contenu : Attirer et fidéliser une audience qualifiée</b> <br />
                    L’optimisation SEO ne s’arrête pas aux aspects techniques ; elle nécessite également un contenu captivant. En tant qu’agence web , nous comprenons 
                    l'importance de créer du contenu qui résonne avec votre audience et la fidélise. DevArch Paris met en œuvre une stratégie de contenu axée sur : <br />
                        <br />
                        <ul>
                            <li>La création de contenus informatifs et engageants : Nous produisons des articles, des guides et des études de cas qui 
                                répondent aux attentes et aux besoins de vos clients.
                            </li>
                            <li>L’optimisation des mots-clés et de l’intention de recherche : En utilisant des mots-clés bien ciblés et en comprenant 
                                l'intention derrière les recherches des utilisateurs, nous faisons en sorte que votre contenu se distingue.
                            </li>
                            <li>Un engagement renforcé : Avec un contenu de qualité, nous augmentons le temps passé sur votre site et réduisons le taux 
                                de rebond, renforçant ainsi l’efficacité de votre SEO.
                            </li>
                        </ul>
                        <br />
                        Nos stratégies de contenu permettent à votre site de se démarquer et de captiver l’audience, consolidant ainsi votre présence en ligne. <br />
                        Pour conclure , nos Architectes de l'agence web DevArch Paris mettent tout en oeuvre pour votre visibilité sur Google à travers les technique suivantes : <br />
                        <br />
                        <ul>
                            <li>Une stratégie SEO résiliente aux mises à jour de Google</li>
                            <li>Une optimisation technique et structurelle complète</li>
                            <li> Stratégie de contenu : Attirer et fidéliser une audience qualifiée </li>
                            <li> Suivi et adaptation continue pour des résultats durables</li>
                            <li> Audit SEO : La base de votre stratégie de référencement </li>
                            <li> Recherche de mots-clés pertinents : Une stratégie ciblée pour un trafic qualifié </li>
                            <li> Optimisation On-Page : La puissance du SEO technique et du contenu </li>
                            <li> Optimisation Off-Page : Renforcer votre notoriété et crédibilité en ligne </li>
                            <li> Optimisation Off-Page : Renforcer votre notoriété et crédibilité en ligne </li>
                            <li>Suivi et analyse : Des résultats mesurables pour un retour sur investissement optimal</li>
                        </ul>
                        <br />
                    </p>
                </div>
            </div>
            <div className={selectedTab === 4? 'content activeContent':'content'}>
                <h3> Référencements payants</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
            <div className={selectedTab === 5? 'content activeContent':'content'}>
                <h3> Maintenance de site internet</h3>
                <hr />
                <div className="content-detail">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                </div>
                

                
            </div>
        </div>
    )
}

export default Tab;
