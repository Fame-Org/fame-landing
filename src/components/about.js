import * as React from "react";
import Lottie from "lottie-react";
import VisionAnimation from "../lottie/vision.json";


const About = () => {
    return (
        <section className="about-us-area section-padding-0-100 clearfix" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="welcome-meter wow fadeInUp" data-wow-delay="0.7s">
                            {/*<img draggable="false" src="img/svg/about1.svg" className="img-responsive center-block"*/}
                            {/*     alt=""/>*/}

                            <Lottie animationData={VisionAnimation}/>
                            {/* client meta */}
                            {/*<div className="growing-company text-center mt-30 wow fadeInUp" data-wow-delay="0.8s">*/}
                            {/*    <p>* Already growing up <span className="counter">5236</span> company</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="who-we-contant">
                            <div className="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                                <span/><span/><span/><span/><span/><span/><span/>
                            </div>
                            <h4 className="wow fadeInUp" data-wow-delay="0.3s">We complete every project with extra care
                                as customer need.</h4>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere
                                tortor, sit amet convallis nunc scelerisque in.</p>
                            <p className="wow fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem
                                ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam.
                                Fugit!</p>
                            <a className="btn dream-btn mt-30 wow fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About