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

export const testnet = {
  id: 167009,
  name: "Taiko (Hekla)",
  iconUrl: "/svgs/taiko-icon-mono.svg",
  iconBackground: "#e01b98",
  factoryAddress: "0x6b4cAc0DcbdBf8518E4B632f698cF6915472917c",
  tokenAddress: "0x2ec5787C3291DEa27a6C24Ab15963e60Bd7DF7da",
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
} as const satisfies Chain & { factoryAddress: string; tokenAddress: string };

export const config = getDefaultConfig({
  appName: "Tai.gift",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [testnet],
  transports: {
    [testnet.id]: http("https://rpc.hekla.taiko.xyz"),
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
