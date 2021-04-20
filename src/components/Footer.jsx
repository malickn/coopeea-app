import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="footer-area bg_cover" style={{backgroundImage: "url(assets/images/counter-bg.jpg)"}}>
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Our Campus</h4>
                                    <ul className="link-list">
                                        <li><a href="about-us.html">About us</a></li>
                                        <li><a href="http://coopeea.org">Campus map</a></li>
                                        <li><a href="http://coopeea.org">360O  view</a></li>
                                        <li><a href="http://coopeea.org">Notice board</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Information</h4>
                                    <ul className="link-list">
                                        <li><a href="http://coopeea.org">Admission</a></li>
                                        <li><a href="http://coopeea.org">Tuition fee</a></li>
                                        <li><a href="http://coopeea.org">Scholorship</a></li>
                                        <li><a href="http://coopeea.org">Coditions</a></li>
                                        <li><a href="http://coopeea.org">Facilities</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Useful Link</h4>
                                    <ul className="link-list">
                                        <li><a href="our-courses-left-sidebar.html">All Courses</a></li>
                                        <li><a href="teachers.html">Our Teachers</a></li>
                                        <li><a href="event.html">Our Events</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog post</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <ul className="link-list">
                                        <li>
                                            <p>245, New Town, Marklen Street North City, New York, USA</p>
                                        </li>
                                        <li>
                                            <p><a href="tel:+01254659874">+01254 659 874 </a></p>
                                            <p><a href="tel:+32145857458">+32145 857 458</a></p>
                                        </li>
                                        <li>
                                            <p><a href="mailto://info@example.com">info@example.com</a></p>
                                            <p><a href="http://coopeea.org">www.example.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright text-center">
                            <p>&copy; Copyright all right reserved by <a href="https://coopeea.org/">Coopeea</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};