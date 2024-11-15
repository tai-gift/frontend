import {
  Chain,
  getDefaultConfig,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  binanceWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { cookieStorage, createStorage, http } from "wagmi";

const { wallets } = getDefaultWallets();

export const local = {
  id: 31337,
  name: "Hardhat Node",
  iconUrl: "/svgs/edu.svg",
  iconBackground: "#fff",
  nativeCurrency: { name: "EDUCHAIN", symbol: "EDU", decimals: 18 },
  factoryAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://opencampus-codex.blockscout.com",
    },
  },
} as const satisfies Chain & { factoryAddress: string };
export const testnet = {
  id: 167009,
  name: "Taiko (Hekla)",
  iconUrl: "/svgs/taiko-icon-mono.svg",
  iconBackground: "#e01b98",
  factoryAddress: "0x6b4cAc0DcbdBf8518E4B632f698cF6915472917c",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.hekla.taiko.xyz"] },
  },
  blockExplorers: {
    default: {
      name: "TaikoScan",
      url: "https://hekla.taikoscan.network",
    },
  },
} as const satisfies Chain & { factoryAddress: string };

export const config = getDefaultConfig({
  appName: "Tai.gift",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [local, testnet],
  transports: {
    [testnet.id]: http("https://rpc.hekla.taiko.xyz"),
    [local.id]: http("http://127.0.0.1:8545"),
  },
  wallets: [
    ...wallets,
    {
      groupName: "Others",
      wallets: [
        argentWallet,
        trustWallet,
        ledgerWallet,
        binanceWallet,
        coinbaseWallet,
      ],
    },
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
