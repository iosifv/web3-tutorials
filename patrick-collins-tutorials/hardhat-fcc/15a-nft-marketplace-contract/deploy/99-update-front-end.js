const {ethers,network} = require("hardhat")
const fs = require("fs")
const frontendContractsFile = "../15b-nft-marketplace-moralis/constants/networkMapping.json"

module.exports = async function() {
    if (process.env.UPDATE_FRONTEND) {
        console.log("Updating frontend...")
        await updateContractAddresses()
    }
}

async function updateContractAddresses(){
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    
    const chainId = network.config.chainId.toString()
    const contractAddress = JSON.parse(fs.readFileSync(frontendContractsFile, "utf8"))
    if (chainId in contractAddress) {
        if(!contractAddress[chainId]["NftMarketplace"].includes(nftMarketplace.address)) {
            contractAddress[chainId]["NftMarketplace"].push(nftMarketplace.address)
        }

    } else {
        contractAddress[chainId] = {"NftMarketplace": [nftMarketplace.address]}
    }
    console.log(contractAddress)
    fs.writeFileSync(frontendContractsFile, JSON.stringify(contractAddress))
}

module.exports.tags = ["all", "frontend"]