import LeaderBoardRanking from "@/components/LeaderBoardRanking";
import { tabs } from "@/utils/constant";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leaderboard Tai.Gift",
};

export default async function LeaderBoardPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const currentTab = (await searchParams).tab || "DAILY";

  return (
    <section className="relative space-y-4 px-8 pb-12 pt-8">
      <h1 className="font-semibold text-xl uppercase md:text-2xl">
        LEADERBOARD
      </h1>
      <div className="grid grid-cols-3 gap-2 rounded-lg text-base text-grey-600 border-b border-grey-500">
        {tabs.slice(1).map((tab, index) => (
          <Link
            key={index}
            href={`/leaderboard?tab=${tab}`}
            className={`p-2 text-center capitalize ${tab === currentTab ? "border-b-2 text-primary border-primary font-medium" : "font-normal"} transition-all duration-300`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <LeaderBoardRanking tab={currentTab} />
    </section>
  );
}
