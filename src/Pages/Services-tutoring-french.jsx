import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import ServicesForm from '../components/ServicesForm';
// import ServicesHeader from '../components/ServicesHeader';


class ServicesTutoringFrench extends Component {
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
            {/* <ServicesHeader titleEnglish="Tutoring - French" titleFrench="Soutien Scolaire - Français"/> */}
            <section>
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>Soutien Scolaire - Français</p>
                                <div className="subtitle">Conformément au programme du Ministère de l'Éducation</div>
                                <div className="ulitems">
                                    <div><b>Compétences ciblées</b></div>
                                    <div className="ulitem">1. Lire et apprécier des textes variés</div>
                                    <div className="ulitem">2. Écrire de textes variés</div>
                                    <div className="ulitem">3. Communiquer oralement selon des modalités variées</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Éléments d'apprentissage</b></div>
                                    <div className="ulitem">Grammaire du texte, grammaire de la phrase, Lexique, variétés de langue, langue orale</div>
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
                                <p>Tutoring - French</p>
                                <div className="subtitle">In accordance with the program of the Ministry of Education</div>
                                <div className="ulitems">
                                    <div><b>Targeted skills</b></div>
                                    <div className="ulitem">1. Read and enjoy a variety of texts</div>
                                    <div className="ulitem">2. Write a variety of texts</div>
                                    <div className="ulitem">3. Communicate orally in a variety of ways</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Learning elements</b></div>
                                    <div className="ulitem">Text grammar, sentence grammar, Lexicon, language varieties, oral language</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesTutoringFrench);