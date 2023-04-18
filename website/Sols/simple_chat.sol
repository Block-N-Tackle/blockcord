pragma solidity ^0.8.0;

/* This contract defines a Message struct that stores the sender's address, the message text, and the timestamp when the message was sent. It also defines a mapping that stores each message using a unique index. The messageCount variable keeps track of the total number of messages.

The sendMessage function allows users to send messages to the chat. It creates a new Message struct with the sender's address, the message text, and the current timestamp. It then adds the message to the messages mapping using the messageCount as the index, increments the messageCount, and emits a NewMessage event with the sender's address and message text.

The getMessage function allows users to retrieve a specific message by index. It first checks that the index is within the valid range, and then retrieves the message from the messages mapping and returns its sender's address, message text, and timestamp.

The getMessageCount function simply returns the total number of messages stored in the contract.

Note that this is a simple example and there are many ways to extend this contract to add more features and functionality. For example, you could add a channel field to the Message struct to allow messages to be sent to different channels, or add a function to delete messages. */

contract ChatMessages {
    struct Message {
        address sender;
        string text;
        uint timestamp;
    }

    mapping(uint => Message) messages;
    uint messageCount = 0;

    event NewMessage(address sender, string text);

    function sendMessage(string memory text) public {
        Message memory newMessage = Message(msg.sender, text, block.timestamp);
        messages[messageCount] = newMessage;
        messageCount++;
        emit NewMessage(msg.sender, text);
    }

    function getMessage(
        uint index
    ) public view returns (address, string memory, uint) {
        require(index < messageCount, "Invalid message index");
        Message memory message = messages[index];
        return (message.sender, message.text, message.timestamp);
    }

    function getMessageCount() public view returns (uint) {
        return messageCount;
    }
}
