import Header from '../masters/Header'
import Footer from '../masters/Footer'
import React, { Component } from 'react'
class Home extends Component {
    constructor(){
        super();
        this.state={
            flag:false
        }
        console.log('hhahahah')
    }
   async componentDidMount(){
        console.log('hey')
       await this.setState({
            flag:true
        })
    }
    render() {
        document.title = "Home";
        return (
            <span>
                <Header currentComponent="/" />
                {(this.state.flag === true) ? 
                <div className="page-wrapper">
                    {/* <!--Main Slider--> */}
                    <section className="main-slider">

                        <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
                            <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                                <ul>

                                    <li data-description="Slide Description" data-easein="default" data-easeout="default" data-fsmasterspeed="1500" data-fsslotamount="7" data-fstransition="fade" data-hideafterloop="0" data-hideslideonmobile="off" data-index="rs-1688" data-masterspeed="default" data-param1="" data-param10="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-rotate="0" data-saveperformance="off" data-slotamount="default" data-thumb="images/main-slider/image-1.jpg" data-title="Slide Title" data-transition="parallaxvertical">
                                        <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="./assets/images/main-slider/image-1.jpg" />

                                        <div className="tp-caption"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['-60','-70','-80','-60']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',textTransform:'left'}}>
                                            <h1>Small Effort <br /> Make Big Change</h1>
                                        </div>

                                        <div className="tp-caption"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['50','40','20','20']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',texTransform:'left'}}>
                                            <div className="text">We are ready for provide better service to make the world happy</div>
                                        </div>

                                        <div className="tp-caption tp-resizeme"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['125','110','100','90']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',textTransform:'left'}}>
                                            <div className="btns-box">
                                                <a href="#" className="theme-btn btn-style-two">Become a Volunteer</a> <a href="donate.html" className="theme-btn btn-style-three">Donate</a>
                                            </div>
                                        </div>

                                    </li>

                                    <li data-description="Slide Description" data-easein="default" data-easeout="default" data-fsmasterspeed="1500" data-fsslotamount="7" data-fstransition="fade" data-hideafterloop="0" data-hideslideonmobile="off" data-index="rs-1689" data-masterspeed="default" data-param1="" data-param10="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-rotate="0" data-saveperformance="off" data-slotamount="default" data-thumb="images/main-slider/image-1.jpg" data-title="Slide Title" data-transition="parallaxvertical">
                                        <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="./assets/images/main-slider/image-2.jpg" />

                                        <div className="tp-caption"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['-60','-70','-80','-60']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',textTransform:'left'}}>
                                            <h1>Small Effort <br /> Make Big Change</h1>
                                        </div>

                                        <div className="tp-caption"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['50','40','20','20']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',textTransform:'left'}}>
                                            <div className="text">We are ready for provide better service to make the world happy</div>
                                        </div>

                                        <div className="tp-caption tp-resizeme"
                                            data-paddingbottom="[0,0,0,0]"
                                            data-paddingleft="[0,0,0,0]"
                                            data-paddingright="[0,0,0,0]"
                                            data-paddingtop="[0,0,0,0]"
                                            data-responsive_offset="on"
                                            data-type="text"
                                            data-height="none"
                                            data-width="['700','700','600','450']"
                                            data-whitespace="normal"
                                            data-hoffset="['0','0','0','0']"
                                            data-voffset="['125','110','100','90']"
                                            data-x="['right','right','right','right']"
                                            data-y="['middle','middle','middle','middle']"
                                            data-textalign="['top','top','top','top']"
                                            data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                            style={{zIndex: 7, whiteSpace: 'nowrap',textTransform:'left'}}>
                                            <div className="btns-box">
                                                <a href="#" className="theme-btn btn-style-two">Become a Volunteer</a> <a href="donate.html" className="theme-btn btn-style-three">Donate</a>
                                            </div>
                                        </div>



                                    </li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </div>:null
            }
                {/* <!--End Main Slider--> */}
                {/* <!--Text Banner--> */}
                {/* <section className="text-banner">
                    <div className="auto-container">
                        <div className="text">We are non-profit NGO & Charity Organization</div>
                    </div>
                </section> */}
                {/* <!--End Text Banner--> */}

                {/* <!--Services Section--> */}
                <section className="services-section">
                    <div className="auto-container">
                        <div className="row clearfix">

                            {/* <!--Services Block--> */}
                            <div className="services-block col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <div className="icon-box"><span className="flaticon-coins"></span></div>
                                        <h3><a href="donate.html">Donation</a></h3>
                                        <div className="title">Collect fund over the world</div>
                                    </div>
                                    <div className="text">There are many variations of passage of Lorem Ipsum available, but the majority have suffered ... </div>
                                </div>
                            </div>

                            {/* <!--Services Block--> */}
                            <div className="services-block col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <div className="icon-box"><span className="flaticon-money-bag-1"></span></div>
                                        <h3><a href="donate.html">Fundrising</a></h3>
                                        <div className="title">Collect fund over the world</div>
                                    </div>
                                    <div className="text">There are many variations of passage of Lorem Ipsum available, but the majority have suffered ... </div>
                                </div>
                            </div>

                            {/* <!--Services Block--> */}
                            <div className="services-block col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <div className="icon-box"><span className="flaticon-blood-donation"></span></div>
                                        <h3><a href="donate.html">Volunteer</a></h3>
                                        <div className="title">Collect fund over the world</div>
                                    </div>
                                    <div className="text">There are many variations of passage of Lorem Ipsum available, but the majority have suffered ... </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--End Services Section--> */}

                {/* <!--Welcome Section--> */}
                <section className="welcome-section no-padd-top">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Welcome to Charity Point</h2>
                        </div>
                        <div className="row clearfix">
                            {/* <!--Video Column--> */}
                            <div className="video-column col-md-6 col-sm-12 col-xs-12">
                                {/* <!--Video Box--> */}
                                <div className="video-box">
                                    <figure className="image">
                                        <img src="./assets/images/resource/video-img.jpg" alt="" />
                                    </figure>
                                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image overlay-box"><span className="flaticon-right-arrow-2"></span></a>
                                </div>
                            </div>
                            {/* <!--Content Column--> */}
                            <div className="content-column col-md-6 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <div className="text">
                                        <p>We are confident to confirm that all members in Charity are professionals in the charity.It means that human resources experience in the field with consultant, organization events for needy.</p>
                                        <p>Our long – term working experience effectively brings us achievement.Our mission is to provide the great result for clients on time. Especially, if they have any questions relating the Charity, please send us.</p>
                                    </div>
                                    <ul className="list-style-one">
                                        <li>We will try our best to deal with issues.</li>
                                        <li>Usu graecis eleifend intellege ne quiaug tollit.</li>
                                    </ul>
                                    <a href="about.html" className="theme-btn btn-style-three">Read More About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--End Welcome Section--> */}

                {/* <!--Fun Facts Section--> */}
                <div className="fact-counter-section" style={{backgroundImage:'url(./assets/images/background/1.jpg)'}}>
                    <div className="fact-counter">
                        <div className="auto-container">
                            <div className="row clearfix">

                                {/* <!--Column--> */}
                                <div className="column counter-column col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <h4 className="counter-title">Donator</h4>
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="3500" data-stop="3586">0</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div className="column counter-column col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <h4 className="counter-title">Fundrising</h4>
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="5000" data-stop="95580">0</span><span className="plus-icon">+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div className="column counter-column col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <h4 className="counter-title">Volunteer</h4>
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="2000" data-stop="640">0</span><span className="plus-icon">+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div className="column counter-column col-md-3 col-sm-6 col-xs-12">
                                    <div className="inner">
                                        <h4 className="counter-title">Complete Projects</h4>
                                        <div className="count-outer count-box">
                                            <span className="count-text" data-speed="2000" data-stop="1980">0</span><span className="plus-icon">+</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End Fun Facts Section--> */}

                {/* <!--Causes Section--> */}
                <section className="causes-section">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Our Causes</h2>
                        </div>
                        <div className="four-item-carousel owl-carousel owl-theme">

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Help for Education</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-2.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Providing Clothes</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Feeding the Hungry</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-4.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Donate Clean Water</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Help for Education</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-2.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Providing Clothes</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Feeding the Hungry</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Causes Block--> */}
                            <div className="causes-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <a href="causes-single.html"><img src="./assets/images/resource/case-4.jpg" alt="" /></a>
                                    </div>
                                    <div className="lower-content">
                                        <h3><a href="causes-single.html">Donate Clean Water</a></h3>
                                        <div className="content">
                                            <div className="text">We are confident to confirm that all members in Charity are professionals in the charity.</div>
                                            <div className="overlay-box">
                                                <div className="collect">We need to collect <span className="theme_color">9,500,000</span></div>
                                                <div className="donate-percentage">
                                                    <div className="donate-bar">
                                                        <span className="bar-line"></span>
                                                    </div>
                                                    <div className="amounts clearfix">
                                                        <div className="total-percent">53%</div>
                                                        <div className="pull-left number">00</div>
                                                        <div className="pull-right number">9,500,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns-box">
                                            <a href="donate.html" className="theme-btn btn-style-two">Donate</a>
                                            <a href="causes-single.html" className="theme-btn btn-style-four">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--End Cases Section--> */}

                {/* <!--Call To Action--> */}
                <section className="call-to-action" style={{backgroundImage:'url(./assets/images/background/2.jpg)'}}>
                    <div className="auto-container">
                        <h2>Become A Volunteer</h2>
                        <div className="text">Lorem ipsum dolor incorrupte exu. Iisque homero dinoaliqui hisno eahaselitr luemosanta. <br /> Usu graecis eleifend intellege ne quiaug tollit. </div>
                        <a href="#" className="theme-btn btn-style-two">Join Us</a>
                    </div>
                </section>
                {/* <!--Call To Action--> */}

                {/* <!--Events Section--> */}
                <section className="events-section">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Upcoming Events</h2>
                        </div>
                        <div className="row clearfix">
                            {/* <!--Column--> */}
                            <div className="column col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <div className="row clearfix">

                                    {/* <!--Event Block--> */}
                                    <div className="event-block col-md-6 col-sm-6 col-xs-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <img src="./assets/images/resource/event-1.jpg" alt="" />
                                                <a href="donate.html" className="overlay-box">
                                                    <div className="text">Donate Now</div>
                                                </a>
                                            </div>
                                            <div className="lower-box">
                                                <div className="post-info">12:00 PM, 18 October, 2017 / <span className="theme_color">Sanfransico, CA</span></div>
                                                <h3><a href="events-single.html">Save Homeless People</a></h3>
                                                <div className="text">Aenean aliquam egestas augue, eu venenatis massa maximus sed. Nam convallis vestibulum purus ac egestas....</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Event Block--> */}
                                    <div className="event-block col-md-6 col-sm-6 col-xs-12">
                                        <div className="inner-box">
                                            <div className="image">
                                                <img src="./assets/images/resource/event-2.jpg" alt="" />
                                                <a href="donate.html" className="overlay-box">
                                                    <div className="text">Donate Now</div>
                                                </a>
                                            </div>
                                            <div className="lower-box">
                                                <div className="post-info">12:00 PM, 18 October, 2017 / <span className="theme_color">25 Newyork City.</span></div>
                                                <h3><a href="events-single.html">Food Help for the hunger people</a></h3>
                                                <div className="text">Aenean aliquam egestas augue, eu venenatis massa maximus sed. Nam convallis vestibulum purus ac egestas....</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Column--> */}
                            <div className="column col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                {/* <!--Event Block Two--> */}
                                <div className="event-block-two">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="date-box">28 <span>Feb</span></div>
                                            <h3><a href="events-single.html">Event: Help The Children</a></h3>
                                            <div className="post-info">5.00 pm - 7.30 pm  /  <span className="theme_color">25 Newyork City.</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Event Block Two--> */}
                                <div className="event-block-two">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="date-box">26 <span>oct</span></div>
                                            <h3><a href="events-single.html">Event:  Foods For Poor</a></h3>
                                            <div className="post-info">5.00 pm - 7.30 pm  /  <span className="theme_color">25 Newyork City.</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Event Block Two--> */}
                                <div className="event-block-two">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="date-box">18 <span>Dec</span></div>
                                            <h3><a href="events-single.html">Event: Save The Water</a></h3>
                                            <div className="post-info">5.00 pm - 7.30 pm  /  <span className="theme_color">25 Newyork City.</span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--End Events Section--> */}

                {/* <!--Call To Action Two--> */}
                <section className="call-to-action-two" style={{backgroundImage:'url(./assets/images/background/3.jpg)'}}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                {/* <!--Column--> */}
                                <div className="column col-md-8 col-sm-12 col-xs-12">
                                    <h2>Want to participate as a volunteer?</h2>
                                </div>
                                {/* <!--Column--> */}
                                <div className="btn-column col-md-4 col-sm-12 col-xs-12">
                                    <a href="contact.html" className="theme-btn btn-style-two">Contact Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--End Call To Action Two--> */}

                {/* <!--Project Section--> */}
                <section className="project-section">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Our Gallery</h2>
                        </div>
                        {/* <!--Sortable Masonry--> */}
                        <div className="sortable-masonry">

                            {/* <!--Filter--> */}
                            <div className="filters clearfix">
                                <ul className="filter-tabs filter-btns clearfix">
                                    <li className="active filter" data-role="button" data-filter=".all">All</li>
                                    <li className="filter" data-role="button" data-filter=".homeless">Homeless</li>
                                    <li className="filter" data-role="button" data-filter=".charity">Charity</li>
                                    <li className="filter" data-role="button" data-filter=".food">Food Help</li>
                                    <li className="filter" data-role="button" data-filter=".water">Clean Water</li>
                                </ul>
                            </div>

                            <div className="items-container row clearfix">

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/1.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/1.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all charity food water col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/2.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/2.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all water col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/3.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/3.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/4.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/4.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all water food col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/5.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/5.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Gallery Block--> */}
                                <div className="gallery-block masonry-item all charity homeless col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="./assets/images/gallery/6.jpg" alt="" />
                                            <div className="overlay-box">
                                                <div className="content">
                                                    <h3><a href="gallery-single.html">Homeless Child</a></h3>
                                                    <ul className="option-list">
                                                        <li><a className="lightbox-image" href="images/gallery/6.jpg" data-fancybox-group="gallery-one"><span className="la la-arrows"></span></a></li>
                                                        <li><a href="gallery-single.html"><span className="la la-chain"></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </section>
                {/* <!--End Gallery Section--> */}

                {/* <!--Testimonial Section--> */}
                <section className="testimonial-section" style={{backgroundImage:'url(./assets/images/background/4.jpg)'}}>
                    <div className="auto-container">
                        <div className="carousel-outer">

                            {/* <!--Sec Title--> */}
                            <div className="sec-title">
                                <h2>What our client say</h2>
                            </div>

                            <div className="single-item-carousel owl-carousel owl-theme">

                                {/* <!--Testimonial Block--> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="text"><span className="left-icon la la-quote-left"></span> Moluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Moluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="right-icon la la-quote-right"></span></div>
                                            <h3>Joseph Anderson</h3>
                                            <div className="designation">Managing Director</div>
                                        </div>
                                        <div className="image">
                                            <img src="./assets/images/resource/author.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Testimonial Block--> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="text"><span className="left-icon la la-quote-left"></span> Moluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Moluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="right-icon la la-quote-right"></span></div>
                                            <h3>Joseph Anderson</h3>
                                            <div className="designation">Managing Director</div>
                                        </div>
                                        <div className="image">
                                            <img src="./assets/images/resource/author.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Testimonial Block--> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="text"><span className="left-icon la la-quote-left"></span> Moluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Moluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="right-icon la la-quote-right"></span></div>
                                            <h3>Joseph Anderson</h3>
                                            <div className="designation">Managing Director</div>
                                        </div>
                                        <div className="image">
                                            <img src="./assets/images/resource/author.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--End Testimonial Section--> */}

                {/* <!--Team Section--> */}
                <section className="team-section">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Our Volunteers</h2>
                        </div>
                        {/* <!--End Sec Title--> */}
                        <div className="row clearfix">

                            {/* <!--Team Block--> */}
                            <div className="team-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="./assets/images/resource/team-1.jpg" alt="" />
                                        <div className="content">
                                            <h3>Marry Williams</h3>
                                            <div className="designation">Volunteer</div>
                                        </div>
                                        <div className="overlay-box">
                                            <div className="overlay-content">
                                                <h3><a href="volunter-single.html">Isabelle Black</a></h3>
                                                <div className="overlay-designation">Volunteer</div>
                                                <a className="link" href="volunter-single.html"><span className="link la la-link"></span></a>
                                                <div className="lower-box">
                                                    <div className="text">We want to bring the <br /> happinessfor needy.</div>
                                                    <ul className="social-icon-one">
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

                            {/* <!--Team Block--> */}
                            <div className="team-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="./assets/images/resource/team-2.jpg" alt="" />
                                        <div className="content">
                                            <h3>Aenean Mani</h3>
                                            <div className="designation">Volunteer</div>
                                        </div>
                                        <div className="overlay-box">
                                            <div className="overlay-content">
                                                <h3><a href="volunter-single.html">Aenean Mani</a></h3>
                                                <div className="overlay-designation">Volunteer</div>
                                                <a className="link" href="volunter-single.html"><span className="link la la-link"></span></a>
                                                <div className="lower-box">
                                                    <div className="text">We want to bring the <br /> happinessfor needy.</div>
                                                    <ul className="social-icon-one">
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

                            {/* <!--Team Block--> */}
                            <div className="team-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="./assets/images/resource/team-3.jpg" alt="" />
                                        <div className="content">
                                            <h3>Isabelle Black</h3>
                                            <div className="designation">Volunteer</div>
                                        </div>
                                        <div className="overlay-box">
                                            <div className="overlay-content">
                                                <h3><a href="volunter-single.html">Isabelle Black</a></h3>
                                                <div className="overlay-designation">Volunteer</div>
                                                <a className="link" href="volunter-single.html"><span className="link la la-link"></span></a>
                                                <div className="lower-box">
                                                    <div className="text">We want to bring the <br /> happinessfor needy.</div>
                                                    <ul className="social-icon-one">
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

                            {/* <!--Team Block--> */}
                            <div className="team-block col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="./assets/images/resource/team-4.jpg" alt="" />
                                        <div className="content">
                                            <h3>Monijy Mazo</h3>
                                            <div className="designation">Volunteer</div>
                                        </div>
                                        <div className="overlay-box">
                                            <div className="overlay-content">
                                                <h3><a href="volunter-single.html">Monijy Mazo</a></h3>
                                                <div className="overlay-designation">Volunteer</div>
                                                <a className="link" href="volunter-single.html"><span className="link la la-link"></span></a>
                                                <div className="lower-box">
                                                    <div className="text">We want to bring the <br /> happinessfor needy.</div>
                                                    <ul className="social-icon-one">
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
                    </div>
                </section>
                {/* <!--End Team Section--> */}

                {/* <!--Map Section--> */}
                <section className="map-section">
                    {/* <!--Map Outer--> */}
                    <div className="map-outer">
                        {/* <!--Map Canvas--> */}
                        <div className="map-canvas"
                            data-zoom="16"
                            data-lat="24.877873"
                            data-lng="67.08465389999999"
                            data-type="roadmap"
                            data-hue="#ffc400"
                            data-title="Jetpur Memon Community Centre"
                            data-icon-path="images/icons/map-marker-2.png"
                            data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                        </div>
                    </div>
                </section>
                {/* <!--End Map Section--> */}

                {/* <!--Subscribe Section--> */}
                <section className="subscribe-section" style={{backgroundImage:'url(./assets/images/background/pattern-1.png)'}}>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="title-column col-md-6 col-sm-12 col-xs-12">
                                <h2>  Subscribe To Our Newsletter</h2>
                            </div>
                            <div className="form-column col-md-6 col-sm-12 col-xs-12">

                                {/* <!--Subscribe Section--> */}
                                <div className="subscribe-form">
                                    <form method="post" action="http://effortthemes.com/html/charitypoint/contact.html">

                                        <div className="form-group">
                                            <input type="email" name="email" value="" placeholder="Enter your E-mail" required />
                                            <button type="submit" className="theme-btn btn-style-two">Subscribe</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!--End Subscribe Section--> */}

                <Footer />
            </span>
        )
    }
}
export default Home;