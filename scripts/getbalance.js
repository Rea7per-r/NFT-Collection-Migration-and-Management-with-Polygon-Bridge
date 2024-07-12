const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/football.sol/football.json");

const tokenAddress = "0xbBDfa1B94Edcc8567ba384F87772636EA7fd6D6c";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x5406b6BFdF1492338771Fcc683739Ae4d1f3266f"; 

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log("You now have: " + balance.toString() + " tokens");
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
