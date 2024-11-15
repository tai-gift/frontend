"use client";

import { useAppAccount } from "@/contexts/AccountProvider";
import { useRouter } from "next/navigation";

interface DonateButtonProp {
  className: string;
  paramTab: string;
}

const DonateButton: React.FC<DonateButtonProp> = ({ className, paramTab }) => {
  const { account, connected } = useAppAccount();
  const router = useRouter();

  const handleClick = () => {
    if (!connected) {
      router.push("/connectwallet");
    } else if (!account) {
      router.push("/connectwallet/username");
    } else {
      router.push(`/slot?tab=${paramTab}`);
    }
  };

  return (
    <div className={`${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className="min-h-7 w-full rounded-full bg-[#EB3BA8] py-3 text-sm font-medium text-white outline-none transition-all duration-300"
      >
        Donate
      </button>
    </div>
  );
};

export default DonateButton;
