

import React, { Component } from 'react';
import {connect } from 'react-redux';

class Features extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <div className="features-area-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="features-image-2">
                                <img className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" src="assets/images/features-2.png" alt="Features" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="features-items">
                                <div className="features-items-wrapper">
                                    <div className="single-features-item d-flex align-items-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div className="item-icon">
                                            <img src="assets/images/icon/icon-2-1.png" alt="Icon" />
                                        </div>
                                        <div className="item-content media-body" style={hideEnglish}>
                                            <p>250+ <br/>Cours</p>
                                        </div>
                                        <div className="item-content media-body" style={hideFrench}>
                                            <p>250+ <br/>Courses</p>
                                        </div>
                                    </div>
                                    <div className="single-features-item d-flex align-items-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.6s">
                                        <div className="item-icon">
                                            <img src="assets/images/icon/icon-2-3.png" alt="Icon" />
                                        </div>
                                        <div className="item-content media-body" style={hideEnglish}>
                                            <p>Education en ligne</p>
                                        </div>
                                        <div className="item-content media-body" style={hideFrench}>
                                            <p>Online education</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="features-items-wrapper">
                                    <div className="single-features-item d-flex align-items-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div className="item-icon">
                                            <img src="assets/images/icon/icon-2-4.png" alt="Icon" />
                                        </div>
                                        <div className="item-content media-body" style={hideEnglish}>
                                            <p>Enseignants Expert</p>
                                        </div>
                                        <div className="item-content media-body" style={hideFrench}>
                                            <p>Expert Teachers</p>
                                        </div>
                                    </div>
                                    <div className="single-features-item d-flex align-items-center wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.4s">
                                        <div className="item-icon">
                                            <img src="assets/images/icon/icon-2-5.png" alt="Icon" />
                                        </div>
                                        <div className="item-content media-body" style={hideEnglish}>
                                            <p>Attestation après cours</p>
                                        </div>
                                        <div className="item-content media-body" style={hideFrench}>
                                            <p>Certificate after course</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        language : state.language
    };
};

export default connect(mapStateToProps)(Features);








