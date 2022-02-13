import React from "react";
import ShipImage from "../../assets/img/picture/ship1.png";
import Ship2Image from "../../assets/img/picture/ship2.png";
import Twitter from "../../assets/img/picture/twitter.png";
import Discord from "../../assets/img/picture/discord.png";
import MintButton from "../Buttons/MintButton";

export default function Header() {

  return (
    <div id='home' className="container flexSpaceCenter"> 
        <div id='headerBG' className="container"></div>
        <img id='ship1' src={ShipImage} alt="ship"/>
        <img id='ship2' src={Ship2Image} alt="ship"/>
        <div id="leftSide">
            <div>
                <h1 className="bold font60">3,333 Tinkers assembled on NEAR</h1>
                <h2 className="font15 regular" >
                    Join us and be part of the force building NFT ecosystem on NEAR
                </h2>
				<MintButton action="Login"/>
                <div id='headerSocial'>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/NearTinkerUnion"> <img src={Twitter} alt='twitter'/></a>
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/9D5V5j5nWr"> <img src={Discord} alt='discord'/></a>
                </div>
            </div>
        </div>      
        <div className="ag-smoke-block">
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.png" alt="smoke-pink" className="ag-smoke_img ag-smoke_img__right" width="1920" height="1080"/>
            </picture>
            <picture>
                <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png" alt="smoke-blue" className="ag-smoke_img ag-smoke_img__left" width="1920" height="1080"/>
            </picture>
        </div> 
    </div>  
  );
}

