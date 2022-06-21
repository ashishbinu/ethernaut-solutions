async function main() {
  const telephoneContractAddress = "";
  const TelephoneContract = await ethers.getContractFactory("CoinFlip");
  const telephoneContract = await TelephoneContract.attach(
    telephoneContractAddress
  );

  const owner = await telephoneContract.owner();
  console.log(owner)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
