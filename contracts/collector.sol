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

    uint public amount_glass;
    uint public amount_metal;
    uint public amount_papper;
    uint public amount_plastic;

    uint public constant FULL = 20000;

    constructor(address owner, uint256 glass_value, uint256 metal_value, uint256 paper_value, uint256 plastic_value) {
        _owner = owner;
        _factory = msg.sender;
        glass_value_per_gram = glass_value;
        metal_value_per_gram = metal_value;
        paper_value_per_gram = paper_value;
        plastic_value_per_gram = plastic_value;

        // quantidade que o armazenamento de residuo suporta (gramas)
        amount_glass = 0;
        amount_metal = 0;
        amount_papper = 0;
        amount_plastic = 0;
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
    function payToGlass(address to, uint256 grams) external onlyOwner(msg.sender) onlyValueGreaterThanZero(glass_value_per_gram) {
        Factory(_factory).mintFromResidue(msg.sender, to, grams * glass_value_per_gram);
        amount_glass = amount_glass + grams;
        if(amount_glass >= FULL){
            emit fullStorage("glass", amount_glass);
        }
    }

    function payToMetal(address to, uint256 grams) external onlyOwner(msg.sender) onlyValueGreaterThanZero(metal_value_per_gram) {
        Factory(_factory).mintFromResidue(msg.sender, to, grams * metal_value_per_gram);
        amount_metal = amount_metal + grams;
        if(amount_metal >= FULL){
            emit fullStorage("metal", amount_metal);
        }
    }

    function payToPaper(address to, uint256 grams) external onlyOwner(msg.sender) onlyValueGreaterThanZero(paper_value_per_gram) {
        Factory(_factory).mintFromResidue(msg.sender, to, grams * paper_value_per_gram);
        amount_papper = amount_papper + grams;
        if(amount_papper >= FULL){
            emit fullStorage("paper", amount_papper);
        }
    }

    function payToPlastic(address to, uint256 grams) external onlyOwner(msg.sender) onlyValueGreaterThanZero(plastic_value_per_gram) {
        Factory(_factory).mintFromResidue(msg.sender, to, grams * plastic_value_per_gram);
        amount_plastic = amount_plastic + grams;
        if(amount_plastic >= FULL){
            emit fullStorage("plastic", amount_plastic);
        }
    }

    //functions to empty the storage
    function clearGlassStorage() external onlyOwner(msg.sender) notEmpty(amount_glass) {
        amount_glass = 0;
    }

    function clearMetalStorage() external onlyOwner(msg.sender) notEmpty(amount_metal) {
        amount_metal = 0;
    }

    function clearPaperStorage() external onlyOwner(msg.sender) notEmpty(amount_papper) {
        amount_papper = 0;
    }

    function clearPlasticStorage() external onlyOwner(msg.sender) notEmpty(amount_plastic) {
        amount_plastic = 0;
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

    modifier notFull(uint amount){
        require(amount < FULL, "You need to empty storage.");
        _;
    }

    modifier notEmpty(uint amount){
        require(amount > 0, "Storage is empty.");
        _;
    }

    modifier onlyValueGreaterThanZero(uint value) {
        require(value > 0, "Value per gram of this residue is equal to zero");
        _;        
    }

    //events
    event fullStorage(string residue, uint residueAmount);
}