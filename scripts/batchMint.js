const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = 'https://ethereum-sepolia-rpc.publicnode.com';

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x47A77a4f6951f380bce29A0fF0B70798b2861d91";

  const GWarming = await ethers.getContractFactory("football", signer);
  const contract = await GWarming.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });