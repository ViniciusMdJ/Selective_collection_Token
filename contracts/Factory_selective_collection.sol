//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./collector.sol";

contract Factory is ERC20{

    //mappinsg of the collectors
    mapping (address => Collector) public collectors;


    constructor() ERC20("Selective Collection", "SCT"){

    }

    function createCollectorContract(uint256 valeu_glass, uint256 value_metal, uint256 value_paper, uint256 value_plastic) external onlyIfNotCollector(){
        collectors[msg.sender] = new Collector(msg.sender, valeu_glass, value_metal, value_paper, value_plastic);
    }

    function mintFromResidue(address to, uint256 value) external onlyCollector() {
        _mint(to, value);
    }

    modifier onlyIfNotCollector(){
        require(address(collectors[msg.sender]) == address(0), "You're already a collector");
        _;
    }

    modifier onlyCollector() {
        require(address(collectors[msg.sender]) != address(0), "Only the collector can call this function.");
        _;
    }
}