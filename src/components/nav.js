import * as React from "react";
import {Link} from 'react-scroll';


const Nav = () => {
    const [cursor, setCursor] = React.useState('pointer');

    return (
        <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    {/* Classy Menu */}
                    <nav className="classy-navbar justify-content-between" id="dreamNav">
                        {/* Logo */}
                        <a className="nav-brand" href="/"><img draggable="false" style={{
                            height: 50, width: 150
                        }} src="/img/logo.png"
                                                               alt="logo"/> </a>
                        {/* Navbar Toggler */}
                        {/*<div className="classy-navbar-toggler">*/}
                        {/*    <span className="navbarToggler"><span/><span/><span/></span>*/}
                        {/*</div>*/}
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

                                        <Link style={{ cursor: cursor }}  activeClass="active" class={"link"} to="home" spy={true} smooth={true}
                                              offset={50} duration={500}>
                                            Home
                                        </Link>
                                    </li>
                                    < li>
                                        <Link style={{ cursor: cursor }}  to="about" spy={true} smooth={true} offset={50} duration={500}>
                                         FAME DAO

                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="services" style={{ cursor: cursor }} spy={true} smooth={true} offset={50} duration={500}>
                                            FAME DAPP
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="roadmap" style={{ cursor: cursor }} spy={true} smooth={true} offset={50} duration={500}>
                                            ROADMAP
                                        </Link>
                                    </li>

                                    < li>
                                        <Link to="team" spy={true} style={{ cursor: cursor }} smooth={true} offset={50} duration={500}>
                                            TEAM
                                        </Link>
                                    </li>
                                    < li>
                                        <Link to="newsletter" style={{ cursor: cursor }} spy={true} smooth={true} offset={50} duration={500}>
                                            NEWSLETTER
                                        </Link>
                                    </li>
                                </ul>
                                {/* Button */}
                                <a href="#" className="btn login-btn ml-50">Go To App</a>
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