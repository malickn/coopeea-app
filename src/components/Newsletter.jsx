import React, { Component } from 'react';
import {connect } from 'react-redux';

class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            successMessage : '',
            errorMessage : '' ,
            show : false     
        };
    }
    handleEmail = (event) => {
        this.setState({email : event.target.value});
    }
    handleSubscribe = (e) => {
        e.preventDefault();
        this.setState({errorMessage : ''})
        this.setState({successMessage : ''})
        const error = this.validateEmail(this.state.email);
        this.setState({show : true})
        
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    email : this.state.email,
                    lg : this.props.language
            };
            const endpoint = 'https://coopeea.org/api/newsletter.php';

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
                    this.setState({email : ''});
                }
                
            })
            .catch(err => {
                this.setState({errorMessage : err})
            });
        }
        
    }

    validateEmail = (email) => {
        const errors = '';
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
            <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-wrapper bg_cover wow zoomIn" data-wow-duration="1s" data-wow-delay="0.2s" style={{backgroundImage: "url(assets/images/newsletter-bg-1.jpg)"}}>
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
                                        <input type="text" placeholder='test@test.com' value={this.state.email} onChange={this.handleEmail}/>
                                        <button className="main-btn main-btn-2" style={hideEnglish} onClick={this.handleSubscribe}>Abonnez-vous maintenant</button>
                                        <button className="main-btn main-btn-2" style={hideFrench} onClick={this.handleSubscribe}>Subscribe now</button>
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