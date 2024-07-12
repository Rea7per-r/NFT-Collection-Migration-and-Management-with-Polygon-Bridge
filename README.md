## **FOOTBALL NFT Contract**

This is the README.md file for the "**football.sol**" smart contract, which implements the creation and management of **FOOTBALL** Non-Fungible Tokens (NFTs) on the Ethereum blockchain.

## **Contract Information**

- **Contract Name**: football
- **Contract Type**: ERC721A (Extends ERC721 standard)
- **Solidity Version**: 0.8.9
- **License**: MIT
## Overview
The "football.sol" contract allows the owner to mint a limited number of FOOTBALL NFTs. These NFTs are ERC721A tokens, meaning they extend the ERC721 standard with additional functionalities. Each NFT represents a unique football design and representation and is associated with a prompt description.

## Features
**Minting**: The owner of the contract can mint FOOTBALL NFTs, limiting the total supply to 5 tokens.

**Base URL**: The contract has a base URL that serves as the prefix for the NFT metadata URLs. The full metadata URL is constructed by appending the token ID to the base URL.

**Prompt Description**: The contract provides a function to retrieve the prompt description, which is "Football is the best" in this case.

## Contract Deployment

Make sure you have "erc721a/contracts/ERC721A.sol," and deploy the contract with Solidity version 0.8.9.

## Contract Functions

### mint(uint256 quantity)

Allows the owner to mint a specified quantity of FOOTBALL NFTs.

- **Modifier**: onlyOwner (The function can only be executed by the contract owner.)
- **Parameters**:
-  - quantity: The number of NFTs to be minted.
- **Requirements**:
  - The total supply of NFTs after minting must not exceed the maximum quantity (5).

### _baseURI() internal view override returns (string memory)

Overrides the baseURI function from ERC721A to return the base URL for the NFTs.

- **Returns**: The base URL for the NFTs.

### promptDescription() external view returns (string memory)

Returns the prompt description which is 'Football is the best'.

- **Returns**: The prompt description string.


### Deploying the ERC721 Contract

 Run the following command to deploy the ERC721 contract to the Sepolia Ethereum Testnet:

npx hardhat run scripts/deploy.js --network sepolia

  
### Batch Mint NFTs

npx hardhat run scripts/batchMint.js --network sepolia
The script will mint the specified number of NFTs and assign them to your address.

### Approve and Deposit NFTs to Polygon Amoy

Run the following commands to approve and deposit the minted NFTs from Ethereum to the Polygon Amoy network using the FxPortal Bridge:
npx hardhat run scripts/approveDeposit.js --network sepolia

### Get Balance
Update the token address from amoy explorer and run the following command in order to know your balance of wallet.
npx hardhat run scripts/getbalance.js --network amoy



**Author**
surajx070@gmail.com
