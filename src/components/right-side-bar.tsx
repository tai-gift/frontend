import Link from "next/link";

export default function RightSideBar() {
  return (
    <aside className="sticky left-0 top-0 hidden h-screen flex-1 px-8 pt-20 lg:block z-10">
      <div className="dark-gradient-1 max-w-[282px] space-y-8 rounded-9 px-3.5 py-5">
        <h2 className="text-center font-luckiestGuy text-[2.75rem]">LOGO</h2>

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
    </aside>
  );
}
