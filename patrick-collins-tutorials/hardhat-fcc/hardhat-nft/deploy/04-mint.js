const { ethers, network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts }) {
    const { deployer } = await getNamedAccounts()

    // Basic NFT
    const basicNft = await ethers.getContract("BasicNft", deployer)
    const basicNftTx = await basicNft.mintNft()
    await basicNftTx.wait(1)
    console.log("\n => Basic NFT index 0 has token URI: \n" + (await basicNft.tokenURI(0)))

    // Random IPFS NFT
    const randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer)
    const mintFee = await randomIpfsNft.getMintFee()

    await new Promise(async (resolve, reject) => {
        setTimeout(() => reject("Timeout: 'NFTMinted' event did not fire"), 60000) // 10 minute timeout time
        // setup listener for our event
        randomIpfsNft.once("NftMinted", async function () {
            resolve()
        })
        const randomIpfsNftMintTx = await randomIpfsNft.requestNft({ value: mintFee.toString() })
        const randomIpfsNftMintTxReceipt = await randomIpfsNftMintTx.wait(1)
        if (developmentChains.includes(network.name)) {
            const requestId = randomIpfsNftMintTxReceipt.events[1].args.requestId.toString()
            const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer)
            await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomIpfsNft.address)
        }
    })
    console.log(
        "\n => Random IPFS NFT index 0 has token URI: \n" + (await randomIpfsNft.tokenURI(0))
    )

    // Dynamic SVG NFT
    const highValue = ethers.utils.parseEther("1500")
    const dynamicSvgNft = await ethers.getContract("DynamicSvgNft", deployer)
    const dynamicSvgNftMintTx = await dynamicSvgNft.mintNft(highValue)
    await dynamicSvgNftMintTx.wait(1)
    console.log(`\n => Dynamic SVG NFT index 0 tokenURI: \n ${await dynamicSvgNft.tokenURI(0)}`)
}
