require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ganache");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: process.env.G_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
