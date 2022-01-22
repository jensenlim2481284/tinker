import React from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/img/picture/nft.gif";
import ShipImage from "../../assets/img/picture/ship1.png";
import Ship2Image from "../../assets/img/picture/ship2.png";

export default function Header() {
  return (
    <div id='home' className="container flexSpaceCenter"> 
        <div id='headerBG'></div>
        <img id='ship1' src={ShipImage}/>
        <img id='ship2' src={Ship2Image}/>
        <div id="leftSide">
            <div>
                <h1 className="bold font60">3,333 Tinker assembled on NEAR</h1>
                <h2 className="font15 regular" >
                    Join us and be part of the force building NFT ecosystem on NEAR
                </h2>
                <div className='btnWrapper'>
                    <button className='btn-primary connectWallet' id="headerButton">
                        Mint Now
                    </button>
                </div>
            </div>
        </div>
        <div id="rightSide">
            <div id="imageWrapper">
                <img src={HeaderImage}  />
            </div>
        </div>
        <div class="ag-smoke-block">
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.png" alt="smoke-pink" class="ag-smoke_img ag-smoke_img__left" width="1920" height="1080"/>
            </picture>
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png" alt="smoke-blue" class="ag-smoke_img ag-smoke_img__right" width="1920" height="1080"/>
            </picture>
        </div> 
    </div>  
  );
}

