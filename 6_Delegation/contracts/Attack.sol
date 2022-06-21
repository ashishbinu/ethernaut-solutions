// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract Attack{
  function attack(address _addr) public {
    (bool result, bytes memory data) = _addr.delegatecall(abi.encodeWithSignature("nonexistentfunction()"));
    console.log("[Attack Contract] result :",result)
    console.log("[Attack Contract] data :",data)
    require(result,"[Attack Contract] : attack unsuccessful");
  }
}
