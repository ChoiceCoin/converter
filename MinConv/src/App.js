// Imports
import './App.css';
//import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

const perawallet = new PeraWalletConnect()

function SmartButton() {
  const recieverAddress = () => {
    console.log("Transaction Sending.")
    const recieverValue = document.getElementById('reciever').value
    document.getElementById('message0').textContent = "Sending to: "+recieverValue;
    const amountValue = document.getElementById('amount').value
    document.getElementById('message1').textContent = "Amount to send: "+amountValue;
  }
  return (
    <button id='button' onClick={recieverAddress}>Convert</button>
  )
}

// Wallet Connect
async function walletConnect() {
  await perawallet.connect()
    console.log('Connect')
  }

// React functions must return a React component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>
          <button id='button1' onClick={walletConnect}>Connect Wallet</button>
          </div>
        </p>
        <h1>
          Choice Coin Converter
        </h1>
        <p>
          <div>
            Ethereum Address:
            <input id="reciever" type="text"/>
          </div>
          <div>
            Amount:
            <input id="amount" type="text"/>
          </div>
        </p>
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
          <SmartButton />
        </div>
        <p id="message0"></p>
        <p id="message1"></p>
      </header>
    </div>
  );

}

export default App;

