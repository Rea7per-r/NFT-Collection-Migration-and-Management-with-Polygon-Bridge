// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract football is ERC721A {
    address public owner;
    uint256 public constant max = 5;


    string private constant BASE_URL =
        "https://gateway.pinata.cloud/ipfs/QmU4TSFEw4UBtdu91oSVvx3QKLQKaxJx3kkBKEo3ZSeuii/";

    string public constant PROMPT = "Football is the best";

    constructor() ERC721A("football", "FTK ") {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }
    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= max,
            "Reached limit"
        );
        _mint(msg.sender, quantity);
    }
    function _baseURI() internal pure override returns (string memory) {
        return BASE_URL;
    }
    function getPromptDescription() external pure returns (string memory) {
        return PROMPT;
    }
}