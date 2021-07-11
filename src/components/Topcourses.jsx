

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
            <section className="top-courses-area" id="top-courses-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40" style={hideEnglish}>
                                <h2 className="title">Voici nos cours</h2>
                                <p>Recommandations de cours pour vous à partir d'un catalogue de plus de 4 cours</p>
                            </div>
                            <div className="section-title mt-40" style={hideFrench}>
                                <h2 className="title">Here are our courses</h2>
                                <p>Course recommendations for you from a catalog of over 4 courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="courses-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h4 className="courses-title"><a href="/#" style={hideEnglish}>Mathématiques(s)</a></h4>
                                    <h4 className="courses-title"><a href="/#" style={hideFrench}>Mathematics (s)</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="fee">Tarif (individuel) : <span> 40$/h</span></p>
                                        <p className="fee">Tarif (Groupe): <span> 25$/h</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="fee">Fee (individual): <span> $40/h</span></p>
                                        <p className="fee">Fee (Group): <span> $25/h</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/services-tutoring-maths">S'inscrire</a><br/>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/services-tutoring-maths">Register</a><br/>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h4 className="courses-title"><a href="/#" style={hideEnglish}>Sciences et Tech</a></h4>
                                    <h4 className="courses-title"><a href="/#" style={hideFrench}>Science & Tech</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="fee">Tarif (individuel) : <span> 45$/h</span></p>
                                        <p className="fee">Tarif (Groupe): <span> 35$/h</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="fee">Fee (individual): <span> $40/h</span></p>
                                        <p className="fee">Fee (Group): <span> $25/h</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/services-tutoring-sciencetechnology">S'inscrire</a><br/>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/services-tutoring-sciencetechnology">Register</a><br/>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h4 className="courses-title"><a href="/#" style={hideEnglish}>Français</a></h4>
                                    <h4 className="courses-title"><a href="/#" style={hideFrench}>French</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="fee">Tarif (individuel) : <span> 40$/h</span></p>
                                        <p className="fee">Tarif (Groupe): <span> 25$/h</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="fee">Fee (individual): <span> $40/h</span></p>
                                        <p className="fee">Fee (Group): <span> $25/h</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/services-tutoring-french">S'inscrire</a><br/>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/services-tutoring-french">Register</a><br/>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 courses-col">
                                <div className="single-courses mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h4 className="courses-title"><a href="/#" style={hideEnglish}>Anglais</a></h4>
                                    <h4 className="courses-title"><a href="/#" style={hideFrench}>English</a></h4>
                                    <div className="duration-fee" style={hideEnglish}>
                                        <p className="fee">Tarif (individuel) : <span> 40$/h</span></p>
                                        <p className="fee">Tarif (Groupe): <span> 25$/h</span></p>
                                    </div>
                                    <div className="duration-fee" style={hideFrench}>
                                        <p className="fee">Fee (individual): <span> $40/h</span></p>
                                        <p className="fee">Fee (Group): <span> $25/h</span></p>
                                    </div>
                                    <div className="courses-link" style={hideEnglish}>
                                        <a className="apply" href="/services-tutoring-english">S'inscrire</a><br/>
                                    </div>
                                    <div className="courses-link" style={hideFrench}>
                                        <a className="apply" href="/services-tutoring-english">Register</a><br/>
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
















