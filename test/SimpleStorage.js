const { expect } = require('chai');
const { ethers } = require("hardhat");


describe('SimpleStorage contract', () => {
  let simpleStorage;
  let deployer;
  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
    simpleStorage = await SimpleStorage.deploy();
  });


  it('should assign "initial" to data when contract is deployed', async () => {
    const data = await simpleStorage.getData();
    expect(data).to.equal('initial');
  });

  it('should change data to provided value when store() is called', async () => {
    const newData = 'abc';
    await simpleStorage.store(newData);
    const data = await simpleStorage.getData();
    
    expect(data).to.equal(newData);
  });

});