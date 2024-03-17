// scripts/deployRewardContract.js
const hre = require("hardhat");

async function main() {
  // Get the Contract Factory
  const RewardContract = await hre.ethers.getContractFactory("RewardContract");

  // Deploy the contract
  const rewardContract = await RewardContract.deploy();

  // Wait for the deployment to finish
  await rewardContract.deployed();

  console.log("RewardContract deployed to:", rewardContract.address);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});
