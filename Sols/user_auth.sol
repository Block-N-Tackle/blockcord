pragma solidity ^0.8.0;

/* 
This smart contract allows users to register and login to the Discord clone using their username and password. You can extend this contract to handle messaging and other features as well

 */
contract DiscordClone {
    struct User {
        address account;
        string username;
        string password;
    }

    mapping(address => User) users;

    function register(string memory username, string memory password) public {
        require(
            users[msg.sender].account == address(0),
            "User already registered"
        );

        User memory newUser = User(msg.sender, username, password);
        users[msg.sender] = newUser;
    }

    function login(
        string memory username,
        string memory password
    ) public view returns (bool) {
        address userAccount = findUser(username, password);

        if (userAccount == address(0)) {
            return false;
        } else {
            return true;
        }
    }

    function findUser(
        string memory username,
        string memory password
    ) private view returns (address) {
        for (uint i = 0; i < users.length; i++) {
            if (
                keccak256(bytes(users[i].username)) ==
                keccak256(bytes(username)) &&
                keccak256(bytes(users[i].password)) ==
                keccak256(bytes(password))
            ) {
                return users[i].account;
            }
        }

        return address(0);
    }
}
