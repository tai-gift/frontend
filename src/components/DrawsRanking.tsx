import Image from "next/image";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import PrizePoolIcon from "/public/svgs/prize-pool.svg";
import FirstPrize from "/public/svgs/first-prize.svg";
import PrizeCard from "@/components/dashboard/prize-card";
import { CurrencyIcon } from "./ui";

const DrawsRanking = () => {
  return (
    <div className="space-y-3">

      <div className="blaze-gradient neon-bx-shadow flex justify-between rounded-9 border border-NeonPink p-3">
        <div className="flex gap-2.5">
          <Image src={PrizePoolIcon} alt="" />

          <div>
            <p className="font-semibold">Prize Pool</p>

            <div className="flex items-center gap-1">
              <p className="font-bold">100,000</p>
              <div className="flex items-center">
                <Image src={TaikoIconMono} alt="Taiko icon mono" />
                <span className="text-xs">taiko</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <p className="text-sm font-semibold">Next Draw starts in</p>
          <div className="ml-auto flex justify-end gap-1">
            <span className="rounded-sm bg-FuscousGrey-200 p-1">04</span>
            <span className="text-base">:</span>
            <span className="rounded-sm bg-FuscousGrey-200 p-1">45</span>
            <span className="text-base">:</span>
            <span className="rounded-sm bg-FuscousGrey-200 p-1">22</span>
          </div>
        </div>
      </div>

      <div className="dark-gradient-1 flex items-center justify-between rounded-9 px-3 py-3.5 font-semibold">
        <div className="flex items-center gap-2">
          <Image src={FirstPrize} alt="" />
          <span className="text-base">First prize</span>
        </div>

        <p className="flex items-center space-x-2 text-lg">
          <CurrencyIcon /> 30,000
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
};

export default DrawsRanking;
