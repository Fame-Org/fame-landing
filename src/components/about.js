import * as React from "react";
import Lottie from "lottie-react";
import VisionAnimation from "../lottie/vision.json";

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
              {/*<img*/}
              {/*  draggable="false"*/}
              {/*  src="img/svg/about1.svg"*/}
              {/*  className="img-responsive center-block"*/}
              {/*  alt=""*/}
              {/*/>*/}


              <Lottie animationData={VisionAnimation}/>
              {/* client meta */}

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
                  <b>
                    Our main principle is to go "beyond money", meaning cryptos are not only speculative assets, we need
                    to change the general perception of crypto. We can lead by example by using our $FAME verified ASAs
                    to build an ETHICAL MOVEMENT where the members are willing to share, give, help and create.
                  </b>
                </p>
              </li>
              {/*<li>*/}
              {/*  <p className="wow fadeInUp" data-wow-delay="0.4s">*/}
              {/*    <b>Dissociate crypto from speculation</b> Since Bitcoin was*/}
              {/*    launched, this industry was represented as a nefarious one and*/}
              {/*    still is in some media.*/}
              {/*  </p>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <p className="wow fadeInUp" data-wow-delay="0.4s">*/}
              {/*    <b>Compare Algorand</b> to other DLT used today to bring*/}
              {/*    adoption.*/}
              {/*  </p>*/}
              {/*</li>*/}
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
};

export default About;
