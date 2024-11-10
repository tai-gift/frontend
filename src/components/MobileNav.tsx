"use client";
import { navLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="backdrop-blur-20 fixed bottom-2 left-1/2 z-10 flex w-[98%] pb-3 -translate-x-1/2 transform flex-col items-start justify-start space-y-3 lg:hidden">
      <div className="flex min-h-14 w-full items-center justify-around rounded-full bg-FuscousGrey-100/60 py-3">
        {navLinks.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`group-hover:bg-activeBgLinear flex h-10 w-10 items-center justify-center rounded-full ${link.url === pathname ? "bg-activeBgLinear" : ""}`}
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
