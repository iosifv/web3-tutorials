const { network } = require("hardhat") // hre == Hardhat Runtime Environment
const {} = require("../helper-hardhat-config")

module.exports = async () => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        // The arguments of this contract are:
        //  - number of decimals
        //  - answer to what is the initial price
        await deploy("", {
            contract: "",
            from: deployer,
            log: true,
            args: [],
        })
        log("Mocks deployed!")
        log("---------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
