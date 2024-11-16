"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AccountContextType, AppAccount } from "@/types";
import { useAccount, useChains, useSwitchChain } from "wagmi";
import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { findAccount } from "@/actions/user";

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const account = useAccount();
  const chains = useChains();

  const { openConnectModal } = useConnectModal();
  const { switchChain } = useSwitchChain();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const [_account, setAccount] = useState<AppAccount | null>(null);

  useEffect(() => {
    // if (process.env.NODE_ENV === "development" && account?.chainId !== 31337) {
    //   switchChain({ chainId: 31337 });
    // } else
    if (!account) return;

    if (account?.chainId !== 167009) {
      switchChain({ chainId: 167009 });
    }
  }, [account, switchChain]);

  const chain = useMemo(() => {
    return (
      chains.find((chain) => chain.id === account?.chainId) ?? {
        unsupported: true,
      }
    );
  }, [account?.chainId, chains]);

  useEffect(() => {
    if (!account?.address || _account?.address) {
      return;
    }

    findAccount(account.address!).then((_account) => {
      if (!_account) {
        router?.push("/connectwallet/username");
        return;
      }

      setAccount(_account as unknown as AppAccount);
    });
  }, [_account?.address, account.address, router]);

  const value = {
    account: _account || account,
    chain,
    connected: account.isConnected,
    openConnectModal,
    openAccountModal,
    openChainModal,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export const useAppAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useDonation must be used within a DonationProvider");
  }

  return context;
};
