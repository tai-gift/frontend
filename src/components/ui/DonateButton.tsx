"use client";

import { useDonation } from "@/contexts/DonationProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SlotModal from "./modals/SlotModal";
import SuccessModal from "./modals/SuccessModal";

interface DonateButtonProp {
  className: string;
}

const DonateButton: React.FC<DonateButtonProp> = ({ className }) => {
  const { user, isWalletConnected } = useDonation();
  const router = useRouter();
  const [showDonate, setShowDonate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    if (!isWalletConnected) {
      router.push("/connectwallet");
    } else if (!user) {
      router.push("/connectwallet/username");
    } else {
      setShowDonate(true);
    }
  };

  return (
    <>
      <div className={`${className}`}>
        <button
          type="button"
          onClick={handleClick}
          className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300 hover:opacity-90"
        >
          Donate
        </button>
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
    </>
  );
};

export default DonateButton;
