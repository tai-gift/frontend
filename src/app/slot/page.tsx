"use client";

import SlotModal from "@/components/ui/modals/SlotModal";
import SuccessModal from "@/components/ui/modals/SuccessModal";
import { useState } from "react";

export default function BuySlots() {
  const [showDonate, setShowDonate] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

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
