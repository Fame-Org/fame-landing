import * as React from "react";
import {useMediaQuery} from "react-responsive";
import { useAlert } from 'react-alert'

const RoadMap = () => {
    const alert = useAlert()
    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 1224 },
        { deviceWidth: 1600 } // `device` prop
    )
  return (
    <section
      className="roadmap section-padding-100 "
      style={{
          background: 'url("img/bg-img/bg-roadmap.png") no-repeat center center',
          backgroundSize: "cover",
        // background: 'url("img/roadmap.png") no-repeat center center',
        // backgroundSize: "cover",
        //   height : isDesktopOrLaptop ?  "80vh" : "10vh",
      }}
      id="roadmap"
    >
      <div className="container-fluid">
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
          <h2>Fame 2022 Roadmap</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis
                        congue nisl hendrerit commodo.</p> */}
        </div>
        <div className={'justify-content-center text-center'}>
          <div className="section_5-content">
            <div className="section_5-slider-trumb" />
            <div id="section_5-slider-circle">
              {/* <div
                style={{ left: "10%" }}
                className="data_cir cir_0"
                data-date="Q1 2022"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      Social DApp and marketplace integration for farmers and
                      consumers
                    </span>
                    <span className="roadmap_img">
                      <img
                        draggable="false"
                        src="img/roadmap-icons/1.svg"
                        alt=""
                      />
                    </span>
                  </span>

                </div>
              </div> */}
              <div
                style={{ left: "10%" }}
                className="data_cir cir_1"
                data-date="Q4 2022"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      <ul>
                        <li style={{
                          marginTop: '-10px'
                        }}>
                          <h5 >
                            Social App
                          </h5>
                        </li>
                          <li>
                          <h5 >
                            Marketplace
                          </h5>
                        </li>
                      </ul>
                    </span>
                    <span className="roadmap_img">
                      <img
                        draggable="false"
                        src="img/roadmap-icons/2.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div
                style={{ left: "30%", marginBottom : '15rem' }}
                className="data_cir cir_3 "
                data-date="Q1 2023"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      <ul>
                        <li>
                          <h5>NFT Minting</h5>
                        </li>
                        <li>
                            <h5>Swap</h5>
                        </li>
                          <li>
                            <h5>Lending</h5>
                        </li>
                          <li>
                            <h5>Borrowing</h5>
                        </li>
                      </ul>
                    </span>
                    <span className="roadmap_img">
                      <img
                        draggable="false"
                        src="img/roadmap-icons/3.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
              </div>

              <div
                style={{ left: "50%" }}
                className="data_cir cir_5 next"
                data-date="Q2 2023"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      <ul>
                        <li className={'mt-3'}>

                           <h5>
                            Audit
                          </h5>
                          {/*<span>DOA (Voting and Union/Cooperatives)</span>*/}
                        </li>
                        <li>
                          <h5>
                            Ambassador Program
                          </h5>
                        </li>
                      </ul>
                    </span>
                    <span className="roadmap_img">
                      <img
                        draggable="false"
                        src="img/roadmap-icons/5.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div
                style={{ left: "70%" }}
                className="data_cir cir_8 next"
                data-date="Q3 2023"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      <ul>
                        <li className={'mt-2'}>
                          <h5>DAO Voting</h5>
                        </li>
                        <li>
                          <h5>
                            DAO Delegates
                          </h5>
                        </li>
                      </ul>
                    </span>
                    <span className="roadmap_img">
                      <img
                        draggable="false"
                        src="img/roadmap-icons/8.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </div>
              </div>

              <div
                  style={{ left: "90%" }}
                  className="data_cir cir_8 next"
                  data-date="Q4 2023"
              >
                <div className="data_cir-content">
                  <span>
                    <span className="roadmap_content_info">
                      <ul>
                        <li className={'mt-2'}>
                          <h5>Supply Chain</h5>
                        </li>
                        <li>
                          <h5>
                            IOT
                          </h5>
                        </li>
                      </ul>
                    </span>
                    <span className="roadmap_img">
                      <img
                          draggable="false"
                          src="img/roadmap-icons/8.svg"
                          alt=""
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default RoadMap;
