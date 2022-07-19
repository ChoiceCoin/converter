// Imports
import './App.css';
//import algosdk from "algosdk";

// Smart Contract
function Converter() {
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
  return (
    <button onClick={contract}>Convert Choice</button>
  )
};

// Wallet Connect
function WalletConnect() {
  const wallet = () => {
    console.log('Connect')
  }
  return(
    <button onClick={wallet}>Connect Wallet</button>
  )
};

// React functions must return a React component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Choice Coin Converter
        </h1>
        <label>
          Ethereum Address:
        <input type="text" name="name" />
        </label>
        <label>
          Amount:
        <input type="text" name="name" />
        </label>


        <div>
        <WalletConnect />
        </div>
        <div>
        <Converter />
        </div>
      </header>
    </div>
  );

}

export default App;