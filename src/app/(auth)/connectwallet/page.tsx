"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConnectWallet() {
  const router = useRouter();

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
        <button
          type="button"
          onClick={() => router.push("/connectwallet/username")}
          className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
        >
          Connect Wallet
        </button>
        <Link href="/" className="text-sm font-bold text-white underline">
          Terms and Condition
        </Link>
      </div>
    </div>
  );
}
