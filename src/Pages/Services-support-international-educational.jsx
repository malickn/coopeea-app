import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class ServicesSupportInternationalEducation extends Component {
    
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
                                <div className="subtitle">Avec son grand réseaux d’experts et spécialistes en Éducation, la COOPEEA appuie et accompagne les politiques éducatives dans le cadre de la coopération entre le Québec et les pays en développement. La COOPEEA offre aux professionnels et aux étudiants en éducation la possibilité de vivre des expériences enrichissantes, à travers des stages dans les pays en développement.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                
                                <span className="line"></span>
                                <div className="subtitle">With its large network of experts and specialists in Education, COOPEEA supports and accompanies educational policies within the framework of cooperation between Quebec and developing countries. COOPEEA offers professionals and students in education the opportunity to live enriching experiences, through internships in developing countries.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesSupportInternationalEducation);