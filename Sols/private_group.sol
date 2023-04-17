pragma solidity ^0.8.0;

/* This contract defines a- private group chat where only members of the group can send and receive messages. The members mapping keeps track of the members of the group, and the onlyMember modifier ensures that only members of the group can call certain functions.

The addMember function allows the owner of the contract (who can be set during deployment) to add new members to the group.

The sendMessage function allows members to send messages to the group. It creates a new Message struct with the sender's address, the message text, and the current timestamp. It then adds the message to the messages mapping using the messageCount as the index, increments the messageCount, and emits a NewMessage event with the sender's address and message text.

The getMessage function allows members to retrieve a specific message by index. It first checks that the index is within the valid range and that the caller is a member of the group. It then retrieves the message from the messages mapping and returns its sender's address, message text, and timestamp.

The getMessageCount function simply returns the total number of messages stored in the contract.

Note that this is a simple example and there are many ways to extend this contract to add more features and functionality, such as allowing the owner to remove members from the group or adding a mechanism for members to vote on new members. */

contract GroupChat {
    struct Message {
        address sender;
        string text;
        uint timestamp;
    }

    mapping(address => bool) private members;
    mapping(uint => Message) private messages;
    uint private messageCount = 0;

    event NewMessage(address sender, string text);

    modifier onlyMember() {
        require(members[msg.sender], "Not a member of the group");
        _;
    }

    function addMember(address member) public {
        require(msg.sender == owner, "Only the owner can add members");
        members[member] = true;
    }

    function sendMessage(string memory text) public onlyMember {
        Message memory newMessage = Message(msg.sender, text, block.timestamp);
        messages[messageCount] = newMessage;
        messageCount++;
        emit NewMessage(msg.sender, text);
    }

    function getMessage(
        uint index
    ) public view onlyMember returns (address, string memory, uint) {
        require(index < messageCount, "Invalid message index");
        Message memory message = messages[index];
        return (message.sender, message.text, message.timestamp);
    }

    function getMessageCount() public view onlyMember returns (uint) {
        return messageCount;
    }
}
