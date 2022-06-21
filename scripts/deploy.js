const hre = require("hardhat");

async function main() {
	const CharityPool = await hre.ethers.getContractFactory("CharityPool");
	const charityPool = await CharityPool.deploy();

	await charityPool.deployed();

	console.log("CharityPool deployed to:", charityPool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
