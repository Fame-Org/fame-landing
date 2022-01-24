import * as React from "react";
import {discordURL, fbURL, instagramUrl, telegramURL, twitterURL} from "../utils/constants";


const Newsletter = () => {
    return (
        <section className="container " id={"newsletter"} style={{paddingBottom: '0px'}} >
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
                                    <a target={"_blank"} href={telegramURL} className="button"><i
                                        className="fa fa-telegram"/>Telegram</a>
                                </div>
                                <div className="col-lg-5 col-sm-12 text-center">
                                    <ul className="list-unstyled list-inline social-list">
                                        <li><a target={"_blank"} href={fbURL}><i
                                            className="fab fa-facebook-square"/></a></li>
                                        <li><a target={"_blank"} href={twitterURL}><i
                                            className="fab fa-twitter-square"/></a></li>
                                        <li><a target={"_blank"} href={discordURL}><i className="fab fa-github-square"/></a>
                                        </li>
                                        <li><a target={"_blank"} href={telegramURL}><i className="fab fa-telegram"/></a>
                                        </li>
                                        <li><a target={"_blank"} href={instagramUrl}><i
                                            className="fab fa-instagram"/></a></li>
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