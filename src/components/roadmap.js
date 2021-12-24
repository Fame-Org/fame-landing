import * as React from "react";


const RoadMap = () => {
    return (
        <section className="roadmap section-padding-100" style={{
            background: 'url("img/bg-img/bg-roadmap.png") no-repeat center center',
            backgroundSize: 'cover'
        }} id="roadmap">
            <div className="container-fluid">
                <div className="section-heading text-center">
                    <div className="dream-dots justify-content-center">
                        <span/><span/><span/><span/><span/><span/><span/>
                    </div>
                    <h2>Our ICO Roadmap</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis
                        congue nisl hendrerit commodo.</p>
                </div>
                <div className="row">
                    <div className="section_5-content">
                        <div className="section_5-slider-trumb"/>
                        <div id="section_5-slider-circle">
                            <div style={{left: '10%'}} className="data_cir cir_0" data-date="Q2 2022">
                                <div className="data_cir-content">
                                    <span><span className="roadmap_content_info">Emergence and design of the idea</span><span
                                        className="roadmap_img"><img draggable="false" src="img/roadmap-icons/1.svg"
                                                                     alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '20%'}} className="data_cir cir_1" data-date="Q3 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>built our team</span></li>
                    <li><span>company establishment</span></li>
                    <li><span>legal issues setting</span></li>
                    <li><span> concept development</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/2.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '30%'}} className="data_cir cir_2" data-date="Q4 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span> start development of the ealier version and crypto wallet version</span></li>
                    <li><span>negotiations on partnerships</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/3.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '40%'}} className="data_cir cir_3" data-date="Q1 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>website launch</span></li>
                    <li><span>White Paper published</span></li>
                    <li><span>Private and Pre-sale start</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/4.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '50%'}} className="data_cir cir_4 red_crc" data-date="Q2 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>Crowdsale</span></li>
                    <li><span>marketing campaign</span></li>
                    <li><span>listing to the major exchanges</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/5.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '60%'}} className="data_cir cir_5 next" data-date="Q3 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>Crypto Wallet version release</span></li>
                    <li><span>Testnet launch</span></li>
                    <li><span> Platform ealier version development</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/6.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '70%'}} className="data_cir cir_6 next" data-date="Q4 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>Mobile App</span></li>
                    <li><span>Explorer</span></li>
                    <li><span>new partnerships and new marketplace support</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/7.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '80%'}} className="data_cir cir_7 next" data-date="Q1 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span>Mainnet launch</span></li>
                    <li><span>Wallet beta-version release</span></li>
                    <li><span>Masternodes implementation</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/8.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                            <div style={{left: '90%'}} className="data_cir cir_8 next" data-date="Q2 2022">
                                <div className="data_cir-content">
              <span><span className="roadmap_content_info"><ul><li><span> Platform integration to electronic marketplaces</span></li>
                    <li><span>Zero Fee</span></li>
                  </ul>
                </span><span className="roadmap_img"><img draggable="false" src="img/roadmap-icons/9.svg"
                                                          alt=""/></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default RoadMap