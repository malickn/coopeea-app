

import React, { Component } from 'react';
import {connect } from 'react-redux';

class TopCourses extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <section className="top-courses-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40" style={hideEnglish}>
                                <h2 className="title">Voici nos cours</h2>
                                <p>Recommandations de cours pour vous à partir d'un catalogue de plus de 250 cours</p>
                            </div>
                            <div className="section-title mt-40" style={hideFrench}>
                                <h2 className="title">Here are our courses</h2>
                                <p>Course recommendations for you from a catalog of over 240 courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="courses-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <a href="/#" className="category">#Science</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Computer Science & Engineering</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <a href="/#" className="category">#Science</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Applied <br/> Mathematics</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <a href="/#" className="category">#Business</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Bachelor of Business Administration</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <a href="/#" className="category">#Marketing</a>
                                    <h4 className="courses-title">
                                        <a href="courses-details.html">Social & Digital <br/> Marketing</a>
                                    </h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="1s">
                                    <a href="/#" className="category">#Business</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Bachelor of Business Administration</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="1.2s">
                                    <a href="/#" className="category">#Marketing</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Social & Digital <br/> Marketing</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="1.4s">
                                    <a href="/#" className="category">#Science</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Applied <br/> Mathematics</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="1.6s">
                                    <a href="/#" className="category">#Science</a>
                                    <h4 className="courses-title"><a href="courses-details.html">Computer Science & Engineering</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="duration">Durée: <span> 6 mois</span></p>
                                        <p className="fee">Frais: <span> $540</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="duration">Duration: <span> 6 months</span></p>
                                        <p className="fee">Fee: <span> $540</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/register">Postuler en ligne</a><br/>
                                        <a className="more" href="/contact">Lire la suite <i className="fal fa-chevron-right"></i></a>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/register">Online Apply</a><br/>
                                        <a className="more" href="/contact">Read more <i className="fal fa-chevron-right"></i></a>
                                    </div>
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

export default connect(mapStateToProps)(TopCourses);
















