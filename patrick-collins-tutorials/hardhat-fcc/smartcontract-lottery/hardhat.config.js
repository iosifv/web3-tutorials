require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        rinkeby: {
            chainId: 4,
            blockConfirmations: 6,
            url: process.env.RINKEBY_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
        },
    },
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            rinkeby: process.env.ETHERSCAN_API_KEY || "Your etherscan API key",
            kovan: process.env.ETHERSCAN_API_KEY || "Your etherscan API key",
            polygon: process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key",
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        // outputFile: "gas-report.txt",
        // noColors: true,
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    solidity: "0.8.8",
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 600000, // 10 minutes
    },
}
