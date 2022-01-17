import * as React from "react";

const FAQ = () => {
    return (
        <div className="faq-timeline-area section-padding-100" id={"DAO"}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12">
                <div className="section-heading">
                  <div className="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                    Frequently Asked Questions
                  </h2>
                  {/* <p className="wow fadeInUp" data-wow-delay="0.4s" style={{marginLeft: 0}}>Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl
                                hendrerit commodo.</p> */}
                </div>
              <div className="dream-faq-area">
                <dl>
                  {/* Single FAQ Area */}
                  <dt className="wave wow fadeInUp" data-wow-delay="0.2s">
                    What is ICO?
                  </dt>
                  <dd className="wow fadeInUp" data-wow-delay="0.3s">
                    <p>
                      ICO is the cryptocurrency industry’s equivalent to an
                      initial public offering and is launched to raise funds.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave wow fadeInUp" data-wow-delay="0.2s">
                    Why choose ICO?
                  </dt>
                  <dd className="wow fadeInUp" data-wow-delay="0.3s">
                    <p>
                      ICO is the cryptocurrency industry’s equivalent to an
                      initial public offering and is launched to raise funds.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave wow fadeInUp" data-wow-delay="0.3s">
                    What cryptocurrencies can I use to purchase?
                  </dt>
                  <dd>
                    <p>
                      ICO is the cryptocurrency industry’s equivalent to an
                      initial public offering and is launched to raise funds.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave wow fadeInUp" data-wow-delay="0.4s">
                    How can I participate in the ICO Token sale?
                  </dt>
                  <dd>
                    <p>
                      ICO is the cryptocurrency industry’s equivalent to an
                      initial public offering and is launched to raise funds.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt className="wave wow fadeInUp" data-wow-delay="0.5s">
                    How do I benefit from the ICO Token?
                  </dt>
                  <dd>
                    <p>
                      ICO is the cryptocurrency industry’s equivalent to an
                      initial public offering and is launched to raise funds.
                    </p>
                  </dd>
                </dl>
              </div>
            </div>


            </div>
        </div>
      </div>
    );
}

export default FAQ