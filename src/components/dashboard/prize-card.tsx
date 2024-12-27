"use client";

import { useEffect, useState } from "react";
import { CurrencyIcon } from "../ui";
import Odometer from "../ui/Odometer";

export default function PrizeCard({
  number,
  price,
}: {
  number: number;
  price: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex h-[126px] flex-col items-center justify-center gap-2 rounded-9 bg-grey-200 text-grey-600">
      <div
        style={{
          animation: "moving-gradient-frames 2s ease infinite",
          backgroundSize: "120% 120%",
        }}
        className="bg-ball-linear flex size-10 items-center justify-center rounded-full"
      >
        <div
          style={{
            animation: "rotating-shadow 1s linear infinite",
          }}
          className="flex size-7 items-center justify-center rounded-full bg-white text-base font-bold text-BlackEel shadow-black/[0.341]"
        >
          {number}
        </div>
      </div>
      <p className="flex flex-col items-center justify-center gap-1.5 text-base font-semibold">
        <span className="translate-y-1">
          <Odometer
            value={price}
            fontSize="1rem"
            duration={1500}
            loading={loading}
          />
        </span>
        <span className="flex items-center gap-2">
          <CurrencyIcon />
          <span className="text-xs font-normal">EDU</span>
        </span>
      </p>
    </div>
  );
}
