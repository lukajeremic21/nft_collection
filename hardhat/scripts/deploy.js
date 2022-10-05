const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = "0x3438Cd53B39bb425895e8a0Cb6a8dbE683761cFc";
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = "https://nft-collection-sneh1999.vercel.app/api/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });