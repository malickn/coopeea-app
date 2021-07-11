import React, { Component } from 'react'
import {connect } from 'react-redux';

class ServicesForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: '',
            lastname: '',
            email : '',
            grade : '',
            year : '',
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
    handleGrade = (event) => {
        this.setState({grade : event.target.value});
    }
    handleYear = (event) => {
        this.setState({year : event.target.value});
    }
    handleComment = (event) => {
        this.setState({comment : event.target.value});
    }

    handleSumit = (e) => {
        e.preventDefault();
        this.setState({errorMessage : ''})
        this.setState({successMessage : ''})
        const error = this.validate(this.state.firstname, this.state.lastname, this.state.email, this.state.grade, this.state.year);
        this.setState({show : true})
        if(error.length > 0){
            this.setState({errorMessage : error})
        }else{

            const data = {
                    firstname:this.state.firstname,
                    lastname:this.state.lastname,
                    email : this.state.email,
                    grade : this.state.grade,
                    year : this.state.year,
                    comment : this.state.comment,
                    lg : this.props.language
            };
            const endpoint = 'https://coopeea.org/api/register.php';

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
                    this.setState({grade : ''});
                    this.setState({year : ''});
                    this.setState({comment : ''});
                }
            })
            .catch(err => {
                this.setState({errorMessage : err})
            });
        }
    }

    validate = (firstname, lastname, email, grade, year) => {
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
        if (grade.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your grade" : "Veuillez saisir votre niveau";
            return n;
        }
        if (year.length === 0) {
            const n = (this.props.language !== 'English') ? "Please enter your year" : "Veuillez saisir votre année";
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
            <section class="formular">
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <form action="/#" method="post" id="form">
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
                                            <label>Niveau *</label>
                                            <input type="grade" name="grade" id="grade" placeholder="Primaire, secondaire" value={this.state.grade} onChange={this.handleGrade}/>
                                        </div>
                                       
                                        <div className="single-form">
                                            <label>Année *</label>
                                            <input type="text" name="year" id="year" value={this.state.year} onChange={this.handleYear}/>
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
                <div className="container" style={hideFrench}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                
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
                                            <label>Email *</label>
                                            <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Grade (elementary, high school)*</label>
                                            <input type="grade" name="grade" id="grade" placeholder="Primary, secondary" value={this.state.grade} onChange={this.handleGrade}/>
                                        </div>
                                        <div className="single-form">
                                            <label>Year *</label>
                                            <input type="text" name="year" id="year" value={this.state.year} onChange={this.handleYear}/>
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
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesForm);