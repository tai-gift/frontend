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
    <nav className="fixed bottom-0 z-10 w-full space-y-3 lg:hidden">
      <DonateButton className="w-full" paramTab={currentTab} />
      <div className="flex w-full flex-col items-start justify-start space-y-1 bg-white pb-3">
        <div className="flex w-full items-center justify-around rounded-full">
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={`flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white ${link.url === pathname ? "bg-primary text-white" : "text-grey-300"}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex w-full items-center justify-around">
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={`text-xs ${link.url === pathname ? "font-medium" : "font-normal text-[#9FA1A5]"}`}
            >
              {link.text === "Leaderboard" ? "Leader" : link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
