import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "/public/svgs/arrow-right.svg";
import EduchainLogo from "/public/svgs/EduchainLogo.svg";
import EdumonoIcon from "/public/svgs/EdumonoIcon.svg";
import UserIcon from "/public/svgs/yellow-user-icon.svg";
import DonateRankTable from "@/components/DonateRankTable";

export const metadata: Metadata = {
  title: "Learn More Tai.Gift",
};

export default function LearnMorePage() {
  return (
    <section className="space-y-4 px-8 pb-12 pt-8">
      <Link
        href="/"
        className="flex items-center justify-start gap-4 text-xl font-normal uppercase"
      >
        <Image src={RightArrow} alt="back arrow" />
        <span>GO BACK</span>
      </Link>
      <div className="bg-heroBgLinear text-white relative h-[296px] rounded-lg">
        <div className="absolute bottom-16 left-[18px]">
          <div className="mb-9 space-y-2">
            <Image src={EduchainLogo} alt="EDU logo" />

            <p className="w-[126px] text-[1.141rem] font-light">
              For <span className="font-semibold">Education Funds</span>
            </p>
          </div>
        </div>

        <p className="absolute bottom-[118px] right-[21px] w-[89.02px] text-[1.141rem] font-light">
          Save a <span className="font-semibold">life</span> today
        </p>
      </div>
      <div className="flex w-full items-center justify-between bg-primary-300 rounded-lg py-2 px-4">
        <div className="flex w-fit items-center gap-1 rounded-[36.52px] bg-white/10 px-2 py-2 backdrop-blur-[28px]">
          <p className="text-[0.71rem] font-bold">200,000</p>

          <div className="flex items-center gap-2">
            <Image src={EdumonoIcon} alt="Taiko icon mono" />
            <span className="text-xs">EDU raised</span>
          </div>
        </div>
        <div className="flex w-fit items-center gap-1 rounded-[36.52px] bg-white/10 px-2 py-2 backdrop-blur-[28px]">
          <Image src={UserIcon} alt="user icon" />

          <p className="text-[0.71rem]">
            <span className="font-bold">70,000</span> donors
          </p>
        </div>
      </div>
      <p className="font-fustat text-base font-normal">
        Odio egestas suspendisse proin id id malesuada. Platea velit eros nisl
        at. Eu vel morbi tellus arcu bibendum semper in. Mauris quisque
        tincidunt sed est. In justo diam purus pulvinar dolor velit odio
        ultrices. Quam tortor vivamus metus sed augue.
      </p>
      <h3 className="text-xl font-semibold">
        Thanks to our donors
      </h3>
      <DonateRankTable />
    </section>
  );
}
