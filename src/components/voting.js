import Countdown from "react-countdown";
import * as React from "react";
import moment from 'moment';
import {useAlert} from "react-alert";

const Voting = () => {
    const alert =useAlert()
const CountdownComponent =() =>{
    if(
        // moment.now()   > moment("January 17, 2022") &&
        moment.now()   < moment("January 30, 2022")){
        return (
            <Countdown className={" tab-val "} precision={1} date={'2022-01-30T13:00:00'}>
                           <div className="conuter-header">
                             <h3 className="text-center">VOTING HAS ENDED!</h3>
                        </div>
            </Countdown>

        )
    }

    return <div></div>

}

    const VoteComponent =() =>{
        if(

            //sunday 1pm
            moment.now()   > moment("January 24, 2022") && moment.now()   < moment("January 30, 2022")){
            return (
                <div className="text-center">
                    <a onClick={()=>{
                        alert.show("Click a wallet below to vote and transfer into the address to vote!")
                    }} className="button mt-30">
                        Vote
                    </a>
                </div>

            )
        }
        if( moment.now()   > moment("January 30, 2022")){
            return (
                <div className="text-center">
                    <a href="#" className="button mt-30">
                        Vote ended
                    </a>
                </div>
            )
        }

        return (
            <div className="text-center">
                <a href="#" className="button mt-30">
                    Coming Soon
                </a>
            </div>
        )

    }

    return (

        <div  className="col-12  col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1 ml-30">
            <div className="ico-counter">
                <div className="counter-down">
                    <div className="content">
                        <div className="conuter-header">
                            <h3 className="text-center">VOTING PERIOD FOR FAME MINISTER FOR LAND ART</h3>
                        </div>
                        <div className="counterdown-content">
                            {/* <div class="ico-sales-status mb-15 o-hidden">
                                  <div class="pull-left">
                                      <h3 class="dollar-earning">$7,575,357</h3>
                                      <p style="padding-left:10px">Worth of DREAM tokens</p>
                                  </div>
                                  <div class="pull-right">
                                      <h3 class="btc-earning">9.764 <span>BTC</span></h3>
                                      <p>BTC Raised</p>
                                  </div>
                              </div> */}
                            {/* Countdown  */}
                            <div className="count-down titled circled text-center">
                                {/*<div className="simple_timer syotimer timer">*/}
                                {/*  <div className="timer-head-block" />*/}
                                {/*  <div className="timer-body-block">*/}
                                {/*    <div className="table-cell day">*/}
                                {/*      <div className="tab-val">122</div>*/}
                                {/*      <div className="tab-metr tab-unit">days</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="table-cell hour">*/}
                                {/*      <div className="tab-val">08</div>*/}
                                {/*      <div className="tab-metr tab-unit">hours</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="table-cell minute">*/}
                                {/*      <div className="tab-val">52</div>*/}
                                {/*      <div className="tab-metr tab-unit">minutes</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="table-cell second">*/}
                                {/*      <div className="tab-val" style={{ opacity: 1 }}>*/}
                                {/*        58*/}
                                {/*      </div>*/}
                                {/*      <div className="tab-metr tab-unit">seconds</div>*/}
                                {/*    </div>*/}
                                {/*  </div>*/}
                                {/*  <div className="timer-foot-block" />*/}
                                {/*</div>*/}

                                <h3 className="text-center">Monday 17th 12am to Sunday 23rd 12am</h3>

                                    <CountdownComponent />

                            </div>
                            {/*<div className="ico-progress">*/}
                            {/*    <ul className="list-unstyled list-inline clearfix mb-10">*/}
                            {/*        <li className="title">33m</li>*/}
                            {/*        <li className="strength">75m</li>*/}
                            {/*    </ul>*/}
                            {/*    /!* skill strength *!/*/}
                            {/*    <div className="current-progress">*/}
                            {/*        <div*/}
                            {/*            className="progress-bar has-gradient"*/}
                            {/*            style={{width: "75%"}}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <span className="pull-left">Softcap in 103 days</span>*/}
                            {/*    <span className="pull-right">Token Hardcap</span>*/}
                            {/*</div>*/}
                            <VoteComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ico-docs">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <a href="https://algoexplorer.io/address/O7CGMGNL5AXKCLCHVCUC3WEWXZ4UR5K5RFAKOPLR47E7SANQZQOQJLVX7E"
                           target="_blank" className="doc-element">
                            <a className="document-entry"
                               href="https://algoexplorer.io/address/O7CGMGNL5AXKCLCHVCUC3WEWXZ4UR5K5RFAKOPLR47E7SANQZQOQJLVX7E"
                               target="_blank">
                                <span className="title">@modified_star </span>
                            </a>
                        </a>
                        
                        <div>
                            <img src="/img/qr1.jpeg" alt="qr code"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <a href="https://algoexplorer.io/address/CLFA4TRTPZXLNGE3ZAD7X2POK4VOLHGASC3ZQT7TU4GR7HBXXUATS5TBQE"
                           target="_blank" className="doc-element">
                            <a className="document-entry"
                               href="https://algoexplorer.io/address/CLFA4TRTPZXLNGE3ZAD7X2POK4VOLHGASC3ZQT7TU4GR7HBXXUATS5TBQE"
                               target="_blank">
                                <span className="title">Wallet B</span>
                            </a>

                        </a>
                        <div>
                            <img src="/img/qr2.jpeg" alt="qr code"/>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <a href="https://algoexplorer.io/address/LODVP3GDQIE7SPRXI4NN2TNHHK34GAPOJMXKX5RV46IJNZS3NOGH4MM5CI"
                           target="_blank" className="doc-element">
                            <a className="document-entry"
                               href="https://algoexplorer.io/address/LODVP3GDQIE7SPRXI4NN2TNHHK34GAPOJMXKX5RV46IJNZS3NOGH4MM5CI"
                               target="_blank">
                                <span className="title">Wallet C </span>
                            </a>
                        </a>
                        <div>
                            <img src="/img/qr3.jpeg" alt="qr code"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <a href="https://algoexplorer.io/address/LODVP3GDQIE7SPRXI4NN2TNHHK34GAPOJMXKX5RV46IJNZS3NOGH4MM5CI"
                           target="_blank" className="doc-element">
                            <a className="document-entry"
                               href="https://algoexplorer.io/address/LODVP3GDQIE7SPRXI4NN2TNHHK34GAPOJMXKX5RV46IJNZS3NOGH4MM5CI"
                               target="_blank">
                                <span className="title">Wallet D </span>
                            </a>
                        </a>
                        <div>
                            <img src="/img/qr4.jpeg" alt="qr code"/>
                        </div>
                    </div>


                    {/*<div className="col-md-6 col-sm-6 col-xs-12">*/}
                    {/*    <a href="https://algoexplorer.io/address/L6G7BROMBV7FK4V3D5CICMEBJF67653C7VDO3BCVNSZ22ALJLEJEKDREQY"*/}
                    {/*       target="_blank" className="doc-element">*/}
                    {/*        <a className="document-entry"*/}
                    {/*           href="https://algoexplorer.io/address/L6G7BROMBV7FK4V3D5CICMEBJF67653C7VDO3BCVNSZ22ALJLEJEKDREQY"*/}
                    {/*           target="_blank">*/}
                    {/*            <span className="title">POOL D</span>*/}
                    {/*        </a>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    );
}

export default Voting
