"use client";

import { useState } from "react";
import { useDonation } from "@/contexts/DonationProvider";
import Link from "next/link";
import SlotModal from "@/components/ui/modals/SlotModal";
import SuccessModal from "@/components/ui/modals/SuccessModal";

export default function UsernamePage() {
  const { createAccount } = useDonation();
  const [username, setUsername] = useState("");
  const [showDonate, setShowDonate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="grid h-[70vh] w-full place-content-center overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-Liver/80 px-10 py-8">
        <h2 className="text-center font-luckiestGuy text-xl font-normal uppercase">
          Enter username
        </h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="h-10 md:w-[315px] rounded-lg border border-[#5C5B59] bg-transparent px-4 py-2 text-center text-[#ACB7B1] placeholder:text-[#ACB7B1] focus:border-[#EB3BA8] focus:outline-none"
        />
        <button
          type="button"
          onClick={async () => {
            await createAccount(username);
            setShowDonate(true);
          }}
          className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
        >
          Continue
        </button>
        <Link href="/" className="text-sm font-bold text-white underline">
          Terms and Condition
        </Link>
      </div>
      <SlotModal
        isOpen={showDonate}
        onClose={() => {
          setShowDonate(false);
          setShowSuccess(true);
        }}
      />
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
