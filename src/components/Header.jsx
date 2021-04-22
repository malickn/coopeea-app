import React, { Component } from 'react'
import {connect } from 'react-redux';

class Header extends Component {
    
    clickOnLanguage = (event) => {
        event.preventDefault();
        const lg = event.target.rel;
        if(lg === 'Français')
            this.props.onChangeLanguage('FRENCH');
        else
            this.props.onChangeLanguage('ENGLISH');  
            
        //Set cookie
        this.setCookie('language', lg, 1000);
    }

    setCookie = (cname, cvalue, exdays) => {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue.toUpperCase() + ";" + expires + ";path=/";
    }
      
    getCookie = (cname) => {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
      
    componentDidMount() {
        if(this.getCookie('language') !== "")
            this.props.onChangeLanguage(this.getCookie('language'));
        else
            this.props.onChangeLanguage('FRENCH');
    }
  
    render() {

        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }


        return (
            <header className="header-area">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrapper d-flex flex-wrap justify-content-sm-between">
                            <div className="header-top-left mt-10">
                                <ul className="header-meta">
                                    <li><a href="mailto://info@coopeea.org">info@coopeea.org</a></li>
                                </ul>
                            </div>
                            <div className="header-top-right mt-10">
                                <div className="header-link">
                                    <a id="lang" rel={this.props.language} href="http://coopeea.org" onClick={this.clickOnLanguage}>{this.props.language}</a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="navigation" className="navigation navigation-landscape">
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="header-logo">
                                    <a href="/">
                                        <img src="assets/images/logo_text.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 position-static" style={hideEnglish}>
                                <div className="nav-toggle"></div>
                                <nav className="nav-menus-wrapper">
                                    <ul className="nav-menu">
                                        <li>
                                            <a href="/">Accueil</a>
                                        </li>
                                        <li>
                                            <a href="/#">A propos de nous</a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li><a href="/aboutus-organization">L'Organisation</a></li>
                                                <li><a href="/aboutus-mission">Mission et valeurs</a></li>
                                                <li><a href="/aboutus-goals">Objectifs</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/#">Nos services</a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="/#">Soutien scolaire</a>
                                                    <ul className="nav-dropdown nav-submenu">
                                                        <li><a href="/services-tutoring-maths">Maths</a></li>
                                                        <li><a href="/services-tutoring-sciencetechnology">Science et Technologie</a></li>
                                                        <li><a href="/services-tutoring-french">Français</a></li>
                                                        <li><a href="services-tutoring-english">Anglais</a></li>
                                                    </ul>
                                                </li>  
                                                <li><a href="/services-development-competence">Développement de compétence</a></li>
                                                <li><a href="/services-guidance-mediation">Orientation et Médiation</a></li>
                                                <li><a href="/services-mentoring">Mentorat</a></li>
                                                <li>
                                                    <a href="/#">Activités parascolaires</a>
                                                    <ul className="nav-dropdown nav-submenu">
                                                        <li><a href="/services-digital-culture">Culture numérique (cybersécurité, robotique, codage)</a></li>                                                  
                                                    </ul>
                                                </li>                                            
                                                <li><a href="/services-support-international-education">Appui et accompagnement de politiques éducatives à l'international</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/register">Devenir membre</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>  
                                </nav>
                            </div>
                            <div className="col-lg-7 position-static" style={hideFrench}>
                                <div className="nav-toggle"></div>
                                <nav className="nav-menus-wrapper">
                                    <ul className="nav-menu">
                                        <li>
                                            <a className="active" href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/#">About Us</a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li><a href="/aboutus-organization">Organization</a></li>
                                                <li><a href="/aboutus-mission">Mission & values</a></li>
                                                <li><a href="/aboutus-goals">Goals</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/#">Our services</a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li>
                                                    <a href="/#">Tutoring</a>
                                                    <ul className="nav-dropdown nav-submenu">
                                                        <li><a href="/services-tutoring-maths">Maths</a></li>
                                                        <li><a href="/services-tutoring-sciencetechnology">Science & Technologie</a></li>
                                                        <li><a href="/services-tutoring-french">Frenchs</a></li>
                                                        <li><a href="/services-tutoring-english">English</a></li>
                                                    </ul>
                                                </li> 
                                                <li><a href="/services-development-competence">Competence development</a></li>
                                                <li><a href="/services-guidance-mediation">Guidance and Mediation</a></li>
                                                <li><a href="/services-mentoring">Mentoring</a></li>
                                                <li>
                                                    <a href="/#">Extracurricular activities</a>
                                                    <ul className="nav-dropdown nav-submenu">
                                                        <li><a href="/services-digital-culture">Digital culture (cybersecurity, robotics, coding)</a></li>                                                  
                                                    </ul>
                                                </li>                                            
                                                <li><a href="/services-support-international-education">Support for international educational policies</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/register">Become a member</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);