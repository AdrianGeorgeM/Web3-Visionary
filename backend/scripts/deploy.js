async function main() {
	const SmartContract = await ethers.getContractFactory('SmartContract');

	// Start deployment, returning a promise that resolves to a contract object
	const smart_contract = await SmartContract.deploy('Smart Contract');
	console.log('Contract deployed to address:', smart_contract.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
