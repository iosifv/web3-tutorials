-   Link to part 3: https://youtu.be/gyMwXuJrbJQ?t=100647
-

## Nothing to compile

```
hh deploy --network rinkeby
Warning: Function state mutability can be restricted to pure
  --> contracts/test/BasicNft.sol:23:5:
   |
23 |     function tokenURI(
   |     ^ (Relevant source part starts here and spans across multiple lines).


Compiled 12 Solidity files successfully
Starting deploy with wait block confirmations = 6
----------------------------------------------------
deploying "NftMarketplace" (tx: 0x04b50e1fd350dd52df6a476f07626b6b0e709272ba9f5c7ca965c3b53eec4574)...: deployed at 0xA82580DA24acB4858436D80DBaa08DC46028d8c8 with 1356627 gas
Verifying...
Verifying contract ...
Nothing to compile
Successfully submitted source code for contract
contracts/NftMarketplace.sol:NftMarketplace at 0xA82580DA24acB4858436D80DBaa08DC46028d8c8
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NftMarketplace on Etherscan.
https://rinkeby.etherscan.io/address/0xA82580DA24acB4858436D80DBaa08DC46028d8c8#code
----------------------------------------------------
Starting deploy with wait block confirmations = 6
----------------------------------------------------
deploying "BasicNft" (tx: 0xd746f2928f057e956a62cae45ef759d5a035ddc95c5d0269841c272a9c260ee0)...: deployed at 0xcbe022898bBB1AcBBF158192fB4Cc674CDdc296A with 2020849 gas
Verifying...
Verifying contract ...
Warning: Function state mutability can be restricted to pure
  --> contracts/test/BasicNft.sol:23:5:
   |
23 |     function tokenURI(
   |     ^ (Relevant source part starts here and spans across multiple lines).


Compiled 12 Solidity files successfully
Warning: Function state mutability can be restricted to pure
  --> contracts/test/BasicNft.sol:23:5:
   |
23 |     function tokenURI(
   |     ^ (Relevant source part starts here and spans across multiple lines).


Successfully submitted source code for contract
contracts/test/BasicNft.sol:BasicNft at 0xcbe022898bBB1AcBBF158192fB4Cc674CDdc296A
for verification on the block explorer. Waiting for verification result...

Successfully verified contract BasicNft on Etherscan.
https://rinkeby.etherscan.io/address/0xcbe022898bBB1AcBBF158192fB4Cc674CDdc296A#code
----------------------------------------------------
Updating frontend...
{
  '4': {
    NftMarketplace: [
      '0x8eE15b320AB73a1fEc788CaFbFc32db15E894365',
      '0xA82580DA24acB4858436D80DBaa08DC46028d8c8'
    ]
  },
  '5': {
    NftMarketplace: [
      '0xa5CdB6897F6bcfEcB00Fc47C9f7a649D5BeF85E5',
      '0xDee92dAF3C4f87C72cf14b77E81A5c8d3706fdC7'
    ]
  },
  '31337': { NftMarketplace: [ '0x5FbDB2315678afecb367f032d93F642f64180aa3' ] }
}
```
