"use client";

import Link from "next/link";
import Image from "next/image";
import { formatAddress } from "@/helpers/string";
import { useAppAccount } from "@/contexts/AccountProvider";
import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  const { account } = useAppAccount();

  useEffect(() => {
    console.log("Account", account);
  }, [account]);

  return (
    <div className="grid h-[70vh] w-full place-content-center overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-Liver/80 px-10 py-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-luckiestGuy text-xl font-normal uppercase">
            CONNECT WALLET
          </h2>
          <p className="max-w-[318px] text-center font-fustat text-xs md:text-sm">
            Connect your wallet to start earning
          </p>
        </div>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");
            if (!connected) {
              return (
                <button
                  type="button"
                  onClick={openConnectModal}
                  className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
                >
                  Connect Wallet
                </button>
              );
            } else if (chain.unsupported) {
              return (
                <button
                  type="button"
                  onClick={openChainModal}
                  className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
                >
                  Switch Network
                </button>
              );
            } else {
              return (
                <button
                  onClick={openAccountModal}
                  className={"flex items-center gap-2"}
                >
                  {!chain?.unsupported && chain.iconUrl && (
                    <Image
                      alt={chain.name ?? "Chain icon"}
                      src={chain.iconUrl as string}
                      width={26}
                      height={26}
                    />
                  )}
                  {formatAddress(account?.address as string)}
                </button>
              );
            }
          }}
        </ConnectButton.Custom>
        <Link href="/" className="text-sm font-bold text-white underline">
          Terms and Condition
        </Link>
      </div>
    </div>
  );
}
