import * as React from "react";
import ReactPlayer from "react-player";
import {useMediaQuery} from 'react-responsive'
import {googleDocs} from "../utils/constants";

const Banner = () => {

    const isDesktopOrLaptop = useMediaQuery(
        {minDeviceWidth: 1224},
        {deviceWidth: 1600} // `device` prop
    )
    return (
        <section className="welcome_area clearfix dzsparallaxer auto-init none fullwidth"
                 data-options="{direction: &quot;normal&quot;}" id="home" >
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
                <div className="dream-blip blip5"/>
                <div className="dream-blip blip6"/>
                <div className="dream-blip blip7"/>
                <div className="dream-blip blip8"/>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        {/* Welcome Content */}
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="welcome-content">

                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">The First ESG Movement Powered by
                                    Algorand</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">

                                    FAME provides a social marketplace that empowers social upliftment through mobile, technology and financial access for workers, drivers and farmers.</p>

                                {/*<p className="wow fadeInUp" data-wow-delay="0.3s">*/}

                                {/*  */}
                                {/*</p>*/}


                                <div className="dream-btn-group wow fadeInUp" data-wow-delay="0.4s">
                                    {/*<a target="_blank"*/}
                                    {/*   href="https://docs.google.com/document/d/1zeZEREg2ss7k9JnbgY5SfwQ_UPr9uMjsdABBUaBpCmg/edit?usp=sharing"*/}
                                    {/*   className="btn dream-btn mr-3">WhitePaper 1.0</a>*/}
                                    <a href={`https://play.google.com/store/apps/details?id=com.algofame.fame`} target="_blank" className="btn dream-btn">Download App</a>
                                </div>
                            </div>
                        </div>

                        {isDesktopOrLaptop ?
                            <div className="col-12 col-lg-6 col-md-12 " style={{
                                marginTop: "1%"
                            }}>


                                <ReactPlayer width={"110%"} url='https://youtu.be/Bp6rA9-srEM'/>


                            </div>
                            : (
                                <></>
                                //         <div className="row  align-items-center">
                                // {/*<div className="col-2"></div>*/}
                                //             <div className="col-8 mt-40 ml-30 react-player " >
                                //                 <ReactPlayer width={"150%"} url='https://youtu.be/Bp6rA9-srEM'/>
                                //             </div>
                                //         </div>

                            )}


                    </div>

                </div>
            </div>
        </section>


    )
}

export default Banner
