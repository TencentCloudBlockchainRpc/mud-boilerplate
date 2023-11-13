# Minimal MUD example project with multiple clients

This example project demonstrates how to use the MUD framework to create a simple on-chain application. It includes several client types that you can pick from to run the app or get inspiration from, all using the same underlying smart contracts.

## Getting started

1. Since this project uses local MUD dependencies, you need to prepare them first by running this command in the MUD root directory: `pnpm install && pnpm build`
2. To start the development environment of this project, run `pnpm dev` in the project root. This will start a local chain, deploy the contracts in `packages/contracts`, and start a development server for the client. By default the react client (`packages/client-react`) will be used. To use the vanilla client instead, run `pnpm dev:client-vanilla`.
3. Open [localhost:3000](http://localhost:3000) in your browser.

## Deploy to Public Chain with T-RPC

After completing development and local debugging. You can also deploy the project
to public chain with [Tencent Cloud Blockchain RPC](https://www.tencentcloud.com/products/rpc?from_qcintl=122150301).

### Prerequisites

- [Register a Tencent Cloud account](https://www.tencentcloud.com/account/register)
- [Sign in Blockchain RPC console](https://console.tencentcloud.com/bcrpc/terminal)
- Create New Application
- Identify the network you want to deploy which can be found it in [ChainList](https://chainlist.org/)
- Get the API Key/URL of the Mainnet/Testnet

### Deploy Contracts

1. Running this command in this directory to go into contracts directory:

```sh
cd packages/contracts`
```

2. Fill the network configuration params and accounts into **`.env`**
   for convenience. We also provide an example **`.env.mumbai`** file.
   You can fill in the `{YOUR_RPC_API_KEY}` and `{PRIVATE_KEY}` params.
   Then replace the default `.env` file by running the following commands

```sh
cp .env .env.backup
cp .env.mumbai .env
```

3. In order to deploy to the public network,
   you should also config the `eth_rpc_url` in `foundry.toml` file.
   We provide mumbai network for convenient, you just need to replace the `{YOUR_RPC_API_KEY}` param

4. Now you can try deploying the contracts using this command.

```sh
pnpm mud deploy --profile mumbai
```

Just wait for a minute, if the config is correct. You will see logs like this

```text
##### anvil-hardhat
✅  [Success]Hash: 0x7974eb9471d58a2d6f5838f9f7ba7bfd4417cddbc1c2f452e6308d52490ee987
Block: xx
Paid: xx
Transactions saved to: mud-boilerplate/examples/minimal/packages/contracts/broadcast/PostDeploy.s.sol/31337/run-latest.json
Sensitive values saved to: mud-boilerplate/examples/minimal/packages/contracts/cache/PostDeploy.s.sol/31337/run-latest.json
==========================
ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
Total Paid: 0.00472371 ETH (1574570 gas * avg 3 gwei)
Transactions saved to: mud-boilerplate/examples/minimal/packages/contracts/broadcast/PostDeploy.s.sol/31337/run-latest.json
Sensitive values saved to: mud-boilerplate/examples/minimal/packages/contracts/cache/PostDeploy.s.sol/31337/run-latest.json
Deployment completed in 14.529 seconds
 Deployment result (written to ./worlds.json and deploys/31337):
{
  worldAddress: '0x6e9474e9c83676b9a71133ff96db43e7aa0a4342',
  blockNumber: 6
}
Waiting for file changes…
```

After a successful deployment, mud will save the worldAddress in **`./worlds.json`** file
so that client can find it. Such as react-client, you can see it in
**`examples/minimal/packages/client-react/src/mud/getNetworkConfig.ts`**

```js
import worlds from "contracts/worlds.json";
```

### Running the React frontend

To start a development server for the client, you need to configure it.
By default, we use the React client (packages/client-react) as example.
Now we go into client directory `examples/minimal/packages/client-react`

1. Fill the network configuration params and accounts into **`trpcChain.ts`**.
   We provide mumbai network for convenient, you just need to replace the `{YOUR_RPC_API_KEY}` param
2. Replace the `{VITE_CHAIN_ID}` by your custom chainId in `.env` file (in /packages/client-react)
3. Replace the `{YOUR_PRIVATE_KEY}` with your test private key in `getNetworkConfig.ts` file
4. Run `pnpm vite` in the React client directory. This will start to connecting to the custom chain,
   interacting with the contracts before, and starting a React server for the client.
5. Open [localhost:3000](http://localhost:3000) in your browser.

**Happy _building_!**
