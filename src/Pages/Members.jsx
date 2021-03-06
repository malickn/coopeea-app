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
        const error = this.validate(this.state.firstname, this.state.lastname, this.state.email);
        this.setState({show : true})
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    firstname:this.state.firstname,
                    lastname:this.state.lastname,
                    email : this.state.email,
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

    validate = (firstname, lastname, email) => {
        const errors = '';
        
        if (firstname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your First Name" : "Veuillez saisir votre pr??nom";
            return n;
        }
        if (lastname.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your Last Name" : "Veuillez saisir votre nom";
            return n;
        }
        if (email.length < 5) {
            const n = (this.props.language !== 'English') ? "Email should be at least 5 charcters long" : "Le courriel doit comporter au moins 5 caract??res";
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
                                    <div className="ulitem">- Membre simple : Est membre simple toute personne ayant acquitt?? sa cotisation mais ne travaille pas dans la Coop??rative. Un membre simple a le droit de participer ?? toutes les activit??s, de recevoir toute l'information diffus??e par la Coop??rative, notamment les avis de convocation aux Assembl??es g??n??rales des membres, d'assister ?? ces Assembl??es et d'y voter. Il a droit ?? des ristournes. Il est ??ligible comme administrateur de la Coop??rative.</div>
                                    <div className="ulitem">- Membre travailleur : Est membre travailleur toute personne ayant acquitt?? sa cotisation et qui a des t??ches dans la Coop??rative. Un membre travailleur a le droit de participer ?? toutes les activit??s, de recevoir toute l'information diffus??e par la Coop??rative, notamment les avis de convocation aux Assembl??es g??n??rales des membres, d'assister ?? ces Assembl??es et d'y voter. Il a droit ?? des honoraires pour son travail et ?? des ristournes. Il est ??ligible comme administrateur de la Coop??rative.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Cr??er un nouveau compte</h4>
                                <div className="cf-msg"></div>
                                <div className="login-register-form">
                                    <form action="/#" method="post">
                                        
                                        <div className="single-form">
                                            <label>Pr??nom *</label>
                                            <input type="text" name="firstname" id="firstname" placeholder="Pr??nom" value={this.state.firstname} onChange={this.handleFirstname}/>
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