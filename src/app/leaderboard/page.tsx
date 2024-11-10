import LeaderBoardRanking from "@/components/LeaderBoardRanking";
import { tabs } from "@/utils/constant";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leaderboard Tai.Gift",
};

export default function LeaderBoardPage({
  searchParams,
}: {
  searchParams: {
    tab: string | undefined;
    page: string | undefined;
    search: string | undefined;
    subTab?: string;
  };
}) {
  const currentTab = searchParams.tab || "Daily";

  return (
    <section className="relative space-y-4 px-8 pb-12 pt-8">
      <div className="absolute top-[15%] h-[100px] w-[100px] rounded-full bg-[#FFCE00] blur-[90px]" />
      <div className="absolute bottom-[10%] right-0 h-[100px] w-[100px] rounded-full bg-[#FFCE00] blur-[90px]" />

      <h1 className="font-luckiestGuy text-xl font-normal uppercase md:text-2xl">
        LEADERBOARD
      </h1>
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-HeavyMetal p-1 text-base text-PastelGrey">
        {tabs.slice(1).map((tab, index) => (
          <Link
            key={index}
            href={`leaderboard?tab=${tab}`}
            className={`rounded-lg p-2 text-center ${tab === currentTab ? "bg-white text-Zeus" : ""} transition-all duration-300`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <LeaderBoardRanking currentTab={currentTab} />
    </section>
  );
}
