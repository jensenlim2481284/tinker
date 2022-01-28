import React from "react";
import styled from "styled-components";
import NFT1 from "../../assets/img/picture/nft.jpg";
import NFT2 from "../../assets/img/picture/nft_1.png";
import NFT3 from "../../assets/img/picture/nft_2.png";
import NFT4 from "../../assets/img/picture/nft_3.png";
import NFT6 from "../../assets/img/picture/nft_4.png";
import NFT7 from "../../assets/img/picture/nft_5.png";
import NFT8 from "../../assets/img/picture/nft_6.png";
import NFT9 from "../../assets/img/picture/nft_7.png";
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
						3,333 tinkers are actively crafting tools and products on Nearverse. 🛠️ ⚙️ 
					</p>
					<br/>
					<p className="font13">
						We are building different tools for NFT projects to help growing Near community together. The features include: Generating NFTs and minting, Rarity ranking, whitelisting, discord verification, sales bot and etc.
						Some of the features will be open sourced and some will be paid services which will be included in the NFT launchpad we are building.
					</p>
					<br/>
					<p className="font13">
						Minting tinker(s) is like investing on the team. We strive for long term development to build something that is sustainable, profitable and during the same time, beneficial to the NEAR community.
						
					</p>
					<br/>
					<p>Earnings from secondary sales and launchpad will go back to the Community Wallet and dividends will be given back to our holders from time to time. Checkout more on our discord server.</p>
				</div>
			</div>
		</>
	);
}
