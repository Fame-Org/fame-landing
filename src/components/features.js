import * as React from "react";
import Lottie from "lottie-react";
import MobileAnimation from "../lottie/mobile2.json";

const Features = () => {
    return (
        <section className="features section-padding-100">
            <div className="section-heading text-center">
                <div className="dream-dots justify-content-center">
                    <span/><span/><span/><span/><span/><span/><span/>
                </div>
                <h2>Our Wallet Application</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue
                    nisl hendrerit commodo.</p>
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
                                <h3><a href="#">Powerfull Mobile and Online App</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae,
                                    facere perferendis quas tempore. Consequuntur commodi facilis sed similique.
                                </div>
                            </div>
                        </div>
                        {/*Services Block Four*/}
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon ti-widget"/>
                                </div>
                                <h3><a href="#">Brings more Transparency and Speed</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Obcaecati aut repudiandae harum, fugit, necessitatibus veritatis molestias a
                                    eligendi distinctio. Nostrum expedita deserunt maiores adipisci.
                                </div>
                            </div>
                        </div>
                        {/*Services Block Four*/}
                        <div className="services-block-four" style={{marginBottom: 0}}>
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon ti-settings"/>
                                </div>
                                <h3><a href="#">Special for Multiple Use Capabilities</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                                    maiores, ducimus animi a. Nulla ab dolor doloribus, aperiam, quam dolorum dicta
                                    vitae tempora, vero at quod error alias incidunt quidem.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
                        <div className="image-box">
                            {/*<img draggable="false" src="img/phone.png" className="center-block img-responsive phone-img"*/}
                            {/*     alt=""/>*/}
                            <Lottie animationData={MobileAnimation}/>
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