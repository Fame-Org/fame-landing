import * as React from "react";
import ReactPlayer from "react-player";


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
                        <div className="col-12 col-lg-8 col-md-12">
                            <div className="welcome-content">

                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">The First ESG Movement Powered by
                                    Algorand</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">

                                    IMAGINE A GLOBAL COMMUNITY READY TO CREATE FOR OTHERS AND </p>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">

                                    WILLING TO HELP EACH OTHER WITHOUT THE NEED OF CASH </p>
                                <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">

                                    <a target="_blank"
                                       href="https://docs.google.com/document/d/1zeZEREg2ss7k9JnbgY5SfwQ_UPr9uMjsdABBUaBpCmg/edit?usp=sharing"
                                       className="btn dream-btn mr-3">Whitepaper 1.0</a>
                                    <a href="#" className="btn dream-btn"> Whitepaper 2.0</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-12">
                            <div className="welcome-content">
                                {/*<Lottie style={{*/}
                                {/*    marginTop: "20%",*/}
                                {/*    width : "100%"*/}

                                {/*}} animationData={BannerAnimation}/>*/}
                                {/*<ReactPlayer playing = {true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />*/}

                                {/*<div className={"mt-40 col-lg-6"}>*/}
                                <ReactPlayer width={"130%"} url='https://youtu.be/Bp6rA9-srEM'/>
                                {/*</div>*/}
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </section>


    )
}

export default Banner