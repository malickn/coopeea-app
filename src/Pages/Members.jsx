import React, { Component } from 'react';
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class Members extends Component {
    
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
                            <h2 className="title" style={hideEnglish}>S'inscrire</h2>
                            <h2 className="title" style={hideFrench}>Register</h2>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="login-register" style={hideEnglish}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Créer un nouveau compte</h4>
                                <div className="cf-msg"></div>
                                <div className="login-register-form">
                                    <form action="#" method="post">
                                        <div className="single-form">
                                            <label>Prénom *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
                                        </div>
                                        <div className="single-form">
                                            <label>Nom *</label>
                                            <input type="text" name="lastname" id="lastname" placeholder="Nom"/>
                                        </div>
                                        <div className="single-form">
                                            <label>Adresse e-mail *</label>
                                            <input type="email" name="email" id="email" placeholder="Courriel"/>
                                        </div>
                                       
                                        <div className="single-form">
                                            <button className="main-btn btn-block" id="form-register">S'inscrire</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
            <section className="login-register" style={hideFrench}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Create a new account</h4>
                                <div className="cf-msg"></div>
                                <div className="login-register-form">
                                    <form action="#" method="post">
                                        <div className="single-form">
                                            <label>First Name *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="First Name"/>
                                        </div>
                                        <div className="single-form">
                                            <label>Last Name *</label>
                                            <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
                                        </div>
                                        <div className="single-form">
                                            <label>Adresse e-mail *</label>
                                            <input type="email" name="email" id="email" placeholder="Email"/>
                                        </div>
                                       
                                        <div className="single-form">
                                            <button className="main-btn btn-block" id="form-register">Register</button>
                                        </div>
                                    </form>
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

export default connect(mapStateToProps)(Members);