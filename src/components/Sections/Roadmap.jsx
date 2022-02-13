import React from "react";
import Gear from "../../assets/img/picture/gear.png";
import Banner from "../../assets/img/picture/banner.png";

export default function Pricing() {
  return (

      <div id='roadmap' className=''>
            <div id='roadmapBanner'>
                <h1> Our Roadmap</h1>
                <img src={Banner} id='bannerStart'  alt="banner"/>
            </div>
            <img src={Gear} id='gear1' alt="gear"/>
            <img src={Gear} id='gear2' alt="gear"/>
            <main>
                <p>
                    <span>Phase 1</span>
					<br/>
                    <b className='title'>Where it all begins</b>
					<br/>
					<br/>
                    <li> <b className='subtitle'>Mint :</b> 3,333 Tinkers. 500 through whitelist and the left through public mint.</li>
                    <li> <b className='subtitle'>Market :</b> Get listed on Paras with attributes filter. We have already got pre-approved from Paras so your tinkers could be listed immediately after public mint.</li>
                    <li> <b className='subtitle'>DAO :</b> Set up TinkerDAO with community wallet. </li>
                </p>            
                <p>
                    <span>Phase 2 </span>
					<br/>
                    <b className='title'>It's time to build</b>
					<br/>
					<br/>
                    <li> <b className='subtitle'>Bot :</b> Sales Bot and Rarity Bot</li>
                    <li> <b className='subtitle'>Modularize :</b> Candy Machine, Whitelist Mint, Discord Verification. </li>
                    <li> <b className='subtitle'>Launchpad :</b> Developing launchpad website. </li>
                    <li> <b className='subtitle'>Open Source :</b> Open source some of the features we built. This will be determined by TinkerDAO through voting.</li>
                </p>            
                <p>
                    <span> Phase 3 </span>
					<br/>
                    <b className='title'>The Launchpad</b>
					<br/>
					<br/>
                    <li> <b className='subtitle'>Launchpad :</b> Officially launch the launchpad.  </li>
                    <li> <b className='subtitle'>Onboarding :</b> Onboard different projects. </li>
                    <li> <b className='subtitle'>Further Development :</b> Discord bot on Community Wallet funds flow. </li>
                </p>               
                <p>
                    <span> Phase 4 </span>
					<br/>
                    <b className='title'>Roadmap 2.0</b>
					<br/>
					<br/>
                    <li> <b className='subtitle'>TBA :</b> Let's see what's the next step.  </li>
                </p>      
            </main>
      </div>
    
  );
}
