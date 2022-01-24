import React from "react";
import styled from "styled-components";
import Gear from "../../assets/img/picture/gear.png";

export default function Pricing() {
  return (

      <div id='roadmap' className='container'>
            <h1> Our Roadmap</h1>
            <img src={Gear} id='gear1' />
            <img src={Gear} id='gear2' />
            <div className="timeline">
                <div className="column">
                    <div className="title">
                        <h1> Stage 1 </h1>
                        <h2> Launch Tinker Union NFT </h2>
                    </div>
                    <div className="description">
                        <li> Whitelist mint of 555 tinkers </li>
                        <li> Public mint of 2,778 tinkers (Total of 3,333)</li>
                        <li> List the collection on Paras </li>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        <h1> Stage 2 </h1>
                        <h2> Deliver different features </h2>
                    </div>
                    <div className="description">
						<li> Rarity Ranking </li>
                        <li> Discord Verification  </li>
						<li> Open source some of the features built</li>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        <h1> Stage 3 </h1>
                        <h2> Launch the Near NFT launchpad </h2>
                    </div>
                    <div className="description">
						<li> Integrate different tools we developed and make a launchpad </li>
						<li> Appoint ambasaddors from the community </li>
						<li> Make a community fund wallet </li>
						<li> Onboard different projects to the launchpad </li>
                    </div>
                </div>
            </div>
      </div>
    
  );
}
