import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class ServicesDevelopmentCompetence extends Component {
    
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
                            <h2 className="title" style={hideEnglish}>Nos services</h2>
                            <h2 className="title" style={hideFrench}>Our services</h2>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="notice-area">
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                
                                <span className="line"></span>
                                <p> Service - Développement de compétence</p>
                                <div className="subtitle">La COOPEEA accorde une grande importance au Développement de compétences, à travers des stratégies permettant aux membres :</div>
                                <div className="ulitems">
                                    <div className="ulitem">- D'échanger leurs savoir-faire </div>
                                    <div className="ulitem">- De partager des connaissances et ressources pédagogiques</div>
                                    <div className="ulitem">- D'accompagner les nouveaux collègues dans leur insertion et intégration (professionnelles ou socioprofessionnelles)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                
                                <span className="line"></span>
                                <p> Service - Competence Development</p>
                                <div className="subtitle">COOPEEA attaches great importance to Competence Development, through strategies allowing members:</div>
                                <div className="ulitems">
                                    <div className="ulitem">- To exchange their know-how </div>
                                    <div className="ulitem">- To share knowledge and educational resources</div>
                                    <div className="ulitem">- To support new colleagues in their integration and integration</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesDevelopmentCompetence);