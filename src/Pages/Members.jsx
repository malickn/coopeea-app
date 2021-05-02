import React, { Component } from 'react';
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';


class Members extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            email : '',
            successMessage : '',
            errorMessage : '' ,
            show : false     
        };
    }
    handleFirstname = (event) => {
        this.setState({firstname : event.target.value});
    }
    handleLastname = (event) => {
        this.setState({lastname : event.target.value});
    }
    handleEmail = (event) => {
        this.setState({email : event.target.value});
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.setState({errorMessage : ''})
        this.setState({successMessage : ''})
        const error = this.validate(this.state.firstname, this.state.lastname, this.state.email);
        this.setState({show : true})
    
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    firstname:this.state.firstname,
                    lastname:this.state.lastname,
                    email : this.state.email,
                    lg : this.props.language
            };
            const endpoint = 'http://coopeea.facemontreal.com/api/register.php';

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
                    this.setState({firstname : ''});
                    this.setState({lastname : ''});
                    this.setState({email : ''});
                }
            })
            .catch(err => {
                this.setState({errorMessage : err})
            });
        }
    }

    validate = (firstname, lastname, email) => {
        const errors = '';
        
        if (firstname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your firstname" : "Veuillez saisir votre prénom";
            return n;
        }
        if (lastname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your lastname" : "Veuillez saisir votre nom";
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
                                    <form action="/#" method="post">
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
                                        <div className="single-form">
                                            <label>Prénom *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="Prénom" value={this.state.firstname} onChange={this.handleFirstname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Nom *</label>
                                            <input type="text" name="lastname" id="lastname" placeholder="Nom" value={this.state.lastname} onChange={this.handleLastname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Adresse e-mail *</label>
                                            <input type="email" name="email" id="email" placeholder="Courriel" value={this.state.email} onChange={this.handleEmail}/>
                                        </div>
                                       
                                        <div className="single-form">
                                            <button className="main-btn btn-block" id="form-register" onClick={this.handleSumit}>S'inscrire</button>
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
                                    <form action="/#" method="post">
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
                                        <div className="single-form">
                                            <label>First Name *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleFirstname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Last Name *</label>
                                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleLastname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Adresse e-mail *</label>
                                            <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                        </div>
                                       
                                        <div className="single-form">
                                            <button className="main-btn btn-block" id="form-register" onClick={this.handleSumit}>Register</button>
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