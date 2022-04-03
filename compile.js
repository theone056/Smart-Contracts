const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const Input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(Input)));
const interface = output.contracts["Inbox.sol"].Inbox.abi;
const bytecode = output.contracts["Inbox.sol"].Inbox.evm.bytecode.object;
module.exports = {
    interface,
    bytecode
}
