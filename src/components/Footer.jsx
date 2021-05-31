import React, { Component } from 'react';
import {connect } from 'react-redux';

class Footer extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <section className="footer-area bg_cover" style={{backgroundImage: "url(assets/images/counter-bg.jpg)"}}>
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45" style={hideEnglish}>
                                    <h4 className="footer-title">A propos de Nous</h4>
                                    <ul className="link-list">
                                        <li><a href="/aboutus-organization">L'Organisation</a></li>
                                        <li><a href="/aboutus-mission">Mission et valeurs</a></li>
                                        <li><a href="/aboutus-objectives">Objectifs</a></li>
                                    </ul>
                                </div>
                                <div className="footer-link mt-45" style={hideFrench}>
                                    <h4 className="footer-title">About Us</h4>
                                    <ul className="link-list">
                                        <li><a href="/aboutus-organization">Organization</a></li>
                                        <li><a href="/aboutus-mission">Mission and Standards</a></li>
                                        <li><a href="/aboutus-objectives">Objectives</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45" style={hideEnglish}>
                                    <h4 className="footer-title">Nos services</h4>
                                    <ul className="link-list">
                                        <li><a href="/services-development-competence">Développement de compétence</a></li>
                                        <li><a href="/services-orientation-mediation">Orientation et Médiation</a></li>
                                        {/* <li><a href="/services-mentoring">Mentorat</a></li> */}
                                        <li><a href="/services-digital-culture">Culture numérique</a></li>
                                    </ul>
                                </div>
                                <div className="footer-link mt-45" style={hideFrench}>
                                    <h4 className="footer-title">Our services</h4>
                                    <ul className="link-list">
                                        <li><a href="/services-development-competence">Competence developpement</a></li>
                                        <li><a href="/services-orientation-mediation">Orientation and Mediation </a></li>
                                        {/* <li><a href="/services-mentoring">Mentoring</a></li> */}
                                        <li><a href="/services-digital-culture">Digital culture</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45" style={hideEnglish}>
                                    <a href="/services-tutoring"><h4 className="footer-title">Soutien scolaire</h4></a>
                                    <ul className="link-list">
                                        <li><a href="/services-tutoring-maths">Maths</a></li>
                                        <li><a href="/services-tutoring-sciencetechnology">Science et Technologie</a></li>
                                        <li><a href="/services-tutoring-french">Cours de français</a></li>
                                        <li><a href="/services-tutoring-english">Cours d'anglais</a></li>
                                    </ul>
                                </div>
                                <div className="footer-link mt-45" style={hideFrench}>
                                    <a href="/services-tutoring"><h4 className="footer-title">Tutoring</h4></a>
                                    <ul className="link-list">
                                        <li><a href="/services-tutoring-maths">Maths</a></li>
                                        <li><a href="/services-tutoring-sciencetechnology">Science & Technology</a></li>
                                        <li><a href="/services-tutoring-french">Learn French</a></li>
                                        <li><a href="/services-tutoring-english">Learn English</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45" >
                                    <h4 className="footer-title">Contact Info</h4>
                                    <ul className="link-list">
                                        <li>
                                            <p><a href="tel:+15145003434">+1514-500-3434</a></p>
                                        </li>
                                        <li>
                                            <p><a href="mailto://info@coopeea.org">info@coopeea.org</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright text-center" style={hideEnglish}>
                            <p>&copy; Copyright tous droits réservés par <a href="https://coopeea.org/">Coopeea</a></p>
                        </div>
                        <div className="copyright text-center" style={hideFrench}>
                            <p>&copy; Copyright all right reserved by <a href="https://coopeea.org/">Coopeea</a></p>
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

export default connect(mapStateToProps)(Footer);