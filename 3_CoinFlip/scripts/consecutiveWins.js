async function main() {
  const coinFlipContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const CoinFlipContract = await ethers.getContractFactory('CoinFlip')
  const coinFlipContract = await CoinFlipContract.attach(
    coinFlipContractAddress
  )

  const consecutiveWins = await coinFlipContract.consecutiveWins()
  console.log('Consecutive Wins : ', consecutiveWins)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
