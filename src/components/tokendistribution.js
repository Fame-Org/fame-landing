import * as React from "react";


const TokenDistribution = () => {
    return (
      <section className="token-distribution">
        <div className="container">
          <div className="section-heading text-center">
            <div className="dream-dots justify-content-center">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2>Our ICO Distribution</h2>
            <h4>1 FAME = 4.8 ALGO</h4>
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
                src="img/core-img/allocation.png"
                className="center-block"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="token-info-wapper" />
            <h2 className="text-center mb-30">More Token Info</h2>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                  className="token-icon"
                  style={{ backgroundImage: 'url("img/svg/token-icon-1.svg")' }}
                />
                <div className="token-descr">fame</div>
              </div>
            </div>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                  className="token-icon"
                  style={{ backgroundImage: 'url("img/svg/token-icon-2.svg")' }}
                />
                <div className="token-descr">fame</div>
              </div>
            </div>
            <div className="token-info">
              <div className="info-wrapper">
                <div
                  className="token-icon"
                  style={{ backgroundImage: 'url("img/svg/token-icon-3.svg")' }}
                />
                <div className="token-descr">fame</div>
              </div>
            </div>
            <div className="token-info" style={{ marginBottom: 0 }}>
              <div className="info-wrapper">
                <div
                  className="token-icon"
                  style={{ backgroundImage: 'url("img/svg/token-icon-4.svg")' }}
                />
                <div className="token-descr">fame</div>
              </div>
            </div>
            <div className="text-center">
              <a href="#" className="button mt-30">
                Get Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TokenDistribution