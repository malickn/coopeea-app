import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class ServicesDigitalCulture extends Component {
    
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
                                <p>Culture numérique</p>
                                <div className="subtitle">
                                    L'initiation à la cybersécurité, au codage et à la robotique comme activités parascolaires s'inscrit dans une volonté de mieux préparer nos jeunes à l'environnement dans lequel ils évoluent.<br/><br/>
                                    Des activités scientifiques dans le domaine de la cybersécurité, du codage et de la robotique sont d'autant plus pertinentes aujourd'hui que le numérique est partout, dans tous les domaines où les jeunes seront appelés à travailler plus tard.<br/><br/>
                                    Au-delà de ces considérations dans un futur proche, apprendre à coder permet à nos jeunes :
                                </div>
                                <div className="ulitems">
                                    <div className="ulitem">- À être plus créatifs ; leur posture face aux jeux vidéo change. </div>
                                    <div className="ulitem">- À mieux structurer leur raisonnement.</div>
                                    <div className="ulitem">- À développer des stratégies de résolution de problème.</div>
                                    <div className="ulitem">- À mieux travailler de façon collaborative.</div>
                                    <div className="ulitem">- D'être moins dépendant de ceux qui détiennent les technologies.</div>
                                </div>
                                <div className="subtitle">En résumé, développer leur culture numérique leur permettra d'être bien outillés face à leur avenir.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                
                                <span className="line"></span>
                                <p>Digital Culture</p>
                                <div className="subtitle">
                                    L'initiation à la cybersécurité, au codage et à la robotique comme activités parascolaires s'inscrit dans une volonté de mieux préparer nos jeunes à l'environnement dans lequel ils évoluent.<br/><br/>
                                    Des activités scientifiques dans le domaine de la cybersécurité, du codage et de la robotique sont d'autant plus pertinentes aujourd'hui que le numérique est partout, dans tous les domaines où les jeunes seront appelés à travailler plus tard.<br/><br/>
                                    Au-delà de ces considérations dans un futur proche, apprendre à coder permet à nos jeunes :
                                </div>
                                <div className="ulitems">
                                    <div className="ulitem">- À être plus créatifs ; leur posture face aux jeux vidéo change. </div>
                                    <div className="ulitem">- À mieux structurer leur raisonnement.</div>
                                    <div className="ulitem">- À développer des stratégies de résolution de problème.</div>
                                    <div className="ulitem">- À mieux travailler de façon collaborative.</div>
                                    <div className="ulitem">- D'être moins dépendant de ceux qui détiennent les technologies.</div>
                                </div>
                                <div className="subtitle">En résumé, développer leur culture numérique leur permettra d'être bien outillés face à leur avenir.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesDigitalCulture);