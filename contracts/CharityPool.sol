//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CharityPool {
    address public owner;
    uint256 public charityLimit; // Total Limit of each charity
    uint256 userCount = 1;

    constructor (uint _limit){
        owner = msg.sender;
        charityLimit = _limit;
    }

    // events
    event CharityRequested(
        string name,
        string description,
        address charityAddress,
        uint256 amount
    );

    event sendFunds(
        address from,
        address to, 
        uint256 amount
    );

    // structs
    struct iNeedCharity{
        uint256 id;
        address owner;
        string name;
        string description;
        uint256 total_amount;
        uint256 total_gotten;
        mapping(address => uint256) time;
        bool goal_is_met;
    }

    // mappings
    mapping(uint => iNeedCharity) public charityList;
    mapping(address => bool) public isOpen;

    // create a charity request
    function requestCharity(string memory _name, string memory _description, uint256 _amount) public {
        require(!isOpen[msg.sender], "You already have an open request");
        require(_amount <= charityLimit, "You cannot request for this amount");

        charityList[userCount].id = userCount;
        charityList[userCount].owner = msg.sender;
        charityList[userCount].name = _name;
        charityList[userCount].description = _description;
        charityList[userCount].total_amount = _amount;

        isOpen[msg.sender] = true;
        userCount++;

        emit CharityRequested(_name, _description, msg.sender, _amount);
    }

    // function to give out charity
    function giveOut(uint _id)public payable{
        require(msg.value < msg.sender.balance , "Insufficient funds");
        require(msg.sender != charityList[_id].owner, "You cannot give for this charity");
        require(!charityList[_id].goal_is_met, "This Individual goal has been met");

        charityList[_id].total_gotten += msg.value;
        payable(charityList[_id].owner).transfer(msg.value);
        charityList[_id].time[msg.sender] = block.timestamp;

        // check to see if quota has been met
        if((charityList[_id].total_gotten / 10**18) >= charityList[_id].total_amount){
            charityList[_id].goal_is_met = true;
            isOpen[charityList[_id].owner] = false;
        }

        emit sendFunds(msg.sender, charityList[_id].owner, msg.value);
    }
}
