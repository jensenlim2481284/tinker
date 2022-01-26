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
                    <span> Nov 2021 </span>
                    <b>Launch Tinker Union</b>
                    Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES.
                </p>            
                <p>
                    <span> Nov 2021 </span>
                    <b>Launch Tinker Union</b>
                    Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES.
                </p>            
                <p>
                    <span> Nov 2021 </span>
                    <b>Launch Tinker Union</b>
                    Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES.
                </p>            
            </main>
           
      </div>
    
  );
}
