// Imports
import './App.css';
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect } from 'react';

// perawallet instantiating
const perawallet = new PeraWalletConnect()

// algoClient
const algod_token = {
  "X-API-Key": "" //ADD YOUR API KEY
}
const algod_address = "https://testnet-algorand.api.purestake.io/ps2";
const headers = "";
const algodClient = new algosdk.Algodv2(algod_token, algod_address, headers);

//get address
const address = localStorage.getItem('address');

// converter address
const converterAddress = 'GJBPDHMNYDHAHLDCXXWLVHJDK3U3OYX5VHEUHREI5SXMLLBM6J4ALBZSWI'

//asset id
const ASSET_ID = 42771692;

/// transaction code
const  transaction = async () => {
  const suggestedParams = await algodClient.getTransactionParams().do();
  const enc = new TextEncoder();
  const note = enc.encode('Transaction with perawallet');

 const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: address,
    to: converterAddress,
    amount: 1,
    assetIndex: ASSET_ID,
    note : note,
    suggestedParams,
  });
  const optInTxn = [{txn : txn, signers: [address]}]
  const signedTxn = await perawallet.signTransaction([optInTxn])
    await algodClient.sendRawTransaction(signedTxn).do();
}

// Wallet Connect
async function walletConnect() {
  const newAccounts= await perawallet.connect()
  localStorage.setItem("address", newAccounts[0]);
  window.location.reload()
    console.log('Connect')
  }
// wallet disconnect

const disconnect = () => {
  perawallet.disconnect()
  localStorage.removeItem("address");
  window.location.reload()
}
// React functions must return a React component
function App() {

// useEffect to connect to perawallet after reload
  useEffect(() => {
    perawallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
            localStorage.setItem("address", accounts[0]);
      }
      perawallet.connector?.on("disconnect", () => {
        localStorage.removeItem("address");
      });
    })
    .catch((e) => console.log(e));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <div>
          <button id='button1' onClick={address ? disconnect:  walletConnect}>{address ? 'Disconnect' : 'Connect Wallet'}</button>
          </div>
        <h1>
          Choice Coin Converter
        </h1>
          <div>
            Ethereum Address:
            <input id="reciever" type="text"/>
          </div>
          <div>
            Amount:
            <input id="amount" type="text"/>
          </div>
        <p>
        <div>
         You must agree to Choice Coin's Terms and Conditions.
        </div>
        <div>
          Check the box to affirm acceptance.
          <input id="TC" type="radio"/>
        </div>
      </p>
        <div>
        <button id='button' onClick={transaction}>Convert</button>
        </div>
        <p id="message0"></p>
        <p id="message1"></p>
      </header>
    </div>
  );

}

export default App;

