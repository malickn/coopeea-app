import React, { Component } from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Testimonials from '../components/Testimonials';
import Counterstart from '../components/Counterstart';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Topcourses from '../components/Topcourses';

class Home extends Component {
    
    render() {
        return (
            <>
                <Header />
                <Slider />
                <About />
                <Features />
                <Topcourses />
                <Testimonials />
                <Counterstart />
                <Newsletter />
                <Footer />
            </>
        );
    }
}

export default Home;