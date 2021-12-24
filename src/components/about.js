import * as React from "react";


const About = () => {
    return (
      <section
        className="about-us-area section-padding-0-100 clearfix"
        id="about"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="welcome-meter wow fadeInUp" data-wow-delay="0.7s">
                <img
                  draggable="false"
                  src="img/svg/about1.svg"
                  className="img-responsive center-block"
                  alt=""
                />
                {/* client meta */}
                <div
                  className="growing-company text-center mt-30 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  {/* <p>
                    * Already growing up <span className="counter">5236</span>{" "}
                    company
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="who-we-contant">
                <div className="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                  Our Vision
                </h4>
                <li>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <b>Educate on ALGORAND</b> by adding and using $FAME, our
                    ALGO FAM COMMUNITY is getting familiar to use our $FAME ASA
                    and sending transactions to different wallets.
                  </p>
                </li>
                <li>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <b>Dissociate crypto from speculation</b> Since Bitcoin was
                    launched, this industry was represented as a nefarious one
                    and still is in some media.
                  </p>
                </li>
                <li>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <b>Compare Algorand</b> to other DLT used today to bring
                    adoption.
                  </p>
                </li>
                <a
                  className="btn dream-btn mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About