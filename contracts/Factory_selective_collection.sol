//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./residues.sol";

contract Factory is ERC20{

    //mappinsg of the residue types
    mapping (address => address) public glass;
    mapping (address => address) public metal;
    mapping (address => address) public paper;
    mapping (address => address) public plastic;

    constructor() ERC20("Selective Collection", "SCT"){

    }

    function createResiduesContracts(uint256 valeu_glass, uint256 value_metal, uint256 value_paper, uint256 value_plastic) external {
        if(valeu_glass != 0){
            glass[msg.sender] = address(new Residues(msg.sender, valeu_glass));
            changeValueResidue(glass[msg.sender], valeu_glass);
        }
        if(value_metal != 0){
            metal[msg.sender] = address(new Residues(msg.sender, value_metal));
            changeValueResidue(metal[msg.sender], value_metal);
        }
        if(value_paper != 0){
            paper[msg.sender] = address(new Residues(msg.sender, value_paper));
            changeValueResidue(paper[msg.sender], value_paper);
        }
        if(value_plastic != 0){
            plastic[msg.sender] = address(new Residues(msg.sender, value_plastic));
            changeValueResidue(plastic[msg.sender], value_plastic);
        }
    }

    function changeValues(uint256 valeu_glass, uint256 value_metal, uint256 value_paper, uint256 value_plastic) external{

    }


    function changeValueResidue(address residue, uint256 valeu) internal{
        Residues(residue).changeValue(valeu);
    }
}