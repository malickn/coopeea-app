import React, { Component } from 'react';
import {connect } from 'react-redux';

class Counterstart extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <div className="counter-area">
                <div className="container">
                    <div className="counter-wrapper bg_cover" style={{backgroundImage: "url(assets/images/counter-bg.jpg)"}}>
                        <div className="row">
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s" style={hideEnglish}>
                                    <span className="counter-count"><span className="count">80</span> +</span>
                                    <p>Etudiants</p>
                                </div>
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s" style={hideFrench}>
                                    <span className="counter-count"><span className="count">80</span> +</span>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s" style={hideEnglish}>
                                    <span className="counter-count"><span className="count">2</span></span>
                                    <p>Filières</p>
                                </div>
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s" style={hideFrench}>
                                    <span className="counter-count"><span className="count">2</span></span>
                                    <p>Sectors</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s" style={hideEnglish}>
                                    <span className="counter-count"><span className="count">4</span></span>
                                    <p>Formations</p>
                                </div>
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s" style={hideFrench}>
                                    <span className="counter-count"><span className="count">4</span></span>
                                    <p>Training</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.8s" style={hideEnglish}>
                                    <span className="counter-count"><span className="count">10</span> +</span>
                                    <p>Récompanses</p>
                                </div>
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.8s" style={hideFrench}>
                                    <span className="counter-count"><span className="count">10</span> +</span>
                                    <p>Awards</p>
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

export default connect(mapStateToProps)(Counterstart);








