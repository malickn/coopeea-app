import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import ServicesForm from '../components/ServicesForm';
// import ServicesHeader from '../components/ServicesHeader';


class ServicesTutoringScienceTechnology extends Component {
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
            {/* <ServicesHeader titleEnglish="Tutoring - Science and technology" titleFrench="Soutien Scolaire - Science et technologie"/> */}
            <section>
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>Soutien Scolaire - Science et technologie</p>
                                <div className="subtitle">Conformément au programme du Ministère de l'Éducation</div>
                                <div className="ulitems">
                                    <div><b>Compétences ciblées</b></div>
                                    <div className="ulitem">1. Chercher des réponses  ou des solutions d'ordre scientifique ou technologique</div>
                                    <div className="ulitem">2. Mettre à profits ses connaissances scientifiques et technologiques</div>
                                    <div className="ulitem">3. Communiquer à l'aide des langages utilisés en Science et technologie</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Éléments d'apprentissage</b></div>
                                    <div className="ulitem">- Univers Matériel (propriétés, transformations, organisation).</div>
                                    <div className="ulitem">- Univers Vivant (Diversité de la vie, Perpétuation des espèces, Maintien de la vie).</div>
                                    <div className="ulitem">- Terre et Espace (Caractéristique générale de la Terre, Phénomènes géologiques et géophysiques, Phénomènes astronomiques).</div>
                                    <div className="ulitem">- Univers Technologique (Ingénierie, systèmes technologiques, forces et mouvements).</div>
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
                                <p>Tutoring - Science and technology</p>
                                <div className="subtitle">In accordance with the program of the Ministry of Education</div>
                                <div className="ulitems">
                                    <div><b>Compétences ciblées</b></div>
                                    <div className="ulitem">1. Look for answers or solutions of a scientific or technological nature</div>
                                    <div className="ulitem">2. Use your scientific and technological knowledge</div>
                                    <div className="ulitem">3. Communicate using the languages used in Science and Technology</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Learning elements</b></div>
                                    <div className="ulitem">- Material Universe (properties, transformations, organization).</div>
                                    <div className="ulitem">- Univers Vivant (Diversité de la vie, Perpétuation des espèces, Maintien de la vie).</div>
                                    <div className="ulitem">- Living Universe (Diversity of life, Perpetuation of species, Maintenance of life).</div>
                                    <div className="ulitem">- Technological Universe (Engineering, technological systems, forces and movements).</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesTutoringScienceTechnology);