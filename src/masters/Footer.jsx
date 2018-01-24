import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <span>
                <div className="page-wrapper">
                    <footer className="main-footer">
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
            </span>
        )
    }
}
export default Footer;