import React from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/img/picture/nft.gif";
import ShipImage from "../../assets/img/picture/ship1.png";
import Ship2Image from "../../assets/img/picture/ship2.png";
import Button from "../../assets/img/picture/button.png";
import Twitter from "../../assets/img/picture/twitter.png";
import Discord from "../../assets/img/picture/discord.png";

export default function Header() {
  return (
    <div id='home' className="container flexSpaceCenter"> 
        <div id='headerBG' className="container"></div>
        <img id='ship1' src={ShipImage}/>
        <img id='ship2' src={Ship2Image}/>
        <div id="leftSide">
            <div>
                <h1 className="bold font60">3,333 Tinkers assembled on NEAR</h1>
                <h2 className="font15 regular" >
                    Join us and be part of the force building NFT ecosystem on NEAR
                </h2>
                <div id="headerButton">
                    <img src={Button}/>
                    <a href="#" className='connectWallet'>
                        Mint (TBA)
                    </a>
                </div>
                <div id='headerSocial'>
                    <a target="_blank" href="https://twitter.com/NearTinkerUnion"> <img src={Twitter}/></a>
                    <a target="_blank" href="https://discord.gg/9D5V5j5nWr"> <img src={Discord}/></a>
                </div>
            </div>
        </div>      
        <div class="ag-smoke-block">
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.png" alt="smoke-pink" class="ag-smoke_img ag-smoke_img__right" width="1920" height="1080"/>
            </picture>
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png" alt="smoke-blue" class="ag-smoke_img ag-smoke_img__left" width="1920" height="1080"/>
            </picture>
        </div> 
    </div>  
  );
}

