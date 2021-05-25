import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class AboutUsMission extends Component {
    
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
                            <h2 className="title" style={hideEnglish}>Mission et valeurs</h2>
                            <h2 className="title" style={hideFrench}>Mission & values</h2>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="notice-area">
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Mission et valeurs</h2>
                                <span className="line"></span>
                                <div className="subtitle">La COOPEEA a pour principale mission le soutien scolaire des jeunes, afin de susciter leur intérêt et d'augmenter leur réussite.</div>
                                <div className="ulitems">
                                    <div>La COOPEEA a pour valeurs : </div>
                                    <div className="ulitem">- L'Éthique et l'Équité</div>
                                    <div className="ulitem">- La Solidarité et la Persévérance</div>
                                    <div className="ulitem">- L'Esprit d'équipe</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Mission and Standards</h2>
                                <span className="line"></span>
                                <div className="subtitle">COOPEEA's main mission is to support young people's education in order to stimulate their interest and increase their success.</div>
                                <div className="ulitems">
                                    <div>COOPEEA's values are: </div>
                                    <div className="ulitem">- Ethics and Equity</div>
                                    <div className="ulitem">- Solidarity and Perseverance</div>
                                    <div className="ulitem">- Team spirit</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsMission);