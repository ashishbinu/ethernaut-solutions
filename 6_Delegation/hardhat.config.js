/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;

module.exports = {
  solidity: "0.6.0",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: PRIVATE_KEY !== "" ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 4,
    },
  },
};
