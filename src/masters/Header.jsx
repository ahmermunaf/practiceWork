import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const navbar = [
    {
        heading: "Home",
        href:"/"
    },
    {
        heading: "About Us",
        href:"aboutus"
    },
    {
        heading: "Our Team",
        href:"team"
    },
    {
        heading: "Contact Us",
        href:"contactus"
    },
];
class Header extends Component {

    render() {
        return (
            <span>
                <div className="page-wrapper">
                    <div className="preloader"></div>
                    <header className="main-header header-style-two">
                        <div className="header-upper">
                            <div className="auto-container">
                                <div className="clearfix">

                                    <div className="pull-left logo-outer">
                                        <div className="logo"><img src="./../../assets/images/logo.png" alt="" title="" /></div>
                                    </div>

                                    <div className="pull-right upper-right clearfix">


                                        <div className="upper-column info-box">
                                            <ul>
                                                <li><span className="icon flaticon-technology-1"></span><strong>Phone.</strong></li>
                                                <li>(1) 111-123-458</li>
                                            </ul>
                                        </div>


                                        <div className="upper-column info-box">
                                            <ul>
                                                <li><span className="icon flaticon-symbol"></span><strong>Email</strong></li>
                                                <li>mail@example.com</li>
                                            </ul>
                                        </div>


                                        <div className="upper-column info-box">
                                            <ul>
                                                <li><span className="icon flaticon-location-pin"></span><strong>Location</strong></li>
                                                <li>Tottenam Road, NewYark.</li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="header-lower">
                            <div className="auto-container">
                                <div className="nav-outer clearfix">

                                    <nav className="main-menu">
                                        <div className="navbar-header">

                                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div className="navbar-collapse collapse clearfix">
                                            <ul className="navigation clearfix">
                                                {
                                                    navbar.map((value,index) => ( 
                                                        <li key={index} className={value.href==this.props.currentComponent?'current':''}>
                                                            <Link 
                                                            to={value.href} 
                                                           // onClick={()=>{window.location.reload()}}
                                                            >
                                                                {value.heading}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </nav>

                                    {/* <div className="outer-box">
                                        <a href="#" className="theme-btn btn-style-two">Join Us</a>
                                        <a href="donate.html" className="theme-btn btn-style-one">Donate</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>



                        <div className="sticky-header">
                            <div className="auto-container clearfix">

                                <div className="logo pull-left">
                                    <Link to="/" className="img-responsive" title=""><img src="./assets/images/logo-small.png" alt="" title="" /></Link>
                                </div>


                                <div className="right-col pull-right">

                                    <nav className="main-menu">
                                        <div className="navbar-header">

                                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div className="navbar-collapse collapse clearfix">
                                            <ul className="navigation clearfix">
                                                {
                                                    navbar.map((value,ind) => (
                                                        <li key={ind} className={value.href==this.props.currentComponent?'current':''}>
                                                            <Link 
                                                            to={value.href} 
                                                            //onClick={()=>{window.location.reload()}}
                                                            >
                                                                {value.heading}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>

                    </header>
                </div>
            </span>
        )
    }
}
export default Header;