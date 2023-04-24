// interact.js
// For Hardhat
const contract = require('../artifacts/contracts/SmartContract.sol/SmartContract.json');

// interact.js
console.log(JSON.stringify(contract.abi));
// // Provider
// const alchemyProvider = new ethers.providers.AlchemyProvider(
// 	(network = 'sepolia'),
// 	API_KEY
// );

// // Signer
// const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// // Contract
// const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
