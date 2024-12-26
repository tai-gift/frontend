import { Metadata } from "next";
import Image from "next/image";
import Charity from "/public/svgs/charity.svg";
import Reward from "/public/svgs/reward.svg";
import Lock from "/public/svgs/lock.svg";
import ArrowDown from "/public/svgs/arrow-down.svg";
import EduchainLogo from "/public/svgs/EduchainLogo.svg";

export const metadata: Metadata = {
  title: "About Tai.Gift",
};

export default function page() {
  return (
    <section className="px-4 py-6 md:px-6">
      <h2 className="mb-7 font-semibold text-xl">About Tai.Gift</h2>

      <div className="bg-heroBgLinear text-white relative h-[185px] rounded-lg mb-4">
        <div className="absolute bottom-0 left-[18px]">
          <div className="mb-9 space-y-2">
            <Image src={EduchainLogo} alt="EDU logo" />

            <p className="w-[126px] text-[1.141rem] font-light">
              For <span className="font-semibold">Education Funds</span>
            </p>
          </div>
        </div>

        <p className="absolute bottom-[80px] right-[21px] w-[89.02px] text-[1.141rem] font-light">
          Save a <span className="font-semibold">life</span> today
        </p>
      </div>

      <div className="mb-9 space-y-1.5 text-center">
        <h3 className="font-semibold text-lg">
          Turn Your Donation into a Chance to Win Big and Make a Difference
        </h3>
        <p className="text-sm">
          Support meaningful causes while enjoying the thrill of winning prizes.
          Tai.Gift transforms every donation into an opportunity for impact and
          reward.
        </p>
      </div>

      <div className="mb-16 space-y-3.5">
        <h3 className="font-normal uppercase text-lg">Key Benefits</h3>

        <ul className="space-y-3.5 text-sm">
          <li className="bg-primary-300 flex min-h-24 gap-2 rounded-lg p-3">
            <Image src={Charity} alt="charity" className="self-start" />

            <p>
              <span className="font-bold">Empower Charities:</span> 100% of
              donations (after prizes) go to carefully selected charities,
              maximizing your contribution&apos;s impact.
            </p>
          </li>

          <li className="bg-primary-300 flex min-h-24 gap-2 rounded-lg p-3">
            <Image src={Reward} alt="reward" className="self-start" />

            <p>
              <span className="font-bold">Win Rewards:</span> Every donation
              enters you into our raffle draws with 10 winners, ensuring
              multiple chances to win.
            </p>
          </li>

          <li className="bg-primary-300 flex min-h-24 gap-2 rounded-lg p-3">
            <Image src={Lock} alt="lock" className="self-start" />

            <p>
              <span className="font-bold">Transparent & Secure:</span> Built on
              the Taiko blockchain, Tai.Gift ensures every transaction is
              transparent, secure, and traceable.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-2.5 space-y-3.5">
        <h3 className="font-semibold text-lg">How it Works</h3>

        <ul className="text-sm">
          <li className="relative flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-primary-100 relative flex size-6 shrink-0 items-center justify-center rounded-full text-primary">
              1
            </div>

            <span className="bg-grey-100 absolute left-3 top-6 h-full w-[1px] -translate-x-1/2"></span>

            <p>
              <b>Make a Donation:</b> Contribute Taiko tokens to enter our monthly
              raffle.
            </p>
          </li>
          <li className="relative flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-primary-100 relative flex size-6 shrink-0 items-center justify-center rounded-full text-primary">
              2
            </div>

            <span className="bg-grey-100 absolute left-3 top-6 h-full w-[1px] -translate-x-1/2"></span>

            <p>
              <b>Join the Draw:</b> Your donation gives you a chance to win exciting
              rewards.
            </p>
          </li>
          <li className="flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-primary-100 relative flex size-6 shrink-0 items-center justify-center rounded-full text-primary">
              3
            </div>

            <p>
              <b>Support Charities:</b> Funds raised each month go directly to
              preselected charities, supporting impactful causes.
            </p>
          </li>
        </ul>
      </div>

      <button className="bg-primary w-full rounded-[40px] px-7 py-3 text-sm text-white font-semibold">
        Join the Movement – Donate and Win Today
      </button>

      <div className="mt-16 space-y-3.5">
        <h3 className="font-semibold text-lg">Common Questions</h3>

        <ul className="space-y-5 text-sm">
          <li className="border-SmokeyGrey flex justify-between border-b pb-3.5">
            <p>Is there a guaranteed prize?</p>
            <Image src={ArrowDown} alt="arrow down" />
          </li>
          <li className="border-SmokeyGrey flex justify-between border-b pb-3.5">
            <p>What if I don&apos;st win?</p>
            <Image src={ArrowDown} alt="arrow down" />
          </li>
          <li className="border-SmokeyGrey flex justify-between border-b pb-3.5">
            <p>Is Tai.Gift secure?</p>
            <Image src={ArrowDown} alt="arrow down" />
          </li>
        </ul>
      </div>

      <div className="bg-aboutBgImage mt-16 flex min-h-[138px] flex-col justify-center gap-y-2.5 rounded-lg bg-black/80 text-white bg-cover bg-no-repeat text-center">
        <p className="text-sm font-semibold">Ready to make a difference?</p>

        <button className="bg-primary text-white mx-auto w-fit rounded-[40px] px-7 py-3 text-sm font-bold">
          Donate now and enter the draw!
        </button>
      </div>
    </section>
  );
}
