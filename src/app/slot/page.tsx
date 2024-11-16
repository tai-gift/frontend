"use client";

import SlotModal from "@/components/ui/modals/SlotModal";
import SuccessModal from "@/components/ui/modals/SuccessModal";
import { useAppAccount } from "@/contexts/AccountProvider";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function BuySlots() {
  const { connected } = useAppAccount();
  const [showDonate, setShowDonate] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!connected) redirect("/connectwallet");

  return (
    <>
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
    </>
  );
}
