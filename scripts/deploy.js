const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const contract = await hre.ethers.deployContract("PrivateNFT", [
        deployer.address,
    ]);

    await contract.waitForDeployment();

    console.log(`deployed to ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
