import Link from "next/link";
import { LogoComponent, Steps } from "./ui";

export default function RightSideBar() {
  return (
    <aside className="z-10 hidden h-screen flex-1 px-8 pt-12 lg:block">
      <div className="max-w-[295px] space-y-8 rounded-9 bg-grey-200 px-3.5 py-5 text-grey-600">
        <LogoComponent className={"mx-auto h-12"} />

        <div className="space-y-2.5">
          <p className="text-base">
            Every dollar you give brings us closer to ending education
            inequality while giving you a chance to win life-changing prizes.
            Together, we can empower futures today.
          </p>

          <Link
            href="/about"
            className="text-xs font-medium text-primary underline underline-offset-1"
          >
            Learn more
          </Link>
        </div>
      </div>
      <Steps />
    </aside>
  );
}
