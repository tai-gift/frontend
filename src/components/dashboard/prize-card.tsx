"use client";

import { CurrencyIcon } from "../ui";
import Odometer from "../ui/Odometer";

export default function PrizeCard({
  number,
  price,
}: {
  number: number;
  price: string;
}) {
  return (
    <div className="dark-gradient-1 flex h-[106px] flex-col items-center justify-center gap-2 rounded-9">
      <div className="blaze-gradient-2 flex size-10 items-center justify-center rounded-full">
        <div className="bx-shadow-1 flex size-7 items-center justify-center rounded-full bg-white text-base font-bold text-BlackEel">
          {number}
        </div>
      </div>
      <p className="flex items-center gap-1.5 text-base font-semibold">
        <span className="shrink-0">
          <CurrencyIcon />
        </span>
        <span className="translate-y-0.5">
          <Odometer value={price} fontSize="1rem" duration={1500} />
        </span>
      </p>
    </div>
  );
}
