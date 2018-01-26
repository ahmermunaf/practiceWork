import Header from '../masters/Header'
import Footer from '../masters/Footer'
import React, { Component } from 'react'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        document.title = "Home";
        return (
            <span>
                <Header currentComponent="/" />
                <div className="page-wrapper">
                    {/* <!--Main Slider--> */}
                    {/* <section className="main-slider">

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
                    </section> */}
                    <Carousel
                    showArrows={false}
                    showIndicators={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    transitionTime={750}
                    >
                        <div>
                            <img src="./assets/images/main-slider/image-1.jpg" />
                        </div>
                        <div>
                            <img src="./assets/images/main-slider/image-2.jpg" />
                        </div>
                    </Carousel>
                </div>
                {/* <!--End Main Slider--> */}
                
                {/* <!--Welcome Section--> */}
                <br />
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
                
                {/* <!--Events Section--> */}
                <section className="events-section">
                    <div className="auto-container">
                        {/* <!--Sec Title--> */}
                        <div className="sec-title">
                            <h2>Upcoming Events And Latest News</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="footer-column col-md-4 col-sm-12 col-xs-12" style={{width:'50%'}} >
                                <div className="footer-widget news-widget">
                                    <h2>Latest News</h2>

                                    <article className="post">
                                        {/* <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/news-thumb-1.jpg" alt="" /></a></figure> */}
                                        <div className="text"><a href="blog-single.html">Child Education in South-Africa!!</a></div>
                                        <div className="post-info">Jul 17, 2017 / Business</div>
                                    </article>

                                    <article className="post">
                                        {/* <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/news-thumb-2.jpg" alt="" /></a></figure> */}
                                        <div className="text"><a href="blog-single.html">Clean Water Provide by Poor People!!</a></div>
                                        <div className="post-info">Jul 17, 2017 / Business</div>
                                    </article>

                                    <article className="post">
                                        {/* <figure className="post-thumb"><a href="blog-single.html"><img src="images/resource/news-thumb-3.jpg" alt="" /></a></figure> */}
                                        <div className="text"><a href="blog-single.html">We help the hunger People!!</a></div>
                                        <div className="post-info">Jul 17, 2017 / Business</div>
                                    </article>

                                </div>
                            </div>
                            {/* <!--Column--> */}
                            <div className="column col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{width:'50%'}} >
                            <h2>Events</h2>
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
                <Footer />
            </span>
        )
    }
}
export default Home;