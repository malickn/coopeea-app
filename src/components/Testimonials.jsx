import React, { Component } from 'react';
import {connect } from 'react-redux';

class Testimonials extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <section className="testimonials-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="testimonials-title" style={hideEnglish}>
                                <h2 className="title">Avis de nos étudiants</h2>
                                <span className="line"></span>
                                <p>Voici quelques avis d'étudiants</p>
                            </div>
                            <div className="testimonials-title" style={hideFrench}>
                                <h2 className="title">Our students' opinions</h2>
                                <span className="line"></span>
                                <p>Here are some student reviews</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-8">
                            <div className="testimonials-wrapper">
                                <div className="testimonials-shape shape-1"></div>
                                <div className="testimonials-shape shape-2"></div>
                                <div className="testimonials-shape shape-3"></div>

                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-md-5">
                                        <div className="testimonials-image">
                                            <div className="single-testimonial-image">
                                                <img src="assets/images/testimonials-1.png" alt="" />
                                            </div>
                                            <div className="single-testimonial-image">
                                                <img src="assets/images/testimonials-2.png" alt="" />
                                            </div>
                                            <div className="single-testimonial-image">
                                                <img src="assets/images/testimonials-3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7">
                                        <div className="testimonials-content">
                                            <div className="single-testimonial-content">
                                                <div className="content-text">
                                                    <i className="fas fa-quote-right"></i>
                                                    <p>COOPEEA nous a offert une excellente formation en science et technologie adaptée à notre environnement de travail et à nos besoins.</p>
                                                </div>
                                                <div className="content-meta">
                                                    <p className="name">Michel Sy</p>
                                                </div>
                                            </div>                            
                                        </div>
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

export default connect(mapStateToProps)(Testimonials);



