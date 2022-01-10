import * as React from "react";


const Services = () => {
    return (
        <section className="our_services_area section-padding-100-70 clearfix" id="services">
            <div className="container">
                <div className="section-heading text-center">
                    <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                        <span/><span/><span/><span/><span/><span/><span/>
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay="0.3s">Fame Dapp</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">$Fame is the latest Blockchain technology for
                        farmers and artists to transact freely and easily.</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow fadeInUp" data-wow-delay="0.2s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/1.svg" alt=""/>
                            </div>
                            <h6>Social Dapp</h6>
                            <p>The FAME social Dapp is censorship-resistant and decentralized. It allows farmers to have
                                seamless interactions and to collaborate, invest as a group and negotiate on better
                                deals with distributors. </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow wow fadeInUp" data-wow-delay="0.3s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/2.svg" alt=""/>
                            </div>
                            <h6>Marketplace</h6>
                            {/*<p>Fame allows the farmers to be aware of the global demand to adapt and react to the market needs and earn a better APR on their savings.</p>*/}
                            <p>Gives farmers the platform to leverage on the blockchain to sell products and advertise
                                their product locally and globally .</p>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow fadeInUp" data-wow-delay="0.5s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/4.svg" alt=""/>
                            </div>
                            <h6>NFT Technology</h6>
                            <p>On chain contracts and agreements using Non-Fungible Tokens (NFT) technology, and store digital proof on decentralized file storage systems to safeguard user ownership. </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow fadeInUp" data-wow-delay="0.4s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/3.svg" alt=""/>
                            </div>
                            <h6>Decentralized Autonomous Organisation (DAO)</h6>
                            <p>Voting system for unions/cooperatives to create strong unions and Cooperatives across NIGERIA and a GLOBAL network of farmers.</p>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow fadeInUp" data-wow-delay="0.6s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/5.svg" alt=""/>
                            </div>
                            <h6>Farmer Security</h6>
                            <p>Security alert (based on geolocation) for farmers to rescue each other and get information on imminent dangers.</p>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-lg-4">
                        {/* Content */}
                        <div className="service_single_content text-left mb-100 wow fadeInUp" data-wow-delay="0.7s">
                            {/* Icon */}
                            <div className="service_icon">
                                <img draggable="false" src="img/services/6.svg" alt=""/>
                            </div>
                            <h6>Decentralized Exchange</h6>
                            <p>A new decentralized marketplace for farmers and consumers to promote, buy and sell their products and to receive donations from donors around the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Services