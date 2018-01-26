import Header from '../masters/Header'
import Footer from '../masters/Footer'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
class About extends Component {
    render() {
        document.title = "About Us";
        return (
            <span>
                <Header currentComponent="aboutus" />
                <div className="page-wrapper">
                    {/* <!--Page Title--> */}
                    <section className="page-title" style={{backgroundImage:'url(./assets/images/background/banner-4.jpg)'}}>
                        <div className="auto-container">
                            <div className="row clearfix">
                                {/* <!--Title --> */}
                                <div className="title-column col-md-6 col-sm-8 col-xs-12">
                                    <h1>About Us</h1>
                                </div>
                                {/* <!--Bread Crumb --> */}
                                <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
                                    <ul className="bread-crumb clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--End Page Title--> */}

                    {/* <!--Point Section--> */}
                    <section className="point-section">
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="sec-title">
                                    <h2>Welcome to Charity Point</h2>
                                </div>
                                <div className="text">
                                    <p>We are confident to confirm that all members in Charity are professionals in the charity.It means that human resources experience in the field with consultant, organization events for needy. Core values are the fundamental beliefs of a person or organization. The core values are the guiding prin ples that dictate behavior and action suas labore saperet has there any quote for write .</p>
                                    <p>Our long – term working experience effectively brings us achievement.Our mission is to provide the great result for clients on time. Especially, if they have any questions relating the Charity, please send us. Moluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Moluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="row clearfix">
                                    <div className="column col-md-6 col-sm-6 col-xs-12">
                                        <ul className="list-style-one">
                                            <li>We will try our best to deal with issues.</li>
                                            <li>Usu graecis eleifend intellege ne quiaug tollit.</li>
                                            <li>Moluptate velit esse cillum dolore eu fugiat.</li>
                                        </ul>
                                    </div>
                                    <div className="column col-md-6 col-sm-6 col-xs-12">
                                        <ul className="list-style-one">
                                            <li>Core values are the fundamental beliefs.</li>
                                            <li>Charity are professionals in the charity. </li>
                                            <li>Our mission is to provide the great result for clients on time.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--End Point Section--> */}

                    {/* <!--Video Section--> */}
                    <section className="video-section" style={{backgroundImage: 'url(./assets/images/background/8.jpg)'}}>
                        <a className="lightbox-image play-link" href="https://www.youtube.com/watch?v=1sVEYNH8gbk">
                            <div className="icon-box wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><span className="flaticon-right-arrow-2"></span></div>
                        </a>
                    </section>
                    {/* <!--End Video Section--> */}

                    {/* <!--Default Section--> */}
                    <section className="default-section">
                        <div className="auto-container">
                            <div className="row clearfix">

                                {/* <!--Accordian Column--> */}
                                <div className="accordian-column col-md-6 col-sm-12 col-xs-12">
                                    <div className="sec-title">
                                        <h2>Why Choos Us</h2>
                                    </div>

                                    {/* <!--Accordion Box--> */}
                                    <ul className="accordion-box">

                                        {/* <!--Block--> */}
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active"><div className="icon-outer"><span className="icon fa fa-caret-right"></span></div>How can i make a Donation?</div>
                                            <div className="acc-content current">
                                                <div className="content"><p>Lorem ipsum dolor sit amet, vix an natum labuti eleifd, mel am laoreetmenandri. Ei justo complectitur duo. Ei solet tos soletu possit quo. Sea cu justo laudem.</p></div>
                                            </div>
                                        </li>

                                        {/* <!--Block--> */}
                                        <li className="accordion block">
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon fa fa-caret-right"></span> </div>Maximize tax advantages for your gift</div>
                                            <div className="acc-content">
                                                <div className="content"><p>Lorem ipsum dolor sit amet, vix an natum labuti eleifd, mel am laoreetmenandri. Ei justo complectitur duo. Ei solet tos soletu possit quo. Sea cu justo laudem.</p></div>
                                            </div>
                                        </li>

                                        {/* <!--Block--> */}
                                        <li className="accordion block">
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon fa fa-caret-right"></span> </div>Our experience</div>
                                            <div className="acc-content">
                                                <div className="content"><p>Lorem ipsum dolor sit amet, vix an natum labuti eleifd, mel am laoreetmenandri. Ei justo complectitur duo. Ei solet tos soletu possit quo. Sea cu justo laudem.</p></div>
                                            </div>
                                        </li>

                                        {/* <!--Block--> */}
                                        <li className="accordion block">
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon fa fa-caret-right"></span> </div>Most Trusted </div>
                                            <div className="acc-content">
                                                <div className="content"><p>Lorem ipsum dolor sit amet, vix an natum labuti eleifd, mel am laoreetmenandri. Ei justo complectitur duo. Ei solet tos soletu possit quo. Sea cu justo laudem.</p></div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                {/* <!--Mission Column--> */}
                                <div className="mission-column col-md-6 col-sm-12 col-xs-12">
                                    <div className="sec-title">
                                        <h2>Our Mission</h2>
                                    </div>
                                    <div className="text">Our mission is to provide the great result for clients on time. Especially, if they have any questions relating the Charity, please send us.</div>
                                    {/* <!--Mission Block--> */}
                                    <div className="mission-block">
                                        <div className="inner-box">
                                            <div className="image">
                                                <img src="./assets/images/resource/mission.jpg" alt="" />
                                            </div>
                                            <h3><a href="#">Donation invest to right place.</a></h3>
                                            <div className="mission-text">Our long - term working experience effectively brings us achievement.</div>
                                        </div>
                                    </div>

                                    {/* <!--Mission Block--> */}
                                    <div className="mission-block">
                                        <div className="inner-box">
                                            <div className="image">
                                                <img src="./assets/images/resource/mission-1.jpg" alt="" />
                                            </div>
                                            <h3><a href="#">Inform the volunteer for project.</a></h3>
                                            <div className="mission-text">Our long - term working experience effectively brings us achievement.</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                    {/* <!--End Default Section--> */}

                </div>
                <Footer />
            </span>
        )
    }
}
export default About