import Header from '../masters/Header'
import Footer from '../masters/Footer'
import React, { Component } from 'react'
class Contact extends Component {
    render() {
        document.title = "Contact Us";
        return (
            <span>
                
                <Header currentComponent="contactus" />
                <div className="page-wrapper">
                    {/* <!--Page Title--> */}
                    <section className="page-title" style={{backgroundImage:'url(./assets/images/background/banner-4.jpg)'}}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* <!--Title --> */}
                                <div className="title-column col-md-6 col-sm-8 col-xs-12">
                                    <h1>Contact Us</h1>
                                </div>
                                {/* <!--Bread Crumb --> */}
                                <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
                                    <ul className="bread-crumb clearfix">
                                        <li><a href="index-2.html">Home</a></li>
                                        <li className="active">Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--End Page Title--> */}

                    {/* <!--Contact Info Section--> */}
                    <section className="info-contact-section">
                        <div className="auto-container">
                            <div className="row clearfix">

                                {/* <!--Info Column--> */}
                                <div className="info-column col-md-4 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span className="icon flaticon-world"></span>
                                        </div>
                                        <h3>Address</h3>
                                        <div className="text">Cecil Sharp House14 Tottenham <br /> Court Road, NewYark.</div>
                                    </div>
                                </div>

                                {/* <!--Info Column--> */}
                                <div className="info-column col-md-4 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span className="icon flaticon-technology-1"></span>
                                        </div>
                                        <h3>Phone</h3>
                                        <div className="text">You call us on phone number. <br /> 1(784)-775-97-377</div>
                                    </div>
                                </div>

                                {/* <!--Info Column--> */}
                                <div className="info-column col-md-4 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <div className="icon-box">
                                            <span className="icon flaticon-symbol"></span>
                                        </div>
                                        <h3>Email</h3>
                                        <div className="text">info@yoursite.com <br /> www.infoyoursite.com</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!--End Contact Info Section--> */}

                    {/* <!--Contact Form Section--> */}
                    <div className="contact-form-section">
                        <div className="auto-container">
                            <h2>Get in Touch</h2>
                            <div className="text">if you want to get more info, ping us now.</div>

                            {/* <!--Contact Form--> */}
                            <div className="contact-form">
                                <form method="post" action="http://effortthemes.com/html/charitypoint/sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-4 col-sm-6 col-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required />
                                        </div>
                                        <div className="form-group col-md-4 col-sm-6 col-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required />
                                        </div>
                                        <div className="form-group col-md-4 col-sm-12 col-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12 text-center">
                                            <button type="submit" className="theme-btn btn-style-two">Send Now</button>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <iframe
                    style={{width:'100%',height:600,border:0}} 
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD30EQWgjVEGrEn550dH9AgelRZ0slMY48&q=jetpur+memon,association" allowfullscreen>
                </iframe>
                <Footer />
            </span>
        )
    }
}
export default Contact