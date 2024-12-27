"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import EdumonoIcon from "/public/svgs/EdumonoIcon.svg";
import PrizePoolIcon from "/public/svgs/prize-pool.svg";
import FirstPrize from "/public/svgs/first-prize.svg";
import PrizeCard from "@/components/dashboard/prize-card";
import { CountdownTimer, CurrencyIcon } from "./ui";
import Odometer from "./ui/Odometer";
import { Draw } from "@/types";
import { calculateTimeRemaining } from "@/utils/date";
import { formatEther } from "viem";

interface DrawsRankingProps {
  draw: Draw;
}

const DrawsRanking: React.FC<DrawsRankingProps> = ({ draw }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const prizePool = useMemo(() => {
    if (!draw) return "0";
    return (
      formatEther(
        BigInt(
          draw.currentPrizePool > draw.guaranteedPrize
            ? Number(draw.currentPrizePool)
            : Number(draw.guaranteedPrize),
        ),
      )?.toString() ?? "0"
    );
  }, [draw]);

  function calculatePrize(index: number) {
    const multiplier = [
      0.3, 0.25, 0.15, 0.07, 0.07, 0.05, 0.05, 0.02, 0.02, 0.02,
    ];
    return (multiplier[index] * parseFloat(prizePool)).toString();
  }

  const { hours, minutes, seconds } = calculateTimeRemaining(draw?.endTime);

  if (!draw)
    return (
      <div className="py-8 text-center text-gray-500">
        No draws found for this category
      </div>
    );

  return (
    <div key={draw.id} className="space-y-3">
      <div
        style={{
          animation: "moving-gradient-frames 2s ease infinite",
          backgroundSize: "200% 200%",
        }}
        className="neon-bx-shadow flex justify-between rounded-9 border border-primary bg-prizeLinearBg p-3 text-white"
      >
        <div className="flex gap-2.5">
          <Image src={PrizePoolIcon} alt="" />

          <div>
            <p className="font-semibold">Prize Pool</p>

            <div className="flex items-center gap-1">
              <p className="translate-y-1 font-bold">
                <Odometer
                  value={prizePool}
                  fontSize="1rem"
                  duration={1500}
                  loading={loading}
                />
              </p>
              <div className="flex items-center gap-1">
                <Image src={EdumonoIcon} alt="Edu icon mono" />
                <span className="text-xs">EDU</span>
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
          digitClassName="rounded-sm bg-countbgLinear p-1"
          onComplete={() => console.log("Timer completed!")}
        />
      </div>

      <div className="flex items-center justify-between rounded-9 bg-grey-200 px-3 py-3.5 font-semibold text-grey-600">
        <div className="flex items-center gap-2">
          <Image src={FirstPrize} alt="" />
          <span className="text-base">First prize</span>
        </div>

        <p className="flex items-center gap-1.5 text-base font-semibold">
          <span className="translate-y-1">
            <Odometer
              value={calculatePrize(0)}
              fontSize="1rem"
              duration={1500}
              loading={loading}
            />
          </span>
          <span className="flex items-center gap-1">
            <CurrencyIcon />
            <span className="text-xs">EDU</span>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
        <PrizeCard number={2} price={calculatePrize(1)} />
        <PrizeCard number={3} price={calculatePrize(2)} />
        <PrizeCard number={4} price={calculatePrize(3)} />
        <PrizeCard number={5} price={calculatePrize(4)} />
        <PrizeCard number={6} price={calculatePrize(5)} />
        <PrizeCard number={7} price={calculatePrize(6)} />
        <PrizeCard number={8} price={calculatePrize(7)} />
        <PrizeCard number={9} price={calculatePrize(8)} />
        <PrizeCard number={10} price={calculatePrize(9)} />
      </div>
    </div>
  );
};

export default DrawsRanking;
