const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat") // hre == Hardhat Runtime Environment
const { verify } = require("../utils/verify")

//   ==> Syntactic sugar method
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    // use a mock when using localhost or tests
    const fundMe = await deploy("Raffle", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log("---------------------------------------")
}

module.exports.tags = ["all", "fundme"]
