import React, { Component } from 'react'
import {connect } from 'react-redux';

class Contact extends Component {
    
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
                            <h2 className="title">Contact</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-contact-info mt-30">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Address</h5>
                                    <p>297 Central Street, New Town North City, New York, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-contact-info mt-30">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h5 className="title">Phone</h5>
                                    <p><a href="tel:+62548254658">+62548 254 658</a></p>
                                    <p><a href="tel:+99875587478">+99875 587 478</a></p>
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
                                    <p><a href="mailto://info@example.com">info@example.com</a></p>
                                    <p><a href="www.example.com">www.example.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-title text-center">
                                    <h3 className="title">Leave a message here</h3>
                                    <p>Here is our event schedule where you can get information about time schedule about this event so it's very easy for you to manage your time and schedule</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <form id="contact-form" action="/#" method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="name" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="phone" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input type="text" name="subject" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <textarea name="message" placeholder="Write here..."></textarea>
                                                </div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="single-form text-center">
                                                    <button className="main-btn">Submit now</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);