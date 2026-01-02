import { network } from "hardhat";

const { viem, networkName } = await network.connect();

async function main() {
  const multisigOwner = process.env.MULTISIG_OWNER;
  if (!multisigOwner) throw new Error("Missing MULTISIG_OWNER in .env");

  console.log(`Deploying SpaceL (SPACEL) to ${networkName}...`);

  const token = await viem.deployContract("SPACEL", [multisigOwner]);

  console.log("SPACEL deployed to:", token.address);
  console.log("Owner (multisig):", multisigOwner);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

