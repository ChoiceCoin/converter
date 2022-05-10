// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChoiceCoin is ERC20 {
    constructor() ERC20("Choice Coin", "Choice") {
        _mint(msg.sender, 1000000000);
    }
}

// https://ropsten.etherscan.io/token/0x870eaf6cfae1163b614503eb759072856ec5edce
