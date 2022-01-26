import React from "react";
import styled from "styled-components";
import Gear from "../../assets/img/picture/gear.png";
import Banner from "../../assets/img/picture/banner.png";

export default function Pricing() {
  return (

      <div id='roadmap' className=''>
            <div id='roadmapBanner'>
                <h1> Our Roadmap</h1>
                <img src={Banner} id='bannerStart' />
            </div>
            <img src={Gear} id='gear1' />
            <img src={Gear} id='gear2' />
            <main>
                <p>
                    <span> Stage 1 </span>
                    <b>Launch Tinker Union NFT</b>
                     <li> Whitelist mint of 555 tinkers </li>
                    <li> Public mint of 2,778 tinkers (Total of 3,333)</li>
                    <li> List the collection on Paras </li>
                </p>            
                <p>
                    <span>Stage 2 </span>
                    <b>Deliver different features </b>
                    <li> Rarity Ranking </li>
                    <li> Discord Verification  </li>
                    <li> Open source some of the features built</li>
                </p>            
                <p>
                    <span> Stage 3 </span>
                    <b>Launch the Near NFT launchpad</b>
                    <li> Integrate different tools we developed and make a launchpad </li>
                    <li> Appoint ambasaddors from the community </li>
                    <li> Make a community fund wallet </li>
                    <li> Onboard different projects to the launchpad </li>
                </p>            
            </main>
      </div>
    
  );
}
