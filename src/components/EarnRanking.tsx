"use client";

import Image from "next/image";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import GoldTrophy from "/public/svgs/goldTrophy.svg";
import SilverTrophy from "/public/svgs/silverTrophy.svg";
import { useEffect, useState } from "react";

interface EarnRankingProps {
  currentTab: string | undefined;
}

interface EarnerData {
  rank: number;
  drawType: string;
  earnings: number;
  date: Date;
}

const EarnRanking: React.FC<EarnRankingProps> = ({ currentTab }) => {
  const [earnersData, setEarnersData] = useState<EarnerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Generate data on the client side only
  useEffect(() => {
    const generateData = () => {
      const data = Array.from({ length: 20 }, (_, index) => ({
        rank: index + 1,
        drawType:
          index === 0
            ? "First draw"
            : index === 1
              ? "Second draw"
              : "Other draw",
        earnings: Math.floor(Math.random() * 1000),
        date: new Date(2024, 8, index + 12),
      }));
      setEarnersData(data);
      setIsLoading(false);
    };

    generateData();
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredEarners = earnersData.filter((earner) => {
    if (currentTab === "All") return true;
    if (currentTab === "DAILY" && earner.drawType === "First draw") return true;
    if (currentTab === "WEEKLY" && earner.drawType === "Second draw")
      return true;
    if (
      currentTab === "MONTHLY" &&
      earner.drawType !== "First draw" &&
      earner.drawType !== "Second draw"
    )
      return true;
    return false;
  });

  if (isLoading) {
    return (
      <div className="bg-blackbgLinear flex h-[478px] w-full items-center justify-center rounded-lg">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {earnersData.length === 0 ? (
        <div className="bg-blackbgLinear flex h-[478px] w-full flex-col items-center justify-center space-y-3 rounded-lg">
          <div className="flex h-16 w-16 select-none items-center justify-center rounded-full bg-white/10">
            <h6 className="text-xs font-medium md:text-sm">11</h6>
          </div>
          <div className="space-y-1">
            <h3 className="text-center text-sm font-semibold md:text-base">
              No earnings yet
            </h3>
            <p className="text-xs font-normal md:text-sm">
              All draw history shows here
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-3">
          {filteredEarners.map((earner, index) => (
            <div
              key={index}
              className="bg-tablebgLinear grid min-h-16 w-full grid-cols-2 items-center gap-4 rounded-lg px-4 py-1"
            >
              <div className="flex items-center justify-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  {earner.rank === 1 ? (
                    <Image
                      src={GoldTrophy}
                      alt="Gold Trophy"
                      width={16}
                      height={16}
                    />
                  ) : earner.rank === 2 ? (
                    <Image
                      src={SilverTrophy}
                      alt="Silver Trophy"
                      width={16}
                      height={16}
                    />
                  ) : (
                    <div className="text-lg font-bold">{earner.rank}</div>
                  )}
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className="text-sm font-semibold">{earner.drawType}</h2>
                  <p className="text-xs font-normal text-[#D9D9D9]">
                    {earner.drawType}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end gap-2">
                <div className="flex w-full items-center justify-end gap-1">
                  <h4 className="text-lg font-bold">
                    {formatNumber(earner.earnings)}
                  </h4>

                  <Image
                    src={TaikoIconMono}
                    alt="Taiko icon mono"
                    width={16}
                    height={16}
                  />

                  <span className="text-xs">taiko</span>
                </div>
                <p className="text-xs font-normal text-[#D9D9D9]">
                  {formatDate(earner.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EarnRanking;
