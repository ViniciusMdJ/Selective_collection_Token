//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;


contract Residues {

    address private _owner;
    address private _factory;
    uint256 public value_per_gram;


    constructor(address owner, uint256 value) {
        value_per_gram = value;
        _owner = owner;
        _factory = msg.sender;
    }

    function changeValue(uint256 valeu) external onlyFactory() {
        value_per_gram = valeu;
    }

    function payToResidue(address to, uint256 grams) external onlyOwner(msg.sender) {

    }

    modifier onlyOwner(address caller) {
        require(caller == _owner, "You're not the owner of the contract");
        _;
    }

    modifier onlyFactory() {
        require(msg.sender == _factory, "You need to use the factory");
        _;
    }
}