# MUD

<div align="center">
<img src="docs/public/logo512-black-w-background.png" width="200" style="margin: 0 0 30px 0;" alt="MUD logo" />
<p>MUD - Engine for Autonomous Worlds</p>
</div>

<p align="center">
  <a aria-label="license MIT" href="https://opensource.org/licenses/MIT">
    <img alt="" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  &nbsp;
  <a aria-label="test status" href="https://github.com/latticexyz/mud/actions/workflows/test.yml">
    <img alt="" src="https://github.com/latticexyz/mud/actions/workflows/test.yml/badge.svg?branch=main&event=push">
  </a>
  &nbsp;
  <a aria-label="docs status" href="https://github.com/latticexyz/mud/actions/workflows/docs.yml">
    <img alt="" src="https://github.com/latticexyz/mud/actions/workflows/docs.yml/badge.svg?branch=main&event=push">
  </a>
</p>

MUD is a framework for complex Ethereum applications.

It adds some conventions for organizing data and logic and abstracts away low-level complexities so you can focus on the features of your app.

It standardizes the way data is stored on-chain.
With this standard data model, MUD can provide all network code to synchronize contract and client state. This includes synchronizing state directly from an RPC node or a general-purpose MUD indexer.

MUD is MIT-licensed, open source and free to use.

### Local development setup

!!!
The following steps are only necessary if you want to contribute to MUD. To use MUD in your project, install the [packages](#packages) from npm or [set up a new project with the MUD cli](#quickstart).
!!!

1. Install the foundry toolkit (required to build and test MUD solidity packages): [https://getfoundry.sh/](https://getfoundry.sh/)

2. Install pnpm

   ```
   npm install pnpm --global
   ```

3. Clone the MUD monorepo

   ```
   git clone https://github.com/TencentCloudBlockchainRpc/mud-boilerplate.git
   ```

4. Install MUD dependencies and setup local environment

   ```
   cd mud-boilerplate && git checkout trpc_dev && pnpm install && pnpm build
   ```

### Build with Tencent Cloud Blockchain RPC

After development and debugging. You can deploy your project on public blockchain
with Tencent Cloud Blockchain RPC.
Before this, you can get the API Key/Rpc URL following these steps:

- [Register a Tencent Cloud account](https://www.tencentcloud.com/account/register)
- [Sign in Blockchain RPC console](https://console.tencentcloud.com/bcrpc/terminal)
- Create New Application
- Get the API Key/URL of the Mainnet/Testnet

You can find our mud-based minimal example guidance on
Tencent Cloud Blockchain RPC based deployment.

```
 cd examples/minimal
```

More detailed information is in the
[README.md](https://github.com/TencentCloudBlockchainRpc/mud-boilerplate/blob/main/examples/minimal/README.md)
for this directory

### Pull requests

MUD follows the [conventional commit specification](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages and PR titles. Please keep the scope of your PR small (rather open multiple small PRs than one huge PR) and follow the conventional commit spec.

## Community support

[Join our Discord](https://lattice.xyz/discord) to get support and connect with the community!

## License

MUD is open-source software [licensed as MIT](LICENSE).
