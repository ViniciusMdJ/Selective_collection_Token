const { expect } = require("chai");

describe("Selective collection token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Factory");

    const hardhatToken = await Token.deploy();

    const addrCollector1 = await hardhatToken.connect(addr1).createCollectorContract(200,100,0,500);
    //const addrCollector2 = await hardhatToken.connect(addr2).createCollectorContract(200,100,0,500);

    console.log("ADDR1 = ", addr1.address)
    console.log("ADDR2 = ", addr2.address)
    console.log("ADDR CONTRACT1 = ", await hardhatToken.collectors(addr1.address));
    console.log("ADDR CONTRACT2 = ",await hardhatToken.collectors(addr2.address));
    console.log(addrCollector1);
    console.log(addrCollector2);



    expect(await hardhatToken.collectors(addr1.address) == 0).to.equal(addrCollector1);
    expect(await hardhatToken.collectors(addr2.address) == 0).to.equal(addrCollector2);
  });
});