## MultiversX HW provider for Node (POC)

Based on: [elrond-sdk-erdjs-hw-provider](https://github.com/ElrondNetwork/elrond-sdk-erdjs-hw-provider)

**Just playing around - POC!**

The goal is to research and test signing transactions in the CLI tools using Ledger Nano.

The main logic is a copy of the `elrond-sdk-erdjs-hw-provider` with changes to how the HW transport is handled.

What it does now in `out/testing.js` is:
- initialization
- login
- signing a message

Simple stuff, just to check if it works. Of course, you need a connected Ledger device with an enabled Elrond app. There is no proper error handling and prompts in the terminal, so keep checking your device for confirmations.

How to play with it:

1. `npm install`
2. `npm start`

- `npm run build` after each change in the code
