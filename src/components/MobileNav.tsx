"use client";
import { navLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateButton from "./ui/DonateButton";

interface MobileNavProps {
  searchParams: Record<string, string> | undefined;
}

const MobileNav: React.FC<MobileNavProps> = ({ searchParams }) => {
  const pathname = usePathname();
  const currentTab = (searchParams && searchParams.tab) || "DAILY";

  return (
    <nav className="fixed bottom-2 left-1/2 z-10 flex w-[98%] -translate-x-1/2 transform flex-col items-start justify-start space-y-3 pb-3 backdrop-blur-20 lg:hidden">
      <DonateButton className="w-full" paramTab={currentTab} />
      <div className="flex min-h-14 w-full items-center justify-around rounded-full bg-FuscousGrey-100/60 py-3">
        {navLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-activeBgLinear ${link.url === pathname ? "bg-activeBgLinear" : ""}`}
          >
            <Image src={link.icon} alt="mobile sidebar icon" />
          </Link>
        ))}
      </div>
      <div className="flex w-full items-center justify-around">
        {navLinks.map((link, index) => (
          <Link href={link.url} key={index} className={`text-xs font-bold`}>
            {link.text === "Leaderboard" ? "Leader" : link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
