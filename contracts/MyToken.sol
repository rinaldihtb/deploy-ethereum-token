// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyToken {
  mapping(address => uint256) public balanceOf;
  
  constructor(uint256 initialSupply) public {
    balanceOf[msg.sender] = initialSupply;
  }

  function transfer(address _to, uint256 _value) public returns (bool success){
        require(balanceOf[msg.sender] >= _value);
        require(balanceOf[_to] + _value >= balanceOf[_to]);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        return true;
    }

    function getBalance() public view returns (uint256) {
      return balanceOf[msg.sender]; 
    }

    function getString() public pure returns (string memory result) {
        return "ini Token Rinaldi";
    }
}
