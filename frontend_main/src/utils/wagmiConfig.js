import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http } from "viem";
import { rootstockTestnet } from "viem/chains";
import { createConfig } from "wagmi";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, walletConnectWallet, trustWallet],
    },
  ],
  {
    appName: "bitstake",
    projectId: "b9e6d180e1d91a6b6ffc2c3535ea61c9",
  }
);

export const wagmiConfig = createConfig({
  chains: [rootstockTestnet],
  connectors,
  transports: { [rootstockTestnet.id]: http() },
});
