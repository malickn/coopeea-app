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
            phone : '',
            comment : '',
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
    handlePhone = (event) => {
        this.setState({phone : event.target.value});
    }
    handleMemberType = (event) => {
        this.setState({membertype : event.target.value});
    }
    handleComment = (event) => {
        this.setState({comment : event.target.value});
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.setState({errorMessage : ''})
        this.setState({successMessage : ''})
        const error = this.validate(this.state.firstname, this.state.lastname, this.state.email, this.state.phone);
        this.setState({show : true})
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    firstname:this.state.firstname,
                    lastname:this.state.lastname,
                    email : this.state.email,
                    phone : this.state.phone,
                    membertype: this.state.membertype,
                    comment : this.state.comment,
                    lg : this.props.language
            };
            const endpoint = 'https://coopeea.org/api/member.php';

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
                    this.setState({membertype : 'Simple'});
                    this.setState({comment : ''});
                }
            })
            .catch(err => {
                this.setState({errorMessage : err})
            });
        }
    }

    telephoneCheck = (str) => {
        var patt = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
        return patt.test(str);
    }

    validate = (firstname, lastname, email, phone) => {
        const errors = '';
        
        if (firstname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your First Name" : "Veuillez saisir votre prénom";
            return n;
        }
        if (lastname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your Last Name" : "Veuillez saisir votre nom";
            return n;
        }
        if (phone.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your phone number" : "Veuillez saisir votre téléphone";
            return n;
        }

        if(!this.telephoneCheck(phone)){
            const n = (this.props.language !== 'English') ? "Please enter a valid phone number" : "Veuillez saisir un téléphone valide";
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Devenir membre</h2>
                                <span className="line"></span>
                                <div className="subtitle">Il existe deux types de membres :</div>
                                <div className="ulitems">
                                    <div className="ulitem">- Membre simple : Est membre simple toute personne ayant acquitté sa cotisation mais ne travaille pas dans la Coopérative. Un membre simple a le droit de participer à toutes les activités, de recevoir toute l'information diffusée par la Coopérative, notamment les avis de convocation aux Assemblées générales des membres, d'assister à ces Assemblées et d'y voter. Il a droit à des ristournes. Il est éligible comme administrateur de la Coopérative.</div>
                                    <div className="ulitem">- Membre travailleur : Est membre travailleur toute personne ayant acquitté sa cotisation et qui a des tâches dans la Coopérative. Un membre travailleur a le droit de participer à toutes les activités, de recevoir toute l'information diffusée par la Coopérative, notamment les avis de convocation aux Assemblées générales des membres, d'assister à ces Assemblées et d'y voter. Il a droit à des honoraires pour son travail et à des ristournes. Il est éligible comme administrateur de la Coopérative.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Créer un nouveau compte</h4>
                                <div className="cf-msg"></div>
                                <div className="login-register-form">
                                    <form action="/#" method="post">
                                        
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
                                            <label>Téléphone *</label>
                                            <input type="phone" name="phone" id="phone" placeholder="Téléphone" value={this.state.phone} onChange={this.handlePhone}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Type de membre *</label>
                                            <select className="custom-select" name="membertype" id="membertype" value={this.state.membertype} onChange={this.handleMemberType}>
                                                <option value="Simple" selected>Simple</option>
                                                <option value="Worker">Travailleur</option>
                                            </select>
                                        </div>
                                       
                                        <div className="single-form">
                                            <label>Commentaire</label>
                                            <textarea className="form-control" id="comment" name="comment" value={this.state.comment} rows="3" onChange={this.handleComment}></textarea>
                                        </div>
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Become a member</h2>
                                <span className="line"></span>
                                <div className="subtitle">There are two types of members:</div>
                                <div className="ulitems">
                                    <div className="ulitem">- Single member : A single member is any person who has paid his or her dues but does not work for the Cooperative. A simple member has the right to participate in all activities, to receive all of the information disseminated by the Cooperative, including notices of general meetings of members, to attend these assemblies and to vote. He is entitled to dividends. He is eligible to be a director of the Cooperative.</div>
                                    <div className="ulitem">- Working member : A working member is any person who has paid his dues and who performs duties in the Cooperative. A working member has the right to participate in all the activities, to receive all the information disseminated by the Cooperative, including notices of general meetings of members, to attend these meetings and to vote. He is entitled to an honorarium for his work and to dividends. He is eligible to be a director of the Cooperative.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Create a new account</h4>
                                <div className="cf-msg"></div>
                                <div className="login-register-form">
                                    <form action="/#" method="post">
                                        
                                        <div className="single-form">
                                            <label>First Name *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleFirstname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Last Name *</label>
                                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleLastname}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Email address *</label>
                                            <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Phone *</label>
                                            <input type="phone" name="phone" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhone}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Member Type *</label>
                                            
                                                <select name="membertype" id="membertype" value={this.state.membertype} onChange={this.handleMemberType}>
                                                    <option value="Simple" checked>Single</option>
                                                    <option value="Worker">Worker</option>
                                                </select>
                                            
                                        </div>
                                        <div className="single-form">
                                            <label>Comment</label>
                                            <textarea className="form-control" id="comment" name="comment" value={this.state.comment} rows="3" onChange={this.handleComment}></textarea>
                                        </div>
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