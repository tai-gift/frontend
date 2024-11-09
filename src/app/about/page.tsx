import { Metadata } from "next";
import Image from "next/image";
import Logo from "/public/svgs/tai-gifts.svg";
import Charity from "/public/svgs/charity.svg";
import Reward from "/public/svgs/reward.svg";
import Lock from "/public/svgs/lock.svg";
import ArrowDown from "/public/svgs/arrow-down.svg";

export const metadata: Metadata = {
  title: "About Tai.Gift",
};

export default function page() {
  return (
    <section className="px-4 py-6 md:px-6">
      <h2 className="mb-7 font-luckiestGuy text-xl">About Tai.Gift</h2>

      <div className="mb-4 flex h-[185px] items-center justify-center rounded-lg bg-white p-2">
        <Image src={Logo} alt="logo" />
      </div>

      <div className="mb-9 space-y-1.5 text-center">
        <h3 className="font-luckiestGuy text-lg">
          Turn Your Donation into a Chance to Win Big and Make a Difference
        </h3>
        <p className="text-sm">
          Support meaningful causes while enjoying the thrill of winning prizes.
          Tai.Gift transforms every donation into an opportunity for impact and
          reward.
        </p>
      </div>

      <div className="mb-16 space-y-3.5">
        <h3 className="font-luckiestGuy text-lg">Key Benefits</h3>

        <ul className="space-y-3.5 text-sm">
          <li className="bg-Liver/60 flex min-h-24 gap-2 rounded-lg p-3">
            <Image src={Charity} alt="charity" className="self-start" />

            <p>
              <span className="font-bold">Empower Charities:</span> 100% of
              donations (after prizes) go to carefully selected charities,
              maximizing your contribution&apos;s impact.
            </p>
          </li>

          <li className="bg-Liver/60 flex min-h-24 gap-2 rounded-lg p-3">
            <Image src={Reward} alt="reward" className="self-start" />

            <p>
              <span className="font-bold">Win Rewards:</span> Every donation
              enters you into our raffle draws with 10 winners, ensuring
              multiple chances to win.
            </p>
          </li>

          <li className="bg-Liver/60 flex min-h-24 gap-2 rounded-lg p-3">
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
        <h3 className="font-luckiestGuy text-lg">How it Works</h3>

        <ul className="text-sm">
          <li className="relative flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-NeonPink relative flex size-6 shrink-0 items-center justify-center rounded-full text-white">
              1
            </div>

            <span className="bg-Liver absolute left-3 top-6 h-full w-[1px] -translate-x-1/2"></span>

            <p>
              Make a Donation: Contribute Taiko tokens to enter our monthly
              raffle.
            </p>
          </li>
          <li className="relative flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-NeonPink relative flex size-6 shrink-0 items-center justify-center rounded-full text-white">
              2
            </div>

            <span className="bg-Liver absolute left-3 top-6 h-full w-[1px] -translate-x-1/2"></span>

            <p>
              Join the Draw: Your donation gives you a chance to win exciting
              rewards.
            </p>
          </li>
          <li className="flex gap-2 rounded-lg pb-8 leading-6">
            <div className="bg-NeonPink relative flex size-6 shrink-0 items-center justify-center rounded-full text-white">
              3
            </div>

            <p>
              Support Charities: Funds raised each month go directly to
              preselected charities, supporting impactful causes.
            </p>
          </li>
        </ul>
      </div>

      <button className="bg-NeonPink w-full rounded-[40px] px-7 py-3 text-sm font-bold">
        Join the Movement – Donate and Win Today
      </button>

      <div className="mt-16 space-y-3.5">
        <h3 className="font-luckiestGuy text-lg">Common Questions</h3>

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

      <div className="bg-aboutBgImage mt-16 flex min-h-[138px] flex-col justify-center gap-y-2.5 rounded-lg bg-black/60 bg-cover bg-no-repeat text-center">
        <p className="text-sm font-semibold">Ready to make a difference?</p>

        <button className="bg-NeonPink mx-auto w-fit rounded-[40px] px-7 py-3 text-sm font-bold">
          Donate now and enter the draw!
        </button>
      </div>
    </section>
  );
}
