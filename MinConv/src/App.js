// Imports
import './App.css';
//import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

const perawallet = new PeraWalletConnect()

// Smart Contract
   // Algorand Network Connection
 const algod_token = {
    'X-API-Key': ''
  }
  const algod_address = '';
  const headers = '';
  const ASSET_ID = 297995609;
  //const algodClient = new algosdk.Algodv2(algod_token, algod_address, headers);
  const serviceAddress = ''

  // Contract
  const contract = () => {
    console.log('Converter')
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
        <h1>
          Choice Coin Converter
        </h1>
        <p>
          <div>
            Ethereum Address:
            <input type="text" name="name" />
          </div>
          <div>
            Amount:
            <input type="text" name="name" />
          </div>
        </p>
        <p>
          <div>
          <button onClick={walletConnect}>Connect Wallet</button>
          </div>
          <div>
          <button onClick={contract}>Convert Choice</button>
          </div>
          <div>
          You agree to Choice Coin's Terms and Conditions
          </div>
        </p>

      </header>
    </div>
  );

}

export default App;
