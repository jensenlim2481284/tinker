import React, { useState, useEffect } from 'react';
import { connect, WalletConnection, keyStores, Contract, utils } from 'near-api-js'
import Button from "../../assets/img/picture/button.png";

const contractId = 'testcandy.testnet';
const successUrl = 'http://localhost:3000';
const failureUrl = 'http://localhost:3000';
const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const config = {
	networkId: "testnet",
	keyStore, // optional if not signing transactions
	nodeUrl: "https://rpc.testnet.near.org",
	walletUrl: "https://wallet.testnet.near.org",
	helperUrl: "https://helper.testnet.near.org",
	explorerUrl: "https://explorer.testnet.near.org",
};


export default function MintButton({ action }) {
	const [wallet, setWallet] = useState(null);
	const [isLogIn, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false)

	useEffect(async () => {

		async function connectWallet() {
			const near = await connect(config);
			const walletConnection = new WalletConnection(near);
			setWallet(walletConnection)
			setIsLogin(walletConnection.isSignedIn())
		}

		connectWallet()
	}, []);

	async function clickHandler() {
		if (isLogIn) {
			mint()
		} else {
			login()
		}
	}

	async function login() {
		wallet.requestSignIn({ contractId, successUrl, failureUrl });
	}

	async function mint() {
		setIsLoading(true)
		const account = wallet.account()

		const ftContract = new Contract(
			account, // the account object that is connecting
			"x.testcandy.testnet",
			{
				viewMethods: ['ft_balance_of'],
				changeMethods: [],
				sender: account,
			}
		);
		let response = await ftContract.ft_balance_of({account_id:account.accountId})
		console.log(response)

		// const nftContract = new Contract(
		// 	account, // the account object that is connecting
		// 	"testcandy.testnet",
		// 	{
		// 		viewMethods: ['get_presales_count'],
		// 		changeMethods: ['nft_candy_machine'],
		// 		sender: account,
		// 	}
		// );
		// let response2 = await nftContract.get_presales_count()
		// console.log(response2)
		// let response = await nftContract.nft_candy_machine({
		// 	receiver_id: account.accountId
		// }, '300000000000000', utils.format.parseNearAmount('5'))
		// console.log(response)
		setIsLoading(false)
	}

	function getText() {
		if (isLoading) return 'Loading...'
		if (isLogIn) return 'Mint Now'
		return 'Connect Wallet'
	}
	return (
		<>
			<div id="headerButton">
				<img src={Button} />
				<a href="#" className='connectWallet' onClick={() => clickHandler()}>
					{getText()}
				</a>
			</div>
			{/* <div id="headerButton">
				<img src={Button} />
				<a href="#" className='connectWallet' onClick={() => clickHandler()}>
					Logout
				</a>
			</div> */}
		</>
	)
}