import React from "react";
import styled from "styled-components";
import NFT1 from "../../assets/img/picture/team/team_edward.png";
import NFT2 from "../../assets/img/picture/team/team_henry.png";
import NFT3 from "../../assets/img/picture/team/team_kienseng.png";
import NFT4 from "../../assets/img/picture/team/team_mxuan.png";

export default function Blog() {
  return (
      <div id='team' className='container'>
            <h1> Our Team </h1>
            <div id='teamContent'>
                <div class='teamItem'>
                    <img src={NFT1} />
                    <h2>Edward</h2>
                    <small>The Enchanter</small>
                </div>
                <div class='teamItem'>
                    <img src={NFT2} />
                    <h2>Henry</h2>
                    <small>The Wizard</small>
                </div>
                <div class='teamItem'>
                    <img src={NFT3} />
                    <h2>Kien Seng</h2>
                    <small>The Scholar</small>
                </div>
                <div class='teamItem'>
                    <img src={NFT4} />
                    <h2>MXuan</h2>
                    <small>The Florist</small>
                </div>
            </div>
      </div>
  );
}
