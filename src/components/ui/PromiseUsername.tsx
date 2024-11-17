"use client";
import { useEffect, useState } from "react";
import { findAccount } from "@/actions/user";
import { AppAccount } from "@/types";

export function PromiseUsername({ buyer }: { buyer: string }) {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<AppAccount | undefined>();
  useEffect(() => {
    if (!buyer) return;
    findAccount(buyer)
      .then((account) => {
        setAccount(account as unknown as AppAccount);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log(account);
        setLoading(false);
      });
  }, [account, buyer]);

  if (loading) return <span className="block">Loading...</span>;
  return <span>{account?.username}</span>;
}
