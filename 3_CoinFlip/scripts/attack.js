async function main() {
  // local network
  const coinFlipContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const attackContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  // // rinkeby
  // const coinFlipContractAddress = "0x50cf5725fd7d782383ae0d1773e4e71ce3587d5f";
  // const attackContractAddress = "0xfFdEC7ff1f05e01d5cb5de146d42AD54755F4962";

  const AttackContract = await ethers.getContractFactory("Attack");
  const attackContract = await AttackContract.attach(attackContractAddress);

  for (let i = 0; i < 10; i++) {
    const result = await attackContract.attack(coinFlipContractAddress);
    console.log("Result of coin flip :", result.value);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
