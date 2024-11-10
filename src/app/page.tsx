import Image from "next/image";
import Link from "next/link";
import TaikoIcon from "/public/svgs/taiko-icon.svg";
import Fire from "/public/svgs/fire.svg";
import Colours from "/public/svgs/colours.svg";
import UserIcon from "/public/svgs/yellow-user-icon.svg";
import TaikoLogo from "/public/svgs/taiko-logo.svg";
import TaikoIconMono from "/public/svgs/taiko-icon-mono.svg";
import DonateButton from "@/components/ui/DonateButton";
import { tabs } from "@/utils/constant";
import DrawsRanking from "@/components/DrawsRanking";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const currentTab = searchParams.tab || "Daily";

  return (
    <section className="relative">
      <header className="no-scrollbar flex justify-center gap-4 overflow-x-scroll bg-CharcoalGrey p-2.5 text-sm md:gap-9">
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex size-[29.67px] items-center justify-center rounded-full bg-CaribbeanGreen">
            C
          </span>

          <p>@cystic deposited</p>

          <div className="flex items-center gap-0.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-DimorphothecaMagenta">
              <Image src={TaikoIcon} alt="taiko icon" />
            </span>

            <p>2,000</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="flex size-[29.67px] items-center justify-center rounded-full bg-DeepFuchsia">
            B
          </span>

          <p>@bami won</p>

          <div className="flex items-center gap-0.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-DimorphothecaMagenta">
              <Image src={TaikoIcon} alt="taiko icon" />
            </span>

            <p>2,000 in daily draws</p>
          </div>
        </div>
      </header>

      <section className="space-y-4 px-8 py-4">
        <div className="flex items-center justify-between py-0.5">
          <button className="flex items-center justify-center gap-1.5 rounded-[27.39px] bg-FuscousGrey-100/[57%] px-2 py-1">
            <Image src={Fire} alt="fire" />

            <span className="font-sans text-base">1</span>
          </button>

          <h2 className="font-luckiestGuy text-[1.426rem] leading-[1.426rem]">
            WELCOME
          </h2>

          <button className="flex items-center justify-center gap-1.5 rounded-[27.39px] bg-FuscousGrey-100/[57%] px-2.5 py-2">
            <Image src={Colours} alt="colours" />

            <span className="text-[0.71rem]">0x</span>
          </button>
        </div>

        <div className="relative h-[296px] rounded-lg bg-donationImage bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-6 left-[18px]">
            <div className="mb-9 space-y-2">
              <Image src={TaikoLogo} alt="Taiko logo" />

              <p className="w-[126px] text-[1.141rem] font-light">
                For <span className="font-semibold">Cancer</span> initiative
              </p>
            </div>

            <div className="mb-2 flex items-center gap-1 rounded-[36.52px] bg-white/40 px-2 py-1.5 backdrop-blur-[31.96px]">
              <p className="text-[0.71rem] font-bold">200,000</p>

              <div className="flex items-center gap-2">
                <Image src={TaikoIconMono} alt="Taiko icon mono" />
                <span className="text-xs">taiko raised</span>
              </div>
            </div>

            <Link
              href="/learnmore"
              className="text-xs underline underline-offset-1"
            >
              Learn more
            </Link>
          </div>

          <p className="absolute bottom-[118px] right-[21px] w-[89.02px] text-[1.141rem] font-light">
            Save a <span className="font-semibold">life</span> today
          </p>

          <div className="absolute bottom-12 right-[22px] flex items-center gap-1 rounded-[36.52px] bg-white/40 px-2 py-1.5 backdrop-blur-[31.96px]">
            <Image src={UserIcon} alt="user icon" />

            <p className="text-[0.71rem]">
              <span className="font-bold">70,000</span> donors
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-luckiestGuy text-[1.4268rem]">Draws</h2>

            <Link
              href="/about"
              className="text-xs font-medium underline underline-offset-1"
            >
              About Tai.Gift
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 rounded-9 bg-HeavyMetal p-1 text-base text-PastelGrey">
            {tabs.slice(1).map((tab, index) => (
              <Link
                key={index}
                href={`?tab=${tab}`}
                className={`rounded-lg p-2 text-center ${tab === currentTab ? "bg-white text-Zeus" : ""} transition-all duration-300`}
              >
                {tab}
              </Link>
            ))}
          </div>

          <DrawsRanking />
        </div>
      </section>
      <DonateButton />
    </section>
  );
}
