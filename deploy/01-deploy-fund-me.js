// function deployFunc() {
//     console.log("Hi")
// }

const { network } = require("hardhat")

// module.exports.default = deployFunc

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId


    // when going for localhost or hardhat network, we want to use a mock
}