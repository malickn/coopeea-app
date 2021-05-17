import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class AboutUsOrganization extends Component {
    
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <>
            <Header />
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{backgroundImage: "url(assets/images/page-banner.jpg)"}}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title" style={hideEnglish}>A propos de nous</h2>
                            <h2 className="title" style={hideFrench}>About Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="notice-area">
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">A propos de nous</h2>
                                <span className="line"></span>
                                <div className="subtitle">La COOPEEA (Coopérative des enseignantes et enseignants d'action communautaire) offre aux enseignant.e.s, aux chercheur.e.s et aux spécialistes de l'éduction un cadre pour appuyer et accompagner les politiques éducatives. La COOPEEA intervient en termes de soutien scolaire, de stratégies et d'innovations pédagogiques favorisant la motivation et la réussite scolaire.</div>
                                <div className="ulitems">
                                    <div className="ulitem">- <span>Le Conseil d'Administration</span> :  Il est chargé de représenter les membres. Il assume toutes les tâches liées au bon fonctionnement de la Coopérative et tout mandat confié par l'Assemblée générale des membres.</div>
                                    <div className="ulitem">- <span>Comité de développement de compétences</span> : Il met en œuvre des stratégies permettant aux membres :
                                        <ul>
                                            <li>D'échanger leurs savoir-faire</li>
                                            <li>De partager des connaissances et ressources pédagogiques</li>
                                            <li>D'accompagner les nouveaux collègues dans leur insertion et intégration</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="ulitem">- <span>Comité de de médiation et d'orientation</span> : Ce comité est le relais entre les établissements scolaires et les parents d'élèves, afin de mieux les informer sur le système éducatif. Il prend en charge aussi les questions liées à l'orientation des jeunes, vers les bonnes ressources pour leur réussite scolaire.</div>
                                    <div className="ulitem">- <span>Comité de soutien scolaire</span> : Ce comité assure des soutiens relatifs aux difficultés d'apprentissage des jeunes. Il met à la disposition des jeunes toutes les ressources et l'accompagnement nécessaires à leur réussite scolaire.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">About Us</h2>
                                <span className="line"></span>
                                <p>The COOPEEA offers teachers, researchers and education specialists a framework to support and accompany educational policies. COOPEEA intervenes in terms of academic support, strategies and educational innovations promoting motivation and academic success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
            <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language : state.language
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onChangeLanguage: (language) => dispatch({ type: language }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsOrganization);