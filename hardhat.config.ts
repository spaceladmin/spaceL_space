import "dotenv/config";
import { defineConfig } from "hardhat/config";

import hardhatViem from "@nomicfoundation/hardhat-viem";
import hardhatVerify from "@nomicfoundation/hardhat-verify";

export default defineConfig({
  plugins: [hardhatViem, hardhatVerify],
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      type: "http",
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [process.env.DEPLOYER_KEY!],
    },
    arbitrumOne: {
      type: "http",
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: [process.env.DEPLOYER_KEY!],
    },
  },
  verify: {
    etherscan: {
      apiKey: process.env.ARBISCAN_API_KEY!,
    },
  },
});

