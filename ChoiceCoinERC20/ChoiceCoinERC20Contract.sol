// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChoiceCoin is ERC20 {
    constructor() ERC20("Choice Coin", "Choice") {
        _mint(msg.sender, 1000000000000000000000000000);
        }
    }

// https://etherscan.io/token/0x47cd509734022abfc765c1ae2cc0a7fa354a870f