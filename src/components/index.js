import * as React from "react";
import Nav from "./nav";
import Preloader from "./preloader";
import Banner from "./banner";
import SocialMedia from "./socialmedia";
import Partners from "./partners";
import About from "./about";
import OurVideo from "./ourvideo";
import Services from "./services";
import RoadMap from "./roadmap";
import Features from "./features";
import Newsletter from "./newsletter";
import FAQ from "./faq";
import TokenDistribution from "./tokendistribution";
import Team from "./team";
import Footer from "./footer";


const Index = () => {
    return (
        <>
            <Preloader/>
            <Nav/>
            <Banner/>
            <SocialMedia/>
            <Partners/>
            <About/>
            <OurVideo/>
            {/* <Services/> */}
            <RoadMap/>
            <Features/>
            <Newsletter/>
            <FAQ/>
            <TokenDistribution/>
            <Team/>
             <Footer/>
        </>

    )
}

export default Index