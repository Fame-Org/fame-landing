import * as React from "react";


const TokenDistribution = () => {
    return (
      <section className="token-distribution mt-30">
          <div className="container">
              <div className="section-heading text-center">
                  <div className="dream-dots justify-content-center">
                      <span/>
                      <span/>
                      <span/>
                      <span/>
                      <span/>
                      <span/>
                      <span/>
                  </div>
                  <h2>Fame Distribution</h2>
                  {/*<h4>1 FAME = 40 ALGO</h4>*/}
                  {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p> */}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <h2 className="text-center mb-30">Token Allocation</h2>
                  <div className="token-allocation">
                      <img
                          draggable="false"
                  src="img/chart.png"
                  className="center-block"
                  style={{
                    marginTop: -20,
                    // width: "80%"
                  }}
                  alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="token-info-wapper" />
            <h2 className="text-center mb-30">More Token Info</h2>
            <div className="token-info mt-30">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}

                />
                <div className="token-descr">Community : 78%</div>
              </div>
            </div>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Marketing : 4%</div>
              </div>
            </div>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Ambassadors : 4%</div>
              </div>
            </div>

            <div className="token-info">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Developers : 4%</div>
              </div>
            </div>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Charity Ministers : 4%</div>
              </div>
            </div>

            <div className="token-info">
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Art Ministers : 4%</div>
              </div>
            </div>


            <div className="token-info" style={{marginBottom: 0}}>
              <div className="info-wrapper">
                <div
                    className="token-icon"
                    style={{backgroundImage: 'url("img/svg/tokenomics.svg")'}}
                />
                <div className="token-descr">Dubai(2030) : 2%</div>
              </div>
            </div>
            {/*<div className="text-center">*/}
            {/*  <a href="#" className="button mt-30">*/}
            {/*    Get Whitepaper*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    );
}

export default TokenDistribution