var Oracle = artifacts.require("../contracts/Oracle.sol");

module.exports = function (deployer, network) {
  deployer.deploy(Oracle);
};