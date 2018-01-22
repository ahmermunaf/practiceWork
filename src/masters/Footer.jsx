import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <span>
                <div className="page-wrapper">
                 {/* <!--Clients Section--> */}
                    {/* <section className="clients-section" style={{backgroundImage:'url(./assets/images/background/1.jpg)'}}>
                        <div className="auto-container">
                            <div className="sponsors-outer">
                                {/* <!--Sponsors Carousel--> */}
                                {/* <ul className="sponsors-carousel owl-carousel owl-theme">
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/1.png" alt="" /></a></figure></li>
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/2.png" alt="" /></a></figure></li>
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/3.png" alt="" /></a></figure></li>
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/4.png" alt="" /></a></figure></li>
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/1.png" alt="" /></a></figure></li>
                                    <li className="slide-item"><figure className="image-box"><a href="#"><img src="./assets/images/clients/2.png" alt="" /></a></figure></li>
                                </ul>
                            </div>

                        </div> */}
                    {/* </section> */} */}
                    {/* <!--End Clients Section--> */}
                    <footer className="main-footer">
                        {/* <div className="auto-container"> */}
                            {/* Widgets Section */}
                            {/* <div className="widgets-section">
                                <div className="row clearfix">
                                </div>
                            </div> */}

                        {/* </div> */}
                        {/* Footer Bottom */}
                        <div className="footer-bottom">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="column col-md-6 col-sm-8 col-xs-12">
                                        <div className="copyright">Copyright &copy; 2017 Jetpur Memon Association. All rights reserved</div>
                                    </div>
                                    <div className="social-column col-md-6 col-sm-4 col-xs-12">
                                        <ul className="social-icon-one style-two">
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
                    </footer>

                </div>
                {/* End pagewrapper */}

                {/* // Scroll to top */}
                <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-up"></span></div>

            </span>
        )
    }
}
export default Footer;