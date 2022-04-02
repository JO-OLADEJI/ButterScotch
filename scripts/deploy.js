const main = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  console.log({ 'SimpleStorage': simpleStorage.address });
}


try {
  await main();
  process.exit(0);
}
catch (err) {
  console.error(error);
  process.exit(1);
}