"use client";

import { useAppAccount } from "@/contexts/AccountProvider";
import { useRouter } from "next/navigation";
import { Draw } from "@/types";
import React, { useEffect } from "react";
import { useDraw } from "@/contexts/DrawProvider";

interface DonateButtonProp {
  className: string;
  paramTab: string;
  draw: Draw;
}

const DonateButton: React.FC<DonateButtonProp> = ({ className, draw }) => {
  const { account, connected } = useAppAccount();
  const router = useRouter();
  const { selectDraw, selectedDraw } = useDraw();

  const handleClick = () => {
    if (!connected) {
      router.push("/connectwallet");
    } else if (!account) {
      router.push("/connectwallet/username");
    } else {
      router.push("/slot");
    }
  };

  useEffect(() => {
    selectDraw(draw);
  }, [draw, selectDraw]);

  if (!selectedDraw) return <></>;

  return (
    <div className={`${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className="min-h-7 w-full rounded-full bg-primary py-3 text-sm font-medium text-white outline-none transition-all duration-300"
      >
        Donate
      </button>
    </div>
  );
};

export default DonateButton;
