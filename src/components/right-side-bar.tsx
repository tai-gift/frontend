import Link from "next/link";
import { Steps } from "./ui";

export default function RightSideBar() {
  return (
    <aside className="z-10 hidden h-screen flex-1 px-8 pt-20 lg:block">
      <div className="bg-grey-200 text-grey-600 max-w-[295px] space-y-8 rounded-9 px-3.5 py-5">
        <h2 className="text-center text-[2.75rem] font-normal">LOGO</h2>

        <div className="space-y-2.5">
          <p className="text-base">
            A bridge between incentivized giving and impactful social
            contributions
          </p>

          <Link
            href="/about"
            className="text-xs font-medium underline underline-offset-1"
          >
            Learn more
          </Link>
        </div>
      </div>
      <Steps />
    </aside>
  );
}
