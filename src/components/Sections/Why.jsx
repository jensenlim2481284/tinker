import React from "react";
import styled from "styled-components";
import ScriptTag from 'react-script-tag';   

export default function Projects() {
  return (
    <>
        <div id="whySection">
            <canvas width="100" height="100" id="whyCanvas"></canvas>
            <div className='container'>
                <h1 className='font40'> Why Mint One</h1>
                <p className='font20'> NEAR is a new ecosystem that is growing rapidly and we have noticed more and more people start knowing it and giving it a try.However there's lacking of tools that could improve overall NFT UX and ecosystem, thus we are here trying to contribute to solving this problem.Of course, owning tinker(s) grants you certain benefits including </p>
                <ul>
                    <li className='font20'>A certain share of our revenue from launchpad profit</li>
                    <li className='font20'>Owning 3 tinkers allows you to be our ambassador and earn commissions when you introduce project</li>
                    <li className='font20'>An access to gated discord with full of alphas</li>
                </ul>
            </div>
            <ScriptTag type="text/javascript"  src= "/script/pixelCanvas.js" />
        </div>
    </>
  );
}


