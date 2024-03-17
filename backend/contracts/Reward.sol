// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract RewardContract {
    mapping(address => uint) public rewards;

    event RewardClaimed(address indexed recipient, uint amount);

    function addReward(address _recipient, uint _amount) public {
        rewards[_recipient] += _amount;
    }

    function claimReward(uint _amount) public {
        require(rewards[msg.sender] >= _amount, "Insufficient reward balance");
        rewards[msg.sender] -= _amount;
        emit RewardClaimed(msg.sender, _amount);
        payable(msg.sender).transfer(_amount);
    }
}