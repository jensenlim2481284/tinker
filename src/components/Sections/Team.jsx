import React from "react";
import styled from "styled-components";
import NFT1 from "../../assets/img/picture/nft_9.png";
import NFT2 from "../../assets/img/picture/nft_1.png";
import NFT3 from "../../assets/img/picture/nft_2.png";
import NFT4 from "../../assets/img/picture/nft_3.png";
import NFT5 from "../../assets/img/picture/nft_8.png";
import NFT6 from "../../assets/img/picture/nft_4.png";
import NFT7 from "../../assets/img/picture/nft_5.png";
import NFT8 from "../../assets/img/picture/nft_6.png";
import NFT9 from "../../assets/img/picture/nft_7.png";

export default function Blog() {
  return (
    <>
      <div id="line" ></div>
      <div id='team' className='container'>
            <h1> Our Team </h1>
            <div id='teamContent'>
                <div class='teamItem'>
                    <img src={NFT1} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem'>
                    <img src={NFT2} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem hidden'>
                   
                </div>
                <div class='teamItem hidden'>
                  
                </div>
                <div class='teamItem'>
                    <img src={NFT5} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
               
                <div class='teamItem'>
                    <img src={NFT6} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem hidden'>
                   
                </div>
                <div class='teamItem'>
                    <img src={NFT4} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem hidden'>
                   
                </div>
                <div class='teamItem'>
                    <img src={NFT9} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
               
            </div>
      </div>
    </>
  );
}
