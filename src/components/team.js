import * as React from "react";


const Team = () => {
    return (
      <section className="our_team_area section-padding-0-0 clearfix" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <div
                    className="dream-dots justify-content-center wow fadeInUp"
                    data-wow-delay="0.2s"
                >
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                  Meet The Team
                </h2>
                {/*<p className="wow fadeInUp" data-wow-delay="0.4s">*/}
                {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed*/}
                {/*  quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.{" "}*/}
                {/*</p>*/}
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.2s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/bilal2.jpeg"
                      className="center-block"
                      alt=""
                      style={{
                        borderRadius: 100,

                      }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Bilal Brahim</h5>
                  <p>CEO</p>
                  <p>Algorand Community Champion</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="https://twitter.com/bilalgorand">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  <a href="https://www.linkedin.com/in/bilal-brahim-b30b5919">
                    <i className="fab fa-linkedin fa-lg "/>
                  </a>
                  {/*<a href="#">*/}
                  {/*  <i className="fab fa-facebook fa-lg " />*/}
                  {/*</a>*/}

                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.3s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/Steve.jpg"
                      className="center-block"
                    alt=""
                    style={{
                      borderRadius :100
                    }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Stephen Sunday</h5>
                  <p style={{
                    color: "white"
                  }}>CTO</p>
                  <p>Algorand Ambassador</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="https://twitter.com/steviekusu">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  <a href="https://www.linkedin.com/in/stephensundaykusu/">
                    <i className="fab fa-linkedin fa-lg "/>
                  </a>

                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.4s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/prady.jpg"
                      className="center-block"
                    alt=""
                    style={{
                      borderRadius :100
                    }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Pradyumn Singh</h5>
                  <p>CMO</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="https://twitter.com/fingfayngfoom">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  <a href="https://www.linkedin.com/in/pradyumn-jammoria-15020812a/">
                    <i className="fab fa-linkedin fa-lg "/>
                  </a>

                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.5s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/Nduka.jpg"
                      className="center-block"
                    alt=""
                    style={{
                      borderRadius :100
                    }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Emmanuel Nduka</h5>
                  <p>Full Stack Engineer</p>
                  <p>Algorand Ambassador</p>
                </div>
                {/* Icon */}
                <div className="team-social-icon">
                  <a href="https://twitter.com/i_am__manuel">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuel-nduka-500900119/">
                    <i className="fab fa-linkedin fa-lg "/>
                  </a>

                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.2s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/Aude.jpg"
                      className="center-block"
                    alt=""
                    style={{
                      borderRadius :100
                    }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Aude Cintrat</h5>
                  <p>CFO</p>
                  {/*<p>Algorand Ambassador</p>*/}
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="https://www.linkedin.com/in/aude-cintrat-07298823">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  {/*<a href="https://www.linkedin.com/in/sethlonge">*/}
                  {/*  <i className="fab fa-linkedin fa-lg "/>*/}
                  {/*</a>*/}

                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                  className="single-team-member wow fadeInUp"
                  data-wow-delay="0.3s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                      draggable="false"
                      src="/img/team/Pch.jpg"
                      className="center-block"
                    alt=""
                    style={{
                      borderRadius :100
                    }}
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5>Opeyemi Emmanuel</h5>
                  <p>UI/UX Developer</p>
                  <p>Algorand Ambassador</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <a href="#">
                    <i className="fab fa-twitter  fa-lg "/>
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuel-opeyemi-54991b16a/">
                    <i className="fab fa-linkedin fa-lg "/>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Team
