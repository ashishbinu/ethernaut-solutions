const hre = require("hardhat");

async function deploy() {
  await hre.run("compile");

  let attacker;
  if (hre.network.name === "localhost") {
    const deployer = await hre.ethers.getSigners()[0];
    console.log("[deployAll] :", "Deployer :", deployer.address);
    attacker = await hre.ethers.getSigners()[1];
    console.log("[deployAll] :", "Attacker :", attacker.address);
  } else if (hre.network.name === "rinkeby") {
    attacker = await hre.ethers.getSigners()[0];
    console.log("[deployAll] :", "Attacker :", attacker.address);
  } else {
    console.error("[deployAll] :", "unkown network used");
    process.exit(1);
  }

  const TelephoneContract = await hre.ethers.getContractFactory("Telephone");
  const AttackContract = await hre.ethers.getContractFactory(
    "Attack",
    attacker
  );

  let telephoneContractAddress;
  if (hre.network.name === "localhost") {
    const telephoneContract = await TelephoneContract.deploy();
    await telephoneContract.deployed();
    telephoneContractAddress = telephoneContract.address;
  } else if (hre.network.name === "rinkeby") {
    telephoneContractAddress = process.env.TELEPHONE_CONTRACT_ADDRESS;
  } else {
    console.error("[deployAll] :", "unkown network used");
    process.exit(1);
  }

  const attackContract = await AttackContract.deploy();
  await attackContract.deployed();
  const attackContractAddress = attackContract.address;

  const addresses = {
    telephoneContractAddress,
    attackContractAddress,
  };
  console.log(addresses);

  // console.log(telephoneContract.signer.address);
  // console.log(attackContract.signer.address);
  return addresses;
}

if (typeof require !== "undefined" && require.main === module) {
  deployAll()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = deploy;
