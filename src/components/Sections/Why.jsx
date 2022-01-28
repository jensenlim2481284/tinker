import React from "react";
import ScriptTag from 'react-script-tag';   
import MINT from "../../assets/img/picture/mint.gif";

export default function Projects() {
  return (
    <>
        <div id="whySection">
            <canvas width="100" height="100" id="whyCanvas"></canvas>
            <div className='container'>
               <img src={MINT} id='mint'/>
                <h1 className='font40'> Why Mint One</h1>
                <p className='font20'> NEAR is a new ecosystem that is growing rapidly and we have noticed more and more people start knowing it and giving it a try.However there's lacking of tools that could improve overall NFT UX and ecosystem, thus we are here trying to contribute to solving this problem.Of course, owning tinker(s) grants you certain benefits including </p>
                <ul>
                    <li className='font20'>An access to gated discord with full of alphas</li>
                    <li className='font20'>25% of royalties fee given back to holders</li>
                    <li className='font20'>20% of launchpad revenue will be distributed among holders</li>
                    <li className='font20'>Become ambassadors, onboard new projects to the launchpad, grow the community together while earning commissions</li>
                    <li className='font20'>Future whitelist/airdrop</li>
                </ul>
            </div>
            <ScriptTag type="text/javascript"  src= "/script/pixelCanvas.js" />
        </div>
    </>
  );
}


