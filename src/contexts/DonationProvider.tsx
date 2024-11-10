"use client";
import React, { createContext, useContext, useState } from "react";
import { DonationContextType, User } from "@/types";

const DonationContext = createContext<DonationContextType | undefined>(
  undefined,
);

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      setIsWalletConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setUser(null);
  };

  const createAccount = async (username: string) => {
    // Implement your account creation logic here
    setUser({ address: "demo_address", username });
  };

  const donate = async (amount: number) => {
    // Implement your donation logic here
    console.log(`Donating ${amount} from user ${user?.username}`);
  };

  return (
    <DonationContext.Provider
      value={{
        user,
        isWalletConnected,
        connectWallet,
        disconnectWallet,
        createAccount,
        donate,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error("useDonation must be used within a DonationProvider");
  }
  return context;
};
