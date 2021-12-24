import * as React from "react";
import {Link} from 'react-scroll';


const Nav = () => {
    return (
        <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    {/* Classy Menu */}
                    <nav className="classy-navbar justify-content-between" id="dreamNav">
                        {/* Logo */}
                        <a className="nav-brand" href="index-2.html"><img draggable="false" src="img/core-img/logo.png"
                                                                          alt="logo"/> Coinland.</a>
                        {/* Navbar Toggler */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span/><span/><span/></span>
                        </div>
                        {/* Menu */}
                        <div className="classy-menu">
                            {/* close btn */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
                            </div>
                            {/* Nav Start */}
                            <div className="classynav">
                                <ul id="nav">
                                    < li>
                                        <Link activeClass="active" class={"link"} to="home" spy={true} smooth={true}
                                              offset={50} duration={500}>
                                            Home
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                                            About
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
                                            Services
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="roadmap" spy={true} smooth={true} offset={50} duration={500}>
                                            Roadmap
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="team" spy={true} smooth={true} offset={50} duration={500}>
                                            Team
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                {/* Button */}
                                <a href="#" className="btn login-btn ml-50">Log in</a>
                            </div>
                            {/* Nav End */}
                        </div>
                    </nav>
                </div>
            </div>
        </header>


    )
}

export default Nav