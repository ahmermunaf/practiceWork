import Header from '../masters/Header'
import Footer from '../masters/Footer'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
class Team extends Component {
    render() {
        document.title = "Our Team";
        return (
            <span>
                <Header currentComponent="team" />
                <div className="page-wrapper">
                    {/* <!--Page Title--> */}
                    <section className="page-title" style={{backgroundImage:'url(./assets/images/background/banner-4.jpg)'}}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* <!--Title --> */}
                                <div className="title-column col-md-6 col-sm-8 col-xs-12">
                                    <h1>Our Team</h1>
                                </div>
                                {/* <!--Bread Crumb --> */}
                                <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
                                    <ul className="bread-crumb clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Our Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--End Page Title--> */}
                    {/* <!--Team Section Two--> */}
                    
                    <section className="team-section-two">
                        <h2 style={{alignContent:'center',alignSelf:'center',alignItems:'center',textAlign:'center',justifyContent:'center',paddingBottom:50}}>Office Bearers</h2>
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-5.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Asif Majid</h3>
                                                    <h3>Panawala</h3>
                                                    <div className="designation">President</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-6.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Ahmed Munaf</h3>
                                                    <h3>Lodhikawala</h3>
                                                    <div className="designation">Vice President</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-7.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Suleman Faludia</h3>
                                                    <div className="designation">General Secretary</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-8.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Imran Siddiq</h3>
                                                    <h3>Udhi</h3>
                                                    <div className="designation">Joint Secretary</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Abdul Qadir</h3>
                                                    <h3>Sultan</h3>
                                                    <div className="designation">Treasurer</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="team-section-two">
                        <h2 style={{alignContent:'center',alignSelf:'center',alignItems:'center',textAlign:'center',justifyContent:'center',paddingBottom:50}}>Managing Committee Members</h2>
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-5.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Altaf Tai</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-6.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Abdul Razzak</h3>
                                                    <h3>Mianoor</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-7.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Amin Taufiq</h3>
                                                    <h3>Sultanpurwala</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-8.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Aman Zakaria</h3>
                                                    <h3>Moten</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Team Block Two--> */}
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Idrees Mianoor</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Amin Suleman</h3>
                                                    <h3>Adamjee</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Wahid Wali</h3>
                                                    <h3>M.Aba Andha</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Irfan A.Ghaffar</h3>
                                                    <h3>Andha Chicha</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Wahid</h3>
                                                    <h3>Lodhikawala</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-two col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/resource/team-13.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3>Mehmood Hanif</h3>
                                                    <h3>Andha</h3>
                                                    <div className="designation">MC Member</div>
                                                    <ul className="social-icon-two">
                                                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-pinterest-p"></span></a></li>
                                                        <li><a href="#"><span className="fa fa-behance"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </span>
        )
    }
}
export default Team