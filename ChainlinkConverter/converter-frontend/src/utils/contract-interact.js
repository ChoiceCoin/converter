import dotenv from 'dotenv';
import web3 from 'web3';

import {createAlchemyWeb3} from "@alch/alchemy-web3";
dotenv.config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const Web3 = createAlchemyWeb3(alchemyKey);

const contractAddress = web3.utils.toChecksumAddress("0xa591AFBC1A81EA1c61edeFa3A36D54f50Ca05Cad");

const contractABI = require('../contract-ABI/chainlink.json');

export const smartContract = new Web3.eth.Contract(
    contractABI,
    contractAddress
  );



  export const getAccountBalance = async (address) => {
    //input error handling
    if (!window.ethereum || address === null) {
      return {
        status:
          "💡 Connect your Metamask wallet to update the message on the blockchain.",
      };
    }
  
    const message = await smartContract.methods.balances(address).call();
    return message;
  
  };

  export const transferBalance = async (address, transferAddress, amount) => {
    //input error handling
    if (!window.ethereum || address === null || transferAddress === null) {
      return {
        status:
          "💡 Connect your Metamask wallet to update the message on the blockchain.",
      };
    }
  
    //set up transaction parameters
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: address, // must match user's active address.
      data: smartContract.methods.transfer(transferAddress, amount).encodeABI(),
    };
  
    //sign the transaction
    try {
       await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      return {
        status: "success"
      };
    
    } catch (error) {
      return {
        error: "😥 " + error.message,
      };
    }
  };