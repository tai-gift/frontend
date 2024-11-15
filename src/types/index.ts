import { Chain } from "@rainbow-me/rainbowkit";

export interface AppAccount {
  id?: string;
  address: string;
  username?: string;
}

export interface DonationContextType {
  account: AppAccount | null;
  chain: Chain & { unsupported?: true };
  connected: boolean;
  openConnectModal?: () => void;
  openAccountModal?: () => void;
  openChainModal?: () => void;
}
