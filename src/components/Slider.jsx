

import React, { Component } from 'react';
import {connect } from 'react-redux';

class Slider extends Component {
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <>
            <section className="slider-area slider-active" style={hideEnglish}>
                <div className="single-slider d-flex align-items-center bg_cover" style={{backgroundImage: "url(assets/images/slider-1.jpg)"}}>
                    <div className="container">
                        <div className="slider-content">
                            <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">L'éducation est l'arme la plus puissante</h2>
                            <ul className="slider-btn">
                                <li><a data-animation="fadeInUp" data-delay="0.6s" className="main-btn main-btn-2" href="our-courses-left-sidebar.html">Voir les cours</a></li>
                                <li><a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="http://coopeea.org">Voir plus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="single-slider d-flex align-items-center bg_cover" style={{backgroundImage: "url(assets/images/slider-2.jpg)"}}>
                    <div className="container">
                        <div className="slider-content">
                            <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">L'éducation est l'arme la plus puissante</h2>
                            <ul className="slider-btn">
                                <li><a data-animation="fadeInUp" data-delay="0.6s" className="main-btn main-btn-2" href="our-courses-left-sidebar.html">Voir les cours</a></li>
                                <li><a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="http://coopeea.org">Voir plus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
             <section className="slider-area slider-active" style={hideFrench}>
             <div className="single-slider d-flex align-items-center bg_cover" style={{backgroundImage: "url(assets/images/slider-1.jpg)"}}>
                 <div className="container">
                     <div className="slider-content">
                         <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">Education is the most powerful weapon</h2>
                         <ul className="slider-btn">
                             <li><a data-animation="fadeInUp" data-delay="0.6s" className="main-btn main-btn-2" href="our-courses-left-sidebar.html">View Courses</a></li>
                             <li><a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="http://coopeea.org">Learn more</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
             <div className="single-slider d-flex align-items-center bg_cover" style={{backgroundImage: "url(assets/images/slider-2.jpg)"}}>
                 <div className="container">
                     <div className="slider-content">
                         <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">Education is the most powerful weapon</h2>
                         <ul className="slider-btn">
                             <li><a data-animation="fadeInUp" data-delay="0.6s" className="main-btn main-btn-2" href="our-courses-left-sidebar.html">View Courses</a></li>
                             <li><a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="http://coopeea.org">Learn more</a></li>
                         </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

