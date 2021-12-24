import * as React from "react";


const Newsletter = () => {
    return (
        <section className="container " style={{paddingBottom: '0px'}} id="start">
            <div className="subscribe">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="subscribe-wrapper">
                            <div className="section-heading text-center">
                                <h2>Don’t Miss $FAME News And Updates!</h2>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut
                                    felis congue nisl hendrerit commodo.</p> */}
                            </div>
                            <div className="service-text">
                                <div className="col-lg-8 col-lg-offset-2 col-md-8 offset-md-2 col-xs-12 text-center">
                                    <div className="group">
                                        <input type="text" name="subject" required/>
                                        <span className="highlight"/>
                                        <span className="bar"/>
                                        <label>enter your email</label>
                                        <button className="dream-btn"><i className="fa fa-paper-plane-o"/></button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-lg-offset-1 col-sm-12 text-center">
                                    <span className="telegram-text">Join our chat: </span>
                                    <a href className="button"><i className="fa fa-telegram"/>Telegram</a>
                                </div>
                                <div className="col-lg-5 col-sm-12 text-center">
                                    <ul className="list-unstyled list-inline social-list">
                                        <li><a href><i className="fa fa-facebook-square"/></a></li>
                                        <li><a href><i className="fa fa-twitter-square"/></a></li>
                                        <li><a href><i className="fa fa-github-square"/></a></li>
                                        <li><a href><i className="fa fa-instagram"/></a></li>
                                        <li><a href><i className="fa fa-medium"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Newsletter