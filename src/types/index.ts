export interface User {
  id?: string;
  username: string;
  address: string;
}

export interface DonationContextType {
  user: User | null;
  isWalletConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  createAccount: (username: string) => Promise<void>;
  donate: (amount: number) => Promise<void>;
}
