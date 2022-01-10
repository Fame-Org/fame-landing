import * as React from "react";
import Nav from "./nav";
import Preloader from "./preloader";
import Banner from "./banner";
import SocialMedia from "./socialmedia";
import Partners from "./partners";
import About from "./about";
import Services from "./services";
import RoadMap from "./roadmap";
import Features from "./features";
import Newsletter from "./newsletter";
import TokenDistribution from "./tokendistribution";
import Team from "./team";
import Footer from "./footer";
import OurVideo from "./ourvideo";
import Video from "./video";


const Index = () => {
    return (
        <>
            <Preloader/>
            <Nav/>
            <Banner/>
                <Video />
            <SocialMedia/>
            <Partners/>
            <About/>
            <TokenDistribution/>
            {/*<OurVideo/>*/}
            <Services/>w
            <RoadMap/>
            <Features/>


            <Team/>
            <Newsletter/>

            {/*<FAQ/>*/}
            <Footer/>
        </>

    )
}

export default Index