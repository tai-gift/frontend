"use client";

import { FormEvent, useEffect, useState } from "react";
import { useAppAccount } from "@/contexts/AccountProvider";
import Link from "next/link";
import { createAccount } from "@/actions/user";
import { useRouter } from "next/navigation";

export default function UsernamePage() {
  const { account, chain } = useAppAccount();
  useEffect(() => {
    console.log("username Account", account, chain);
  }, [account, chain]);
  const [username, setUsername] = useState("");
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  return (
    <div className="grid h-[70vh] w-full place-content-center overflow-hidden">
      <form
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (!account?.address) throw new Error("Account address is required");

          setProcessing(true);
          try {
            await createAccount({
              username,
              address: account?.address as string,
            });
            router.push("/slot?tab='DAILY'");
          } catch (e) {
            console.error(e);
          } finally {
            setProcessing(false);
          }
        }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-white px-10 py-8">
          <h2 className="text-center text-xl font-semibold uppercase">
            Enter username
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="h-10 rounded-lg border border-[#D7D7D8] bg-transparent px-4 py-2 text-center text-[#ACB7B1] placeholder:text-[#ACB7B1] focus:border-primary focus:outline-none md:w-[315px]"
          />
          <button
            type="submit"
            disabled={!username || processing}
            className="min-h-7 w-full rounded-full bg-primary py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90 disabled:bg-opacity-60 disabled:cursor-not-allowed"
          >
            {processing ? "Processing..." : "Continue"}
          </button>
          <Link href="/" className="text-sm font-bold text-grey-700 underline">
            Terms and Condition
          </Link>
        </div>
      </form>
    </div>
  );
}
