const BasicERC20 = artifacts.require("BasicERC20");

const totalSupply = 10 ** 9 * 10 ** 2;
const decimals = 2;
const name = "Choice Coin";
const symbol = "CHOICE";

module.exports = function (deployer, network, accounts) {
  deployer.deploy(BasicERC20, totalSupply, decimals, name, symbol , {from : accounts[0]});
};
