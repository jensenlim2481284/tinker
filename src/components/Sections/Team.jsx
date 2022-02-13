import React from "react";
import NFT1 from "../../assets/img/picture/team/team_edward.png";
import NFT2 from "../../assets/img/picture/team/team_henry.png";
import NFT3 from "../../assets/img/picture/team/team_kienseng.png";
import NFT4 from "../../assets/img/picture/team/team_mxuan.png";

export default function Blog() {
  return (
    <>
      <div id="line" ></div>
      <div id='team' className='container'>
            <h1> Our Team </h1>
            <div id='teamContent'>
                <div className='teamItem'>
                    <img src={NFT1} alt="nft"/>
                    <h2>Edward</h2>
                    <small>The Enchanter</small>
                </div>
                <div className='teamItem'>
                    <img src={NFT2}  alt="nft"/>
                    <h2>Henry</h2>
                    <small>The Wizard</small>
                </div>
                <div className='teamItem'>
                    <img src={NFT3}  alt="nft"/>
                    <h2>Jensen</h2>
                    <small>The Scholar</small>
                </div>
                <div className='teamItem'>
                    <img src={NFT4}  alt="nft"/>
                    <h2>MXuan</h2>
                    <small>The Florist</small>
                </div>
            </div>
      </div>
    </>
  );
}
