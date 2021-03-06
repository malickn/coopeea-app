import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class AboutUsObjectives extends Component {
    
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
                            <h2 className="title" style={hideEnglish}>Objectifs</h2>
                            <h2 className="title" style={hideFrench}>Objectives</h2>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="notice-area">
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Objectifs</h2>
                                <span className="line"></span>
                                <div className="subtitle">La Coopérative poursuit ces objectifs :</div>
                                <div className="ulitems">
                                    <div className="ulitem">1.	Favoriser la réussite scolaire des jeunes et des adultes</div>
                                    <div className="ulitem">2.	Contribuer à la réduction du décrochage scolaire des jeunes issus des communautés culturelles.</div>
                                    <div className="ulitem">3.	Accueillir et intégrer les nouveaux enseignants issus de l'immigration.</div>
                                    <div className="ulitem">4.	Promouvoir les échanges entre étudiants canadiens et africains.</div>
                                    <div className="ulitem">5.	Promouvoir les échanges de compétences entre professionnels canadiens et africains de l'éducation</div>
                                    <div className="ulitem">6.	Développer des partenariats avec divers organismes impliqués dans l'éducation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Objectives</h2>
                                <span className="line"></span>
                                <span className="line"></span>
                                <div className="subtitle">The Cooperative pursues these objectives:</div>
                                <div className="ulitems">
                                    <div className="ulitem">1.	To promote academic success for youth and adults</div>
                                    <div className="ulitem">2.	To contribute to the reduction of school dropout among young people from cultural communities.</div>
                                    <div className="ulitem">3.	To welcome and integrate new teachers from immigrant backgrounds.</div>
                                    <div className="ulitem">4.	Promote exchanges between Canadian and African students.</div>
                                    <div className="ulitem">5.	Promote exchanges of expertise between Canadian and African education professionals.</div>
                                    <div className="ulitem">6.	Develop partnerships with various organizations involved in education.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsObjectives);