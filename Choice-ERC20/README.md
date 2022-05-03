## Creating Choice ERC-20 Token

![image](https://i.postimg.cc/0yGzNgZg/Screenshot-2022-05-03-at-07-38-24.png)

### Technologies
-  Solidity
-  Truffle
-  Rinkeby testnet
-  Infura 

- git clone repo
```
 $ git clone git@github.com:ChoiceCoin/converter.git

```

- cd to the project folder
```
$ cd Choice-ERC20
```


- Install dependencies
```
$ npm install
```

- Install truffle globally
```
 $ npm install -g truffle 
```

- Create an `.env` file and update with

```
mnemonic=""
PROJECT_URL=""
```
 1. Your eth mmemonic from metamask
 2. Create an [infura account](https://infura.io) and add a rinkeby project url 

-  Update the ERC-20 information in the `2-ERC-20.js` file as you like

```
const totalSupply = 10 ** 9 * 10 ** 2; 
const decimals = 2;
const name = "Choice Coin";
const symbol = "Choice";
```
- Make sure you have testnet rinkeby eth before deploying contract, you can use the [Rinkeby faucet](https://rinkebyfaucet.com/)

- Build your contract to check if truffle is installed.
```
$ truffle compile
```
 In some case, you might add `sudo`

- deploy your contract 
```
$ truffle migrate --network rinkeby
```

* After deploying the smart contract, you can import the contract address to get the tokens

## LICENSE
- [MIT](https://github.com/ChoiceCoin/converter/blob/main/LICENSE.txt)

* This contracts has been tested and deployed with ganache & rinkeby!
