async function main() {
  const CoinFlipContract = await ethers.getContractFactory("CoinFlip");
  const AttackContract = await ethers.getContractFactory("Attack");

  const coinFlipContract = await CoinFlipContract.deploy();
  await coinFlipContract.deployed()

  const attackContract = await AttackContract.deploy();
  await attackContract.deployed()

  console.log("CoinFlip.sol deployed to:", coinFlipContract.address);
  console.log("Attack.sol deployed to:", attackContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
