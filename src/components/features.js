import * as React from "react";
// import ReactPlayer from "react-player"
import Lottie from "lottie-react";
import MobileAnimation from "../lottie/mobile2.json";
import {useMediaQuery} from "react-responsive";

const Features = () => {

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 1224 },
        { deviceWidth: 1600 } // `device` prop
    )
    return (
        <section className="features section-padding-100">
            <div className="section-heading text-center">
                <div className="dream-dots justify-content-center">
                    <span/><span/><span/><span/><span/><span/><span/>
                </div>
                <h2>FAME as a Global DAO</h2>
                {/*<p>"IMAGINE A GLOBAL COMMUNITY READY TO CREATE FOR OTHERS AND WILLING TO HELP EACH OTHER WITHOUT THE*/}
                {/*    NEED OF CASH"</p>*/}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
                        {/*Services Block Four*/}
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon ti-mobile"/>
                                </div>
                                <h3><a href="#">Decentralized Social Application</a></h3>
                                <div className="text">The FAME social Dapp is censorship-resistant and decentralized. It
                                    allows farmers to have seamless interactions and to collaborate, invest as a group
                                    and negotiate on better deals with distributors.
                                </div>
                            </div>
                        </div>
                        {/*Services Block Four*/}
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon ti-widget"/>
                                </div>
                                <h3><a href="#">Local/Global Marketplace for Farmers</a></h3>
                                <div className="text">Fame gives farmers the platform to leverage on the blockchain to
                                    sell products and advertise their product locally and globally .
                                </div>
                            </div>
                        </div>
                        {/*Services Block Four*/}
                        <div className="services-block-four" style={{marginBottom: 0}}>
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon ti-settings"/>
                                </div>
                                <h3><a href="#">Defi Suite</a></h3>
                                <div className="text">Farmers can now benefit from the lastest blockchain technology and
                                    leverage the algorand defi ecosystem to earn a yield and make passive income without
                                    taking any risks.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
                        <div className="image-box">
                            {/*<img draggable="false" src="img/phone.png" className="center-block img-responsive phone-img"*/}
                            {/*     alt=""/>*/}
                            {isDesktopOrLaptop ?  <Lottie style={{
                                width: "50%"
                            }} animationData={MobileAnimation}/>
                             :  <Lottie style={{
                                    width: "100%"
                                }} animationData={MobileAnimation}/>
                            }

                            {/*<div className={"mt-40 col-lg-6"}>*/}
                            {/*    <ReactPlayer width={"100%"}  url='https://youtu.be/Bp6rA9-srEM'/>*/}
                            {/*</div>*/}

                            <img draggable="false" src="img/core-img/rings-bg.png"
                                 className="center-block img-responsive rings " alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Features