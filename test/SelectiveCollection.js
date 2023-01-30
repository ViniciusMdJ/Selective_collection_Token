const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Selective collection token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Factory");

    const hardhatToken = await Token.deploy();

    await hardhatToken.connect(addr1).createCollectorContract(200,100,0,500);
    await hardhatToken.connect(addr2).createCollectorContract(200,100,0,500);

    console.log("ADDR1 = ", addr1.address);
    console.log("ADDR2 = ", addr2.address);
    console.log("ADDR3 = ", await hardhatToken.getCollectorAddress(addr1.address));

    // const collector = ethers.getContractAt("Collector", addrCollector1.address);

    // console.log("glas value = ", await collector.glass_value_per_gram());



    expect(await hardhatToken.collectors(addr1.address) != 0).to.be.true;
  });
});