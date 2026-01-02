# SPACEL is a decentralized, community-driven trading fund 
deployed on the Arbitrum blockchain, designed to provide transparent access to
professionally managed trading strategies through blockchain-native
infrastructure.
The protocol enables participants to pool capital, represented by the
SPACEL utility token, and benefit from disciplined trading operations
executed under predefined risk frameworks. Unlike traditional opaque
trading funds, SPACEL emphasizes off-chain transparency, capital
efficiency, and multi-signature security controls.
SPACEL does not represent equity, ownership, or profit guarantees.
Instead, it functions as a decentralized ecosystem where value accrues
through liquidity reinforcement and capital compounding mechanisms.

SPACEL addresses the structural inefficiencies of traditional trading funds: namely limited transparency,
restricted access, and centralized custody risks; by leveraging Arbitrum’s Layer-2 infrastructure.
Participants contribute capital to the SPACEL trading pool and receive SPACEL tokens that represent
proportional participation within the ecosystem. Trading profits are systematically reinvested into both the
public liquidity pool and the trading fund, strengthening liquidity depth and expanding trading capacity over
time.
Key design principles include:
 Transparency by default
 Non-custodial user participation
 On-chain verifiability of treasury actions
 Security through decentralized control

## Usage

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `node:test` tests:

```shell
npx hardhat test solidity
npx hardhat test nodejs
```

### Make a deployment to Sepolia

This project includes an example Ignition module to deploy the contract. You can deploy this module to a locally simulated chain or to Sepolia.

To run the deployment to a local chain:

```shell
npx hardhat ignition deploy ignition/modules/Counter.ts
```

To run the deployment to Sepolia, you need an account with funds to send the transaction. The provided Hardhat configuration includes a Configuration Variable called `SEPOLIA_PRIVATE_KEY`, which you can use to set the private key of the account you want to use.

You can set the `SEPOLIA_PRIVATE_KEY` variable using the `hardhat-keystore` plugin or by setting it as an environment variable.

To set the `SEPOLIA_PRIVATE_KEY` config variable using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

After setting the variable, you can run the deployment with the Sepolia network:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```
