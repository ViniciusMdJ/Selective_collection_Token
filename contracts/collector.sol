//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./Factory_selective_collection.sol";

contract Collector {

    address private _owner;
    address private _factory;
    uint256 public glass_value_per_gram;
    uint256 public metal_value_per_gram;
    uint256 public paper_value_per_gram;
    uint256 public plastic_value_per_gram;


    constructor(address owner, uint256 glass_value, uint256 metal_value, uint256 paper_value, uint256 plastic_value) {
        _owner = owner;
        _factory = msg.sender;
        glass_value_per_gram = glass_value;
        metal_value_per_gram = metal_value;
        paper_value_per_gram = paper_value;
        plastic_value_per_gram = plastic_value;
    }

    //functions to change the value of each residue
    function changeValueGlass(uint256 valeu) external onlyOwner(msg.sender) {
        glass_value_per_gram = valeu;
    }

    function changeValueMetal(uint256 valeu) external onlyOwner(msg.sender) {
        metal_value_per_gram = valeu;
    }

    function changeValuePaper(uint256 valeu) external onlyOwner(msg.sender) {
        paper_value_per_gram = valeu;
    }

    function changeValuePlastic(uint256 valeu) external onlyOwner(msg.sender) {
        plastic_value_per_gram = valeu;
    }

    //functions to pay for residues
    function payToGlass(address to, uint256 grams) external onlyOwner(msg.sender) {
        Factory(_factory).mintFromResidue(to, grams * glass_value_per_gram);
    }

    function payToMetal(address to, uint256 grams) external onlyOwner(msg.sender) {
        Factory(_factory).mintFromResidue(to, grams * metal_value_per_gram);
    }

    function payToPaper(address to, uint256 grams) external onlyOwner(msg.sender) {
        Factory(_factory).mintFromResidue(to, grams * paper_value_per_gram);
    }

    function payToPlastic(address to, uint256 grams) external onlyOwner(msg.sender) {
        Factory(_factory).mintFromResidue(to, grams * plastic_value_per_gram);
    }

    //modifiers
    modifier onlyOwner(address caller) {
        require(caller == _owner, "You're not the owner of the contract");
        _;
    }

    modifier onlyFactory() {
        require(msg.sender == _factory, "You need to use the factory");
        _;
    }
}