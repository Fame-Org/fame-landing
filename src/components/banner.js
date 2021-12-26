import * as React from "react";
import Lottie from "lottie-react";
import BannerAnimation from "../lottie/banner.json";


const Banner = () => {
    return (
        <section className="welcome_area clearfix dzsparallaxer auto-init none fullwidth"
                 data-options="{direction: &quot;normal&quot;}" id="home">
            <div className="divimage dzsparallaxer--target"
                 style={{width: '90%', height: '130%'}}>


            </div>
            {/* Hero Content */}
            <div className="hero-content transparent">
                {/* blip */}
                <div className="dream-blip blip1"/>
                <div className="dream-blip blip2"/>
                <div className="dream-blip blip3"/>
                <div className="dream-blip blip4"/>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        {/* Welcome Content */}
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="welcome-content">
                                <div className="promo-section">
                                    <div className="integration-link">
                <span className="integration-icon">
                  <img draggable="false" src="img/svg/img-dollar.svg" width={24} height={24} alt=""/>
                </span>
                                        <span
                                            className="integration-text">Discover a new ways to enjoy your World!</span>
                                    </div>
                                </div>
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">The First Ethical and self- improving Cryptocurrency COMMUNITY</h1>
                                {/*<p className="wow fadeInUp" data-wow-delay="0.3s">ALGO FAM TOKEN ($FAME) is the official community token airdropped to the pioneers of the algorand FAMILY. Its purpose is to promote friendship, knowledge, charities and arts</p>*/}
                                <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="#" className="btn dream-btn mr-3">Join Pre-Sale</a>
                                    <a href="#" className="btn dream-btn"> Whitepaper</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="main-ilustration main-ilustration-4 wow fadeInUp" data-wow-delay="0.5s">
                                <Lottie animationData={BannerAnimation}/>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>


    )
}

export default Banner