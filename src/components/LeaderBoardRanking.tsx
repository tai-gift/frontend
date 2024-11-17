"use client";
import Image from "next/image";
import FirstImage from "/public/images/front-view-positive-woman-with-cancer.png";
import SecondImage from "/public/images/about-bg-image.png";
import ThirdImage from "/public/images/tai-gifts.png";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import GoldTrophy from "/public/svgs/goldTrophy.svg";
import SilverTrophy from "/public/svgs/silverTrophy.svg";
import BronzeTrophy from "/public/svgs/bronze.svg";
import React, { useMemo } from "react";
import { LEADERS_QUERY, LeadersQuery } from "@/helpers/gql";
import { useQuery } from "@apollo/client";
import { formatEther } from "viem";
import { formatAddress } from "@/helpers/string";
import { PromiseUsername } from "@/components/ui/PromiseUsername";

interface LeaderBoardRankingProps {
  tab: string;
}

const LeaderBoardRanking: React.FC<LeaderBoardRankingProps> = () => {
  const { data, loading, error } = useQuery<LeadersQuery>(LEADERS_QUERY);
  const leaders = useMemo(() => {
    return (data?.ticketPurchaseds ?? [])?.map((leader, index) => ({
      ...leader,
      rank: index + 1,
      account: { address: "", username: "" },
    }));
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="space-y-5 pt-20">
      <div className="grid w-full grid-cols-3 gap-4 align-top">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative grid h-[70px] w-[70px] place-content-center rounded-full bg-leaderboardbgLinear p-1">
            <Image
              src={ThirdImage}
              alt="Taiko icon mono"
              width={65}
              height={65}
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 grid h-6 w-6 place-content-center rounded-full bg-Zeus">
              <Image
                src={BronzeTrophy}
                alt="bronze icon"
                width={13}
                height={13}
              />
            </div>
          </div>
          <div>
            <h3 className="text-center font-fustat text-xs font-semibold md:text-base">
              3 Rank
            </h3>
            <div className="flex items-center justify-end gap-1">
              <span className="text-lg font-bold">
                {formatEther(BigInt(leaders?.[2]?.amount ?? "0"))}
              </span>

              <Image
                src={TaikoIconMono}
                alt="Taiko icon mono"
                width={16}
                height={16}
              />

              <span className="text-xs">taiko</span>
            </div>
          </div>
        </div>
        <div className="flex -translate-y-10 flex-col items-center justify-center gap-2">
          <div className="relative grid h-[70px] w-[70px] place-content-center rounded-full bg-leaderboardbgLinear p-1">
            <Image
              src={FirstImage}
              alt="Taiko icon mono"
              width={65}
              height={65}
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 grid h-6 w-6 place-content-center rounded-full bg-Zeus">
              <Image src={GoldTrophy} alt="gold icon" width={13} height={13} />
            </div>
          </div>
          <div>
            <h3 className="text-center font-fustat text-xs font-semibold md:text-base">
              1 Rank
            </h3>
            <div className="flex items-center justify-end gap-1">
              <span className="text-lg font-bold">
                {formatEther(BigInt(leaders?.[0]?.amount ?? "0"))}
              </span>

              <Image
                src={TaikoIconMono}
                alt="Taiko icon mono"
                width={16}
                height={16}
              />

              <span className="text-xs">taiko</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative grid h-[70px] w-[70px] place-content-center overflow-hidden rounded-full bg-leaderboardbgLinear p-2">
            <Image
              src={SecondImage}
              alt="Taiko icon mono"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 grid h-6 w-6 place-content-center rounded-full bg-Zeus">
              <Image
                src={SilverTrophy}
                alt="silver icon"
                width={13}
                height={13}
              />
            </div>
          </div>
          <div>
            <h3 className="text-center font-fustat text-xs font-semibold md:text-base">
              2 Rank
            </h3>
            <div className="flex items-center justify-end gap-1">
              <span className="text-lg font-bold">
                {formatEther(BigInt(leaders?.[1]?.amount ?? "0"))}
              </span>

              <Image
                src={TaikoIconMono}
                alt="Taiko icon mono"
                width={16}
                height={16}
              />

              <span className="text-xs">taiko</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid min-h-8 w-full grid-cols-[40px_1fr_90px] items-center gap-4 rounded-lg bg-tablebgLinear px-4 py-1 lg:grid-cols-[90px_1fr_120px]">
        <div className="text-start">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Rank
          </h3>
        </div>
        <div className="text-start">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Donor
          </h3>
        </div>
        <div className="text-end">
          <h3 className="font-fustat text-xs font-semibold md:text-base">
            Amount
          </h3>
        </div>
      </div>
      <div className="w-full space-y-3">
        {leaders?.map((leader, index) => (
          <div
            key={index + 4}
            className="grid min-h-8 w-full grid-cols-[40px_1fr_60px] items-center gap-4 rounded-lg bg-tablebgLinear px-4 py-1 lg:grid-cols-[80px_1fr_120px]"
          >
            <div className="grid h-9 w-9 place-content-center rounded-full bg-leaderboardbgLinear p-4 lg:h-12 lg:w-12">
              <div className="flex h-5 w-5 select-none items-center justify-center rounded-full bg-white lg:h-9 lg:w-9">
                <h4 className="text-sm font-bold text-BlackEel lg:text-base">
                  {index + 4}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 select-none items-center justify-center rounded-full bg-[#4B4A48] lg:h-9 lg:w-9">
                <span className="text-xs font-bold md:text-sm lg:text-base">
                  B{/*({leader?.account?.username?.charAt(0) ?? "U"})*/}
                </span>
              </div>
              <h4 className="text-sm font-normal md:text-base">
                <p className="">
                  <PromiseUsername buyer={leader.buyer} />
                </p>
                <small>{formatAddress(leader.buyer)}</small>
              </h4>
            </div>
            <div className="flex w-full items-center justify-end gap-1">
              <h4 className="text-lg font-bold">
                {formatEther(BigInt(leader?.amount ?? "0"))}
              </h4>

              <Image
                src={TaikoIconMono}
                alt="Taiko icon mono"
                width={16}
                height={16}
              />

              <span className="text-xs">taiko</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoardRanking;
