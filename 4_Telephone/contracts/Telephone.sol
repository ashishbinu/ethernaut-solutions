// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract Telephone {

  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
      console.log("The owner changed");
    }
  }
}
