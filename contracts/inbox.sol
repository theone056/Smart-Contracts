pragma solidity ^0.6.6;

contract Inbox{
    string public message;

    constructor(string memory InitialMessage) public {
        message = InitialMessage;
    }

    function setMessage(string memory NewMessage) public {
        message = NewMessage;
    }
}