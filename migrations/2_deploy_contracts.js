const Token = artifacts.require("MyToken");
const initialSupply = 10000;

module.exports = function(deployer, network, account) {
    deployer.deploy(Token, initialSupply)
}