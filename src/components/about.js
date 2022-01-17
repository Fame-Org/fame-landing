import * as React from "react";
import Lottie from "lottie-react";
import VisionAnimation from "../lottie/vision.json";
import Voting from "./voting";

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
                    to build an ESG MOVEMENT where the members are willing to share, give, help and create.
                  </b>
                </p>
              </li>

              <a
                  className="btn dream-btn mt-30 wow fadeInUp ml-30"
                  data-wow-delay="0.6s"

                  target="_blank"
                  href="https://www.robeco.com/en/key-strengths/sustainable-investing/glossary/esg-definition.html"
              >
                What is ESG?
              </a>
            </div>


          </div>


          <div className="row mt-40 col-12">
            <div className="col-12 col-lg-6">
              <div className="who-we-contant">
                <div className="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                </div>
                <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                  Granular vote using $FAME
                </h4>
                <li>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <b>
                      Each FAME member received the same number of token at launch (10 $FAME) so we all started from the
                      same point to support and rank our ARTISTS and PHILANTHROPISTS with a granular precision.
                      When voting, we can choose to put a large amount on one candidate or decisions to make it prevail
                      or to distribute our $FAME tokens to represent our ideal ranking by sending more or less to each
                      challenge participants.
                    </b>
                  </p>

                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <b>

                      No minimum or maximum amount to vote and many votes can be posted during the voting period.

                    </b>
                  </p>
                  {/*<p className="wow fadeInUp" data-wow-delay="0.4s">*/}
                  {/*  <b>*/}
                  {/*    No maximum amount since you must have EARNED your $FAME.*/}
                  {/*  </b>*/}
                  {/*</p>*/}
                </li>


              </div>


            </div>

            <Voting/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
