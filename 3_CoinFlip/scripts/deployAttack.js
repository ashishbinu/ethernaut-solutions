async function main() {
  const AttackContract = await ethers.getContractFactory("Attack");

  const attackContract = await AttackContract.deploy();

  console.log("Attack.sol deployed to:", attackContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
