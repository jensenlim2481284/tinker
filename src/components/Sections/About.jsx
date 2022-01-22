import React from "react";
import styled from "styled-components";
import NFT1 from "../../assets/img/picture/nft.jpg";
import NFT2 from "../../assets/img/picture/nft1.png";
import NFT3 from "../../assets/img/picture/nft2.png";
import NFT4 from "../../assets/img/picture/nft3.png";
import NFT6 from "../../assets/img/picture/nft4.png";
import NFT7 from "../../assets/img/picture/nft5.png";
import NFT8 from "../../assets/img/picture/nft6.png";
import NFT9 from "../../assets/img/picture/nft7.png";
import NFT5 from "../../assets/img/picture/nft.gif";

export default function Services() {
  return (
    <>
        <div id="aboutSection" class='container'>
            <div id="aboutLeft">
                  <img src={NFT1} />
                  <img src={NFT2} />
                  <img src={NFT3} />
                  <img src={NFT4} />
                  <img src={NFT5} />
                  <img src={NFT6} />
                  <img src={NFT7} />
                  <img src={NFT8} />
                  <img src={NFT9} />
            </div>
            <div id="aboutRight">
                <h1>What is Tinker Union</h1>
                <p className="font13">
                3,333 tinkers are actively crafting tools and products on Nearverse. 
                We are focusing on developing NFT launchpad on Near that makes launching NFT projects possible just a with a few clicks.
                What's more exciting is that we will be opensourcing majority of our code to further drive the development and growth of the ecosystem
                Features that will be included in the launchpad includes: Generating NFTs and minting, Rarity ranking, whitelisting, discord verification and etc
                </p>
            </div>
        </div>
    </>
  );
}
