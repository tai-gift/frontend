"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import PrizePoolIcon from "/public/svgs/prize-pool.svg";
import FirstPrize from "/public/svgs/first-prize.svg";
import PrizeCard from "@/components/dashboard/prize-card";
import { CountdownTimer, CurrencyIcon } from "./ui";
import Odometer from "./ui/Odometer";
import { Draw, formatBigIntToString } from "@/types";
import { calculateTimeRemaining } from "@/utils/date";

interface DrawsRankingProps {
  draws: Draw[];
}

const DrawsRanking: React.FC<DrawsRankingProps> = ({ draws }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (draws.length === 0)
    return (
      <div className="py-8 text-center text-gray-500">
        No draws found for this category
      </div>
    );

  return draws.map((draw) => {
    const { hours, minutes, seconds } = calculateTimeRemaining(draw.endTime);

    return (
      <div key={draw.id} className="space-y-3">
        <div className="blaze-gradient neon-bx-shadow flex justify-between rounded-9 border border-NeonPink p-3">
          <div className="flex gap-2.5">
            <Image src={PrizePoolIcon} alt="" />

            <div>
              <p className="font-semibold">Prize Pool</p>

              <div className="flex items-center gap-1">
                <p className="translate-y-0.5 font-bold">
                  <Odometer
                    value={formatBigIntToString(draw.guaranteedPrize)}
                    fontSize="1rem"
                    duration={1500}
                    loading={loading}
                  />
                </p>
                <div className="flex items-center">
                  <Image src={TaikoIconMono} alt="Taiko icon mono" />
                  <span className="text-xs">taiko</span>
                </div>
              </div>
            </div>
          </div>

          <CountdownTimer
            title="Next Draw starts in"
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            fontSize="1rem"
            color="white"
            digitClassName="rounded-sm bg-FuscousGrey-200 p-1"
            onComplete={() => console.log("Timer completed!")}
          />
        </div>

        <div className="dark-gradient-1 flex items-center justify-between rounded-9 px-3 py-3.5 font-semibold">
          <div className="flex items-center gap-2">
            <Image src={FirstPrize} alt="" />
            <span className="text-base">First prize</span>
          </div>

          <p className="flex items-center gap-1.5 text-base font-semibold">
            <span className="shrink-0">
              <CurrencyIcon />
            </span>
            <span className="translate-y-0.5">
              <Odometer
                value={30000}
                fontSize="1rem"
                duration={1500}
                loading={loading}
              />
            </span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
          <PrizeCard number={2} price="15,000" />
          <PrizeCard number={3} price="10,000" />
          <PrizeCard number={4} price="2,500" />
          <PrizeCard number={5} price="2,500" />
          <PrizeCard number={6} price="2,500" />
          <PrizeCard number={7} price="2,500" />
          <PrizeCard number={8} price="2,500" />
          <PrizeCard number={9} price="2,500" />
          <PrizeCard number={10} price="2,500" />
        </div>
      </div>
    );
  });
};

export default DrawsRanking;
