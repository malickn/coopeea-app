import React, { Component } from 'react';
import {connect } from 'react-redux';

class About extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <section className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="about-content mt-40" style={hideEnglish}>
                                <h2 className="about-title">Meilleur environnement éducatif</h2>
                                <span className="line"></span>
                                <p>Nous sommes dévoués à la réussite de nos étudiants, des adultes comme vous, qui comprennent que l'obtention d'une formation peut conduire à une vie meilleure. </p>
                                <a href="//www.coopeea.org" className="main-btn">Explorer</a>
                            </div>
                            <div className="about-content mt-40" style={hideFrench}>
                                <h2 className="about-title">Best Educational Environment</h2>
                                <span className="line"></span>
                                <p>We are dedicated to the success of our students, adults like you, who understand that getting an education can lead to a better life. </p>
                                <a href="//www.coopeea.org" className="main-btn">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-image mt-50">
                                <div className="single-image image-1">
                                    <img src="assets/images/about/about-1.jpg" alt="" />
                                </div>
                                <div className="single-image image-2">
                                    <img src="assets/images/about/about-2.jpg" alt="" />
                                </div>
                                <div className="single-image image-3">
                                    <img src="assets/images/about/about-3.jpg" alt="" />
                                </div>
                                <div className="single-image image-4">
                                    <img src="assets/images/about/about-4.jpg" alt="" />
                                </div>

                                <div className="about-icon icon-1">
                                    <img src="assets/images/about/icon/icon-1.png" alt="" />
                                </div>
                                <div className="about-icon icon-2">
                                    <img src="assets/images/about/icon/icon-2.png" alt="" />
                                </div>
                                <div className="about-icon icon-3">
                                    <img src="assets/images/about/icon/icon-3.png" alt="" />
                                </div>
                                <div className="about-icon icon-4">
                                    <img src="assets/images/about/icon/icon-4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

const mapStateToProps = state => {
    return {
        language : state.language
    };
};

export default connect(mapStateToProps)(About);







