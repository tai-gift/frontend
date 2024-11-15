import { Metadata } from "next";
import Image from "next/image";
import RefreshIcon from "/public/svgs/refreshIcon.svg";
import Link from "next/link";
import EarnRanking from "@/components/EarnRanking";
import { tabs } from "@/utils/constant";

export const metadata: Metadata = {
  title: "Earning Tai.Gift",
};

export default function EarningPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const currentTab = searchParams.tab || "All";

  return (
    <section className="space-y-4 px-8 pb-12 pt-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-luckiestGuy text-xl font-normal uppercase md:text-2xl">
          EARNINGS
        </h1>
        <button type="button">
          <Image src={RefreshIcon} alt="refresh icon" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 rounded-lg bg-HeavyMetal p-1 text-base text-PastelGrey">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={`earnings?tab=${tab}`}
            className={`rounded-lg p-2 text-center capitalize ${tab === currentTab ? "bg-white text-Zeus" : ""} transition-all duration-300`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <EarnRanking currentTab={currentTab} />
    </section>
  );
}
