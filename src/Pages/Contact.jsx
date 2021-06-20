import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '' ,
            email : '',
            phone : '',
            subject : '',
            message : '',
            successMessage : '',
            errorMessage : '' ,
            show : false     
        };
    }
    handleName = (event) => {
        this.setState({name : event.target.value});
    }
    handleEmail = (event) => {
        this.setState({email : event.target.value});
    }
    handlePhone = (event) => {
        this.setState({phone : event.target.value});
    }
    handleSubject = (event) => {
        this.setState({subject : event.target.value});
    }
    handleMessage = (event) => {
        this.setState({message : event.target.value});
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.setState({errorMessage : ''})
        this.setState({successMessage : ''})
        const error = this.validate(this.state.name, this.state.email, this.state.phone, this.state.subject);
        this.setState({show : true})
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    name:this.state.name,
                    email : this.state.email,
                    phone : this.state.phone,
                    subject : this.state.subject,
                    message : this.state.message,
                    lg : this.props.language
            };
            const endpoint = 'http://coopeea.org/api/sendcontactinfo.php';

            fetch(endpoint, {
                "method": "POST",
                "body": JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => {     
                if(response.action === "failed"){
                    this.setState({errorMessage : response.msg})
                }else{
                    this.setState({successMessage : response.msg})
                    this.setState({name : ''});
                    this.setState({email : ''});
                    this.setState({phone : ''});
                    this.setState({subject : ''});
                    this.setState({message : ''});
                }
            })
            .catch(err => {
                this.setState({errorMessage : err})
            });
        }
    }

    validate = (name, email, phone, subject) => {
        const errors = '';
        
        if (name.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your name" : "Veuillez saisir votre nom";
            return n;
        }
        if (phone.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your phone" : "Veuillez saisir votre téléphone";
            return n;
        }
        if(!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
            const n = (this.props.language !== 'English') ? "Please enter a valid phone" : "Veuillez saisir un téléphone valide";
            return n;
        }
        if (email.length < 5) {
            const n = (this.props.language !== 'English') ? "Email should be at least 5 charcters long" : "Le courriel doit comporter au moins 5 caractères";
            return n;
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            const n = (this.props.language !== 'English') ? "Email should contain a @" : "Le courriel doit contenir un @";
            return n;
        }
        if (email.indexOf(".") === -1) {
            const n = (this.props.language !== 'English') ? "Email should contain at least one dot" : "Le courriel doit contenir un point";
            return n;
        }
        if (subject.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter the subject of the message" : "Veuillez saisir le sujet du message";
            return n;
        }
        return errors;
    }

    render() {     
        
        const showMessage = {
            display : (this.state.show) ? "block" : "none"
        }
        const showSuccess = {
            display : (this.state.successMessage !== '') ? "block" : "none"
        }
        const showError = {
            display : (this.state.errorMessage !== '') ? "block" : "none"
        }

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
                            <h2 className="title">Contact</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col-md-4">
                            <div className="single-contact-info mt-30">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content" style={hideEnglish}>
                                    <h5 className="title">Adresse</h5>
                                    <p>4388 Saint-Denis, bureau 200, Montréal, QC H2J 2L1,Canada</p>
                                </div>
                                <div className="info-content" style={hideFrench}>
                                    <h5 className="title">Address</h5>
                                    <p> 4388 Saint-Denis, bureau 200, Montreal, QC H2J 2L1,Canada</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-4">
                            <div className="single-contact-info mt-30">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content" style={hideEnglish}>
                                    <h5 className="title">Téléphone</h5>
                                    <p><a href="tel:+15145003434">+1514-500-3434</a></p>
                                </div>
                                <div className="info-content" style={hideFrench}>
                                    <h5 className="title">Phone</h5>
                                    <p><a href="tel:+15145003434">+1514-500-3434</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-contact-info mt-30">
                                <div className="info-icon">
                                    <i className="far fa-globe"></i>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Web</h5>
                                    <p><a href="mailto://info@coopeea.org">info@coopeea.org</a></p>
                                    <p><a href="//www.coopeea.org">www.coopeea.org</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form" style={hideEnglish}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-title text-center">
                                    <h3 className="title">Laissez un message ici</h3>
                                    <p>Veuillez nous laisser un message si vous avez des questions. Il nous fera plaisir de vous repondre le plus tôt possible.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <form id="contact-form" action="/#" method="post">
                                        <div className="row" style={showMessage}>
                                            <div className="col-md-12">
                                                <div className="alert alert-success" role="alert" style={showSuccess}>
                                                    {this.state.successMessage}
                                                </div>
                                                <div className="alert alert-danger" role="alert" style={showError}>
                                                    {this.state.errorMessage}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="name" placeholder="Nom" value={this.state.name} onChange={this.handleName}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="email" name="email" placeholder="Courriel" value={this.state.email} onChange={this.handleEmail}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="phone" placeholder="Téléphone" value={this.state.phone} onChange={this.handlePhone}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="subject" placeholder="Sujet" value={this.state.subject} onChange={this.handleSubject}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <textarea name="message" placeholder="Ecrire ici..." value={this.state.message} onChange={this.handleMessage} />
                                                </div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="single-form text-center">
                                                    <button className="main-btn" onClick={this.handleSumit}>Soumettre maintenant</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form" style={hideFrench}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-title text-center">
                                    <h3 className="title">Leave a message here</h3>
                                    <p>Please leave message to us if you have any questions. It will be our pleasure to answer you as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <form id="contact-form" action="/#" method="post">
                                        <div className="row" style={showMessage}>
                                            <div className="col-md-12">
                                                <div className="alert alert-success" role="alert" style={showSuccess}>
                                                    {this.state.successMessage}
                                                </div>
                                                <div className="alert alert-danger" role="alert" style={showError}>
                                                    {this.state.errorMessage}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhone}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleSubject}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <textarea name="message" placeholder="Write here..." value={this.state.message} onChange={this.handleMessage} />
                                                </div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="single-form text-center">
                                                    <button className="main-btn" onClick={this.handleSumit}>Submit now</button>
                                                </div>
                                            </div>
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

const mapDispatchToProps = dispatch => {
    return{
        onChangeLanguage: (language) => dispatch({ type: language }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);