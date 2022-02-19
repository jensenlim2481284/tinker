import { Modal } from 'react-bootstrap';
import Countdown from 'react-countdown';
import React, { useState, useEffect } from 'react';
import Button from "../../assets/img/picture/button.png";
import ModalBG from "../../assets/img/picture/modal.png";
import { connect, WalletConnection, keyStores, Contract, utils } from 'near-api-js'


export default function MintButton({ action }) {


	// Define hook variable 
	const [wallet, setWallet] = useState(null);
	const [isLogIn, setIsLogin] = useState(false);
	const [nftCount, setNftCount] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isWhitelisted, setIsWhitelisted] = useState(null);

    // Modal 
    const [prompt, setPrompt] = useState(false);
    const handlePromptClose = () => setPrompt(false);
    const handlePromptShow = () => setPrompt(true);
    
	// Hook function 
	useEffect(() => {

		// Function to keep track of NEAR wallet connection
		async function connectWallet() {

			// Check wallet connection and set hook variable 
			const walletConnection = new WalletConnection(await connect(config));
			setIsLogin(walletConnection.isSignedIn())
			setWallet(walletConnection)

			// If connected wallet 
			if (walletConnection.isSignedIn()) {

				// Get connected account 
				const account = walletConnection.account()

				// Check if whitelisted 
				const ftContract = new Contract(
					account,
					FTContractID,
					{
						viewMethods: ['ft_balance_of'],
						changeMethods: [],
						sender: account,
					}
				);
				let ftBalance = await ftContract.ft_balance_of({ account_id: account.accountId })
				setIsWhitelisted(ftBalance > 0);
				
				// Check how many nft left 
				const nftContract = new Contract(
					account,
					NFTContractID,
					{
						viewMethods: ['get_presales_count'],
						changeMethods: ['nft_candy_machine'],
						sender: account,
					}
				);
				setNftCount(await nftContract.get_presales_count());

			}

		}

		connectWallet();

	}, []);


	// Return mint ( NEAR ) button based on condition & action 
	return renderButton();



	// Function to logout NEAR wallet 
	async function logout() {
		wallet.signOut();
		window.location.replace(window.location.origin + window.location.pathname);
	}


	// Function to handle mint
	async function mintHandler() {

		setIsLoading(true)

		// If not yet connect NEAR wallet, login with NEAR
		if (!isLogIn)
			wallet.requestSignIn({ NFTContractID, successUrl, failureUrl });
        // Open modal 
        else 
            handlePromptShow();

		setIsLoading(false)
	}

	// Function to mint NFT
	async function mintNFT() {


		// If not yet connect NEAR wallet, login with NEAR
		if (!isLogIn)
			wallet.requestSignIn({ NFTContractID, successUrl, failureUrl });

        // Validate quantity
        var err =null;
        var quantity = document.getElementById("promptQuantity").value;
        if(!/^[0-9]+$/.test(quantity))
            err = "Please only enter numeric characters only!";
        if(quantity <= 0)
            err = "Minimum mint quantity is 1";
        if(quantity > nftCount)
            err = "Maximum mint quantity is " + nftCount;
        if(err !== null)
        {
            let errElement = document.getElementById("promptErr");
            errElement.innerHTML= err;
            errElement.style.display = "block";
            return false;
        }

        // Redirect to NEAR wallet and mint 
		setIsLoading(true)
        quantity = parseInt(quantity);
		let nearAmount = parseInt(mintPrice) * quantity
		nearAmount =  utils.format.parseNearAmount(nearAmount.toString())
		const account = wallet.account()
		const nftContract = new Contract(
			account, 
			NFTContractID,
			{
				viewMethods: ['get_presales_count'],
				changeMethods: ['nft_candy_machine'],
				sender: account,
			}
		);
		await nftContract.nft_candy_machine({
            callbackUrl:'http://localhost:3000/?mint=true&',
            args :{
                receiver_id: account.accountId,
                quantity,
            },   
            gas: '300000000000000',     
            amount: nearAmount         
		});

		setIsLoading(false)
	}


	// Function to return button text based on action and state
	function getText(isMint = true, date = null) {

		if (isLoading) return 'Loading...'
		if (isLogIn) {

			if (isMint === true) return 'Mint Now';
			else if (isMint === 'out') return 'Mint Out';
			else {

				// Renderer countdown callback with condition
				const renderer = ({ total, days, hours, minutes, seconds, completed }) => {
					if (completed)
						window.location.replace(window.location.origin + window.location.pathname);
					else
						return (<span> {days * 24 + hours}H {minutes}M {seconds}S </span>);
				};

				return (<Countdown date={date} renderer={renderer} />);
			}

		}
		return 'Connect Wallet';
	}



	// Main Function to render button based on condition & action 
	function renderButton() {

		// Return logout button 
		if (action === 'Logout') {
			if (isLogIn)
				return (
					<div className="logout-btn ">
						<button className="font15" onClick={() => logout()}>Logout</button>
					</div>
				)
			return (<></>)
		}

		// Return mint button component based on mint date condition 
		else {

			// button component 
			function btn(enabled, isMint, date) {
				if (enabled)
					return (<button  onClick={() => mintHandler()}>{getText(isMint, date)}</button>);
				return (<button disabled>{getText(isMint, date)}</button>);
			}

			// Whitelist description component 
			function wlDesc() {
				if (isLogIn) {
					if (!isPublicMintDate && !isWhitelisted)
						return (<small id="mintDesc" style={{ textAlign: "left" , bottom:"-35px"}}>You are not whitelisted, please join the public mint later</small>)
					return (<small id="mintDesc">{(isWhitelisted) ? '-  You are whitelisted  -' : '-  You are not whitelisted  -'}</small>)
				}
				return (<></>);
			}

			// Mint count component 
			function mintCount() {
				if (isLogIn){
					var percent = parseInt(nftCount / maxSupply * 100);
                    return (
                        <div id="mintCount" className="container ">
                            <div id="mintCountDesc">
                                <span id='mintPercent'>{percent}%</span>
                                <span id='mintCountLeft'>NFT Left -  {nftCount} / {maxSupply}</span>
                            </div>
                            <div className="progress-bar">
                                <span className="progress-bar-fill" style={{ width: percent + "%" }}></span>
                            </div>
                        </div>
                    )
                }
				return (<></>);
			}


			// mint button component 
			function mintBtn(enabled = true, isMint = true, date = null) {

				return (
					<>
						<div className="mint-btn">
                            <div className="mint-btn-section">
                                <img src={Button} alt="Button background"/>
                                {btn(enabled, isMint, date)}
                            </div>
							{wlDesc(wlDesc)}
						</div>
						{mintCount()}             

                        <Modal id='promptModal' show={prompt} onHide={handlePromptClose} >
                            <Modal.Body  style={{ background: "url("+ModalBG+")" }}>
                                <div className='promptBody'>
                                    <p className="font20">How many tinker you want to mint</p>
                                    <input type='number' step="1" min="1" max={nftCount} id="promptQuantity" className="font20" defaultValue="1"/>
                                    <small id="promptErr">  </small>
                                    <div className="promptBtnSection">
                                        <button className="promptClose" onClick={handlePromptClose}>
                                            ✕
                                        </button>
                                        <button id="mintBtn" className="shake-slow-animation" onClick={() => mintNFT()}>
                                            Confirm Mint  🔨
                                        </button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        
					</>
				);

			}

			// If not yet connect wallet 
			if (!isLogIn)
				return mintBtn();

			// If not yet reach whitelist mint date 
			if (!isWhitelistMintDate)
				return mintBtn(false, false, whitelistMintDate);
			else {

				// If not yet reach public mint date 
				if (!isPublicMintDate) {

					// If user is whitelisted - able to mint 
					if (isWhitelisted)
						return mintBtn(true);
					else
						return mintBtn(false, false, publicMintDate);

				}
				else {

					// Check if mint out 
					if (nftCount <= 0)
						return mintBtn(false, 'out');
					else
						return mintBtn(true);
				}
			}
		}
	}

}


// Define NEAR variable 
const maxSupply = process.env.REACT_APP_MAX_SUPPLY;
const mintPrice = process.env.REACT_APP_MINT_PRICE;
const successUrl = process.env.REACT_APP_SUCCESS_URL;
const failureUrl = process.env.REACT_APP_FAILURE_URL;
const FTContractID = process.env.REACT_APP_FT_CONTRACT_ID;
const NFTContractID = process.env.REACT_APP_NFT_CONTRACT_ID;
const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const config = {
	networkId: process.env.REACT_APP_NETWORK_ID,
	keyStore, // optional if not signing transactions
	nodeUrl: process.env.REACT_APP_NODE_URL,
	walletUrl: process.env.REACT_APP_WALLET_URL,
	helperUrl: process.env.REACT_APP_HELPER_URL,
	explorerUrl: process.env.REACT_APP_EXPLORER_URL,
};

// Define mint date variable 
const whitelistMintDate = new Date(process.env.REACT_APP_WL_MINT_DATE  * 1000);
const isWhitelistMintDate = (whitelistMintDate.getTime() <= new Date().getTime());
const publicMintDate =  new Date(process.env.REACT_APP_PUBLIC_MINT_DATE * 1000);
const isPublicMintDate = (publicMintDate.getTime() <= new Date().getTime());

