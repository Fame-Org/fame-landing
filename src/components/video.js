import ReactPlayer from "react-player";
import * as React from "react";
import {useMediaQuery} from "react-responsive";


const Video = () => {

    const isDesktopOrLaptop = useMediaQuery(
        { minDeviceWidth: 1224 },
        { deviceWidth: 1600 } // `device` prop
    )
if(!isDesktopOrLaptop){
    return (
        <section className="our_team_area section-padding-0-0 clearfix" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ReactPlayer width={"100%"} url='https://youtu.be/Bp6rA9-srEM'/>
                    </div>
                </div>
            </div>
        </section>
    );


}
    return(<></>)
}

export default Video

// <div className="row  align-items-center">
//     {/*<div className="col-2"></div>*/}
// <div className="col-8 mt-40 ml-30 react-player " >
//     <ReactPlayer width={"150%"} url='https://youtu.be/Bp6rA9-srEM'/>
// </div>
// </div>
