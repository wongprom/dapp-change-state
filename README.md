# Dapp Change State

A decentralized app where we create a smart contract + deploy it on our local blockchain + connect it to metamask + make transactions...
<br>

![alt text](./images/metamask-main.png)

## Acknowledgments

A big thank you to Brian, who introduced me to Web3. Your expertise in this area and your way of communicating gave me extra motivation and clarity when I found the code confusing.

- [BrianHHough](https://github.com/BrianHHough) - GitHub
- [BrianHHough.com](https://BrianHHough.com) - Website
- [@BrianHHough](https://twitter.com/BrianHHough) - Twitter
- [brianhhough](https://www.instagram.com/brianhhough/) - InstaGram
- [brianhhough](https://www.twitch.tv/brianhhough) - Twitch
- [Brian H. Hough | Tech Stack Playbook](https://www.youtube.com/channel/UCho9RfaL4_6EPQvdjeIbT6A) - Youtube

## Built With

- [NextJS](https://nextjs.org/) - The React Framework
  for Production
- [TailwindCSS 3](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Trufflesuite](https://trufflesuite.com/) - Sweet Tools for Smart Contracts
  The Truffle Suite gets developers from idea to dapp as comfortably as possible
- [Ganache](https://github.com/trufflesuite/ganache) - A tool for creating a local blockchain for fast Ethereum development
- [Remix](https://remix.ethereum.org/) - Remix, more commonly known as Remix IDE, is an open-source Ethereum IDE you can use to write, compile and debug Solidity code. As such, Remix can be a hugely important tool in Web3 and dApps development
- [Solidity](https://soliditylang.org/) - Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum
- [@web3-react/core](https://www.npmjs.com/package/@web3-react/core)
  <br>

## Installing

```
npm install @web3-react/core react-loader-spinner web3
```

Global packages that needs to be installed are

```
npm install -g truffle
```

```
npm install ganache --global
```

## Handy links

- [https://trufflesuite.com/](https://trufflesuite.com/) - Sweet Tools for Smart Contracts.
  The Truffle Suite gets developers from idea to dapp as comfortably as possible.

- [https://github.com/trufflesuite/ganache](https://github.com/trufflesuite/ganache) - A tool for creating a local blockchain for fast Ethereum development.
  <br>
  <br>

## Handy commands

```
npx truffle init
```

```
npx truffle develop
```

```
truffle migrate --reset --compile-all
```

After running `npx truffle develop` in terminal, displays 10 accounts with "Private Keys"
![alt text](./images/npx-truffle-develop-terminal.png)

```
npx truffle develop --log
```

## Connect Metamask to port: 9545

1. Go to "My Accounts", top right corner with round icon
   ![alt text](./images/metamask-click-account.png)

2. Go to "Settings"
   ![alt text](./images/metamask-click-settings.png)

3. Go to "Network"
   ![alt text](./images/metamask-click-networks.png)

4. Go to "Add Network"
   ![alt text](./images/metamask-add-network.png)

5. Fill form
   ![alt text](./images/metamask-fill-info.png)

6. Select the created network
   ![alt text](./images/metamask-select-created-network.png)

7. Metamask connected successfully!!
   ![alt text](./images/metamask-connected.png)

## File changes

truffle-config.js

```
const path = require('path')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.4.26',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
```

## Acknowledgments

A big thank you to Brian, who introduced me to Web3. Your expertise in this area and your way of communicating gave me extra motivation and clarity when I found the code confusing.

- [BrianHHough](https://github.com/BrianHHough) - GitHub
- [BrianHHough.com](https://BrianHHough.com) - Website
- [brianhhough](https://www.linkedin.com/in/brianhhough/) - LinkedIn
- [@BrianHHough](https://twitter.com/BrianHHough) - Twitter
- [brianhhough](https://www.instagram.com/brianhhough/) - InstaGram
- [brianhhough](https://www.twitch.tv/brianhhough) - Twitch
- [Brian H. Hough | Tech Stack Playbook](https://www.youtube.com/channel/UCho9RfaL4_6EPQvdjeIbT6A) - Youtube
