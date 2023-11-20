const hre = require("hardhat");

async function main() {
  const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy("0xb7f907f7a9ebc822a80bd25e224be42ce0a698a0", "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14");

  await router.deployed();

  console.log(
    `Router deployed to ${router.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
