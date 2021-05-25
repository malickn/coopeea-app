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
                                <div className="organisation">
                                    <img src="assets/images/organigramme.png" alt="Organigramme"/>
                                </div>
                                
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
                                <div className="subtitle">
                                COOPEEA (Cooperative of Community Action Teachers) provides a framework for teachers,researchers and education specialists to support and accompany educational policies. COOPEEA intervenes in terms of academic support, strategies and pedagogical innovations that promote motivation and academic success.
                                </div>
                                <div className="organisation">
                                    <img src="assets/images/organigramme.png" alt="Organigramme"/>
                                </div>
                                <div className="ulitems">
                                    <div className="ulitem">- <span>The Board of Administration</span>: is responsible for representing the members. It assumes all the tasks related to the proper functioning of the Cooperative and any mandate given by the General Assembly of members.</div>
                                    <div className="ulitem">- <span>Competency Development Committee</span>: Implements strategies that allow its members to:
                                        <ul>
                                            <li>Share expertise </li>
                                            <li>Share knowledge and pedagogical resources</li>
                                            <li>Support new colleagues in their induction and integration</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="ulitem">- <span>Mediation and Orientation Committee</span> : This committee is the bridge between the schools and the parents of students, in order to better inform them about the educational system. It also deals with issues related to the orientation of young people towards the appropriate resources for their academic success.</div>
                                    <div className="ulitem">- <span>School Support Committee</span> : This committee provides support for young people with learning difficulties. It provides young people with all the resources and support they need to succeed in school.</div>
                                </div>
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