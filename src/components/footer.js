import * as React from "react";


const Footer = () => {
    return (
        <footer className="footer-area bg-img" style={{backgroundImage: 'url(img/core-img/pattern.png)'}}>
            {/* ##### Contact Area Start ##### */}
            <div className="contact_us_area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                                    <span/><span/><span/><span/><span/><span/><span/>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s">Contact Us</h2>
                                {/*<p className="wow fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet,*/}
                                {/*    consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl*/}
                                {/*    hendrerit commodo.</p>*/}
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="contact_form">
                                <form action="#" method="post" id="main_contact_form" noValidate>
                                    <div className="row">
                                        <div className="col-12">
                                            <div id="success_fail_info"/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.2s">
                                                <input type="text" name="name" id="name" required/>
                                                <span className="highlight"/>
                                                <span className="bar"/>
                                                <label>Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.3s">
                                                <input type="text" name="email" id="email" required/>
                                                <span className="highlight"/>
                                                <span className="bar"/>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.4s">
                                                <input type="text" name="subject" id="subject" required/>
                                                <span className="highlight"/>
                                                <span className="bar"/>
                                                <label>Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.5s">
                                                <textarea name="message" id="message" required defaultValue={""}/>
                                                <span className="highlight"/>
                                                <span className="bar"/>
                                                <label>Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
                                            <button type="submit" className="btn dream-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Contact Area End ##### */}
            <div className="footer-content-area " style={{backgroundImage: 'url(img/core-img/footer-bg1.png)'}}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-5">
                            <div className="footer-copywrite-info">
                                {/* Copywrite */}
                                <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="footer-logo">
                                        <a className="nav-brand" href="/"><img draggable="false" style={{
                                            height : 50, width : 50
                                        }} src="/img/logo.png"
                                                                               alt="logo"/> ame</a>
                                    </div>
                                    <p>ALGO FAM TOKEN ($FAME) is the official community token airdropped to the pioneers of the algorand FAMILY. Its purpose is to promote friendship, knowledge, charities and arts</p>
                                </div>
                                {/* Social Icon */}
                                <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="https://t.me/algoFAME"><i className="fa fa-telegram" aria-hidden="true"/></a>
                                    <a href="#"> <i className="fa fa-twitter" aria-hidden="true"/></a>
                                    <a href="https://discord.gg/g4ctVd4E"><i className="fa fa-github-square" aria-hidden="true"/></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Content Info */}
                            <div className="contact_info_area d-sm-flex justify-content-between">
                                <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.2s">
                                    <h5>NAVIGATE</h5>
                                    <a href><p>About</p></a>
                                    <a href><p>Services</p></a>
                                    <a href><p>RoadMap</p></a>
                                    <a href><p>Team</p></a>
                                    <a href><p>Contact</p></a>
                                </div>
                                {/* Content Info */}
                                <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
                                    <h5>PRIVACY &amp; TOS</h5>
                                    <a href><p> Agreement</p></a>
                                    <a href><p>Acceptable Use Policy</p></a>
                                    <a href><p>Privacy Policy</p></a>
                                    <a href><p>Whitepaper</p></a>
                                </div>
                                {/* Content Info */}
                                <div className="contact_info text-center wow fadeInUp" data-wow-delay="0.4s">
                                    <h5>Phone</h5>
                                    <p>Mailing Address:xx00 E. Lagos</p>
                                    <p>Suite 1100. Lagos, Nigeria 80237</p>
                                    <p>+234 90932 627</p>
                                    <p>support@fame.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer