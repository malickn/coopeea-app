import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import ServicesForm from '../components/ServicesForm';
// import ServicesHeader from '../components/ServicesHeader';


class ServicesTutoringEnglish extends Component {
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
            {/* <ServicesHeader titleEnglish="Tutoring - English" titleFrench="Soutien Scolaire - Anglais"/> */}
            <section>
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>Soutien Scolaire - Anglais</p>
                                <div className="subtitle">Conformément au programme du Ministère de l'Éducation</div>
                                <div className="ulitems">
                                    <div><b>Compétences ciblées</b></div>
                                    <div className="ulitem">1. Interagir oralement en anglais</div>
                                    <div className="ulitem">2. Réinvestir sa compréhension des textes</div>
                                    <div className="ulitem">3. Écrire et produire des textes</div>
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
                                <p>Tutoring - English</p>
                                <div className="subtitle">In accordance with the program of the Ministry of Education</div>
                                <div className="ulitems">
                                    <div><b>Targeted skills</b></div>
                                    <div className="ulitem">1. Interact orally in English</div>
                                    <div className="ulitem">2. Reinvest your understanding of the texts</div>
                                    <div className="ulitem">3. Write and produce texts</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesTutoringEnglish);