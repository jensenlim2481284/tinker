import React from "react";
import styled from "styled-components";
import NFT1 from "../../assets/img/picture/nft.jpg";
import NFT2 from "../../assets/img/picture/nft1.png";
import NFT3 from "../../assets/img/picture/nft2.png";
import NFT4 from "../../assets/img/picture/nft3.png";
import NFT5 from "../../assets/img/picture/nft8.png";
import NFT6 from "../../assets/img/picture/nft4.png";
import NFT7 from "../../assets/img/picture/nft5.png";
import NFT8 from "../../assets/img/picture/nft6.png";
import NFT9 from "../../assets/img/picture/nft7.png";

export default function Blog() {
  return (
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
                <div class='teamItem'>
                    <img src={NFT3} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem'>
                    <img src={NFT4} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
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
                <div class='teamItem'>
                    <img src={NFT7} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem'>
                    <img src={NFT1} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem'>
                    <img src={NFT8} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
                <div class='teamItem'>
                    <img src={NFT9} />
                    <h2> SteamPunker </h2>
                    <small> Founder </small>
                </div>
               
            </div>
      </div>
  );
}
