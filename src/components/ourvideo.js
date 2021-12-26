import * as React from "react";


const OurVideo = () => {
    return (
        <>
            <section className="demo-video section-before section-padding-100">
                <div className="container">
                    <div className="section-heading text-center">
                        <div className="dream-dots justify-content-center">
                            <span/><span/><span/><span/><span/><span/><span/>
                        </div>
                        <h2>Watch our demo video</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis
                            congue nisl hendrerit commodo.</p> */}
                    </div>
                    {/* Welcome Video Area */}
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
                        <div className="welcome-video-area">
                            {/* Welcome Thumbnail */}
                            <div className="welcome-thumb">
                                <img draggable="false" src="img/bg-img/bg-4.jpg" alt=""/>
                            </div>
                            {/* Video Icon */}
                            <div className="video-icon">
                                <a href="https://www.youtube.com/watch?v=gbXEPHsTkgU"
                                   className="btn dream-btn video-btn" id="videobtn"><i className="fa fa-play"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"/>
            <div className="clearfix"/>

        </>


    )
}

export default OurVideo