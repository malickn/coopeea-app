import React, { Component } from 'react';
import {connect } from 'react-redux';

class Newsletter extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-wrapper bg_cover wow zoomIn" data-wow-duration="1s" data-wow-delay="0.2s" style={{backgroundImage: "url(assets/images/newsletter-bg-1.jpg)"}}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="section-title-2 mt-25" style={hideEnglish}>
                                    <h2 className="title">Abonnez-vous à notre infolettre</h2>
                                    <span className="line"></span>
                                    <p>Restez Informé des nouvelles formations et des événements à venir</p>
                                </div>
                                <div className="section-title-2 mt-25" style={hideFrench}>
                                    <h2 className="title">Subscribe to our Newsletter</h2>
                                    <span className="line"></span>
                                    <p>Stay informed of new trainings and upcoming events</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="newsletter-form mt-30">
                                    <form action="#">
                                        <input type="text" placeholder='test@test.com' />
                                        <button className="main-btn main-btn-2" style={hideEnglish}>Abonnez-vous maintenant</button>
                                        <button className="main-btn main-btn-2" style={hideFrench}>Subscribe now</button>
                                    </form>
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

export default connect(mapStateToProps)(Newsletter);