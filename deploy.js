const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "upon else food trigger other sphere mystery climb piano bird sauce chef",
  "https://rinkeby.infura.io/v3/c6f54b615e024f2ab3a1c065accc087c"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy account", accounts[0]);

  const result = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to ", result.options.address);

  provider.engine.stop();
};

deploy();
