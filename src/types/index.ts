export interface User {
  address: string;
  username: string;
}

export interface DonationContextType {
  user: User | null;
  isWalletConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  createAccount: (username: string) => Promise<void>;
  donate: (amount: number) => Promise<void>;
}
